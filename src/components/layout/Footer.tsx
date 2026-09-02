import { Heart } from 'lucide-react'
import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-base-border/70 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <span className="font-mono text-sm font-bold text-white">
          NIRJAL<span className="text-accent-blue2">.OS</span>
        </span>
        <p className="text-xs text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5 text-xs text-muted">
          Built with <Heart size={12} className="fill-rose-500 text-rose-500" /> and lots of coffee
        </p>
      </div>
    </footer>
  )
}
