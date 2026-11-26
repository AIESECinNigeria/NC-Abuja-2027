const API_URL =
  import.meta.env.VITE_API_URL ?? "https://ain-backend.fastapicloud.dev";
const REGISTER_URL = `${API_URL}/api/nc-abj/register`;
const TIMEOUT_MS = 15000;

const ROLE_NAMES = {
  TM: "Team Member",
  TL: "Team Leader",
  LCVP: "Local Committee Vice President",
  LCP: "Local Committee President",
  ALUMNI: "Alumni",
};

const clean = (v) => String(v ?? "").trim();

// "DD | MM | YYYY" -> "YYYY-MM-DD"
function toIsoDate(value) {
  const m = clean(value).match(/(\d{1,2})\D+(\d{1,2})\D+(\d{4})/);
  if (!m) return "";
  const [, d, mo, y] = m;
  return `${y}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

// 08012345678 / 2348012345678 / +2348012345678 -> +2348012345678
function toIntlPhone(value) {
  const digits = clean(value).replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits;
  if (digits.startsWith("234")) return `+${digits}`;
  if (digits.startsWith("0")) return `+234${digits.slice(1)}`;
  return digits;
}

// left side: backend key, right side: the field name in formSteps.js
export function buildPayload(a) {
  const role = clean(a.role);

  return {
    name: clean(a.raceName),
    phone: toIntlPhone(a.phone),
    gender: clean(a.gender),
    email: clean(a.email).toLowerCase(),
    date_of_birth: toIsoDate(a.firstRaceDate),
    lc: clean(a.team),
    role: ROLE_NAMES[role] ?? role,
    first_conference: clean(a.firstChampionship) === "DEBUT SEASON",
    allergies: clean(a.hazards),
    allergy_treatment: clean(a.treatment),
    can_stay_with_opposite_sex: clean(a.room) === "Multi-gender Quarters",
    emergency_contact: toIntlPhone(a.emergencyName),
    emergency_contact_relationship: clean(a.emergencyRelation),
    expectations: clean(a.goal),
    additional_information: clean(a.final),
  };
}

// FastAPI sends errors as { detail: "text" } or { detail: [{ loc, msg }] }
function readError(body, status) {
  const d = body?.detail;
  if (typeof d === "string") return d;
  if (Array.isArray(d) && d.length) {
    return d
      .map((e) => `${(e.loc ?? []).slice(1).join(".") || "field"}: ${e.msg}`)
      .join(", ");
  }
  return `Registration failed (${status}). Please try again.`;
}

export async function registerParticipant(answers) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(REGISTER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildPayload(answers)),
      signal: controller.signal,
    });

    const body = await res.json().catch(() => null);
    if (!res.ok) throw new Error(readError(body, res.status));
    return body;
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("The server took too long to respond. Please try again.");
    }
    if (err instanceof TypeError) {
      throw new Error("Could not reach the server. Check your connection and try again.");
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}