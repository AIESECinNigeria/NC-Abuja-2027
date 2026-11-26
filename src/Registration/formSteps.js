// Assets every step uses unless the step overrides them
export const SHARED_ASSETS = {
  texture: "/images/bg-texture.png",
  ncAbuja: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626085/Logo_1.png", // desktop: sits on the helmet visor ('' = off for a step)
  ncAbujaMobile: "",
  cta: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795627576/CTA_desk.png",
  ctaMobile: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626085/CTA_5.png",
};

// Layout defaults, override per step with `layout: { ... }`
export const DEFAULT_LAYOUT = {
  badgeRight: "7%",
  badgeTop: "65.3%",
  badgeWidth: "17%",
  mobileBgPosition: "97% center", 
  bgAlignY: 0.8, 
  cardLogoRight: "6.5%", 
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
    popups: [
      {
        dot: { top: "53.7%", left: "70.5%" },
        dotMobile: { top: "78.7%", right: "42.8%" },
        src: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795643305/image_3613.png",
        title: "THE STARTING GRID",
        text: "Abuja sets the stage. The people of AIESEC in Nigeria bring the energy, ambition and purpose.",
        top: 40, left: 400, width: 400, height: 550, 
        mwidth: 280, mheight: 280,                   
      },
    ],
    assets: {
      bg: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626458/Driver_holding_helmet_bg.png",
      bgMobile: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626458/Driver_holding_helmet_bg.png",
      helmetOverlay: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626458/driver-helmet.png",
      helmetOverlayMobile: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626458/driver-helmet.png",
      title: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795631375/Group_1597888829_8.png",
      titleMobile: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626086/Group_1597888830_4.png",
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
        inputClassName: "font-sans tracking-normal", 
        rules: {
          required: "Email is required",
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
        },
      },
    ],
  },

  {
    id: "circuit",
    popups: [
      {
        dot: { top: "43.7%", left: "85.5%" },
        dotMobile: { top: "78.7%", right: "22.8%" },
        src: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795643601/image_3736_3.png",
        title: "ARRIVAL",
        text: "Standing along the approach to Abuja, Zuma Rock has become one of the most memorable sights associated with the journey into the capital.",
        top: 40, left: 400, width: 738, height: 656, 
        mwidth: 280, mheight: 280,                   
      },
    ],
    assets: {
      bg: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626458/Driver_in_race_car_cockpit_back.png",
      bgMobile: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626449/bg2mob.png",
      card: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626453/Driver_in_race_car_cockpit_focus.png",
      title: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626087/Group_1597888829_5.png",
      titleMobile: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626086/Group_1597888830_5.png",
      ncAbuja: "",
    },
    layout: {
      bgBox: { x: 0, y: -172, w: 1834, h: 1369 },
      cardSyncX: -287,
      cardSyncY: 15,
      cardSyncScale: 83,
    },
    card: { image: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626453/Driver_in_race_car_cockpit_focus.png" },
    fields: [
      {
        name: "firstRaceDate",
        type: "text",
        label: "When did you first hit the circuit?",
        placeholder: "DD | MM | YYYY",
        inputMode: "numeric",
        inputClassName: "font-sans tracking-normal", 
        sanitize: formatDate,
        minAge: 18, // under 18 = cannot apply
        rules: {
          required: "Date is required",
          pattern: { value: /^\d{2} \| \d{2} \| \d{4}$/, message: "Use DD | MM | YYYY" },
        },
      },
      {
        name: "role",
        type: "select",
        label: "What is your assigned position on the track?",
        placeholder: "Choose your role",
        options: ["TM", "TL", "LCVP", "LCP", "ALUMNI"],
        rules: { required: "Choose your role" },
      },
      {
        name: "team",
        type: "select",
        label: "Which team are you representing?",
        placeholder: "Choose your LC",
        options: ["THE COOKS (EST)", "ABEOKUTA", "ABUJA", "AKURE", "BENIN", "CALABAR", "EKITI", "ENUGU", "IBADAN", "IFE", "ILORIN", "JOS", "KANO", "LAGOS", "PORT HARCOURT", "ZARIA", "INTERNATIONAL DELEGATES"],
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
    popups: [
      {
        dot: { top: "28.7%", left: "82.5%" },
        dotMobile: { top: "80.7%", right: "72.8%" },
        src: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795645289/image_3736_5.png",
        title: "LANDMARK",
        text: "With its soaring spire and distinctive neo-Gothic form, the National Christian Centre stands as one of Abuja’s most recognisable religious and architectural landmarks..",
        top: 40, left: 400, width: 738, height: 640, 
        mwidth: 280, mheight: 280,                   
      },
    ],
    assets: {
      bg: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626461/bg3.png",
      bgMobile: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626451/bg3mob.png",
      title: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626087/Group_1597888829_6.png",
      titleMobile: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626085/Group_1597888830_6.png",
    },
    layout: {
      bgFit: "height",
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
        type: "tel",
        label: "Who is your primary emergency number?",
        placeholder: "Number of your next of kin",
        inputMode: "tel",
        autoComplete: "tel",
        inputClassName: "font-sans tracking-normal",
        sanitize: phoneOnly,
        rules: {
          required: "Number is required",
          minLength: { value: 7, message: "Minimum 7 digits" },
          pattern: { value: /^\+?\d+$/, message: "Enter a valid phone number" },
        },
      },
      {
        name: "emergencyRelation",
        type: "text",
        label: "How is this emergency number linked to you?",
        placeholder: "Parents, siblings, guardians...",
        rules: { required: "This field is required" },
      },
    ],
  },

  {
    id: "finish",
    popups: [
      {
        dot: { top: "65.7%", left: "85.5%" },
        dotMobile: { top: "68.7%", right: "32.8%" },
        src: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795644119/image_3736_4.png",
        title: "LANDMARK",
        text: "With its golden dome and four minarets, the Abuja National Mosque stands as one of the capital’s most distinctive architectural icons.",
        top: 10, left: 400, width: 738, height: 654, 
        mwidth: 280, mheight: 280,                   
      },
    ],
    ctaSound: "/audio/car-rev.mp3",
    assets: {
      bg: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626466/bg4.png",
      bgMobile: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626449/bg4mob.png",
      title: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626086/Group_1597888829_7.png",
      titleMobile: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626085/Group_1597888830_7.png",
      cta: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626085/CTA_4.png",
      ctaMobile: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626085/CTA_6.png",
    },
    ctaAlt: "Finish race",
    layout: {
      bgFitAlign: "edge",
      bgColor: "#080808",
      badgeTop: "43.8%", 

      mobileBgBottom: { x: -240, w: 700 },
      mobileFadeTop: 25, 
    },
    fields: [
      {
        name: "room",
        type: "select",
        label: "How will you set up your drivers quarters?",
        placeholder: "Choose your quarters arrangement",
        options: ["Single Gender Quarters", "Multi-gender Quarters"],
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