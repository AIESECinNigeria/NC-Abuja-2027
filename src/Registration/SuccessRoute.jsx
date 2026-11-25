import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import SuccessPage from "./SuccessPage";

// Route wrapper: hands the submitted answers to SuccessPage and keeps
// people who never submitted from landing on a "success" screen.
export default function SuccessRoute() {
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // In dev you can open /success directly to work on the page.
  // In production, no submission means back to the form.
  if (!state?.data && !import.meta.env.DEV) {
    return <Navigate to="/register" replace />;
  }

  return <SuccessPage data={state?.data ?? {}} />;
}