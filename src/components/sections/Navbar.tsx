"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "@/data/mockData";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for active section
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl transition-all duration-300",
          scrolled
            ? "bg-[#080D1A]/90 backdrop-blur-xl border border-white/[0.08] shadow-2xl rounded-2xl"
            : "bg-[#080D1A]/70 backdrop-blur-lg border border-white/[0.05] rounded-2xl"
        )}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#inicio")}
            className="flex items-center gap-3 group"
            aria-label="Casa Matos - Início"
          >
            {/* Geometric logo mark */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                {/* House shape */}
                <polygon
                  points="20,4 36,18 36,38 4,38 4,18"
                  fill="none"
                  stroke="#0E3B82"
                  strokeWidth="2"
                />
                {/* Roof accent */}
                <polygon
                  points="20,4 36,18 4,18"
                  fill="#EAA023"
                  opacity="0.9"
                />
                {/* Inner detail */}
                <rect x="15" y="24" width="10" height="14" fill="#0E3B82" opacity="0.8" rx="1" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-[0.12em] uppercase">
                <span className="text-[#EAA023]">CASA</span>{" "}
                <span className="text-[#3b82f6]">MATOS</span>
              </span>
              <span className="text-[9px] font-medium tracking-[0.2em] text-[#94A3B8] uppercase">
                EMPREITEIRA
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200",
                    isActive
                      ? "text-[#EAA023]"
                      : "text-[#94A3B8] hover:text-[#F8FAFC]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-[#EAA023]/10 rounded-xl border border-[#EAA023]/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EAA023] text-[#080D1A] text-sm font-bold tracking-wide hover:bg-[#F59E0B] transition-colors duration-200 shadow-lg shadow-[#EAA023]/20"
              id="nav-cta"
            >
              <MessageCircle size={15} className="flex-shrink-0" />
              Pedir Orçamento
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/5 transition-colors"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            id="mobile-menu-toggle"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.8 }}
              className="overflow-hidden lg:hidden border-t border-white/[0.06]"
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all",
                        isActive
                          ? "bg-[#EAA023]/10 text-[#EAA023] border border-[#EAA023]/20"
                          : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </button>
                  );
                })}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#EAA023] text-[#080D1A] text-sm font-bold"
                  id="mobile-nav-cta"
                >
                  <MessageCircle size={16} />
                  Pedir Orçamento
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
