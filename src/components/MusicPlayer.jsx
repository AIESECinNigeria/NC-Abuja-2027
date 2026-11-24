import { useRef, useState, useEffect } from "react";

export default function MusicPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const cleanupListeners = () => {
      window.removeEventListener("touchstart", startAudioOnInteraction);
      window.removeEventListener("click", startAudioOnInteraction);
      window.removeEventListener("keydown", startAudioOnInteraction);
    };

    const startAudioOnInteraction = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        cleanupListeners();
      } catch (err) {
        // Still waiting for a valid tap/click gesture
      }
    };

    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        setIsPlaying(false);
        // Mobile blocked autoplay: trigger on first screen tap anywhere
        window.addEventListener("touchstart", startAudioOnInteraction, { passive: true });
        window.addEventListener("click", startAudioOnInteraction, { passive: true });
        window.addEventListener("keydown", startAudioOnInteraction, { passive: true });
      }
    };

    attemptAutoplay();

    // Pause when switching tabs or minimizing mobile browser
    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else {
        audio.play().catch(() => {});
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      audio.pause();
      cleanupListeners();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [src]);

  return (
    <div className="absolute bottom-10 right-10 z-120">
      <p>{title}</p>
      <audio
        ref={audioRef}
        src={src || "/audio/webSound.mp3"}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
        playsInline
        loop
      />
    </div>
  );
}
