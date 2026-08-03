import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PianoPlayer from "./PianoPlayer";

const MemoryCardContent = ({ memory, onOpenAbstract }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-[#11111a]/95 rounded-[22px] p-6 sm:p-8 backdrop-blur-xl border border-white/15 flex flex-col lg:flex-row gap-8 items-start relative overflow-hidden shadow-2xl">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left Side: Polaroid Photo Snapshot Frame */}
      <div className="w-full lg:w-80 flex-shrink-0 flex flex-col items-center">
        <div className="w-full bg-neutral-900 border-8 border-neutral-100/90 rounded-sm p-3 shadow-2xl relative transition-transform duration-500 hover:scale-[1.02] -rotate-1">
          {/* Sticky Tape Visual Accent */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-amber-100/40 backdrop-blur-sm border border-amber-200/30 rotate-[-1deg] shadow-sm z-20" />

          {/* Photo Container */}
          <div className="w-full aspect-[4/3] sm:aspect-square bg-gradient-to-br from-neutral-800 to-neutral-950 rounded-sm overflow-hidden relative flex items-center justify-center border border-black/20">
            {!imgError ? (
              <img
                src={memory.image}
                alt={memory.title}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              /* Sleek Placeholder graphic when image is missing */
              <div className="w-full h-full p-4 flex flex-col items-center justify-center text-center bg-gradient-to-tr from-purple-950/40 via-neutral-900 to-blue-950/40">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-2 text-2xl border border-white/20">
                  📷
                </div>
                <span className="text-xs font-semibold text-purple-200 line-clamp-1">
                  {memory.imageCaption || memory.title}
                </span>
                <span className="text-[10px] text-gray-400 mt-1.5 font-mono px-2 py-0.5 rounded bg-black/50 border border-white/10">
                  Drop image to: public{memory.image}
                </span>
              </div>
            )}
          </div>

          {/* Polaroid Handwritten Style Footer */}
          <div className="pt-3 px-1 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-neutral-200 tracking-tight truncate max-w-[70%] font-mono">
              {memory.imageCaption || memory.title}
            </span>
            <span className="text-[10px] font-bold text-purple-200 bg-purple-900/60 border border-purple-500/30 px-1.5 py-0.5 rounded">
              {memory.period.split("–")[0]}
            </span>
          </div>
        </div>
      </div>

      {/* Right Side: Narrative Story & Memory Details */}
      <div className="flex-1 w-full space-y-4">
        {/* Header & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
              {memory.location}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mt-0.5">
              {memory.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm">
              {memory.badge}
            </span>
            <span className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-full">
              📅 {memory.period}
            </span>
          </div>
        </div>

        {/* Narrative Paragraph */}
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
          "{memory.narrative}"
        </p>

        {/* Highlights Bullet Points */}
        {memory.highlights && (
          <div className="space-y-2 pt-1">
            <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
              Key Highlights:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {memory.highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-gray-300 bg-black/40 p-2.5 rounded-lg border border-white/5"
                >
                  <span className="text-purple-400 font-bold">✦</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive Harmonium/Piano Player Deck if Musical memory */}
        {memory.hasAudioPlayer && (
          <div className="pt-3">
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30">
              <PianoPlayer />
            </div>
          </div>
        )}

        {/* Abstract Modal Button for Research presentation */}
        {memory.hasAbstractModal && (
          <div className="pt-2 flex justify-end">
            <button
              onClick={() => onOpenAbstract(memory)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>📜</span> Read Research Abstract & N0ET Presentation Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const MemoryAlbum = ({ chapters, onOpenAbstract }) => {
  const [activeTab, setActiveTab] = useState(chapters[0].id);
  const [activeMemoryIndex, setActiveMemoryIndex] = useState(0);

  const currentChapter =
    chapters.find((c) => c.id === activeTab) || chapters[0];
  const memories = currentChapter.memories;
  const totalMemories = memories.length;

  // Reset photo index when switching tabs
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActiveMemoryIndex(0);
  };

  const handlePrev = () => {
    setActiveMemoryIndex((prev) => (prev - 1 + totalMemories) % totalMemories);
  };

  const handleNext = () => {
    setActiveMemoryIndex((prev) => (prev + 1) % totalMemories);
  };

  // Enable keyboard left/right arrow keys navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalMemories, activeMemoryIndex]);

  const activeMemory = memories[activeMemoryIndex];

  return (
    <div className="w-full">
      {/* Chapter Album Navigation Tabs */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar scroll-smooth">
        {chapters.map((ch) => {
          const isActive = ch.id === activeTab;
          return (
            <button
              key={ch.id}
              onClick={() => handleTabChange(ch.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all flex-shrink-0 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/30 scale-105"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <span>{ch.icon}</span>
              <span>{ch.title}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-black/40 text-gray-400"
                }`}
              >
                {ch.memories.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Navigation Arrow Controls Header */}
      {totalMemories > 1 && (
        <div className="flex items-center justify-between px-2 mb-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>
              Memory {activeMemoryIndex + 1} of {totalMemories}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-purple-600 text-white text-xs font-semibold border border-white/15 transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Previous photo"
            >
              <span>←</span> Previous
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 px-2">
              {memories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMemoryIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeMemoryIndex
                      ? "w-5 bg-purple-400"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to memory ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold border border-purple-400/40 transition-all shadow-lg shadow-purple-600/30 active:scale-95 cursor-pointer"
              aria-label="Next photo"
            >
              Next <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* 3D Stacked Polaroid Photo Deck Container */}
      <div className="relative min-h-[480px] w-full flex items-center justify-center py-2">
        {/* Secondary Card Stack Peeks (Visible underlying photos in pile) */}
        {totalMemories > 1 && (
          <>
            {/* Peek Layer 1: Peeking out to the right with rotate(3.5deg) */}
            <div
              onClick={handleNext}
              className="absolute inset-x-2 sm:inset-x-6 top-4 bottom-0 rounded-3xl bg-[#181628]/80 border border-white/10 shadow-xl opacity-60 transition-all duration-500 pointer-events-auto cursor-pointer hover:opacity-80"
              style={{
                transform: "translateY(12px) rotate(3.5deg) scale(0.97)",
                zIndex: 1,
              }}
            >
              <div className="p-4 text-right pr-6 pt-3">
                <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2 py-1 rounded border border-purple-500/20">
                  Peek Next Photo ➔
                </span>
              </div>
            </div>

            {/* Peek Layer 2 (if 3+ items): Peeking out to the left with rotate(-4deg) */}
            {totalMemories > 2 && (
              <div
                onClick={handlePrev}
                className="absolute inset-x-4 sm:inset-x-10 top-8 bottom-0 rounded-3xl bg-[#12111d]/60 border border-white/5 shadow-md opacity-30 transition-all duration-500 pointer-events-auto cursor-pointer hover:opacity-50"
                style={{
                  transform: "translateY(24px) rotate(-4.5deg) scale(0.94)",
                  zIndex: 0,
                }}
              />
            )}
          </>
        )}

        {/* Foreground Focus Active Card (Top of Deck) */}
        <div className="relative z-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeMemoryIndex}`}
              initial={{ opacity: 0, scale: 0.95, y: 15, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15, rotate: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="p-[2px] rounded-3xl bg-gradient-to-br from-purple-500/30 via-white/10 to-blue-500/30 shadow-2xl"
            >
              <MemoryCardContent
                memory={activeMemory}
                onOpenAbstract={onOpenAbstract}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default MemoryAlbum;
