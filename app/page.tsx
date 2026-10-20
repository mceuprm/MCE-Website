
const divisions = [
  {
    name: "VEX",
    category: "COMPETITIVE ROBOTICS",
    description:
      "Explore MCE's competitive robotics division, where students design, build, and program robots for VEX competitions.",
    href: "#vex",
  },
  {
    name: "RR&D",
    category: "RESEARCH & DEVELOPMENT",
    description:
      "Discover research, design, and development projects that explore robotics and technological solutions.",
    href: "#rrd",
  },
];

const leaders = [
  { name: "Lisangelie Flores", role: "MCE Captain" },
  { name: "Ian Marin", role: "MCE Vice-Captain" },
  { name: "Harry A. Pérez", role: "VEX Mechanical Lead" },
  { name: "Sebastian Mendoza", role: "VEX Engineering Lead" },
  { name: "Jan Morales", role: "VEX / RR&D Programming Lead" },
  { name: "Jan Conde", role: "RR&D Lead" },
  { name: "Alanis Cordero", role: "RR&D Lead" },
  { name: "Reggie Vaz", role: "Treasurer" },
  { name: "Eunice Monzón", role: "Outreach Lead" },
  { name: "Raul Torres", role: "Mentor" },
];

const projects = [
  {
    name: "BILLY",
    category: "FIRST PROTOTYPE",
    description:
      "An early robotics project representing the team's work in design, development, and experimentation.",
  },
  {
    name: "MITCH",
    category: "MEDICAL TECHNOLOGY",
    description:
      "Medical Intelligence & Technological Companion for Healthcare (M.I.T.C.H.), a research project focused on healthcare technology.",
  },
];

const disciplines = [
  "Design",
  "Manufacturing",
  "Electrical",
  "Programming",
  "Documentation",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-green-400 text-lg font-bold text-green-400">
              M
            </div>
            <div>
              <p className="font-bold">MCE</p>
              <p className="text-xs text-zinc-400">
                Mechatronics & Computational Engineering
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#about" className="transition hover:text-green-400">
              About
            </a>
            <a href="#divisions" className="transition hover:text-green-400">
              Divisions
            </a>
            <a href="#team" className="transition hover:text-green-400">
              Team
            </a>
            <a href="#vex" className="transition hover:text-green-400">
              VEX
            </a>
            <a href="#rrd" className="transition hover:text-green-400">
              R&D
            </a>
          </nav>

          <a
            href="#join"
            className="rounded-lg border border-green-500 px-4 py-2 text-sm text-green-400 transition hover:bg-green-500 hover:text-black"
          >
            Join MCE
          </a>
        </div>
      </header>

      {/* HOME / HERO */}
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="mx-auto grid min-h-[540px] max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-green-400">
              VEX UPRM Robotics & Automation Society
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Mechatronics &{" "}
              <span className="text-green-400">
                Computational Engineering
              </span>
            </h1>

            <p className="mt-6 max-w-xl leading-7 text-zinc-400">
              Engineering, programming, and building competitive robotic
              systems at the University of Puerto Rico at Mayagüez.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#divisions"
                className="rounded-lg bg-green-500 px-5 py-3 text-sm font-bold text-black transition hover:bg-green-400"
              >
                Explore Our Divisions
              </a>
              <a
                href="#about"
                className="rounded-lg border border-white/20 px-5 py-3 text-sm font-bold transition hover:border-green-400 hover:text-green-400"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Robot image */}
          <div className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[400px]">
            <img
              src="/images/mce-robot.png"
              alt="Robot de robótica"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-5xl font-black text-green-400 sm:text-6xl">
                MCE
              </p>
              <p className="mt-2 text-sm tracking-[0.2em] text-white">
                DESIGN · BUILD · PROGRAM
              </p>
              <p className="mt-3 text-sm text-zinc-300">
                Team competition and research
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT MCE */}
      <section id="about" className="border-b border-white/10 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          {/* Team photo */}
          <div className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[360px]">
            <img
              src="/mce-team.png"
              alt="Integrantes del equipo MCE"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-sm font-semibold tracking-widest text-white">
              ONE TEAM. MANY DISCIPLINES.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-green-400">
              About MCE
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Learn, collaborate, and build.
            </h2>
            <p className="mt-5 leading-7 text-zinc-400">
              Mechatronics & Computational Engineering brings together
              students interested in robotics, programming, engineering, and
              automation.
            </p>
            <p className="mt-4 leading-7 text-zinc-400">
              Through competitive robotics and research projects, members
              develop technical skills while collaborating to design, build,
              program, and improve technological systems.
            </p>
            <a
              href="#team"
              className="mt-6 inline-block rounded-lg border border-green-500 px-5 py-3 text-sm font-bold text-green-400 transition hover:bg-green-500 hover:text-black"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section id="divisions" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-400">
          Our Divisions
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Explore MCE <span className="text-green-400">divisions.</span>
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {divisions.map((division) => (
            <article
              key={division.name}
              className="rounded-2xl border border-white/10 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-green-500/60"
            >
              <p className="text-xs font-bold tracking-widest text-green-400">
                {division.category}
              </p>
              <h3 className="mt-3 text-2xl font-bold">{division.name}</h3>
              <p className="mt-4 leading-7 text-zinc-400">
                {division.description}
              </p>
              <a
                href={division.href}
                className="mt-6 inline-block text-sm font-bold text-green-400 hover:underline"
              >
                Explore {division.name} ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* VEX */}
      <section id="vex" className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-400">
            Competitive Robotics
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            VEX Robotics <span className="text-green-400">at MCE.</span>
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
            Our VEX division brings together students interested in robotics,
            engineering, and programming through competitive robotic systems.
            Members collaborate to design, build, and program robots to
            participate in the VEX U competition.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-black p-6">
              <h3 className="text-xl font-bold">Engineering & Design</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                Mechanical design, construction, electronics, and programming
                work together to develop a competition robot.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-black p-6">
              <h3 className="text-xl font-bold">Competition</h3>
              <p className="mt-3 leading-7 text-zinc-400">
                The team prepares a robot and strategy around the current
                VEX Robotics Competition game and its official rules.
              </p>
              <a
                href="https://www.vexrobotics.com/v5/competition/vrc-current-game"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-bold text-green-400 hover:underline"
              >
                View the official VEX game ↗
              </a>
            </article>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-bold">VEX Leadership</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {leaders
                .filter((leader) => leader.role.startsWith("VEX"))
                .map((leader) => (
                  <article
                    key={leader.name}
                    className="rounded-xl border border-white/10 bg-black p-5"
                  >
                    <h4 className="font-bold">{leader.name}</h4>
                    <p className="mt-2 text-sm text-zinc-400">
                      {leader.role}
                    </p>
                  </article>
                ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-black p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-green-400">
              Competition History
            </p>
            <h3 className="mt-3 text-2xl font-bold">Our Journey</h3>
            <p className="mt-3 leading-7 text-zinc-400">
              Competition dates, events, robot achievements, and awards will
              be added here as the team confirms its official history.
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              Historical results are pending confirmation from the team.
            </p>
          </div>
        </div>
      </section>

      {/* RR&D */}
      <section id="rrd" className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-400">
          Robotics Research & Development
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Exploring the potential of{" "}
          <span className="text-green-400">robotics.</span>
        </h2>
        <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
          RR&D focuses on research, design, and development. Its projects
          explore technological ideas, combine different engineering
          disciplines, and investigate possible solutions to real-world
          challenges.
        </p>

        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-widest text-green-400">
            Projects
          </p>
          <h3 className="mt-3 text-2xl font-bold">Robotic Companions</h3>
          <p className="mt-3 max-w-3xl leading-7 text-zinc-400">
            Explore the projects and prototypes developed by the team. Project
            descriptions can be expanded as technical information and images
            become available.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-white/10 bg-zinc-950 p-6 transition hover:border-green-500/50"
              >
                <p className="text-xs font-bold tracking-widest text-green-400">
                  {project.category}
                </p>
                <h4 className="mt-3 text-2xl font-bold">{project.name}</h4>
                <p className="mt-4 leading-7 text-zinc-400">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="text-xs font-bold uppercase tracking-widest text-green-400">
            RR&D Divisions
          </p>
          <h3 className="mt-3 text-2xl font-bold">
            Different disciplines.{" "}
            <span className="text-green-400">One system.</span>
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {disciplines.map((discipline) => (
              <div
                key={discipline}
                className="rounded-lg border border-white/10 bg-zinc-950 p-4 text-sm font-semibold transition hover:border-green-500/60 hover:text-green-400"
              >
                {discipline}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-zinc-950 p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-green-400">
            Research Poster
          </p>
          <h3 className="mt-3 text-2xl font-bold">M.I.T.C.H.</h3>
          <p className="mt-3 leading-7 text-zinc-400">
            Medical Intelligence & Technological Companion for Healthcare
            (M.I.T.C.H.) is a research project presented by the RR&D team.
            The poster and additional project details can be added here when
            the team provides the materials.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Poster image and presentation details pending.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-400">
            Our Team
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            The people behind <span className="text-green-400">MCE.</span>
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
            MCE includes 32 active members across VEX and RR&D, according to
            the information currently provided by the team. Meet the
            leadership and mentor supporting our work.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="rounded-xl border border-white/10 bg-black p-5 transition hover:border-green-500/60"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-green-500/50 bg-green-500/10 text-lg font-bold text-green-400">
                  {leader.name
                    .split(" ")
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="font-bold">{leader.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{leader.role}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            Member photos, degree programs, subdivisions, and individual
            profiles can be added when the information is confirmed.
          </p>
        </div>
      </section>

      {/* JOIN MCE */}
      <section id="join" className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-green-400">
          Get Involved
        </p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Build something <span className="text-green-400">with us.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-400">
          Interested in robotics, programming, engineering, or research?
          Connect with MCE to learn more about our team and activities.
        </p>
        <a
          href="https://www.vexrobotics.com/v5/competition/vrc-current-game"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-lg bg-green-500 px-6 py-3 font-bold text-black transition hover:bg-green-400"
        >
          Discover VEX Robotics
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="font-bold text-white">MCE</span> · Mechatronics &
            Computational Engineering
          </p>
          <p>University of Puerto Rico at Mayagüez</p>
        </div>
      </footer>
    </main>
  );
}
