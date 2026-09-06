"use client";

export function AnimatedGrid({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern id="cpjk-grid" width="56" height="56" patternUnits="userSpaceOnUse">
          <path
            d="M 56 0 L 0 0 0 56"
            fill="none"
            stroke="#D9A526"
            strokeOpacity="0.08"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="grid-fade" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="grid-mask">
          <rect width="100%" height="100%" fill="url(#grid-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#cpjk-grid)" mask="url(#grid-mask)" />
    </svg>
  );
}

export function GoldOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-gold/20 blur-[110px] animate-drift" />
      <div
        className="absolute bottom-0 left-[6%] h-80 w-80 rounded-full bg-gold-bright/10 blur-[130px] animate-drift"
        style={{ animationDelay: "-3s" }}
      />
    </div>
  );
}

export function ParticleField({ count = 14 }: { count?: number }) {
  const particles = Array.from({ length: count }).map((_, i) => ({
    left: (i * 137.5) % 100,
    top: (i * 71.3) % 100,
    size: 1 + (i % 3),
    delay: (i % 7) * 0.6,
    duration: 6 + (i % 5),
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-gold-bright/70 motion-safe:animate-drift"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: "0 0 6px 1px rgba(242,192,56,0.6)",
          }}
        />
      ))}
    </div>
  );
}
