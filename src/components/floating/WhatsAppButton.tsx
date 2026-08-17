"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_URL } from "@/data/mockData";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show after 2s
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // Show tooltip after button appears
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setShowTooltip(true), 800);
    const t2 = setTimeout(() => setShowTooltip(false), 5000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative bg-[#0C1322] border border-white/[0.12] rounded-2xl px-4 py-3 max-w-[240px] shadow-2xl"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 text-[#94A3B8] hover:text-white transition-colors"
                  aria-label="Fechar"
                >
                  <X size={12} />
                </button>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="text-[11px] font-semibold text-green-400 tracking-wide">Online agora</span>
                </div>
                <p className="text-xs text-[#F8FAFC] leading-relaxed font-medium">
                  Fale com <span className="text-[#EAA023]">Marcelo Matos</span> e solicite seu orçamento!
                </p>
                {/* Arrow */}
                <div className="absolute -bottom-2 right-5 w-4 h-2 overflow-hidden">
                  <div className="w-3 h-3 bg-[#0C1322] border-r border-b border-white/[0.12] rotate-45 transform origin-top-left translate-x-0.5" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
            id="floating-whatsapp"
            aria-label="Falar no WhatsApp com Marcelo Matos"
            className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-[#25D366]/30"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <span className="absolute inset-[-4px] rounded-full border-2 border-[#25D366]/30 animate-pulse" />
            <MessageCircle size={26} className="text-white relative z-10" fill="white" />

            {/* Online badge */}
            <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-green-400 border-2 border-[#080D1A] shadow" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
