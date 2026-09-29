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

          <a href="#projects" className="transition hover:text-green-400">
            Projects
          </a>

          <a href="#team" className="transition hover:text-green-400">
            Team
          </a>

          <a href="#competitions" className="transition hover:text-green-400">
            Competitions
          </a>

          <a
            href="#join"
            className="rounded-md border border-green-400 px-5 py-2 text-green-400 transition hover:bg-green-400 hover:text-black"
          >
            Join MCE
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
          sizes = "58vw"
          className="object-cover"
          priority
          />
          
          {/* Fade image into black background */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/25 to-transparent" />
          
          {/* Darken top and bottom slightly */}
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
                    Engineering, programming, and building competitive robotic systems
                    at the University of Puerto Rico at Mayagüez.
                    </p>
                    
                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                      href="#projects"
                      className="rounded-md bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300"
                      >
                        Explore Our Projects
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
                        Through hands-on projects and VEX robotics competitions,
                        members develop technical skills while working together to
                        design, build, program, and improve robotic systems.
                      </p>

                      <a
                        href="#join"
                        className="mt-8 inline-block rounded-md border border-green-400 px-6 py-3 font-semibold text-green-400 transition hover:bg-green-400 hover:text-black"
                      >
                        Join Our Team
                      </a>
                    </div>

                  </div>
              </section>
        </main>
    );
}