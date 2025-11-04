export const tokens = {
bg: "#0b0c10",
panel: "#111217",
gold: "#d1a654",
goldSoft: "#caa360",
goldGlow: "rgba(209,166,84,0.55)",
text: "#ebebf0",
textDim: "#b6b7c2",
};


// Side fade mask helper (edge blending)
export const sideFade = (
side: "left" | "right" | "both",
strength = 22
) => {
const s = Math.max(1, Math.min(10, strength));
if (side === "left") return `linear-gradient(90deg, transparent ${s}%, black ${s + 6}%) `;
if (side === "right") return `linear-gradient(270deg, transparent ${s}%, black ${s + 6}%)`;
return `linear-gradient(90deg, transparent ${s}%, black ${s + 10}%, black ${100 - (s + 10)}%, transparent ${100 - s}%)`;
};