import { useEffect, useState } from "react";
import FormStep from "./FormStep";
import { STEPS } from "./formSteps";
import SuccessPage from "./SuccessPage";

export default function MultiStepForm({ onComplete }) {
  const [index, setIndex] = useState(() => {
    if (!import.meta.env.DEV) return 0; // dev only: ?step=2 jumps to step 2
    const n = Number(new URLSearchParams(window.location.search).get("step"));
    return n >= 1 && n <= STEPS.length ? n - 1 : 0;
  });
  const [data, setData] = useState({}); // answers from all steps
  const [submitted, setSubmitted] = useState(
    // dev only: ?success jumps straight to the success page
    () =>
      import.meta.env.DEV &&
      new URLSearchParams(window.location.search).has("success")
  );
  const step = STEPS[index];
  const isLast = index === STEPS.length - 1;

  // start each step (and the success page) at the top (matters on mobile)
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [index, submitted]);

  const handleNext = async (stepData) => {
    const merged = { ...data, ...stepData };
    setData(merged);

    if (isLast) {
      await onComplete?.(merged); // send everything to your backend here
      setSubmitted(true); // only show the success page if submission succeeds
      return;
    }
    setIndex((i) => i + 1);
  };

  if (submitted) return <SuccessPage data={data} />;

  // key = fresh form for each step; defaultValues refills it if you ever go back
  return (
    <FormStep key={step.id} step={step} defaultValues={data} onNext={handleNext} />
  );
}