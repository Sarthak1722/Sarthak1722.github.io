import { useEffect, useState } from "react";
import gsap from "gsap";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing systems...");

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const statusUpdates = [
      { threshold: 0, text: "Connecting to NASA's supercomputer..." },
      { threshold: 20, text: "Contacting Juni James..." },
      { threshold: 45, text: "Downloading all the available knowledge..." },
      { threshold: 70, text: "Kon'nichiwa..." },
      { threshold: 90, text: "おれは海賊王になる！" },
      { threshold: 100, text: "Hello World 🥰" }
    ];

    // Smooth counter animation
    let current = 0;
    const duration = 2400; // 2.4s total load time
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      current += step + Math.random() * 2; // Add slight random jitter for realistic feel
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        
        // Final Welcome state
        setStatusText("Welcome");
        setProgress(100);

        // GSAP fade out animation
        setTimeout(() => {
          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = "";
              if (onComplete) onComplete();
            }
          });

          // Fade out content and wipe loading screen up
          tl.to(".loader-content-wrap", {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power2.inOut"
          })
          .to(".loader-bg", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.8,
            ease: "power4.inOut"
          }, "-=0.2");
        }, 600);
      } else {
        const rounded = Math.floor(current);
        setProgress(rounded);
        
        // Find matching status text
        const update = [...statusUpdates].reverse().find(u => rounded >= u.threshold);
        if (update) {
          setStatusText(update.text);
        }
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div className="loader-bg fixed inset-0 w-full h-full bg-[#030303] z-[99999] flex flex-col justify-center items-center select-none" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
      {/* Subtle background glow grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="loader-content-wrap flex flex-col items-center gap-6 relative z-10">
        {/* Title */}
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-violet-500 animate-ping" />
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-400 font-mono">
            Sarthak Fulzele &bull; Portfolio
          </h2>
        </div>

        {/* Counter */}
        <div className="text-7xl font-light tracking-tight text-white font-mono flex items-baseline">
          <span>{progress}</span>
          <span className="text-lg font-normal text-zinc-500 ml-1">%</span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <div 
            className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-75 ease-out shadow-[0_0_10px_rgba(124,58,237,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status Messages */}
        <p className="text-xs text-zinc-500 font-mono tracking-widest uppercase animate-pulse min-h-[16px]">
          {statusText}
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
