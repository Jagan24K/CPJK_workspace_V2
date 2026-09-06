"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { HOW_IT_WORKS } from "@/lib/data";

export function HowItWorks() {
  return (
    <section className="relative bg-charcoal/30 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-gold">
            How It Works
          </span>
          <h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
            From enquiry to move-in.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gold-hair/25 sm:block lg:left-0 lg:top-[19px] lg:h-px lg:w-full">
            <motion.div
              initial={{ scaleY: 0, scaleX: 0 }}
              whileInView={{ scaleY: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: "top left" }}
              className="h-full w-full origin-left bg-gradient-to-r from-gold-bright via-gold to-transparent lg:origin-top"
            />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-5 lg:gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.12} direction="up">
                <div className="relative flex gap-5 lg:flex-col lg:gap-0">
                  <div className="relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border border-gold-bright bg-ink font-display text-sm text-gold-bright shadow-gold-sm">
                    {step.step}
                  </div>
                  <div className="lg:mt-6">
                    <h3 className="font-display text-xl text-cream">{step.title}</h3>
                    <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-stone-light">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
