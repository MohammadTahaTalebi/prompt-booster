import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
      <header className="w-full border-b border-white/10 bg-black/10 backdrop-blur-md fixed top-0 right-0 left-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/robotHead.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12" width={10000} height={10000}/>
            <span className="text-xl md:text-2xl font-extrabold tracking-tight">
              Prompt Booster
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            <Link href="/#features" className="hover:text-white transition">
              Features
            </Link>
            <Link href="/#how-it-works" className="hover:text-white transition">
              How it works
            </Link>
            <Link href="/#contact" className="hover:text-white transition">
              Contact
            </Link>
            <Link
              href="/improve"
              className="px-4 py-2 rounded-xl bg-amber-300 text-black font-semibold hover:bg-amber-200 transition shadow-lg"
            >
              Improve
            </Link>
          </nav>
          <Link
            href="/improve"
            className="md:hidden px-3 py-2 rounded-lg bg-amber-300 text-black text-sm font-semibold hover:bg-amber-200 transition shadow-lg"
          >
            Start
          </Link>
        </div>
      </header>
  )
}

export default Header
