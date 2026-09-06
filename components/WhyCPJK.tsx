"use client";

import { Reveal } from "./Reveal";
import { WHY_CPJK } from "@/lib/data";

export function WhyCPJK() {
  return (
    <section className="relative overflow-hidden bg-charcoal/30 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-gold">Why CPJK</span>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
            The practical case for choosing CPJK.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold-hair/50 to-transparent sm:block" />
          <div className="flex flex-col gap-4">
            {WHY_CPJK.map((item, i) => {
              const alignRight = i % 2 === 1;
              return (
                <Reveal
                  key={item.title}
                  direction={alignRight ? "right" : "left"}
                  className={`relative flex ${
                    alignRight ? "sm:justify-end" : "sm:justify-start"
                  }`}
                >
                  <div
                    className={`w-full py-8 sm:w-[46%] ${
                      alignRight ? "sm:text-right sm:pl-4" : "sm:pr-4"
                    }`}
                  >
                    <span className="font-display text-5xl text-gold-hair/60 sm:text-6xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 font-display text-2xl text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-light">
                      {item.body}
                    </p>
                  </div>
                  <span
                    className={`absolute top-11 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-gold-bright shadow-gold-sm sm:block ${
                      alignRight ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"
                    }`}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
