"use client";

import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { AnimatedGrid } from "./BackgroundFX";
import { OVERVIEW_STATS } from "@/lib/data";

export function Overview() {
  return (
    <section className="relative overflow-hidden border-y border-gold-hair/15 bg-charcoal/40 py-24">
      <AnimatedGrid />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,165,38,0.06),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.2em] text-gold">
            Workspace Overview
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {OVERVIEW_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="relative border-r border-gold-hair/15 pr-4 text-center last:border-r-0 sm:pr-6">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-display text-5xl text-cream sm:text-6xl"
                />
                <p className="mt-3 text-sm text-stone-light">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}