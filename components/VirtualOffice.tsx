"use client";

import { Reveal } from "./Reveal";
import { GoldOrbs, ParticleField } from "./BackgroundFX";

export function VirtualOffice() {
  return (
    <section
      id="virtual-office"
      className="relative overflow-hidden bg-ink py-28 sm:py-36"
    >
      <GoldOrbs />
      <ParticleField count={20} />
      <div className="pointer-events-none absolute inset-0 border-y border-gold-hair/10" />

      <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-gold">
            Virtual Office
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
            A Vadapalani business address, without taking a seat.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 inline-flex flex-col items-center">
            <span className="text-sm uppercase tracking-[0.2em] text-stone">
              Starting from
            </span>
            <span className="mt-3 font-display text-7xl gold-text sm:text-8xl">
              ₹5,000
            </span>
            <span className="mt-2 text-sm text-stone-light">per month</span>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href="#enquiry"
            className="mt-14 inline-flex items-center gap-2 rounded-full bg-gold-sheen px-9 py-4 text-sm font-medium text-ink shadow-gold transition-transform duration-300 hover:scale-[1.04] active:scale-95"
          >
            Enquire About Virtual Office
          </a>
        </Reveal>
      </div>
    </section>
  );
}
