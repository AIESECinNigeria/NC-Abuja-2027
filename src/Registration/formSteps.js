// Assets every step uses unless the step overrides them
export const SHARED_ASSETS = {
  texture: "/images/bg-texture.png",
  ncAbuja: "/images/NC_desktop.png", // desktop: sits on the helmet visor ('' = off for a step)
  ncAbujaMobile: "",
  cta: "/images/CTA_desk.png",
  ctaMobile: "/images/CTA_mob.png",
};

// Layout defaults, override per step with `layout: { ... }`
export const DEFAULT_LAYOUT = {
  badgeRight: "7%", // NC Abuja logo on the photo (% of the photo)
  badgeTop: "65.3%",
  badgeWidth: "17%",
  mobileBgPosition: "97% center", // which part of the photo shows on mobile
  bgAlignY: 0.8, // desktop photo vertical alignment: 0 = top, 1 = bottom
  cardLogoRight: "6.5%", // NC Abuja logo on the card (% of the card)
  cardLogoTop: "9%",
  cardLogoWidth: "51%",
};

// ---- input cleaners (run on every change, including autofill) ----
const phoneOnly = (v) => v.replace(/(?!^\+)[^\d]/g, "");

const formatDate = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 8);
  return [d.slice(0, 2), d.slice(2, 4), d.slice(4, 8)].filter(Boolean).join(" | ");
};

/* =====================================================================
   THE STEPS
   field.type: "text" | "email" | "tel" | "select"
   field.minAge: minimum age in years (the field is read as a date of birth)
   ===================================================================== */
export const STEPS = [
  {
    id: "driver",
    assets: {
      bg: "/images/Driver_holding_helmet_bg.png",
      bgMobile: "/images/Driver_holding_helmet_bg.png",
      helmetOverlay: "/images/driver-helmet.png",
      helmetOverlayMobile: "/images/driver-helmet.png",
      title: "/images/ready_to_join_desktop.png",
      titleMobile: "/images/ready_to_join_mobile.png",
    },
    fields: [
      {
        name: "raceName",
        type: "text",
        label: "What does the driver want to be called?",
        placeholder: "Enter your race name",
        autoComplete: "nickname",
        rules: {
          required: "Race name is required",
          minLength: { value: 2, message: "Minimum 2 characters" },
        },
      },
      {
        name: "phone",
        type: "tel",
        label: "Your most active radio frequency",
        placeholder: "Enter a direct line to your phone",
        inputMode: "tel",
        autoComplete: "tel",
        inputClassName: "font-sans tracking-normal",
        sanitize: phoneOnly,
        rules: {
          required: "Phone is required",
          minLength: { value: 7, message: "Minimum 7 digits" },
          pattern: { value: /^\+?\d+$/, message: "Enter a valid phone number" },
        },
      },
      {
        name: "gender",
        type: "select",
        label: "What is your gender?",
        placeholder: "Select one",
        options: ["Male", "Female"],
        rules: { required: "Select gender" },
      },
      {
        name: "email",
        type: "email",
        label: "Where should we deliver your race briefing?",
        placeholder: "Drop your driver telemetry email...",
        autoComplete: "email",
        inputClassName: "font-sans tracking-normal", // digits and symbols in emails
        rules: {
          required: "Email is required",
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
        },
      },
    ],
  },

  {
    id: "circuit",
    assets: {
      bg: "/images/Driver_in_race_car_cockpit_back.png",
      bgMobile: "/images/bg2mob.png",
      card: "/images/Driver_in_race_car_cockpit_focus.png",
      title: "/images/ready2desk.png",
      titleMobile: "/images/ready2mob.png",
      ncAbuja: "",
    },
    layout: {
      bgBox: { x: 0, y: -172, w: 1834, h: 1369 },
      cardSyncX: -287,
      cardSyncY: 15,
      cardSyncScale: 83,
    },
    card: { image: "/images/Driver_in_race_car_cockpit_focus.png" },
    fields: [
      {
        name: "role",
        type: "select",
        label: "What is your assigned position on the track?",
        placeholder: "Choose your role",
        options: ["TM", "TL", "LCVP", "LCP", "ALUMNI"],
        rules: { required: "Choose your role" },
      },
      {
        name: "firstRaceDate",
        type: "text",
        label: "When did you first hit the circuit?",
        placeholder: "DD | MM | YYYY",
        inputMode: "numeric",
        inputClassName: "font-sans tracking-normal", // the demo font is missing some digits
        sanitize: formatDate,
        minAge: 18, // under 18 = cannot apply
        rules: {
          required: "Date is required",
          pattern: { value: /^\d{2} \| \d{2} \| \d{4}$/, message: "Use DD | MM | YYYY" },
        },
      },
      {
        name: "team",
        type: "select",
        label: "Which team are you representing?",
        placeholder: "Choose your LC",
        options: ["THE COOKS (EST)", "ABEOKUTA", "ABUJA", "AKURE", "BENIN", "CALABAR", "EKITI", "ENUGU", "IBADAN", "IFE", "ILORIN", "JOS", "KANO", "LAGOS", "PORT HARCOURT", "ZARIA"],
        rules: { required: "Choose your LC" },
      },
      {
        name: "firstChampionship",
        type: "select",
        label: "Is this your first time in a championship?",
        placeholder: "Conference attendance",
        options: ["DEBUT SEASON", "SEASONED CHAMPION"],
        rules: { required: "Select one" },
      },
    ],
  },

  {
    id: "medical",
    assets: {
      bg: "/images/bg3.png",
      bgMobile: "/images/bg3mob.png",
      title: "/images/ready3des.png",
      titleMobile: "/images/ready3mob.png",
    },
    layout: { bgFit: "height", 
              badgeTop: "63.9%", 
    },
    fields: [
      {
        name: "hazards",
        type: "text",
        label: "Any compounds or ingredients off-limits to the grid?",
        placeholder: "List any dietary or medical hazards...",
        rules: { required: "This field is required" },
      },
      {
        name: "treatment",
        type: "text",
        label: "What antidote or medical procedure keeps you top shape?",
        placeholder: "Emergency treatment for your allergy...",
        rules: { required: "This field is required" },
      },
      {
        name: "emergencyName",
        type: "text",
        label: "Who is your primary emergency member?",
        placeholder: "Name of your next of kin",
        rules: { required: "Name is required" },
      },
      {
        name: "emergencyRelation",
        type: "text",
        label: "How is this emergency member linked to you?",
        placeholder: "Parents, siblings, guardians...",
        rules: { required: "This field is required" },
      },
    ],
  },

  {
    id: "finish",
    assets: {
      bg: "/images/bg4.png",
      bgMobile: "/images/bg4mob.png",
      title: "/images/ready4des.png",
      titleMobile: "/images/ready4mob.png",
      cta: "/images/finalCTAdes.png",
      ctaMobile: "/images/finalCTAmob.png",
    },
    ctaAlt: "Finish race",                     
    layout: {
      bgFitAlign: "edge",
      bgColor: "#080808",
      badgeTop: "43.8%",                      // NC ABUJA, just under the title

      // mobile: photo as a full-width strip glued to the bottom, like Figma
      mobileBgBottom: { x: -240, w: 700 },    
      mobileFadeTop: 25,                      // soft top edge of the strip (0 = hard edge)
    },
    fields: [
      {
        name: "room",
        type: "select",
        label: "How will you set up your drivers quarters?",
        placeholder: "Choose your quarters arrangement",
        options: ["Male Quarters", "Female Quarters", "Multi-gender Quarters"],
        rules: { required: "Select one" },
      },
      {
        name: "goal",
        type: "text",
        label: "What milestone do you hope to secure in this championship?",
        placeholder: "What do you hope to achieve in this conference?",
        rules: { required: "This field is required" },
      },
      {
        name: "final",
        type: "text",
        gapBefore: 106,
        label: "Any final notes for the board of directors before the lights go out?",
        placeholder: "Leave a final message",
        rules: { required: "Name is required" },
      },
    ],
  },

];