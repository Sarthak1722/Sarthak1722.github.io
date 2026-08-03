import React, { useState, useRef } from "react";
import MusicVisualizer from "./MusicVisualizer";
import { pianoTracks } from "../constants";

const trackCount = pianoTracks.length;

const PianoPlayer = () => {
  const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const currentTrack = pianoTracks[selectedTrackIndex];

  const handleNavigation = (direction) => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setSelectedTrackIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? trackCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === trackCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch((err) => console.log("Play failed:", err));
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full">
      <div
        className="grid lg:grid-cols-2 grid-cols-1 w-full glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black-100/40 backdrop-blur-xl"
        style={{ willChange: "transform", transform: "translate3d(0, 0, 0)" }}
      >

        {/* LEFT: Visualizer, track info + controls below */}
        <div className="flex flex-col relative sm:p-10 py-8 px-6 justify-between lg:border-r lg:border-white/5 border-b border-white/5 bg-neutral-900/10 order-2 lg:order-1">

          {/* Audio Visualizer Panel (Click to toggle play/pause, hover to reveal overlay) */}
          <div 
            className="relative w-full mb-6 group cursor-pointer overflow-hidden rounded-2xl border border-white/5 shadow-2xl"
            onClick={togglePlay}
          >
            <MusicVisualizer
              isPlaying={isPlaying}
              trackIndex={selectedTrackIndex}
            />

            {/* Glowing Glassmorphic Hover Play/Pause Overlay */}
            <div className="absolute inset-0 bg-[#07040a]/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                {isPlaying ? (
                  <svg className="w-6 h-6 fill-current text-purple-200" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 fill-current text-purple-200 ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </div>
            </div>
          </div>

          {/* Track Title & Composer */}
          <div className="flex flex-col gap-2.5 my-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono">
              Track {selectedTrackIndex + 1} / {trackCount}
            </span>
            <p className="text-white text-2xl font-semibold">
              {currentTrack.title}
            </p>
            <p className="text-[#839cb5] leading-relaxed">
              {currentTrack.composer}{" "}
              <span className="text-purple-300 font-medium">· {currentTrack.genre}</span>
            </p>
          </div>

          {/* Media Player Control Row */}
          <div className="flex justify-between items-center mt-5">
            {/* Previous Track Arrow */}
            <button
              className="arrow-btn hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              onClick={() => handleNavigation("previous")}
              aria-label="Previous Track"
            >
              <img src="/assets/left-arrow.png" alt="previous track" className="w-4 h-4" />
            </button>

            {/* Central Media Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] border border-purple-400/30 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              aria-label={isPlaying ? "Pause Track" : "Play Track"}
            >
              {isPlaying ? (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>

            {/* Next Track Arrow */}
            <button
              className="arrow-btn hover:border-purple-500/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              onClick={() => handleNavigation("next")}
              aria-label="Next Track"
            >
              <img src="/assets/right-arrow.png" alt="next track" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RIGHT: Video Player — full video visible, no cropping */}
        <div className="overflow-hidden relative flex items-center justify-center bg-neutral-950/60 p-8 order-1 lg:order-2">
          <div className="relative w-full max-w-xs mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <video
              ref={videoRef}
              key={currentTrack.videoSrc}
              src={currentTrack.videoSrc}
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-auto block"
              style={{ maxHeight: '460px' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PianoPlayer;
