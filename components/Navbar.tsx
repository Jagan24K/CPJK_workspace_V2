"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, BRAND } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean
    ) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2.5" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-500`}
        >
          <div
            className={`flex items-center justify-between rounded-full border transition-all duration-500 ${
              scrolled
                ? "border-gold-hair/40 bg-ink/70 backdrop-blur-xl px-4 py-2 shadow-card"
                : "border-transparent bg-transparent px-2 py-1"
            }`}
          >
            <a href="#top" className="flex items-center gap-3 group">
              <span
                className={`relative flex items-center justify-center rounded-full transition-all duration-500 ${
                  scrolled ? "h-9 w-9" : "h-11 w-11"
                }`}
              >
                <Image
                  src="/logo.png"
                  alt="CPJK Workspace"
                  fill
                  sizes="44px"
                  className="object-contain"
                  priority
                />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-cream text-[15px] sm:text-base tracking-wide">
                  CPJK
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-stone">
                  Workspace
                </span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm transition-colors duration-300 ${
                    active === link.href
                      ? "text-gold-bright"
                      : "text-stone-light hover:text-cream"
                  }`}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-0.5 h-px bg-gold-bright"
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#enquiry"
                className="hidden md:inline-flex items-center rounded-full bg-gold-sheen px-5 py-2 text-sm font-medium text-ink shadow-gold-sm transition-transform duration-300 hover:scale-[1.04] active:scale-95"
              >
                Enquire Now
              </a>
              <button
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden relative h-10 w-10 flex flex-col items-center justify-center gap-1.5 rounded-full border border-gold-hair/50"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block h-px w-5 bg-cream"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-px w-5 bg-cream"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block h-px w-5 bg-cream"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
              }}
              className="flex h-full flex-col items-start justify-center gap-2 px-10"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="font-display text-4xl text-cream py-3 border-b border-gold-hair/20 w-full flex items-baseline justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-stone font-sans">0{i + 1}</span>
                </motion.a>
              ))}
              <motion.a
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                href="#enquiry"
                onClick={() => setMenuOpen(false)}
                className="mt-8 inline-flex items-center rounded-full bg-gold-sheen px-7 py-3 text-base font-medium text-ink shadow-gold"
              >
                Enquire Now
              </motion.a>
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="mt-10 text-xs uppercase tracking-[0.2em] text-stone"
              >
                {BRAND.locality}, {BRAND.city}
              </motion.p>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
