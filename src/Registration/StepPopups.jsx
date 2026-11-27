import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ModalPopup from "../components/ModalPopup"; 

export default function StepPopups({ popups }) {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (openIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  if (!popups?.length) return null;

  const open = openIndex !== null ? popups[openIndex] : null;

  return (
    <>
      <div aria-hidden={false} className="pointer-events-none absolute inset-0 z-20">
        {popups.map((p, i) => {
          const d = p.dot ?? {};
          const m = p.dotMobile ?? d;
          return (
            <button
              key={p.title ?? i}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`More info: ${p.title ?? "popup"}`}
              className="pointer-events-auto absolute flex h-[28px] w-[28px] cursor-pointer items-center justify-center top-[var(--tm,auto)] left-[var(--lm,auto)] right-[var(--rm,auto)] lg:top-[var(--t,auto)] lg:left-[var(--l,auto)] lg:right-[var(--r,auto)]"
              style={{
                "--t": d.top,
                "--l": d.left,
                "--r": d.right,
                "--tm": m.top,
                "--lm": m.left,
                "--rm": m.right,
              }}
            >
              <span className="block h-[12px] w-[12px] animate-pulse rounded-full bg-white/20 ring-1 ring-white motion-reduce:animate-none" />
            </button>
          );
        })}
      </div>

      {open &&
        createPortal(
          <ModalPopup
            isOpen
            onClose={() => setOpenIndex(null)}
            src={open.src}
            top={open.top}
            left={open.left}
            right={open.right}
            bottom={open.bottom}
            width={open.width}
            height={open.height}
            mwidth={open.mwidth}
            mheight={open.mheight}
            title={open.title}
            text={open.text}
          />,
          document.body
        )}
    </>
  );
}