'use client'
import { useRef } from "react";
import { MentorCard, type Mentor } from "@/components/MentorCard";
import { Chevron } from "@/components/Chevron";
import { EnergyBar } from "@/components/EnergyBar";
import { tokens } from "@/components/tokens";
import { Cinzel, Inter } from "next/font/google";


const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const mentors: Mentor[] = [
{
name: "Machiavelli",
title: "Consult Machiavelli",
// Replace with your provided image (consistent aspect ratio recommended)
src: "/Images/WhatsApp Image 2025-11-05 at 12.40.45 AM.jpeg",
fade: "left",
},
{
name: "Napoleon",
title: "Consult Napoleon",
src:"/Images/WhatsApp Image 2025-11-05 at 12.40.46 AM.jpeg",
fade: "both",
},
{
name: "Aurelius",
title: "Consult Aurelius",
src: "/Images/WhatsApp Image 2025-11-05 at 12.40.46 AM (1).jpeg",
fade: "right",
},
];

export default function Page() {
const statusRef = useRef<HTMLDivElement>(null);
const scrollToStatus = () => statusRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });


return (
<main
className={`min-h-screen w-full overflow-x-hidden bg-[radial-gradient(80%_120%_at_50%_-20%,#1a1b22_0%,#0b0c10_40%,#07080b_100%)] text-white ${inter.className}`}
>
<section className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col items-center justify-center gap-6 px-4 py-16 md:gap-8">
<header className="text-center">
<h1 className={`mb-2 text-3xl tracking-[0.12em] md:text-5xl ${cinzel.className}`}>choose your mentor </h1>
{/* <p className="text-sm md:text-base" style={{ color: tokens.textDim }}>
Power is not taken. It is cultivated.
</p> */}
</header>


<div className="relative mt-6 flex w-full flex-col items-center justify-center gap-4 md:mt-10 md:flex-row md:items-stretch md:justify-center md:gap-0">
{mentors.map((m, i) => (
<div
key={m.name}
className={[
// center card sits on top for clean overlap
i === 1 ? "z-10" : "z-0",
// negative margins only on md+ so mobile stays stacked
i === 0 ? "md:-mr-10" : "",
i === 2 ? "md:-ml-10" : "",
// width control so cards size evenly in row
"w-full md:w-1/3",
// allow focus rings to show above neighbors
"relative",
].join(" ")}
>
<MentorCard mentor={m} index={i} />
</div>
))}
</div>


<div className="pointer-events-none absolute left-1/2 top-full -mt-4 -translate-x-1/2 md:-mt-6" />
<Chevron onClick={scrollToStatus} />
</section>


<section id="status" ref={statusRef} className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center border-t border-white/5 bg-gradient-to-b from-transparent to-black/20 px-4 py-16">
<EnergyBar />
</section>


{/* global keyframes for pulsing glow */}
<style jsx global>{`
@keyframes pulseGlow {
0% { box-shadow: 0 0 0 0 ${tokens.goldGlow}; opacity: 1; }
50% { box-shadow: 0 0 0 12px rgba(209,166,84,0); opacity: .9; }
100% { box-shadow: 0 0 0 0 rgba(209,166,84,0); opacity: 1; }
}
`}</style>
</main>
);
}