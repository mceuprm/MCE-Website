export type Member = {
  name: string;
  major: string;
  divisions: ("VEX" | "RR&D")[];
  subdivision: string;
  photo: string | null;
  linkedin: string | null;
};

export const members: Member[] = [
  {
    name: "Harry A. Pérez",
    major: "Ingeniería Mecánica",
    divisions: ["VEX"],
    subdivision: "Mecánica",
    photo: null,
    linkedin: null,
  },
  {
    name: "Jan Morales",
    major: "Ingeniería de Software",
    divisions: ["VEX", "RR&D"],
    subdivision: "Programación, Web-Master",
    photo: null,
    linkedin: null,
  },
  {
    name: "Jan Conde",
    major: "INME",
    divisions: ["RR&D"],
    subdivision: "Mecánica",
    photo: null,
    linkedin: null,
  },
];