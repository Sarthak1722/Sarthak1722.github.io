import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BentoModal = ({ isOpen, onClose, title, category, date, readTime, tags, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        document.body.style.touchAction = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 overscroll-contain">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl max-h-[85vh] bg-[#111118] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-white/5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {category && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium">
                      {category}
                    </span>
                  )}
                  {date && <span className="text-xs text-gray-400">{date}</span>}
                  {readTime && (
                    <span className="text-xs text-gray-400">· {readTime}</span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {title}
                </h3>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all flex-shrink-0"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              {children}
            </div>

            {/* Footer */}
            {tags && tags.length > 0 && (
              <div className="p-4 sm:px-8 border-t border-white/10 bg-white/[0.02] flex items-center flex-wrap gap-2">
                <span className="text-xs text-gray-400 font-medium mr-1">Tags:</span>
                {tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BentoModal;
