"use client";
import { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { tokens } from "@/components/tokens";

export function EnergyBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const [played, setPlayed] = useState(false);
  const pct = useMemo(() => Math.round((7 / 30) * 100), []);

  return (
    <div ref={ref} className="w-full max-w-2xl">
      <div className="mb-3 flex items-baseline justify-between">
        <h3
          className="font-cinzel text-xl tracking-wide"
          style={{ color: tokens.text }}
        >
          Empire Energy
        </h3>
        <span className="text-sm" style={{ color: tokens.textDim }}>
          7 / 30
        </span>
      </div>
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          onAnimationStart={() => setPlayed(true)}
          initial={{ width: "0%" }}
          animate={
            inView && !played ? { width: `${pct}%` } : { width: `${pct}%` }
          }
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, rgba(209,166,84,0.25) 0%, ${tokens.gold} 60%, ${tokens.goldSoft} 100%)`,
            boxShadow: `0 0 14px 2px ${tokens.goldGlow}`,
          }}
        />
      </div>
    </div>
  );
}
