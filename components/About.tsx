"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { ABOUT_POINTS } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Left: heading + copy */}
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <span className="text-xs uppercase tracking-[0.2em] text-gold">
                About CPJK
              </span>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
                Built for the way real teams actually work.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-stone-light">
                CPJK Workspace provides professional workspace solutions for
                individuals, teams and growing businesses in Vadapalani,
                Chennai. Two floors, six room configurations, and the
                everyday practicalities already worked out.
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-stone-light">
                Whether it's a small team taking its first dedicated room or a
                growing company that needs several, CPJK is arranged so the
                right fit is already there.
              </p>
            </Reveal>

            <Stagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.1}>
              {ABOUT_POINTS.map((point, i) => (
                <StaggerItem key={point.title} direction="up">
                  <div className="border-l border-gold-hair/40 pl-4">
                    <span className="font-display text-sm text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 text-cream">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone">
                      {point.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Right: animated blueprint / elevation visual */}
          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.1}>
              <BuildingBlueprint />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildingBlueprint() {
  const floors = [
    { label: "2nd Floor", rooms: ["Front · 8+7", "Center · 14+cabin", "Rear · 10+10"] },
    { label: "Ground Floor", rooms: ["Main · 14 seats", "Private cabin", "Eating area"] },
  ];

  return (
    <div className="relative rounded-[2rem] border border-gold-hair/25 bg-charcoal/50 p-6 sm:p-10">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(217,165,38,0.08),transparent_60%)]" />
      <div className="relative flex flex-col gap-6">
        {floors.map((floor, fi) => (
          <div key={floor.label}>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-display text-lg text-gold-bright">
                {floor.label}
              </span>
              <span className="h-px flex-1 rule-gold" />
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {floor.rooms.map((room, ri) => (
                <div
                  key={room}
                  className="group relative overflow-hidden rounded-xl border border-gold-hair/30 bg-ink/60 px-4 py-6 transition-all duration-500 hover:border-gold-bright/70 hover:shadow-gold-sm"
                >
                  <div className="absolute -right-4 -top-4 h-14 w-14 rounded-full bg-gold/10 blur-xl transition-all duration-500 group-hover:bg-gold/25" />
                  <p className="relative text-sm text-cream">{room}</p>
                  <div className="relative mt-4 flex gap-1">
                    {Array.from({ length: 6 }).map((_, si) => (
                      <span
                        key={si}
                        className="h-1.5 w-1.5 rounded-full bg-gold-hair/60 transition-colors duration-300 group-hover:bg-gold-bright"
                        style={{ transitionDelay: `${si * 40}ms` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {fi === 0 && (
              <div className="my-6 flex items-center gap-2 text-stone">
                <span className="h-px flex-1 bg-gold-hair/20" />
                <span className="text-[10px] uppercase tracking-[0.2em]">Staircase</span>
                <span className="h-px flex-1 bg-gold-hair/20" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
