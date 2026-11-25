import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, DropdownField, FieldError } from "./FormFields";
import { SHARED_ASSETS, DEFAULT_LAYOUT } from "./formSteps";
import { validateMinAge } from "./validators";
import styles from "./form1.module.css"; // rename the file whenever you like

// The Figma desktop frame is 1440 x 1024, the mobile frame is 390 x 930
const PHOTO_W = 1440;
const PHOTO_H = 1024;
const MOBILE_W = 390;
const MOBILE_H = 930;
const COVER_W = `max(100cqw, ${(PHOTO_W / PHOTO_H) * 100}cqh)`;
const COVER_H = `max(100cqh, ${(PHOTO_H / PHOTO_W) * 100}cqw)`;

// The framed photo card (step 2), in Figma pixels
const CARD = { x: 853, y: 268, w: 487, h: 457 };

// Mobile: NC Abuja logo, top right
const MOBILE_BADGE_CLASS = "absolute right-0 top-0 w-[38%] md:w-[30%] lg:hidden";

// feathers the edges of the card-synced background into the full-window one behind it
const SYNC_FADE =
  "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)";

// soft left/right edges for the height-fitted desktop photo
const EDGE_FADE =
  "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)";

// soft edges for the mobile photo when it is zoomed out
const MOBILE_FADE =
  "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, #000 6%, #000 94%, transparent 100%)";



function SectionBackground({ A, L, bgStyle }) {
  const mobileCrop = { objectPosition: L.mobileBgPosition };
  const bgMobile = A.bgMobile || A.bg;
  const helmetMobile = A.helmetOverlayMobile || A.helmetOverlay;
  // where the background layer sits inside the 1440x1024 Figma frame (default: fills it)
  const box = L.bgBox ?? { x: 0, y: 0, w: PHOTO_W, h: PHOTO_H };
  // mobile, option 1: the photo's X, Y, W, H inside a fixed-size Figma mobile frame
  const mBox = L.bgBoxMobile?.w > 0 ? L.bgBoxMobile : null;
  const mf = L.mobileFrame ?? { w: MOBILE_W, h: MOBILE_H };
  // mobile, option 2: photo glued to the bottom of the screen (X and W as in the 390-wide Figma frame)
  const mb = L.mobileBgBottom?.w > 0 ? L.mobileBgBottom : null;
  const fadeTop =
    L.mobileFadeTop > 0
      ? `linear-gradient(to bottom, transparent 0%, #000 ${L.mobileFadeTop}%)`
      : null;
  // "height" = show the whole photo, fitted to the window height
  const fitHeight = L.bgFit === "height";
  // "edge" = the photo's right edge sits on the window's right edge (it bleeds off, like Figma)
  const edgeAlign = L.bgFitAlign === "edge";
  const EDGE_FADE_LEFT = "bg-gradient-to-r from-black via-black/40 to-transparent";
  

  // NC Abuja logo
  const bb = L.badgeBox?.w > 0 ? L.badgeBox : null;
  // (a) pinned to the photo, in % of the photo (steps 1 and 2)
  const badgePos = bb
    ? {
        right: `${((PHOTO_W - (bb.x + bb.w)) / PHOTO_W) * 100}%`,
        top: `${((bb.y + bb.h / 2) / PHOTO_H) * 100}%`,
        width: `${(bb.w / PHOTO_W) * 100}%`,
      }
    : { right: L.badgeRight, top: L.badgeTop, width: L.badgeWidth };
  // (b) fit-to-height steps: lined up with the title's right edge, in Figma pixels
  const logo = bb
    ? { dr: 1340 - (bb.x + bb.w), cy: bb.y + bb.h / 2, w: bb.w }
    : {
        dr: (parseFloat(L.badgeRight) / 100) * PHOTO_W - 100,
        cy: (parseFloat(L.badgeTop) / 100) * PHOTO_H,
        w: (parseFloat(L.badgeWidth) / 100) * PHOTO_W,
      };

  // the Figma layer, placed exactly where it sits in the frame
  const layer = (
    <img
      src={A.bg}
      alt=""
      className="absolute max-w-none"
      style={{
        ...bgStyle,
        left: `${(box.x / PHOTO_W) * 100}%`,
        top: `${(box.y / PHOTO_H) * 100}%`,
        width: `${(box.w / PHOTO_W) * 100}%`,
        height: `${(box.h / PHOTO_H) * 100}%`,
      }}
    />
  );

  const helmet = A.helmetOverlay && (
    <img src={A.helmetOverlay} alt="" className="absolute inset-0 h-full w-full" />
  );

  const badge = A.ncAbuja && (
    <img
      src={A.ncAbuja}
      alt="NC Abuja"
      className="absolute -translate-y-1/2 object-contain"
      style={badgePos}
    />
  );

  const frameFade = edgeAlign ? EDGE_FADE_LEFT : EDGE_FADE;

  return (
    <div
      className="pointer-events-none absolute inset-0 isolate overflow-hidden bg-[#1C1C1C] [container-type:size]"
      style={L.bgColor ? { backgroundColor: L.bgColor } : undefined}
      aria-hidden
    >
      {/* MOBILE / TABLET photo */}
      {mBox ? (
        /* option 1: placed like a fixed-size Figma mobile frame, scaled to cover the screen */
        <div
          className="absolute lg:hidden"
          style={{
            width: `max(100cqw, ${(mf.w / mf.h) * 100}cqh)`,
            height: `max(100cqh, ${(mf.h / mf.w) * 100}cqw)`,
            left: `calc((100cqw - max(100cqw, ${(mf.w / mf.h) * 100}cqh)) / 2)`,
            top: `calc((100cqh - max(100cqh, ${(mf.h / mf.w) * 100}cqw)) * ${L.mobileAlignY ?? 0.5})`,
          }}
        >
          <img
            src={bgMobile}
            alt=""
            className="absolute max-w-none"
            style={{
              ...bgStyle,
              left: `${(mBox.x / mf.w) * 100}%`,
              top: `${(mBox.y / mf.h) * 100}%`,
              width: `${(mBox.w / mf.w) * 100}%`,
              height: `${(mBox.h / mf.h) * 100}%`,
              ...(fadeTop && { WebkitMaskImage: fadeTop, maskImage: fadeTop }),
            }}
          />
        </div>
      ) : mb ? (
        /* option 2: glued to the bottom, scaled like the 390-wide Figma frame, height follows the image */
        <img
          src={bgMobile}
          alt=""
          className="absolute bottom-0 h-auto max-w-none lg:hidden"
          style={{
            ...bgStyle,
            left: `calc(${mb.x} * 100cqw / ${MOBILE_W})`,
            width: `calc(${mb.w} * 100cqw / ${MOBILE_W})`,
            ...(fadeTop && { WebkitMaskImage: fadeTop, maskImage: fadeTop }),
          }}
        />
      ) : (
        <img
          src={bgMobile}
          alt=""
          className="absolute inset-0 h-full w-full object-cover lg:hidden"
          style={{ ...mobileCrop, ...bgStyle }}
        />
      )}
      <div className="absolute inset-0 bg-black/20 lg:hidden" />
      {helmetMobile && (
        <img
          src={helmetMobile}
          alt=""
          className="absolute inset-0 h-full w-full object-cover lg:hidden"
          style={mobileCrop}
        />
      )}

      {fitHeight ? (
        <>
          {/* DESKTOP, fit-to-height: blurred fill for the sides, made from the same photo */}
          <img
            src={A.bg}
            alt=""
            className="absolute inset-0 hidden h-full w-full object-cover lg:block"
            style={{ filter: "blur(28px) brightness(0.8)", transform: "scale(1.15)" }}
          />

          {/* the Figma frame at the same scale as the form (--k).
              "edge": its right edge sits on the window's right edge.
              default: its content edge lines up with the content's right edge. */}
          <div
            className="absolute hidden lg:block"
            style={{
              width: "calc(1440 * var(--k, 1px))",
              height: "calc(1024 * var(--k, 1px))",
              left: edgeAlign
                ? "calc(100cqw - 1440 * var(--k, 1px))"
                : "calc(93cqw - 1340 * var(--k, 1px))",
              top: "calc((100cqh - 1024 * var(--k, 1px)) / 2)",
            }}
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ WebkitMaskImage: frameFade, maskImage: frameFade }}
            >
              {layer}
              {helmet}
            </div>
          </div>

          {/* NC Abuja logo: lined up with the title's right edge, same scale as the form */}
          {A.ncAbuja && (
            <img
              src={A.ncAbuja}
              alt="NC Abuja"
              className="absolute hidden -translate-y-1/2 object-contain lg:block"
              style={{
                right: `calc(7cqw + ${logo.dr} * var(--k, 1px))`,
                top: `calc((100cqh - 1024 * var(--k, 1px)) / 2 + ${logo.cy} * var(--k, 1px))`,
                width: `calc(${logo.w} * var(--k, 1px))`,
              }}
            />
          )}
        </>
      ) : (
        /* DESKTOP, cover: photo fills the whole window, right-aligned (steps 1 and 2) */
        <div
          className="absolute hidden lg:block"
          style={{
            width: `calc(${COVER_W})`,
            height: `calc(${COVER_H})`,
            left: `calc(100cqw - ${COVER_W})`,
            top: `calc((100cqh - ${COVER_H}) * ${L.bgAlignY})`,
          }}
        >
          {layer}
          {helmet}
          {badge}
        </div>
      )}

      {/* grain texture over the whole window */}
      <img
        src={A.texture}
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-70"
      />
    </div>
  );
}

// Renders one field from its config.
// f.gapBefore = extra space ABOVE this field on desktop (Figma pixels); f.gapBeforeMobile = same on mobile (px)
// f.minAge = minimum age in years: the field is read as a date of birth and checked
function Field({ f, register, control, errors, filled }) {
  const err = errors[f.name];
  const errorId = `${f.name}-error`;

  // the field's own rules, plus the age check when f.minAge is set
  const rules = f.minAge
    ? {
        ...f.rules,
        validate: {
          ...(typeof f.rules?.validate === "function"
            ? { own: f.rules.validate }
            : f.rules?.validate),
          minAge: (v) =>
            String(v ?? "").trim() ? validateMinAge(v, f.minAge) : true,
        },
      }
    : f.rules;

  return (
    <div
      className="mt-[calc(var(--gbm,0)_*_1px)] lg:mt-[calc(var(--gb,0)_*_var(--k,1px))]"
      style={{ "--gb": f.gapBefore ?? 0, "--gbm": f.gapBeforeMobile ?? 0 }}
    >
      {f.type === "select" ? (
        <DropdownField
          label={f.label}
          name={f.name}
          control={control}
          filled={filled}
          placeholder={f.placeholder}
          options={f.options}
          rules={rules}
          invalid={!!err}
        />
      ) : (
        <TextField
          label={f.label}
          name={f.name}
          type={f.type === "email" ? "email" : "text"}
          filled={filled}
          placeholder={f.placeholder}
          inputMode={f.inputMode}
          autoComplete={f.autoComplete}
          inputClassName={f.inputClassName}
          register={register}
          rules={rules}
          invalid={!!err}
          errorId={errorId}
        />
      )}
      <FieldError id={errorId} message={err?.message} />
    </div>
  );
}

export default function FormStep({ step, defaultValues, onNext }) {
  const A = { ...SHARED_ASSETS, ...step.assets };
  const L = { ...DEFAULT_LAYOUT, ...step.layout };
  const formId = `form-${step.id}`;

  // the framed photo card (desktop). The image goes in assets.card, like every other image
  const cardSrc = A.card || step.card?.image;

  // where the blurred background layer sits inside the Figma frame
  const bgBox = L.bgBox ?? { x: 0, y: 0, w: PHOTO_W, h: PHOTO_H };

  // vertical spacing between the blocks, in Figma proportions (override per step with layout.space)
  const S = { top: 101, afterTitle: 76, beforeCta: 112, bottom: 100, ...L.space };

  // CTA width / position (optional): read X and W of the CTA layer in Figma
  const cb = L.ctaBox?.w > 0 ? L.ctaBox : null; // desktop: content spans x 100..1340 of the 1440 frame
  const cbm = L.ctaBoxMobile?.w > 0 ? L.ctaBoxMobile : null; // mobile: content spans x 20..370 of the 390 frame
  const ctaVars = {
    ...(cb && {
      "--cml": `${((cb.x - 100) / 1240) * 100}%`,
      "--cw": `${(cb.w / 1240) * 100}%`,
    }),
    ...(cbm && {
      "--cml-m": `${((cbm.x - 20) / 350) * 100}%`,
      "--cw-m": `${(cbm.w / 350) * 100}%`,
    }),
  };

  // ---- alignment helper: add ?align to the URL (dev server only) ----
  const align =
    import.meta.env.DEV &&
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).has("align");
  const [nudge, setNudge] = useState({ x: 0, y: 0, s: 0 });

  useEffect(() => {
    if (!align) return undefined;
    const onKey = (e) => {
      if (e.key === "0") {
        e.preventDefault();
        setNudge({ x: 0, y: 0, s: 0 });
        return;
      }
      const d = e.shiftKey ? 10 : 1; // Figma pixels
      const ds = e.shiftKey ? 2 : 0.5; // percent
      const moves = {
        ArrowLeft: { x: -d },
        ArrowRight: { x: d },
        ArrowUp: { y: -d },
        ArrowDown: { y: d },
        "[": { s: -ds },
        "]": { s: ds },
        "{": { s: -ds },
        "}": { s: ds },
      };
      const m = moves[e.key];
      if (!m) return;
      e.preventDefault();
      setNudge((n) => ({
        x: n.x + (m.x ?? 0),
        y: n.y + (m.y ?? 0),
        s: n.s + (m.s ?? 0),
      }));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [align]);

  // nudge on top of whatever is saved in layout
  const syncX = (L.cardSyncX ?? 0) + nudge.x;
  const syncY = (L.cardSyncY ?? 0) + nudge.y;
  const syncS = Math.round(((L.cardSyncScale ?? 100) + nudge.s) * 10) / 10; // percent, 100 = as exported

  // optional blurred / darkened background (step.bgBlur in design px, step.bgDim from 0 to 1)
  const blur = step.bgBlur ?? 0;
  const dim = step.bgDim ?? 0;
  const bgStyle =
    blur || dim
      ? {
          filter: `blur(calc(${blur} * var(--k, 1px))) brightness(${1 - dim})`,
          transform: "scale(1.12)", // hides the soft edges the blur creates
        }
      : undefined;

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm({
    mode: "onTouched",
    defaultValues: Object.fromEntries(
      step.fields.map((f) => [f.name, defaultValues?.[f.name] ?? ""])
    ),
  });

  const values = watch();
  const isFilled = (name) => !!String(values[name] ?? "").trim();

  // run each field's cleaner (phone digits, date format...) however the value got in.
  // Errors are only re-checked once the field has been touched, so a half-typed
  // date does not flash an error while the person is still typing.
  useEffect(() => {
    step.fields.forEach((f) => {
      if (!f.sanitize) return;
      const raw = values[f.name] ?? "";
      const cleaned = f.sanitize(raw);
      if (cleaned !== raw) {
        setValue(f.name, cleaned, { shouldValidate: !!touchedFields[f.name] });
      }
    });
  }, [values, step.fields, setValue, touchedFields]);

  const submit = (data) => onNext(data);

  return (
    // Desktop (lg+): locked to the viewport, no page scroll.
    //   --kx = width scale, --ky = height scale (Figma frame is 1440x1024), --k = the smaller of the two
    // Mobile: natural height, scrolls normally.
    <section
      className={`${styles.container} relative flex flex-col overflow-hidden py-[clamp(8px,2vh,16px)] text-white lg:py-0 lg:[--kx:calc(100vw*0.000694444)] lg:[--ky:calc(100dvh*0.000976563)] lg:[--k:min(var(--kx),var(--ky))] lg:!h-[100dvh] lg:!min-h-0`}
    >
      <SectionBackground A={A} L={L} bgStyle={bgStyle} />

      {/* ===== Content ===== */}
      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1280px] flex-1 flex-col px-[20px] md:px-[40px] lg:absolute lg:inset-0 lg:mx-0 lg:max-w-none lg:flex-none lg:px-[7vw]">
        {/* desktop only: flexible space above the title */}
        <div
          aria-hidden
          className="hidden lg:block lg:min-h-[12px] lg:basis-0"
          style={{ flexGrow: S.top }}
        />

        {/* Title block image (Ready to join + THE PRIX? + 4 globes) */}
        <div className="relative mt-[43px] md:mt-[40px] lg:mt-0">
          <h1>
            <picture>
              <source media="(min-width: 1024px)" srcSet={A.title} />
              <img
                src={A.titleMobile}
                alt={step.titleAlt ?? "Ready to join the Prix?"}
                className="block h-auto w-full"
              />
            </picture>
          </h1>

          {A.ncAbujaMobile && (
            <img src={A.ncAbujaMobile} alt="NC Abuja" className={MOBILE_BADGE_CLASS} />
          )}
        </div>

        {/* desktop only: flexible space between title and form */}
        <div
          aria-hidden
          className="hidden lg:block lg:min-h-[12px] lg:basis-0"
          style={{ flexGrow: S.afterTitle }}
        />

        {/* Form on the left, optional photo card on the right (desktop only) */}
        <div className="lg:flex lg:items-start lg:justify-between">
          <form
            id={formId}
            onSubmit={handleSubmit(submit)}
            noValidate
            className="mt-[37px] flex w-full max-w-[760px] flex-col gap-[16px] md:mt-[36px] lg:mt-0 lg:w-[calc(738_*_var(--k,1px))] lg:max-w-full lg:shrink-0 lg:gap-[calc(15_*_var(--k,1px))]"
          >
            {step.fields.map((f) => (
              <Field
                key={f.name}
                f={f}
                register={register}
                control={control}
                errors={errors}
                filled={isFilled(f.name)}
              />
            ))}
          </form>

          {cardSrc && (
            <div
              className="relative hidden shrink-0 lg:block"
              style={{
                width: `calc(${CARD.w} * var(--k, 1px))`,
                height: `calc(${CARD.h} * var(--k, 1px))`,
              }}
            >
              {/* blurred background at the SAME scale and position as the card, so they line up.
                  Sits behind the form and title (-z-10) but above the full-window background. */}
              <div
                aria-hidden
                className="pointer-events-none absolute -z-10"
                style={{
                  left: `calc(${bgBox.x - CARD.x + syncX} * var(--k, 1px))`,
                  top: `calc(${bgBox.y - CARD.y + syncY} * var(--k, 1px))`,
                  width: `calc(${bgBox.w} * var(--k, 1px))`,
                  height: `calc(${bgBox.h} * var(--k, 1px))`,
                  // scale around the centre of the card, so the face stays put while it grows or shrinks
                  transform: `scale(${syncS / 100})`,
                  transformOrigin: `calc(${CARD.w / 2 - (bgBox.x - CARD.x + syncX)} * var(--k, 1px)) calc(${CARD.h / 2 - (bgBox.y - CARD.y + syncY)} * var(--k, 1px))`,
                  WebkitMaskImage: SYNC_FADE,
                  maskImage: SYNC_FADE,
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }}
              >
                <img src={A.bg} alt="" className="block h-full w-full" />
                <img
                  src={A.texture}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-70"
                />
              </div>

              {/* the sharp photo card (50% see-through in align mode) */}
              <div
                className="absolute inset-0 overflow-hidden border border-white/50"
                style={{ opacity: align ? 0.5 : 1 }}
              >
                <img
                  src={cardSrc}
                  alt=""
                  className="h-full w-full object-cover"
                  style={{ objectPosition: step.card?.position ?? "center" }}
                />
                {step.card?.logo !== false && SHARED_ASSETS.ncAbuja && (
                  <img
                    src={SHARED_ASSETS.ncAbuja}
                    alt="NC Abuja"
                    className="absolute -translate-y-1/2 object-contain"
                    style={{
                      right: L.cardLogoRight ?? "6.5%",
                      top: L.cardLogoTop ?? "9%",
                      width: L.cardLogoWidth ?? "51%",
                    }}
                  />
                )}
                {/* grain over the card, like Figma (the texture sits above it there) */}
                <img
                  src={A.texture}
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-70"
                />
              </div>
            </div>
          )}
        </div>

        {/* space between the form and the CTA */}
        <div
          className="min-h-[100px] flex-1 md:min-h-[44px] lg:min-h-[12px] lg:basis-0"
          style={{ flexGrow: S.beforeCta }}
        />

        {/* CTA: the image IS the button */}
        <div
          className="ml-[var(--cml-m,0%)] w-[var(--cw-m,100%)] pb-[60px] md:pb-[32px] lg:ml-[var(--cml,0%)] lg:w-[var(--cw,100%)] lg:pb-0"
          style={ctaVars}
        >
          <button
            type="submit"
            form={formId}
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="block w-full cursor-pointer transition hover:brightness-110 active:brightness-90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <picture>
              <source media="(min-width: 1024px)" srcSet={A.cta} />
              <img
                src={A.ctaMobile || A.cta}
                alt={step.ctaAlt ?? "Next lap"}
                className="block h-auto w-full"
              />
            </picture>
          </button>
        </div>

        {/* desktop only: flexible space at the bottom */}
        <div
          aria-hidden
          className="hidden lg:block lg:min-h-[12px] lg:basis-0"
          style={{ flexGrow: S.bottom }}
        />
      </div>

      {/* alignment helper readout (only with ?align in the URL, dev server only) */}
      {align && (
        <div className="fixed bottom-[12px] left-[12px] z-50 max-w-[340px] rounded-[6px] bg-black/85 p-[12px] font-mono text-[12px] leading-[1.5] text-white">
          <div>Arrows move, [ ] resize, hold Shift for bigger steps, 0 resets</div>
          <div className="mt-[6px] text-[#7CFC00]">
            cardSyncX: {syncX}, cardSyncY: {syncY}, cardSyncScale: {syncS}
          </div>
        </div>
      )}
    </section>
  );
}