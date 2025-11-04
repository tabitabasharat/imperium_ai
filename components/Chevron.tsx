import React from "react";
import { tokens } from "@/components/tokens";


export function Chevron({ onClick }: { onClick: () => void }) {
return (
<button
onClick={onClick}
aria-label="Scroll to status"
className="group absolute -bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full p-3 outline-none focus-visible:ring-2"
style={{
// focus ring color (gold)
boxShadow: `0 0 0 0 ${tokens.goldGlow}`,
}}
>
<div className="relative h-6 w-6">
<span className="absolute inset-0 flex items-center justify-center text-2xl leading-none" style={{ color: tokens.gold }}>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
<path d="M6 8l6 8 6-8" />
</svg>
</span>
<span
className="absolute inset-0 rounded-full"
style={{ animation: "pulseGlow 2.2s ease-in-out infinite", borderRadius: 9999 }}
/>
</div>
</button>
);
}