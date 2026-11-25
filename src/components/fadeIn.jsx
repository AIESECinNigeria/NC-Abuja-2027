import "./fadeIn.css";

export default function FadeIn({ children, delay = 0.6, duration = 0.6, className = "" }) {
  return (
    <div
      className={`fade-in ${className}`}
      style={{ "--fade-delay": `${delay}s`, "--fade-duration": `${duration}s` }}
    >
      {children}
    </div>
  );
}