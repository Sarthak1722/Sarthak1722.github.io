import React, { useState, useEffect, useRef } from "react";
import { pianoTracks } from "../constants";

const PianoPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const synthIntervalRef = useRef(null);

  const track = pianoTracks[currentTrackIndex];

  // Frequency lookup table for note names
  const noteFreqs = {
    C4: 261.63,
    Eb4: 311.13,
    F4: 349.23,
    G4: 392.0,
    Ab4: 415.3,
    A4: 440.0,
    Bb4: 466.16,
    C5: 523.25,
    Eb5: 622.25,
    E5: 659.25,
    F5: 698.46,
    G5: 783.99,
    A5: 880.0,
  };

  // Web Audio Synth Fallback when audioSrc is empty
  const playPianoNote = (freq) => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft piano tone: mix sine & triangle
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Envelope: quick attack, smooth exponential decay
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.25);
    } catch (err) {
      console.warn("Web Audio Playback error:", err);
    }
  };

  const startSynthMelody = () => {
    let noteIdx = 0;
    const notes = track.notes || ["C4", "Eb4", "G4", "C5"];

    // Play initial note
    const freq = noteFreqs[notes[0]] || 261.63;
    playPianoNote(freq);

    const intervalMs = Math.round(60000 / (track.bpm || 72));

    synthIntervalRef.current = setInterval(() => {
      noteIdx = (noteIdx + 1) % notes.length;
      const nextNote = notes[noteIdx];
      const nextFreq = noteFreqs[nextNote] || 300;
      playPianoNote(nextFreq);
    }, intervalMs);
  };

  const stopSynthMelody = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (audioRef.current && track.audioSrc) {
        audioRef.current.pause();
      } else {
        stopSynthMelody();
      }
    } else {
      setIsPlaying(true);
      if (audioRef.current && track.audioSrc) {
        audioRef.current.play();
      } else {
        startSynthMelody();
      }
    }
  };

  const changeTrack = (index) => {
    if (isPlaying) {
      stopSynthMelody();
      if (audioRef.current) audioRef.current.pause();
    }
    setCurrentTrackIndex(index);
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => {
      stopSynthMelody();
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Hidden audio element if audioSrc is provided */}
      {track.audioSrc && (
        <audio
          ref={audioRef}
          src={track.audioSrc}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎹</span>
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-400">
            Harmonies & Melody
          </span>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300">
          {track.genre}
        </span>
      </div>

      {/* Vinyl Record & Track Info */}
      <div className="my-5 flex flex-col sm:flex-row items-center gap-5">
        {/* Animated Vinyl Disc */}
        <div className="relative group flex-shrink-0 cursor-pointer" onClick={togglePlay}>
          <div
            className={`w-24 h-24 rounded-full bg-gradient-to-tr from-neutral-900 via-neutral-800 to-neutral-950 border-4 border-neutral-800 shadow-2xl flex items-center justify-center relative overflow-hidden transition-transform duration-500 ${
              isPlaying ? "animate-spin-slow scale-105 shadow-purple-500/20" : ""
            }`}
          >
            {/* Vinyl Grooves */}
            <div className="absolute inset-2 rounded-full border border-neutral-700/40 pointer-events-none" />
            <div className="absolute inset-4 rounded-full border border-neutral-700/30 pointer-events-none" />
            <div className="absolute inset-6 rounded-full border border-neutral-700/20 pointer-events-none" />

            {/* Center Label */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center z-10 shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-black border border-white/40" />
            </div>
          </div>

          {/* Center Play/Pause Overlay */}
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-xl">
              {isPlaying ? "⏸" : "▶"}
            </span>
          </div>
        </div>

        {/* Song Details */}
        <div className="flex-1 text-center sm:text-left">
          <h4 className="text-white font-bold text-lg leading-tight line-clamp-1">
            {track.title}
          </h4>
          <p className="text-gray-400 text-xs mt-1">
            By <span className="text-purple-300 font-medium">{track.composer}</span>
          </p>

          {/* Animated Waveform Equalizer */}
          <div className="flex items-center justify-center sm:justify-start gap-1 mt-3.5 h-6">
            {[40, 70, 30, 90, 50, 80, 45, 65, 95, 35].map((h, i) => (
              <span
                key={i}
                className={`w-1 rounded-full bg-gradient-to-t from-purple-500 to-indigo-400 transition-all duration-300 ${
                  isPlaying ? "bento-sound-bar" : "h-1 opacity-40"
                }`}
                style={{
                  height: isPlaying ? `${Math.max(20, (h * (i % 3 + 1)) % 100)}%` : "4px",
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Track Selector Controls */}
      <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Track Selection</span>
          <button
            onClick={togglePlay}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all shadow-lg shadow-purple-600/30 text-xs"
          >
            {isPlaying ? (
              <>
                <span>⏸</span> Pause
              </>
            ) : (
              <>
                <span>▶</span> Play Sample
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-1.5 mt-1">
          {pianoTracks.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => changeTrack(idx)}
              className={`px-2 py-1.5 rounded-md text-[11px] font-medium text-left truncate transition-all ${
                idx === currentTrackIndex
                  ? "bg-purple-500/20 text-purple-200 border border-purple-500/40"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-transparent"
              }`}
            >
              #{idx + 1} {t.title.split("(")[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PianoPlayer;
