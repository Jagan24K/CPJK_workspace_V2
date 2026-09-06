"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A custom line-art elevation echoing the CPJK mark: three vertical
 * pillars rising from a blueprint-style base grid. Used as the hero's
 * signature visual instead of a stock photograph.
 */
export function ArchIllustration({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  const pillars = [
    { x: 40, w: 46, h: 230, delay: 0 },
    { x: 100, w: 58, h: 300, delay: 0.15 },
    { x: 172, w: 46, h: 250, delay: 0.3 },
  ];

  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pillarGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2C038" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B5811A" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="pillarLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#D9A526" stopOpacity="0" />
          <stop offset="50%" stopColor="#D9A526" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D9A526" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* blueprint base grid */}
      <g opacity="0.18" stroke="#D9A526" strokeWidth="0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`v${i}`} x1={20 + i * 45} y1="360" x2={20 + i * 45} y2="400" />
        ))}
        <line x1="10" y1="360" x2="410" y2="360" strokeWidth="1" opacity="0.6" />
      </g>

      {/* pillars, echoing the logo's three-pillar hexagon mark */}
      {pillars.map((p, i) => (
        <motion.g
          key={i}
          initial={reduced ? undefined : { opacity: 0, y: 40 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect
            x={p.x}
            y={360 - p.h}
            width={p.w}
            height={p.h}
            rx="3"
            fill="url(#pillarGrad)"
            stroke="#D9A526"
            strokeOpacity="0.55"
            strokeWidth="1"
          />
          {/* floor division lines within each pillar, like stacked room levels */}
          {Array.from({ length: Math.floor(p.h / 38) }).map((_, li) => (
            <line
              key={li}
              x1={p.x}
              x2={p.x + p.w}
              y1={360 - li * 38}
              y2={360 - li * 38}
              stroke="#0D0B08"
              strokeOpacity="0.35"
              strokeWidth="1"
            />
          ))}
        </motion.g>
      ))}

      {/* connecting measurement lines, like an architect's annotation */}
      <g stroke="url(#pillarLine)" strokeWidth="1">
        <line x1="40" y1="45" x2="218" y2="45" />
      </g>
      <circle cx="40" cy="45" r="2.5" fill="#F2C038" />
      <circle cx="218" cy="45" r="2.5" fill="#F2C038" />
    </svg>
  );
}
