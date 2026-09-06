"use client";

import { ComponentType } from "react";
import {
  Wifi,
  Zap,
  ThermometerSnowflake,
  Droplets,
  Utensils,
  Bath,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { AMENITIES } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  wifi: Wifi,
  power: Zap,
  ac: ThermometerSnowflake,
  water: Droplets,
  eating: Utensils,      // <-- Added
  restrooms: Bath,       // <-- Added
  cleaning: Sparkles,    // <-- Added
};

export function Amenities() {
  return (
    <section id="amenities" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-gold">Amenities</span>
          <h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
            Everyday essentials, already in place.
          </h2>
        </Reveal>

        <Stagger
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          stagger={0.07}
        >
          {AMENITIES.map((a) => {
            const Icon = ICONS[a.id];
            // Fallback icon if somehow still undefined
            if (!Icon) return null;
            return (
              <StaggerItem key={a.id}>
                <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-gold-hair/25 bg-charcoal/40 p-6 transition-all duration-500 hover:border-gold-bright/60 hover:bg-charcoal/70">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-hair/40 bg-ink/60 transition-all duration-500 group-hover:border-gold-bright group-hover:shadow-gold-sm">
                    <Icon className="h-5 w-5 text-gold-bright transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-cream">{a.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone">{a.detail}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}