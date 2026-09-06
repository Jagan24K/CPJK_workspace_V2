"use client";

import { MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { BRAND } from "@/lib/data";

export function Location() {
  return (
    <section id="location" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal direction="left">
              <span className="text-xs uppercase tracking-[0.2em] text-gold">
                Location
              </span>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
                {BRAND.name}
              </h2>
              <p className="mt-3 flex items-center gap-2 text-lg text-stone-light">
                <MapPin className="h-5 w-5 text-gold-bright" strokeWidth={1.5} />
                {BRAND.locality}, {BRAND.city}
              </p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone-light">
                Positioned in Vadapalani, one of Chennai&rsquo;s well-connected
                commercial neighbourhoods — straightforward to reach for a
                daily commute, and easy to find for visitors.
              </p>
              <a
                href="#enquiry"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-hair/50 px-6 py-3 text-sm text-cream transition-colors duration-300 hover:border-gold-bright hover:text-gold-bright"
              >
                Book a Visit
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="right" delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-gold-hair/30 bg-charcoal/50 p-2 shadow-card sm:p-3">
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_60px_rgba(217,165,38,0.08)]" />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.6rem] sm:aspect-[16/10]">
                  <iframe
                    title="CPJK Workspace location — Vadapalani, Chennai"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.821814885992!2d80.21196379999999!3d13.047011299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267342905d699:0xbb5548650b48c4c5!2sCPJK%20Workspace%20(SSK)!5e0!3m2!1sen!2sin!4v1788702406706!5m2!1sen!2sin"
                    className="h-full w-full grayscale-[15%] contrast-[1.05] saturate-[0.85]"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
