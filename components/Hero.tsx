"use client";

import { motion } from "framer-motion";
import { ArchIllustration } from "./ArchIllustration";
import { AnimatedGrid, GoldOrbs, ParticleField } from "./BackgroundFX";
import { Counter } from "./Counter";
import { HERO_STATS, BRAND } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-ink pt-32 pb-20 grain"
    >
      <AnimatedGrid />
      <GoldOrbs />
      <ParticleField />

      {/* faint oversized backdrop wordmark for depth */}
      <div
        className="pointer-events-none absolute -bottom-16 left-0 right-0 select-none text-center font-display text-[22vw] leading-none text-cream/[0.025]"
        aria-hidden="true"
      >
        CPJK
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold-hair/50 bg-charcoal/60 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-gold-bright" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-bright" />
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-stone-light">
              {BRAND.locality}, {BRAND.city}
            </span>
          </motion.div>

          <h1 className="font-display text-balance text-[13vw] leading-[0.98] text-cream sm:text-6xl lg:text-[4.6rem] xl:text-[5rem]">
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.1 }}
              className="block"
            >
              Professional workspace
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.24 }}
              className="block italic font-light gold-text"
            >
              for teams that are
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease, delay: 0.38 }}
              className="block"
            >
              ready to grow.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
            className="mt-8 max-w-md text-base leading-relaxed text-stone-light sm:text-lg"
          >
            CPJK Workspace offers professional workspace across two floors in
            Vadapalani, Chennai — arranged so a team can find the right
            configuration today, and more room tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.68 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#enquiry"
              className="group inline-flex items-center gap-2 rounded-full bg-gold-sheen px-7 py-3.5 text-sm font-medium text-ink shadow-gold transition-transform duration-300 hover:scale-[1.04] active:scale-95"
            >
              Book a Visit
            </a>
            <a
              href="#spaces"
              className="inline-flex items-center gap-2 rounded-full border border-gold-hair/60 px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-300 hover:border-gold-bright hover:text-gold-bright"
            >
              Explore Spaces
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.85 }}
            className="mt-16 grid max-w-lg grid-cols-3 gap-x-6 gap-y-8 border-t border-gold-hair/25 pt-8"
          >
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  className="font-display text-3xl text-gold-bright sm:text-4xl"
                />
                <p className="mt-1 text-xs leading-snug text-stone sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.3 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-gold-hair/30 bg-charcoal/40 backdrop-blur-sm" />
            <ArchIllustration className="relative h-full w-full p-8" />

            {/* floating info cards */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease }}
              className="absolute -left-6 top-10 rounded-2xl border border-gold-hair/40 bg-ink/80 px-4 py-3 shadow-card backdrop-blur-md sm:-left-10"
            >
              <p className="font-display text-xl text-gold-bright">Ground Floor</p>
              <p className="text-[11px] text-stone">14 seats + private cabin</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease }}
              className="absolute -right-4 bottom-16 rounded-2xl border border-gold-hair/40 bg-ink/80 px-4 py-3 shadow-card backdrop-blur-md sm:-right-8"
            >
              <p className="font-display text-xl text-gold-bright">First Floor</p>
              <p className="text-[11px] text-stone">Front · Center · Rear rooms</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-stone">Scroll</span>
        <span className="h-9 w-px bg-gradient-to-b from-gold-bright to-transparent" />
      </motion.div>
    </section>
  );
}
