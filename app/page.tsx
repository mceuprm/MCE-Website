import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex h-20 items-center justify-between px-8 lg:px-16">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/mce-logo.png"
            alt="MCE Logo"
            width={55}
            height={55}
            priority
          />

          <div>
            <p className="text-xl font-bold tracking-wide">MCE</p>
            <p className="text-xs text-zinc-400">
              Mechatronics & Computational Engineering
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="transition hover:text-green-400">
            About
          </a>

        <a href="#vex" className="transition hover:text-green-400">
          VEX
        </a>

        <a href="#rrd" className="transition hover:text-green-400">
          RR&D
        </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-8 lg:px-16">

        {/* Competition Image */}
        <div className="absolute right-0 top-0 hidden h-full w-[58%] lg:block">
          <Image
            src="/mce-competition.png"
            alt="MCE robotics team competing in a VEX competition"
            fill
            sizes="58vw"
            className="object-cover"
            priority
          />

          {/* Fade image into black background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/25 to-transparent" />

          {/* Darken top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            VEX UPRM Robotics & Automation Society
          </p>

          <h1 className="font-bold leading-tight tracking-tight">
            <span className="text-5xl sm:text-6xl lg:text-7xl">
              Mechatronics &
            </span>

            <br />

            <span className="text-5xl text-green-400 sm:text-6xl lg:text-6xl">
              Computational Engineering
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Engineering, programming, and building robotic systems at the
            University of Puerto Rico at Mayagüez.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#divisions"
              className="rounded-md bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300"
            >
              Explore Our Divisions
            </a>

            <a
              href="#about"
              className="rounded-md border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-400"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About MCE */}
      <section
        id="about"
        className="border-t border-zinc-900 bg-zinc-950 px-8 py-24 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Team Image */}
          <div className="relative h-[420px] overflow-hidden rounded-xl">
            <Image
              src="/mce-team.png"
              alt="MCE team at a robotics competition"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* About Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              About MCE
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Engineering ideas into
              <span className="text-green-400"> reality.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Mechatronics & Computational Engineering brings together
              students interested in robotics, programming, engineering,
              and automation.
            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Through hands-on projects and robotics competitions, members
              develop technical skills while working together to design,
              build, program, and improve robotic systems.
            </p>

            <a
              href="#divisions"
              className="mt-8 inline-block rounded-md border border-green-400 px-6 py-3 font-semibold text-green-400 transition hover:bg-green-400 hover:text-black"
            >
              Explore Our Divisions
            </a>
          </div>

        </div>
      </section>

      {/* Main Divisions */}
      <section
        id="divisions"
        className="border-t border-zinc-900 bg-black px-8 py-24 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Our Divisions
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Explore MCE
            <span className="text-green-400"> divisions.</span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* VEX */}
            <a
              href="#vex"
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-green-400"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                Competitive Robotics
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                VEX
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Explore MCE&apos;s competitive robotics division.
              </p>

              <p className="mt-8 font-semibold text-green-400">
                Explore VEX ↓
              </p>
            </a>

            {/* RR&D */}
            <a
              href="#rrd"
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-green-400"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                Research & Development
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                RR&D
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                Researching, designing, and developing robotic systems across
                different fields of mechatronics.
              </p>

              <p className="mt-8 font-semibold text-green-400">
                Explore RR&D ↓
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* VEX */}
      <section
        id="vex"
        className="border-t border-zinc-900 bg-zinc-950 px-8 py-24 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Competitive Robotics
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            VEX
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            More information about MCE&apos;s VEX division will be added soon.
          </p>

          <p className="mt-8 font-semibold text-green-400">
            Coming Soon
          </p>

        </div>
      </section>

      {/* RR&D */}
      <section
        id="rrd"
        className="border-t border-zinc-900 bg-black px-8 py-24 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">

          {/* RR&D Introduction */}
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
            Robotics Research & Development
          </p>

          <h2 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-5xl">
            Exploring the potential of
            <span className="text-green-400"> robotics.</span>
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400">
            Robotics Research & Development researches, develops, and designs
            robots across different fields of mechatronics. RR&D explores the
            potential of robotics from entertainment to industrial purposes
            while raising awareness of these technologies among students.
          </p>

          {/* RR&D Projects */}
          <div className="mt-16">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Projects
            </p>

            <h3 className="text-3xl font-bold sm:text-4xl">
              Robotic
              <span className="text-green-400"> Companions.</span>
            </h3>

            <p className="mt-5 max-w-4xl leading-7 text-zinc-400">
              RR&D is exploring the development of robotic companions that
              could support individuals who require additional assistance with
              daily activities.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {/* BILLY */}
              <article className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  First Prototype
                </p>

                <h4 className="mt-3 text-3xl font-bold">
                  BILLY
                </h4>

                <p className="mt-5 leading-7 text-zinc-400">
                  BILLY is the first prototype developed for RR&D&apos;s
                  robotic companion project.
                </p>
              </article>

              {/* MITCH */}
              <article className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                  Next Development
                </p>

                <h4 className="mt-3 text-3xl font-bold">
                  MITCH
                </h4>

                <p className="mt-2 text-sm font-medium text-green-400">
                  Medical Intelligence & Technological Companion for Healthcare
                </p>

                <p className="mt-5 leading-7 text-zinc-400">
                  MITCH represents the next stage of the robotic companion
                  project and focuses on healthcare assistance.
                </p>
              </article>

            </div>
          </div>

          {/* RR&D Subdivisions */}
          <div className="mt-20">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              RR&D Divisions
            </p>

            <h3 className="text-3xl font-bold sm:text-4xl">
              Different disciplines.
              <span className="text-green-400"> One system.</span>
            </h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Design",
                "Manufacturing",
                "Electrical",
                "Programming",
                "Documentation",
              ].map((division) => (
                <div
                  key={division}
                  className="rounded-xl border border-zinc-800 bg-zinc-950 p-6"
                >
                  <h4 className="font-semibold text-green-400">
                    {division}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Face Tracking */}
          <div className="mt-20">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Software Research
            </p>

            <h3 className="text-3xl font-bold sm:text-4xl">
              Computer Vision &
              <span className="text-green-400"> Face Tracking.</span>
            </h3>

            <p className="mt-5 max-w-4xl leading-7 text-zinc-400">
              RR&D is developing face-tracking software using Python, OpenCV,
              NumPy, and the YuNet face detection model. The current system
              detects faces, determines the center of a detected face, and
              calculates its position relative to the center of the camera.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Python", "OpenCV", "NumPy", "YuNet"].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}