import { useRef, useState } from "react";
import { useEffect } from 'react';
import { EighthNotes } from 'lucide-react';

export default function MusicPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        // Browser blocked autoplay; leave paused until user clicks the button
        setIsPlaying(false);
      }
    };

    attemptAutoplay();
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
  
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio failed to play:", error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="absolute bottom-10 right-10 z-120 ">
      <p>{title}</p>
      <audio
        ref={audioRef}
        src='public/audio/webSound.mp3'
        onEnded={() => setIsPlaying(false)}
      />
      {/* <button className="bg-[#EC0303] hover:bg-white text-white hover:text-[#EC0303] p-1 rounded-full shadow-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)] " onClick={togglePlay}>
        {isPlaying ? 
            <div className="animate-spin "><EighthNotes /></div> : <div><EighthNotes /></div>}
      </button> */}
    </div>
  );
}