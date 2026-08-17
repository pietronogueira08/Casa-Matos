"use client";

import { useRef, useState, useCallback, MouseEvent } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

const BEFORE_IMAGE = "/luxury_bathroom_before_1786984413582.jpg";
const AFTER_IMAGE = "/luxury_bathroom_after_1786984385798.jpg";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(48);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPosition(x);
  }, []);

  const handleMouseDown = useCallback(() => {
    isDragging.current = true;
    const handleMove = (e: globalThis.MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    };
    const handleUp = () => {
      isDragging.current = false;
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
  }, [updatePosition]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (isDragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );

  return (
    <section className="py-28 md:py-36 bg-[#0C1322] border-y border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-[#EAA023]">
            Transformação Real
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Antes & Depois
          </h2>
          <p className="mt-4 text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
            Arraste o divisor e veja a transformação completa realizada pela Casa Matos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl select-none cursor-col-resize"
          style={{ aspectRatio: "16/9" }}
          aria-label="Slider antes e depois"
        >
          {/* AFTER (base layer — full width) */}
          <div className="absolute inset-0">
            <img
              src={AFTER_IMAGE}
              alt="Depois — obra finalizada pela Casa Matos"
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-[#EAA023]/90 backdrop-blur-sm">
              <span className="text-xs font-bold text-[#080D1A] tracking-wide uppercase">Depois</span>
            </div>
          </div>

          {/* BEFORE (clipped layer) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <img
              src={BEFORE_IMAGE}
              alt="Antes — estado anterior da obra"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: `${(100 / position) * 100}%` }}
              draggable="false"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-white/10">
              <span className="text-xs font-bold text-[#F8FAFC] tracking-wide uppercase">Antes</span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          >
            {/* Line */}
            <div className="absolute top-0 bottom-0 w-[2px] bg-white/80 shadow-lg" />
            {/* Handle */}
            <div
              onMouseDown={handleMouseDown}
              onTouchStart={() => { isDragging.current = true; }}
              onTouchEnd={() => { isDragging.current = false; }}
              className="relative z-30 w-10 h-10 rounded-full bg-white shadow-2xl flex items-center justify-center border-2 border-[#EAA023] hover:scale-110 transition-transform duration-150"
            >
              <GripVertical size={16} className="text-[#EAA023]" />
            </div>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-xs text-[#94A3B8] font-medium tracking-wide">
          Arraste o controle para comparar ← →
        </p>
      </div>
    </section>
  );
}
