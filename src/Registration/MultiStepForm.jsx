import { useEffect, useRef, useState } from "react";
import { useBlockTransition } from "../components/TransitionContext";
import FadeIn from "../components/fadeIn";
import FormStep from "./formStep";
import { STEPS } from "./formSteps";
import { registerParticipant } from "../api/register";

export default function MultiStepForm() {
  const { navigateWithBlocks, runWithBlocks } = useBlockTransition();
  const submitting = useRef(false);
  const [submitError, setSubmitError] = useState("");
  const [index, setIndex] = useState(() => {
    if (!import.meta.env.DEV) return 0; // dev only: ?step=2 jumps to step 2
    const n = Number(new URLSearchParams(window.location.search).get("step"));
    return n >= 1 && n <= STEPS.length ? n - 1 : 0;
  });
  const [data, setData] = useState({});
  const step = STEPS[index];
  const isLast = index === STEPS.length - 1;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [index]);

  const handleNext = async (stepData) => {
    const merged = { ...data, ...stepData };

    if (isLast) {
      if (submitting.current) return;
      submitting.current = true;
      setSubmitError("");
      setData(merged);

      try {
        await registerParticipant(merged);
      } catch (err) {
        submitting.current = false;
        setSubmitError(err.message || "Something went wrong. Please try again.");
        return;
      }

      navigateWithBlocks("/success", { state: { data: merged } });
      return;
    }

    runWithBlocks(() => {
      setData(merged);
      setIndex((i) => i + 1);
    });
  };

  return (
    <>
      <FadeIn key={step.id}>
        <FormStep step={step} defaultValues={data} onNext={handleNext} />
      </FadeIn>

      {submitError && (
        <div
          role="alert"
          className="fixed inset-x-0 top-[12px] z-[60] mx-auto flex w-[calc(100%-24px)] max-w-[480px] items-start gap-[12px] rounded-[6px] bg-[#EC0303] px-[16px] py-[12px] font-sans text-[14px] leading-[1.4] text-white shadow-lg"
        >
          <p className="flex-1">{submitError}</p>
          <button
            type="button"
            onClick={() => setSubmitError("")}
            aria-label="Dismiss"
            className="cursor-pointer text-[18px] leading-none"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}