import React, { useRef, useEffect } from "react";

const MusicVisualizer = ({ isPlaying, trackIndex }) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const stateRef = useRef({
    rotation: 0,
    targetRotationSpeed: 0,
    currentRotationSpeed: 0,
    particles: [],
    barHeights: Array(30).fill(5),
    wavePhase: 0,
    pulseIntensity: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize handler
    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = 280 * dpr; // fixed height matching container
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `280px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const state = stateRef.current;
    state.particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * 400,
      y: Math.random() * 280,
      size: Math.random() * 2 + 1,
      speedY: Math.random() * 0.8 + 0.2,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? "rgba(168, 85, 247, 0.4)" : "rgba(99, 102, 241, 0.4)", // purple / indigo
    }));

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Update logic and render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      const state = stateRef.current;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Background Gradient
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height) / 1.5
      );
      bgGrad.addColorStop(0, "#19102b"); // Deep violet
      bgGrad.addColorStop(0.5, "#0b0617"); // Dark purple
      bgGrad.addColorStop(1, "#050308"); // Near black
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw Ambient Glowing Orbs
      const glowGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        100 + state.pulseIntensity * 15
      );
      glowGrad.addColorStop(0, "rgba(139, 92, 246, 0.15)");
      glowGrad.addColorStop(0.6, "rgba(99, 102, 241, 0.05)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 120 + state.pulseIntensity * 15, 0, Math.PI * 2);
      ctx.fill();

      // 3. Update physics state
      if (isPlaying) {
        state.targetRotationSpeed = 0.015;
        state.pulseIntensity = state.pulseIntensity * 0.9 + 1.0 * 0.1; // Smooth pulse transition
        state.wavePhase += 0.06;
      } else {
        state.targetRotationSpeed = 0;
        state.pulseIntensity = state.pulseIntensity * 0.95;
        state.wavePhase += 0.005; // very slow drift when paused
      }

      // Smooth rotation acceleration/deceleration
      state.currentRotationSpeed =
        state.currentRotationSpeed * 0.95 + state.targetRotationSpeed * 0.05;
      state.rotation += state.currentRotationSpeed;

      // 4. Update and Draw Particles
      state.particles.forEach((p) => {
        p.y -= p.speedY * (isPlaying ? 1.8 : 0.6);
        // Reset particle if it leaves the top of the canvas
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.opacity = Math.random() * 0.5 + 0.1;
        }

        // Horizontal drift
        p.x += Math.sin(state.wavePhase + p.y * 0.05) * 0.15;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (isPlaying ? 1.3 : 1.0), 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0; // Reset opacity

      // 5. Draw Glowing Audio Visualizer Waves (Background layer behind vinyl)
      const numPoints = 120;
      const center = { x: width / 2, y: height / 2 };
      const vinylRadius = 55;

      ctx.save();
      // Wave 1: Indigo Wave
      ctx.shadowBlur = 12 + state.pulseIntensity * 6;
      ctx.shadowColor = "rgba(99, 102, 241, 0.6)";
      ctx.strokeStyle = "rgba(99, 102, 241, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i <= numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        // Modulate radius based on angle, trackIndex, and state
        const waveOffset =
          Math.sin(angle * 6 + state.wavePhase * 1.5 + trackIndex) *
            (isPlaying ? 8 : 1.5) +
          Math.cos(angle * 12 - state.wavePhase * 0.8) * (isPlaying ? 5 : 0.8);
        const radius = vinylRadius + 14 + waveOffset;
        const x = center.x + Math.cos(angle) * radius;
        const y = center.y + Math.sin(angle) * radius;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Wave 2: Purple Neon Wave (offset and different frequency)
      ctx.shadowColor = "rgba(168, 85, 247, 0.6)";
      ctx.strokeStyle = "rgba(168, 85, 247, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let i = 0; i <= numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const waveOffset =
          Math.sin(angle * 8 - state.wavePhase * 1.2 + trackIndex * 2) *
            (isPlaying ? 7 : 1.2) +
          Math.cos(angle * 4 + state.wavePhase * 1.1) * (isPlaying ? 6 : 0.5);
        const radius = vinylRadius + 10 + waveOffset;
        const x = center.x + Math.cos(angle) * radius;
        const y = center.y + Math.sin(angle) * radius;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // 6. Draw Equalizer Bars (Left & Right margins)
      const barCount = 18;
      const barWidth = 3;
      const barGap = 4;
      const startXLeft = 24;
      const startXRight = width - 24 - (barCount * (barWidth + barGap));

      // Draw equalizer bars left & right
      const drawEqualizer = (startX, isRight) => {
        ctx.save();
        ctx.shadowBlur = 8;
        for (let i = 0; i < barCount; i++) {
          const index = isRight ? barCount - 1 - i : i;
          let targetHeight = 5;
          if (isPlaying) {
            const freq = Math.sin(state.wavePhase + index * 0.4) * 0.5 + 0.5;
            const noise = Math.random() * 12;
            targetHeight = 8 + freq * 28 + noise;
          } else {
            targetHeight = 4 + Math.sin(state.wavePhase * 0.5 + index * 0.3) * 2;
          }

          state.barHeights[index] = state.barHeights[index] * 0.7 + targetHeight * 0.3;
          const currentHeight = state.barHeights[index];

          const x = startX + i * (barWidth + barGap);
          const y = height - 20 - currentHeight;

          const barGrad = ctx.createLinearGradient(x, height - 20, x, y);
          barGrad.addColorStop(0, "rgba(99, 102, 241, 0.8)");
          barGrad.addColorStop(1, "rgba(168, 85, 247, 0.9)");

          ctx.fillStyle = barGrad;
          ctx.shadowColor = "rgba(168, 85, 247, 0.4)";
          ctx.beginPath();
          ctx.roundRect(x, y, barWidth, currentHeight, [1.5, 1.5, 0, 0]);
          ctx.fill();
        }
        ctx.restore();
      };

      drawEqualizer(startXLeft, false);
      drawEqualizer(startXRight, true);

      // 7. Draw Vinyl Record
      ctx.save();
      ctx.translate(center.x, center.y);
      ctx.rotate(state.rotation);

      ctx.shadowBlur = 20;
      ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
      
      ctx.fillStyle = "#0c0a0f";
      ctx.beginPath();
      ctx.arc(0, 0, vinylRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.translate(center.x, center.y);
      ctx.rotate(state.rotation);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.lineWidth = 0.8;
      for (let r = 20; r < vinylRadius - 2; r += 5) {
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, vinylRadius - 0.5, 0, Math.PI * 2);
      ctx.stroke();

      const labelGrad = ctx.createLinearGradient(-15, -15, 15, 15);
      labelGrad.addColorStop(0, "#6366f1");
      labelGrad.addColorStop(1, "#a855f7");
      ctx.fillStyle = labelGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.font = "11px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("🎹", 0, 0);

      ctx.fillStyle = "#eab308";
      ctx.beginPath();
      ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "#ca8a04";
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
      ctx.stroke();

      const shinyGrad = ctx.createLinearGradient(-vinylRadius, -vinylRadius, vinylRadius, vinylRadius);
      shinyGrad.addColorStop(0, "rgba(255, 255, 255, 0.0)");
      shinyGrad.addColorStop(0.48, "rgba(255, 255, 255, 0.0)");
      shinyGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.15)");
      shinyGrad.addColorStop(0.52, "rgba(255, 255, 255, 0.0)");
      shinyGrad.addColorStop(1, "rgba(255, 255, 255, 0.0)");

      ctx.fillStyle = shinyGrad;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, vinylRadius, -Math.PI / 6, Math.PI / 6);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, vinylRadius, Math.PI - Math.PI / 6, Math.PI + Math.PI / 6);
      ctx.closePath();
      ctx.fill();

      ctx.restore();

      // 8. HUD Overlay elements
      ctx.save();
      ctx.strokeStyle = "rgba(139, 92, 246, 0.15)";
      ctx.lineWidth = 1.0;
      const bracketSize = 10;
      const offset = 12;

      ctx.beginPath();
      ctx.moveTo(offset, offset + bracketSize);
      ctx.lineTo(offset, offset);
      ctx.lineTo(offset + bracketSize, offset);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(width - offset, offset + bracketSize);
      ctx.lineTo(width - offset, offset);
      ctx.lineTo(width - offset - bracketSize, offset);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(offset, height - offset - bracketSize);
      ctx.lineTo(offset, height - offset);
      ctx.lineTo(offset + bracketSize, height - offset);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(width - offset, height - offset - bracketSize);
      ctx.lineTo(width - offset, height - offset);
      ctx.lineTo(width - offset - bracketSize, height - offset);
      ctx.stroke();

      ctx.fillStyle = "rgba(156, 163, 175, 0.6)";
      ctx.font = "bold 9px monospace";
      ctx.fillText(
        isPlaying ? "• ANALYZER ACTIVE" : "▪ ANALYZER STANDBY",
        offset + 4,
        offset + 22
      );

      ctx.fillText(
        `FREQ: ${isPlaying ? "DYNAMIC" : "STATIC_BREATH"}`,
        width - offset - 100,
        offset + 22
      );

      ctx.restore();

      requestRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isPlaying, trackIndex]);

  return (
    <div className="relative w-full h-[280px] bg-gradient-to-b from-[#1c1033] via-[#0d071a] to-[#06030b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out pointer-events-none bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] ${
          isPlaying ? "opacity-100" : "opacity-40"
        }`}
      />
      <canvas ref={canvasRef} className="block w-full h-[280px] z-10" />
    </div>
  );
};

export default MusicVisualizer;
