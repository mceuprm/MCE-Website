
export default function Navbar() {
  return (
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
  );
}