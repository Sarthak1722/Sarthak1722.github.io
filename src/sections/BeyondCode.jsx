import React, { useState } from "react";
import { motion } from "framer-motion";
import MemoryAlbum from "../components/MemoryAlbum";
import BentoModal from "../components/BentoModal";
import { memoryChapters, beyondCodeStats } from "../constants";

const textVariant = (delay = 0) => ({
  hidden: { y: -30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.2, delay },
  },
});

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const BeyondCode = () => {
  const [activeAbstractModal, setActiveAbstractModal] = useState(null);

  return (
    <motion.section
      id="beyond-code"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="md:px-10 px-5 sm:py-20 py-12 max-w-7xl mx-auto relative z-0 w-full"
    >
      {/* Section Header */}
      <motion.div variants={textVariant(0)} className="text-center mb-12">
        <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">
          ACADEMIA, RESEARCH, MUSIC & CULTURAL CHRONICLES
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Beyond Code: Memory Journal.
        </h2>
      </motion.div>

      {/* Main Memory Scrapbook Album */}
      <MemoryAlbum
        chapters={memoryChapters}
        onOpenAbstract={(mem) => setActiveAbstractModal(mem)}
      />

      {/* Quick Summary Highlights Bar */}
      <div className="mt-12 card-border rounded-2xl p-6 bg-gradient-to-r from-purple-950/30 via-black-100 to-blue-950/30 border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {beyondCodeStats.map((stat, i) => (
            <div key={i} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Research Paper Abstract Modal */}
      {activeAbstractModal && (
        <BentoModal
          isOpen={!!activeAbstractModal}
          onClose={() => setActiveAbstractModal(null)}
          title={activeAbstractModal.title}
          category={activeAbstractModal.badge}
          date={activeAbstractModal.period}
          readTime="Conference Abstract"
          tags={["Ammonia Combustion", "Chemkin", "ANN Modeling", "N0ET-2024", "IIT Dhanbad"]}
        >
          <div className="space-y-5">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-950/40 border border-blue-500/30">
              <span className="text-3xl">🏆</span>
              <div>
                <h4 className="text-white font-semibold">Awarded Youngest Presenter Title</h4>
                <p className="text-xs text-blue-300">Net-Zero Emissions Technology (N0ET-2024) · IIT (ISM) Dhanbad</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider text-gray-400 font-semibold mb-2">
                Full Chemical Kinetic Study Abstract
              </h4>
              <p className="text-gray-200 leading-relaxed bg-black/40 p-4 rounded-xl border border-white/10 text-sm">
                {activeAbstractModal.abstract}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveAbstractModal(null)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all"
              >
                Close Abstract
              </button>
            </div>
          </div>
        </BentoModal>
      )}
    </motion.section>
  );
};

export default BeyondCode;
