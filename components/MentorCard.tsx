import React from "react";
import { motion } from "framer-motion";
import { sideFade, tokens } from "@/components/tokens";

export type Mentor = {
  name: string;
  title: string;
  src: string;
  fade: "left" | "right" | "both";
};

export function MentorCard({
  mentor,
  index,
}: {
  mentor: Mentor;
  index: number;
}) {
  const tiltSmall = index === 1 ? 1.5 : 2.5;
  return (
    <motion.a
      href="#status"
      tabIndex={0}
      aria-label={mentor.title}
      whileHover={{ rotateZ: index === 1 ? -tiltSmall : tiltSmall, y: -4 }}
      whileFocus={{ rotateZ: index === 1 ? -tiltSmall : tiltSmall, y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative isolate block overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    >
      <div
        className="relative h-[60vh] min-h-[18rem] w-full md:h-[72vh]"
        style={{
          WebkitMaskImage: sideFade(mentor.fade),
          maskImage: sideFade(mentor.fade),
        }}
      >
        <img
          src={mentor.src}
          alt={mentor.name}
          className="h-full w-full object-cover"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 80% at 50% 55%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex justify-center">
        <button
          className="inline-flex items-center gap-2 rounded-xl bg-green-600/80 hover:bg-green-700 px-4 py-2 text-white font-semibold tracking-wide transition-colors duration-300 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          onClick={(e) => e.preventDefault()}
        >
          {mentor.title}
        </button>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 transition-shadow duration-300 group-hover:shadow-[0_0_0_2px_rgba(209,166,84,0.35),0_0_36px_8px_rgba(209,166,84,0.25)] group-focus:shadow-[0_0_0_2px_rgba(209,166,84,0.35),0_0_36px_8px_rgba(209,166,84,0.25)]" />
    </motion.a>
  );
}
