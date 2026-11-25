export function parseDob(value) {
  const digits = String(value ?? "").replace(/\D/g, "");
  if (digits.length !== 8) return null;

  const d = Number(digits.slice(0, 2));
  const m = Number(digits.slice(2, 4));
  const y = Number(digits.slice(4));

  const date = new Date(y, m - 1, d);
  const real =
    date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d;
  return real && y >= 1900 ? date : null;
}

// react-hook-form "validate" function: returns true, or the error message to show
export function validateMinAge(value, minAge = 18) {
  const dob = parseDob(value);
  if (!dob) return "Enter a valid date of birth (DD | MM | YYYY)";

  const today = new Date();
  if (dob > today) return "Date of birth can't be in the future";

  // you must have had your 18th birthday on or before today
  const cutoff = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
  if (dob > cutoff) return `You must be at least ${minAge} years old to apply`;

  return true;
}