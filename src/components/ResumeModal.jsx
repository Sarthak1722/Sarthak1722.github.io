import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResumeModal = ({ isOpen, onClose }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      window.addEventListener("keydown", handleKeyDown);

      // Focus iframe after modal opens so scrolling targets the resume
      const timer = setTimeout(() => {
        iframeRef.current?.focus();
      }, 100);

      return () => {
        clearTimeout(timer);
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
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-8 overscroll-contain">
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
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl h-[88vh] bg-zinc-950/85 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.03] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 font-semibold text-sm">
                  📄
                </span>
                <div>
                  <h3 className="text-md sm:text-lg font-bold text-white leading-tight">
                    Sarthak_CV.pdf
                  </h3>
                  <p className="text-xs text-gray-400">Curriculum Vitae</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href="/docs/Sarthak_CV.pdf"
                  download="Sarthak_CV.pdf"
                  className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-white bg-purple-600/20 hover:bg-purple-600 border border-purple-500/30 hover:border-purple-500 rounded-lg transition-all shadow-md cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 hover:border-white/10 transition-all flex-shrink-0 cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Iframe Viewer */}
            <div className="flex-grow bg-black/40 p-2 sm:p-4">
              <iframe
                ref={iframeRef}
                src="/docs/Sarthak_CV.pdf#toolbar=0"
                className="w-full h-full rounded-lg border border-white/5"
                title="Sarthak Fulzele Resume"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
