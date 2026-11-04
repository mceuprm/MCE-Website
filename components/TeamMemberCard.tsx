
"use client";

import { useState } from "react";

type TeamMemberCardProps = {
  name: string;
  role: string;
  division: string;
  image?: string;
};

export default function TeamMemberCard({
  name,
  role,
  division,
  image,
}: TeamMemberCardProps) {
  const [flipped, setFlipped] = useState(false);

  const colors =
    division === "VEX"
      ? {
          text: "text-red-400",
          border: "border-red-500/40",
          avatar: "border-red-500/50 bg-red-500/10",
        }
      : division === "RR&D"
      ? {
          text: "text-purple-400",
          border: "border-purple-500/40",
          avatar: "border-purple-500/50 bg-purple-500/10",
        }
      : {
          text: "text-green-400",
          border: "border-green-500/40",
          avatar: "border-green-500/50 bg-green-500/10",
        };

  return (
    <button
      type="button"
      onClick={() => setFlipped((previous) => !previous)}
      aria-label={`${flipped ? "Hide" : "Show"} details for ${name}`}
      aria-pressed={flipped}
      className="group h-72 w-full cursor-pointer text-left [perspective:1000px]"
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-zinc-950 p-6 [backface-visibility:hidden]">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-28 w-28 rounded-full object-cover"
            />
          ) : (
            <div
              className={`flex h-28 w-28 items-center justify-center rounded-full border text-3xl font-bold ${colors.avatar} ${colors.text}`}
            >
              {name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")}
            </div>
          )}

          <h3 className="text-center text-lg font-bold text-white">
            {name}
          </h3>

          <p className="text-sm text-zinc-400">{division}</p>

          <p className={`text-xs ${colors.text}`}>
            Click to flip
          </p>
        </div>

        {/* BACK */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border bg-zinc-900 p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] ${colors.border}`}
        >
          <h3 className="text-xl font-bold text-white">{name}</h3>

          <p className={colors.text}>{role}</p>

          <p className="text-sm text-zinc-400">{division}</p>

          <p className="mt-4 text-xs text-zinc-500">
            Click to return
          </p>
        </div>
      </div>
    </button>
  );
}
