"use client";

import Image from "next/image";
import type { Member } from "@/data/members";

type MemberCardProps = {
  member: Member;
};

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 text-white transition duration-300 hover:-translate-y-1 hover:border-green-400/60">
      <div className="relative flex h-56 items-center justify-center bg-zinc-800">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`Foto de ${member.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="text-center text-zinc-400">
            <div className="text-5xl">👤</div>
            <p className="mt-2 text-sm">Foto pendiente</p>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold">{member.name}</h3>

        <p className="mt-2 text-sm text-zinc-300">{member.major}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {member.divisions.map((division) => (
            <span
              key={division}
              className="rounded-full border border-green-400/40 px-3 py-1 text-xs font-semibold text-green-400"
            >
              {division}
            </span>
          ))}
        </div>

        <p className="mt-3 text-sm text-zinc-300">
          Área: {member.subdivision}
        </p>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-green-400 hover:underline"
          >
            Ver LinkedIn ↗
          </a>
        )}
      </div>
    </article>
  );
}