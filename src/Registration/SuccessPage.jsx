import { useState, useEffect } from "react";
import { SHARED_ASSETS } from "./formSteps";

// ============ DESKTOP ASSETS ============
const DESKTOP_FILES = {
  bg: "/images/success-bg.png",
  flag: "/images/success-flags.png",
  title: "/images/success-headline.png", 
  briefing: "/images/success-briefing.png",
  prix: "/images/success-prix.png",
};

// ============ MOBILE ASSETS ============
const MOBILE_FILES = {
  bg: "/images/succbgmob.png",
  flag: "/images/successflag-mob.png",
  youHave: "/images/You-have.png",
  successfully: "/images/succ-mob.png",
  completed: "/images/comp-mob.png",
  theRace: "/images/the-race!.png",
  briefing: "/images/brief-mob.png",
  prix: "/images/success-prix.png",
};

const OVERLAY = 0.5;
const BRIGHTEN = 0.4;

// ============ DESKTOP CONFIG ============
const DESKTOP_FRAME = { w: 1440, h: 1024 };
const DESKTOP_ELEMENTS = {
  flag: { right: "4%", top: 98, w: 292 },
  title: { left: "14%", top: 420, w: 1238 }, // Single title
  briefing: { right: "5%", top: 803, w: 628 },
  prix: { right: "5%", top: 868, w: 628 },
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
  return (
    <section
      className="relative h-svh w-full overflow-hidden bg-[#080808]"
      style={{ "--k": `min(calc(100vw / ${frame.w}), calc(100svh / ${frame.h}))` }}
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
          className="absolute z-10 h-auto max-w-none"
          style={{ right: elements.flag.right, top: k(elements.flag.top), width: k(elements.flag.w) }}
        />

        {/* DESKTOP: Single Title */}
        {elements.title && (
          <img
            src={files.title}
            alt="You have successfully completed the race"
            className="absolute z-10 h-auto max-w-none"
            style={{ left: elements.title.left, top: k(elements.title.top), width: k(elements.title.w) }}
          />
        )}

        {/* MOBILE: 4 Separate Title Parts */}
        {elements.titleParts?.map((part, i) => (
          <img
            key={i}
            src={files[part.fileKey]}
            alt=""
            className="absolute z-10 h-auto max-w-none"
            style={{
              top: k(part.top),
              width: k(part.w),
              // Handles both left and right positioning cleanly
              ...(part.left !== undefined ? { left: part.left } : { right: part.right })
            }}
          />
        ))}

        {/* Briefing & Prix */}
        <img
          src={files.briefing}
          alt="Watch out for the briefing and get qualified for the"
          className="absolute z-10 h-auto max-w-none"
          style={{ right: elements.briefing.right, top: k(elements.briefing.top), width: k(elements.briefing.w) }}
        />
        <img
          src={files.prix}
          alt="Prix"
          className="absolute z-10 h-auto max-w-none"
          style={{ right: elements.prix.right, top: k(elements.prix.top), width: k(elements.prix.w) }}
        />
      </div>
    </section>
  );
}

export default function SuccessPage() {
  const [isMobile, setIsMobile] = useState(false);

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