import { useState, useEffect } from "react";
import { SHARED_ASSETS } from "./formSteps";
import "../components/motion.css"; 

// ============ DESKTOP ASSETS ============
const DESKTOP_FILES = {
  bg: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626499/success-bg.png",
  flag: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626459/success-flags.png",
  title: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626459/success-headline.png", 
  briefing: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626458/success-briefing.png",
  prix: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626460/success-prix.png",
};

// ============ MOBILE ASSETS ============
const MOBILE_FILES = {
  bg: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626457/succbgmob.png",
  flag: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626459/successflag-mob.png",
  youHave: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626461/You-have.png",
  successfully: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626460/succ-mob.png",
  completed: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626447/comp-mob.png",
  theRace: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626460/the-race.png",
  briefing: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795627973/brief-mob.png",
  prix: "https://res.cloudinary.com/qzyxmtgh/image/upload/v1795626460/success-prix.png",
};

const OVERLAY = 0.5;
const BRIGHTEN = 0.4;

const ENTER_DELAY = "1.2s";
const STAGGER = 3;

// ============ DESKTOP CONFIG ============
const DESKTOP_FRAME = { w: 1440, h: 1024 };
const DESKTOP_ELEMENTS = {
  flag: { right: "4%", top: 98, w: 292 },
  title: { left: "11%", top: 420, w: 1238 }, 
  briefing: { right: "1%", top: 803, w: 628 },
  prix: { right: "1%", top: 868, w: 628 },
};

// ============ MOBILE CONFIG ============
const MOBILE_FRAME = { w: 390, h: 844 };
const MOBILE_ELEMENTS = {
  flag: { right: 20.4, top: 70, w: 126 },
  titleParts: [
    { fileKey: "youHave",     left: 20,  top: 440, w: 89 }, 
    { fileKey: "successfully", left: 20, top: 453, w: 334 }, 
    { fileKey: "completed",   left: 20,  top: 478.32, w: 334 }, 
    { fileKey: "theRace",     right: 20, top: 505, w: 94 }, 
  ],
  briefing: { right: 22.75, top: 562, w: 285.25 },
  prix: { right: 20.43, top: 588.84, w: 280.92 },
};

const k = (n) => `calc(${n} * var(--k))`;

function SuccessStage({ files, frame, elements }) {
  // position in the entrance sequence: 0 = flag, then title, briefing, PRIX
  let step = 0;
  const seq = () => ({ "--i": step++ * STAGGER });

  return (
    <section
      className="relative h-svh w-full overflow-hidden bg-[#080808]"
      style={{
        "--k": `min(calc(100vw / ${frame.w}), calc(100svh / ${frame.h}))`,
        "--enter-delay": ENTER_DELAY,
      }}
    >
      {/* Full-bleed background */}
      <img
        src={files.bg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-black" style={{ opacity: OVERLAY }} />

      {/* Brighten layer */}
      <img
        src={files.bg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover mix-blend-screen"
        style={{ opacity: BRIGHTEN }}
      />

      {/* Grain */}
      {SHARED_ASSETS.texture && (
        <img
          src={SHARED_ASSETS.texture}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-70"
        />
      )}

      {/* Stage */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        style={{ width: k(frame.w), height: k(frame.h) }}
      >
        {/* Flags */}
        <img
          src={files.flag}
          alt="Checkered flags"
          className="enter-up absolute z-10 h-auto max-w-none"
          style={{ right: elements.flag.right, top: k(elements.flag.top), width: k(elements.flag.w), ...seq() }}
        />

        {/* DESKTOP: Single Title */}
        {elements.title && (
          <img
            src={files.title}
            alt="You have successfully completed the race"
            className="enter-up absolute z-10 h-auto max-w-none"
            style={{ left: elements.title.left, top: k(elements.title.top), width: k(elements.title.w), ...seq() }}
          />
        )}

        {/* MOBILE: 4 Separate Title Parts (each line comes in after the one above) */}
        {elements.titleParts?.map((part, i) => (
          <img
            key={i}
            src={files[part.fileKey]}
            alt=""
            className="enter-up absolute z-10 h-auto max-w-none"
            style={{
              top: k(part.top),
              width: k(part.w),
              // Handles both left and right positioning cleanly
              ...(part.left !== undefined ? { left: part.left } : { right: part.right }),
              ...seq(),
            }}
          />
        ))}

        {/* Briefing & Prix */}
        <img
          src={files.briefing}
          alt="Watch out for the briefing and get qualified for the"
          className="enter-up absolute z-10 h-auto max-w-none"
          style={{ right: elements.briefing.right, top: k(elements.briefing.top), width: k(elements.briefing.w), ...seq() }}
        />
        <img
          src={files.prix}
          alt="Prix"
          className="enter-up absolute z-10 h-auto max-w-none"
          style={{ right: elements.prix.right, top: k(elements.prix.top), width: k(elements.prix.w), ...seq() }}
        />
      </div>
    </section>
  );
}

export default function SuccessPage() {
  // read the screen size up front, so a phone never flashes (and animates) the desktop layout first
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <SuccessStage
        files={MOBILE_FILES}
        frame={MOBILE_FRAME}
        elements={MOBILE_ELEMENTS}
      />
    );
  }

  return (
    <SuccessStage
      files={DESKTOP_FILES}
      frame={DESKTOP_FRAME}
      elements={DESKTOP_ELEMENTS}
    />
  );
}