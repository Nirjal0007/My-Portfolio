import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'
import { currentStatus } from '@/data/currentStatus'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(NAV_LINKS.map((l) => l.id))

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollTo(id: string) {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-xl px-5 transition-all duration-500',
          scrolled
            ? 'border border-base-border/80 bg-base-900/70 py-2.5 shadow-card backdrop-blur-xl'
            : 'border border-transparent bg-transparent py-2.5'
        )}
      >
        <button
          onClick={() => scrollTo('home')}
          className="font-mono text-lg font-bold tracking-tight text-white"
        >
          <span className="text-accent-blue2">&gt;_</span> NIRJAL<span className="text-accent-blue2">.OS</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="relative py-1 text-sm font-medium text-muted-light transition-colors hover:text-white"
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-blue2"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-base-border bg-base-800/70 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent-blue/50"
          >
            Resume.pdf <Download size={14} />
          </a>
          {currentStatus.available && (
            <div className="flex items-center gap-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available
            </div>
          )}
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-2 flex flex-col gap-1 rounded-xl border border-base-border bg-base-900/95 p-3 backdrop-blur-xl md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={cn(
                  'rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors',
                  active === link.id ? 'bg-base-800 text-white' : 'text-muted-light'
                )}
              >
                {link.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-accent-blue px-4 py-3 text-sm font-medium text-white"
            >
              Nirjal_Acharya.pdf <Download size={14} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
