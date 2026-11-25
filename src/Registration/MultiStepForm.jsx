import { useEffect, useRef, useState } from "react";
import { useBlockTransition } from "../components/TransitionContext";
import FadeIn from "../components/fadeIn";
import FormStep from "./formStep";
import { STEPS } from "./formSteps";

export default function MultiStepForm({ onComplete }) {
  const { navigateWithBlocks, runWithBlocks } = useBlockTransition();
  const submitting = useRef(false); // stops a second submit while the answers are being sent
  const [index, setIndex] = useState(() => {
    if (!import.meta.env.DEV) return 0; // dev only: ?step=2 jumps to step 2
    const n = Number(new URLSearchParams(window.location.search).get("step"));
    return n >= 1 && n <= STEPS.length ? n - 1 : 0;
  });
  const [data, setData] = useState({}); // answers from all steps
  const step = STEPS[index];
  const isLast = index === STEPS.length - 1;

  // start each step at the top (matters on mobile)
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [index]);

  const handleNext = async (stepData) => {
    const merged = { ...data, ...stepData };

    if (isLast) {
      if (submitting.current) return;
      submitting.current = true;
      try {
        await onComplete?.(merged); // send everything to your backend here
      } catch (err) {
        submitting.current = false; // let them retry if submission fails
        throw err;
      }
      setData(merged);
      // only reached if submission succeeds; the answers travel with the navigation
      navigateWithBlocks("/success", { state: { data: merged } });
      return;
    }

    // blocks cover the screen, then the next step swaps in underneath
    // (a second click during the animation is ignored by runWithBlocks)
    runWithBlocks(() => {
      setData(merged);
      setIndex((i) => i + 1);
    });
  };

  // key on FadeIn replays the fade for every step;
  // defaultValues refills the form if you ever go back
  return (
    <FadeIn key={step.id}>
      <FormStep step={step} defaultValues={data} onNext={handleNext} />
    </FadeIn>
  );
}