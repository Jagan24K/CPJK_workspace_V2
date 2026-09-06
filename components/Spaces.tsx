"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { SPACES } from "@/lib/data";

function SeatGrid({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-7 gap-1.5">
      {Array.from({ length: Math.min(count, 21) }).map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-gold-hair/70 transition-colors duration-500 group-hover:bg-gold-bright"
          style={{ transitionDelay: `${i * 18}ms` }}
        />
      ))}
    </div>
  );
}

export function Spaces() {
  return (
    <section id="spaces" className="relative bg-charcoal/30 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-gold">
            Available Spaces
          </span>
          <h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
            Six configurations. One building.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {SPACES.map((space) => (
            <StaggerItem key={space.id}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gold-hair/25 bg-ink/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-bright/70 hover:shadow-gold">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-gold/20"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex items-baseline justify-between">
                    <p className="font-display text-5xl text-cream">{space.seats}</p>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-stone">
                      {space.floor}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-stone-light">
                    {space.cabin ? "Seats + Private Cabin" : "Seats"}
                  </p>

                  <div className="mt-6">
                    <SeatGrid count={space.seats} />
                  </div>

                  <p className="mt-6 text-xs uppercase tracking-[0.14em] text-gold-hair">
                    {space.zone}
                  </p>
                </div>

                <div className="relative mt-8 flex items-center justify-between border-t border-gold-hair/20 pt-5">
                  <span className="text-sm text-stone-light transition-colors duration-300 group-hover:text-cream">
                    {space.title}
                  </span>
                  <a
                    href="#enquiry"
                    className="text-sm font-medium text-gold-bright transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
