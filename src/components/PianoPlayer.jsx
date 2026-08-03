import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import GrandPianoModel from "./GrandPianoModel";
import CanvasLoader from "./Loading";
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

  return (
    <div className="w-full">
      <div
        className="grid lg:grid-cols-2 grid-cols-1 w-full glass-card rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black-100/40 backdrop-blur-xl"
        style={{ willChange: "transform", transform: "translate3d(0, 0, 0)" }}
      >

        {/* LEFT: 3D Piano on top, track info + arrows below */}
        <div className="flex flex-col relative sm:p-10 py-8 px-6 justify-between lg:border-r lg:border-white/5 border-b border-white/5 bg-neutral-900/10 order-2 lg:order-1">

          {/* 3D Piano Canvas (fills the top like a video player would) */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1c1033] via-[#0d071a] to-[#06030b] border border-white/10 shadow-2xl mb-6" style={{ height: '280px' }}>
            {/* Ambient glow behind piano */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-600/20 rounded-full blur-[70px] pointer-events-none z-0" />

            <Canvas
              style={{ touchAction: "pan-y", height: "100%", width: "100%", position: "relative", zIndex: 1 }}
              camera={{ position: [-0.5, 1.8, 3.5], fov: 52 }}
            >
              <ambientLight intensity={Math.PI * 0.9} />
              <directionalLight position={[10, 10, 5]} intensity={2.5} color="#ffffff" />
              <directionalLight position={[-8, 5, -5]} intensity={1.8} color="#a855f7" />
              <spotLight position={[0, 8, 0]} angle={0.5} penumbra={1} intensity={3.5} color="#f0abfc" />

              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <GrandPianoModel
                    trackIndex={selectedTrackIndex}
                    isPlaying={isPlaying}
                  />
                </Suspense>
              </Center>
              <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
            </Canvas>
          </div>

          {/* Track Title & Composer (below 3D piano, matching Projects layout) */}
          <div className="flex flex-col gap-5 my-3">
            <p className="text-white text-2xl font-semibold">
              {currentTrack.title}
            </p>
            <p className="text-[#839cb5] leading-relaxed">
              {currentTrack.composer}{" "}
              <span className="text-purple-300 font-medium">· {currentTrack.genre}</span>
            </p>
          </div>

          {/* Arrow Navigation (identical to Projects.jsx) */}
          <div className="flex justify-between items-center mt-5">
            <button
              className="arrow-btn hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              onClick={() => handleNavigation("previous")}
              aria-label="Previous Track"
            >
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <span className="text-sm text-gray-400 font-mono tracking-wider">
              {selectedTrackIndex + 1} / {trackCount}
            </span>

            <button
              className="arrow-btn hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              onClick={() => handleNavigation("next")}
              aria-label="Next Track"
            >
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
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
