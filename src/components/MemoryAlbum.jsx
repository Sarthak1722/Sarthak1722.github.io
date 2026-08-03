import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PianoPlayer from "./PianoPlayer";

/* ── Short label map ── */
const SHORT = {
  academia:    "Academia",
  research:    "Research",
  music:       "Music",
  stage:       "Stage",
  chronicles:  "Blogs",
};

/* ── Swipe direction helper ── */
const SWIPE_THRESHOLD = 50;

const MemoryCardContent = ({ memory, onOpenAbstract }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-[#11111a]/95 rounded-[22px] p-5 sm:p-6 backdrop-blur-xl border border-white/15 flex flex-col lg:flex-row gap-6 items-center relative overflow-hidden shadow-2xl h-full">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Left Side: Polaroid Photo Snapshot Frame */}
      <div className="w-full lg:w-80 flex-shrink-0 flex flex-col items-center justify-center">
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
              {memory.period ? memory.period.split("–")[0] : "NCA"}
            </span>
          </div>
        </div>
      </div>

      {/* Right Side: Narrative Story & Memory Details */}
      <div className="flex-1 w-full flex flex-col gap-4 min-w-0">
        {/* Header & Badges */}
        <div className="flex flex-wrap items-start justify-between gap-2 border-b border-white/10 pb-3">
          <div className="min-w-0">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
              {memory.location}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mt-0.5">
              {memory.title}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 flex-shrink-0">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm">
              {memory.badge}
            </span>
            <span className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-full">
              📅 {memory.period}
            </span>
          </div>
        </div>

        {/* Narrative Paragraph */}
        <p className="text-gray-300 text-sm leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5 flex-shrink-0">
          "{memory.narrative}"
        </p>

        {/* Highlights Bullet Points */}
        {memory.highlights && (
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">
              Key Highlights:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {memory.highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-gray-300 bg-black/40 p-2.5 rounded-lg border border-white/5"
                >
                  <span className="text-purple-400 font-bold flex-shrink-0">✦</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documents & Action Row */}
        {(memory.documents || memory.hasAbstractModal) && (
          <div className="flex flex-wrap items-center gap-2 pt-2 mt-auto border-t border-white/5">

            {/* Document attachment chips */}
            {memory.documents?.map((doc, idx) => (
              <a
                key={idx}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-purple-600/20 text-gray-300 hover:text-purple-200 text-xs font-medium border border-white/10 hover:border-purple-500/40 transition-all duration-200 cursor-pointer"
              >
                <span>{doc.icon}</span>
                <span>{doc.label}</span>
                <span className="text-gray-500 text-[10px]">↗</span>
              </a>
            ))}

            {/* Abstract modal button */}
            {memory.hasAbstractModal && (
              <button
                onClick={() => onOpenAbstract(memory)}
                className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600/80 to-indigo-600/80 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all cursor-pointer border border-blue-500/30"
              >
                <span>🔬</span>
                <span>Read Abstract</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Main Album Component ── */
const MemoryAlbum = ({ chapters, onOpenAbstract }) => {
  const [activeTab, setActiveTab] = useState(chapters[0].id);
  const [activeMemoryIndex, setActiveMemoryIndex] = useState(0);
  const [dragDirection, setDragDirection] = useState(0); // -1 left, 1 right

  const currentChapter = chapters.find((c) => c.id === activeTab) || chapters[0];
  const memories = currentChapter.memories;
  const totalMemories = memories.length;

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setActiveMemoryIndex(0);
  };

  const handlePrev = () => {
    setDragDirection(-1);
    setActiveMemoryIndex((prev) => (prev - 1 + totalMemories) % totalMemories);
  };

  const handleNext = () => {
    setDragDirection(1);
    setActiveMemoryIndex((prev) => (prev + 1) % totalMemories);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalMemories, activeMemoryIndex]);

  const activeMemory = memories[activeMemoryIndex];
  const nextMemory = memories[(activeMemoryIndex + 1) % totalMemories];
  const prevMemory = memories[(activeMemoryIndex - 1 + totalMemories) % totalMemories];

  return (
    <div className="w-full">

      {/* ── Tab Navigation ── */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {chapters.map((ch) => {
          const isActive = ch.id === activeTab;
          const label = SHORT[ch.id] || ch.title.split(" ")[0];
          return (
            <button
              key={ch.id}
              onClick={() => handleTabChange(ch.id)}
              title={ch.title}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-300 select-none ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25 border border-purple-400/30 scale-105"
                  : "bg-white/[0.06] text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <span>{ch.icon}</span>
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* ── Piano chapter direct view ── */}
      {activeTab === "music" ? (
        <AnimatePresence mode="wait">
          <motion.div
            key="piano-studio-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <PianoPlayer />
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          {/* ── Card area: fixed height so nav never jumps ── */}
          <div className="relative w-full h-[820px] xs:h-[780px] sm:h-[740px] md:h-[700px] lg:h-[475px]">
            <AnimatePresence mode="wait" custom={dragDirection}>
              <motion.div
                key={`${activeTab}-${activeMemoryIndex}`}
                custom={dragDirection}
                initial={{ opacity: 0, x: dragDirection * 80, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: dragDirection * -80, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -SWIPE_THRESHOLD) handleNext();
                  else if (info.offset.x > SWIPE_THRESHOLD) handlePrev();
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing p-[1.5px] rounded-3xl shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(139,92,246,0.35), rgba(255,255,255,0.06), rgba(99,102,241,0.25))",
                  touchAction: "pan-y",
                }}
              >
                <MemoryCardContent memory={activeMemory} onOpenAbstract={onOpenAbstract} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Navigation footer — always at the same position ── */}
          <div className="flex items-center justify-between mt-6 px-1">

            <button
              onClick={handlePrev}
              className="arrow-btn hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              aria-label="Previous memory"
            >
              <img src="/assets/left-arrow.png" alt="prev" className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {memories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDragDirection(idx > activeMemoryIndex ? 1 : -1);
                    setActiveMemoryIndex(idx);
                  }}
                  className={`rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeMemoryIndex
                      ? "w-6 h-2 bg-purple-400"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Memory ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="arrow-btn hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 cursor-pointer"
              aria-label="Next memory"
            >
              <img src="/assets/right-arrow.png" alt="next" className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MemoryAlbum;
