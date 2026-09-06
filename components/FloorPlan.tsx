"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { FLOOR_ROOMS, FloorRoom } from "@/lib/data";

type Floor = "ground" | "second";

const AREA_MAP: Record<string, string> = {
  // Ground floor
  "g-entry": "entry",
  "g-parking": "parking",
  "g-main": "main",
  "g-eating": "eating",
  "g-water": "water",      // <-- Added purified water
  "g-mens": "mens",
  "g-womens": "womens",
  // Second floor
  "s-front-8": "front8",
  "s-front-7": "front7",
  "s-center-main": "center",
  "s-rear-10a": "rear10a",
  "s-rear-10b": "rear10b",
};

const GRID_TEMPLATE: Record<Floor, string> = {
  ground: `
    "entry   parking  main"
    "eating  water    main"
    "mens    womens   main"
  `,
  second: `
    "front8  front7"
    "center  center"
    "rear10a rear10b"
  `,
};

const GRID_COLS: Record<Floor, string> = {
  ground: "0.8fr 0.8fr 2.4fr",   // main takes much more width
  second: "1fr 1fr",
};

function RoomLabel({ room }: { room: FloorRoom }) {
  // Special case: cabin-inside rooms show "Private Cabin" only
  if (room.id === "g-cabin-inside" || room.id === "s-center-cabin") {
    return (
      <>
        <p className="text-[10px] uppercase tracking-[0.14em] text-gold-bright/80 sm:text-[11px]">
          Private
        </p>
        <p className="text-[10px] uppercase tracking-[0.14em] text-gold-bright/80 sm:text-[11px]">
          Cabin
        </p>
      </>
    );
  }
  // Regular rooms with seats show seat count
  if (room.seats) {
    return (
      <>
        <p className="font-display text-xl text-cream sm:text-3xl">{room.seats}</p>
        <p className="text-[9px] uppercase tracking-[0.12em] text-stone sm:text-[11px]">
          seats
        </p>
      </>
    );
  }
  // Rooms without seats (like entry, parking, restrooms) show their name
  return (
    <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-stone-light sm:text-xs">
      {room.name}
    </p>
  );
}

export function FloorPlan() {
  const [floor, setFloor] = useState<Floor>("ground");
  const [activeId, setActiveId] = useState<string | null>(null);

  const rooms = useMemo(
    () => FLOOR_ROOMS.filter((r) => r.floor === floor),
    [floor]
  );
  const activeRoom = FLOOR_ROOMS.find((r) => r.id === activeId) ?? null;

  // Helper to find the cabin room for a given main room id
  const getCabinRoom = (mainId: string) => {
    if (mainId === "g-main") return FLOOR_ROOMS.find((r) => r.id === "g-cabin-inside");
    if (mainId === "s-center-main") return FLOOR_ROOMS.find((r) => r.id === "s-center-cabin");
    return null;
  };

  return (
    <section id="floor-plan" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-gold">
              Interactive Floor Plan
            </span>
            <h2 className="mt-5 max-w-lg font-display text-4xl leading-[1.05] text-cream sm:text-5xl">
              Two floors, laid out room by room.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex rounded-full border border-gold-hair/40 bg-charcoal/50 p-1">
              {(["ground", "second"] as Floor[]).map((f) => (
                <button
                  key={f}
                  onClick={() => {
                    setFloor(f);
                    setActiveId(null);
                  }}
                  className={`relative rounded-full px-5 py-2 text-sm transition-colors duration-300 ${floor === f ? "text-ink" : "text-stone-light hover:text-cream"
                    }`}
                >
                  {floor === f && (
                    <motion.span
                      layoutId="floor-pill"
                      className="absolute inset-0 rounded-full bg-gold-sheen"
                      transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
                    />
                  )}
                  <span className="relative">
                    {f === "ground" ? "Ground Floor" : "2nd Floor"}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal direction="up" className="lg:col-span-8" delay={0.15}>
            <div className="relative rounded-[2rem] border border-gold-hair/25 bg-charcoal/40 p-4 sm:p-6">
              <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-dashed border-gold-hair/25 sm:inset-6" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={floor}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid gap-2.5 p-1 sm:gap-3"
                  style={{
                    gridTemplateAreas: GRID_TEMPLATE[floor],
                    gridTemplateColumns: GRID_COLS[floor],
                    gridTemplateRows: floor === "ground" ? "1fr 1fr 1fr" : "1fr 1.4fr 1fr",
                    minHeight: 360,
                  }}
                >
                  {rooms.map((room) => {
                    const area = AREA_MAP[room.id];
                    const isActive = activeId === room.id;

                    // Check if this room is a main room that contains a cabin
                    const isMainWithCabin = room.id === "g-main" || room.id === "s-center-main";
                    const cabinRoom = isMainWithCabin ? getCabinRoom(room.id) : null;

                    // Special styling for main rooms (larger, more prominent)
                    const isMainRoom = room.id === "g-main" || room.id === "s-center-main";

                    return (
                      <button
                        key={room.id}
                        style={{ gridArea: area }}
                        onMouseEnter={() => setActiveId(room.id)}
                        onFocus={() => setActiveId(room.id)}
                        onClick={() => setActiveId(room.id)}
                        className={`group relative flex flex-col items-center justify-center gap-0.5 rounded-xl border px-3 py-3 text-center transition-all duration-300 ${isMainRoom ? "border-gold-hair/30" : "border-gold-hair/20"
                          } ${isActive
                            ? "border-gold-bright bg-gold/10 shadow-gold-sm"
                            : "bg-ink/50 hover:border-gold-bright/60 hover:bg-gold/5"
                          }`}
                      >
                        {/* Room label */}
                        <RoomLabel room={room} />

                        {/* Nested Private Cabin button – only for main rooms */}
                        {isMainWithCabin && cabinRoom && (
                          <button
                            onMouseEnter={(e) => {
                              e.stopPropagation();
                              setActiveId(cabinRoom.id);
                            }}
                            onFocus={() => setActiveId(cabinRoom.id)}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveId(cabinRoom.id);
                            }}
                            className="absolute bottom-2 right-2 rounded-lg border border-gold-hair/60 bg-ink/95 px-2.5 py-1.5 text-[8px] font-medium uppercase tracking-widest text-cream transition-all hover:border-gold-bright hover:bg-gold/10 sm:bottom-3 sm:right-3 sm:px-3 sm:py-1.5 sm:text-[10px]"
                          >
                            Private Cabin
                          </button>
                        )}

                        {/* Active glow ring */}
                        <span
                          className={`pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"
                            }`}
                          style={{
                            boxShadow:
                              "inset 0 0 0 1px rgba(242,192,56,0.5), 0 0 24px -6px rgba(242,192,56,0.5)",
                          }}
                        />
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal direction="left" className="lg:col-span-4" delay={0.25}>
            <div className="relative h-full min-h-[280px] rounded-[2rem] border border-gold-hair/25 bg-charcoal/50 p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                {floor === "ground" ? "Ground Floor" : "2nd Floor"}
              </p>
              <AnimatePresence mode="wait">
                {activeRoom ? (
                  <motion.div
                    key={activeRoom.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <h3 className="font-display text-2xl text-cream">
                      {activeRoom.name}
                    </h3>
                    {activeRoom.zone && (
                      <p className="mt-1 text-sm text-stone">{activeRoom.zone}</p>
                    )}
                    {activeRoom.seats && (
                      <p className="mt-6 font-display text-5xl text-gold-bright">
                        {activeRoom.seats}
                        <span className="ml-2 font-sans text-sm font-normal text-stone">
                          seats
                        </span>
                      </p>
                    )}
                    {activeRoom.cabin && activeRoom.id !== "g-cabin-inside" && activeRoom.id !== "s-center-cabin" && (
                      <p className="mt-6 text-sm leading-relaxed text-stone-light">
                        Includes a private cabin inside.
                      </p>
                    )}
                    {activeRoom.tag && (
                      <p className="mt-6 text-sm leading-relaxed text-stone-light">
                        {activeRoom.tag}
                      </p>
                    )}
                    <a
                      href="#enquiry"
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold-hair/50 px-5 py-2.5 text-sm text-cream transition-colors duration-300 hover:border-gold-bright hover:text-gold-bright"
                    >
                      Enquire about this space
                    </a>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4"
                  >
                    <h3 className="font-display text-2xl text-cream">
                      Hover or tap a room
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone-light">
                      Select any room in the floor plan to see its seat count
                      and details.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}