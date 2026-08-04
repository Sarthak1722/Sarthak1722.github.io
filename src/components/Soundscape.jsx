import React, { useState, useEffect, useRef } from "react";

const Soundscape = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  // Initialize Audio
  useEffect(() => {
    const audio = new Audio("/audio/rfiy.mp3");
    audio.loop = true;
    audio.volume = 0; // Start at 0 for smooth fade-in
    audioRef.current = audio;

    // High-Fidelity Interaction: Pause when any other media plays on the page
    const handleGlobalPlay = (e) => {
      if (audioRef.current && e.target !== audioRef.current) {
        pauseAudioWithFade();
      }
    };

    document.addEventListener("play", handleGlobalPlay, true);

    // Try autoplay immediately
    const startAudio = () => {
      setIsPlaying(true);
      audio.play().then(() => {
        // Fade in
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = setInterval(() => {
          if (audio.volume < 0.35) {
            audio.volume = Math.min(audio.volume + 0.02, 0.35);
          } else {
            clearInterval(fadeIntervalRef.current);
          }
        }, 80);
      }).catch((err) => {
        console.log("Autoplay blocked, waiting for user interaction.", err);
        setIsPlaying(false);
        
        // Listen for first interaction to trigger audio
        const handleInteraction = () => {
          setIsPlaying(true);
          audio.play().then(() => {
            clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = setInterval(() => {
              if (audio.volume < 0.35) {
                audio.volume = Math.min(audio.volume + 0.02, 0.35);
              } else {
                clearInterval(fadeIntervalRef.current);
              }
            }, 80);
          }).catch(() => {
            setIsPlaying(false);
          });
          
          cleanupInteraction();
        };

        const cleanupInteraction = () => {
          document.removeEventListener("click", handleInteraction);
          document.removeEventListener("keydown", handleInteraction);
          document.removeEventListener("touchstart", handleInteraction);
        };

        document.addEventListener("click", handleInteraction);
        document.addEventListener("keydown", handleInteraction);
        document.addEventListener("touchstart", handleInteraction);
      });
    };

    startAudio();

    return () => {
      document.removeEventListener("play", handleGlobalPlay, true);
      if (audioRef.current) {
        audioRef.current.pause();
      }
      clearInterval(fadeIntervalRef.current);
    };
  }, []);

  const playAudioWithFade = () => {
    if (!audioRef.current) return;
    
    clearInterval(fadeIntervalRef.current);
    setIsPlaying(true);
    
    // Play audio
    audioRef.current.play().catch((err) => {
      console.log("Audio play blocked by browser autofill/permissions:", err);
      setIsPlaying(false);
    });

    // Fade-in volume to 0.35 over 1.5 seconds
    const targetVolume = 0.35;
    const step = 0.02;
    fadeIntervalRef.current = setInterval(() => {
      if (audioRef.current.volume < targetVolume) {
        audioRef.current.volume = Math.min(audioRef.current.volume + step, targetVolume);
      } else {
        clearInterval(fadeIntervalRef.current);
      }
    }, 80);
  };

  const pauseAudioWithFade = () => {
    if (!audioRef.current) return;

    clearInterval(fadeIntervalRef.current);
    setIsPlaying(false);

    // Fade-out volume to 0, then pause
    const step = 0.04;
    fadeIntervalRef.current = setInterval(() => {
      if (audioRef.current.volume > 0.02) {
        audioRef.current.volume = Math.max(audioRef.current.volume - step, 0);
      } else {
        audioRef.current.volume = 0;
        audioRef.current.pause();
        clearInterval(fadeIntervalRef.current);
      }
    }, 60);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseAudioWithFade();
    } else {
      playAudioWithFade();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={togglePlay}
        className="relative w-12 h-12 rounded-full flex items-center justify-center bg-zinc-950/70 border border-white/10 hover:border-purple-500/50 backdrop-blur-md cursor-pointer transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] group transform hover:scale-105 active:scale-95"
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
      >
        {/* Dynamic visual indicator (jumping audio bars) */}
        {isPlaying ? (
          <div className="flex items-end gap-[2px] h-3.5 w-4 justify-center">
            <span className="w-[2.5px] bg-purple-400 rounded-full animate-wave-1"></span>
            <span className="w-[2.5px] bg-purple-400 rounded-full animate-wave-2"></span>
            <span className="w-[2.5px] bg-purple-400 rounded-full animate-wave-3"></span>
          </div>
        ) : (
          <svg
            className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {/* Music note icon */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
            />
          </svg>
        )}

        {/* Hover Tooltip */}
        <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 text-[10px] text-gray-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50 shadow-xl">
          {isPlaying ? "Mute ambient music" : "Play ambient music (River Flows In You)"}
        </span>
      </button>
    </div>
  );
};

export default Soundscape;
