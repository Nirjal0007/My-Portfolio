import { Mail, Github, Linkedin, FileText, ArrowUpRight, MessageSquare } from 'lucide-react'
import { socialLinks } from '@/data/social'
import { SectionReveal, StaggerGroup, staggerItem } from '@/components/ui/SectionReveal'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const ICONS = { mail: Mail, github: Github, linkedin: Linkedin, file: FileText }

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent-blue2">
            <MessageSquare size={16} />
            Let&apos;s Connect
          </div>
          <p className="mb-10 max-w-lg text-muted-light">
            I&apos;m always open to discussing new projects, collaborations or opportunities.
            Let&apos;s build something great together!
          </p>
        </SectionReveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
          {socialLinks.map((link) => {
            const Icon = ICONS[link.icon]
            return (
              <motion.a
                key={link.id}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={cn(
                  'group relative overflow-hidden rounded-xl border p-5 transition-all duration-300',
                  link.accent
                    ? 'border-accent-blue/30 bg-gradient-to-br from-accent-blue/10 to-transparent hover:border-accent-blue/60 hover:shadow-glow'
                    : 'border-base-border bg-base-900/50 hover:border-accent-blue/40 hover:shadow-glow'
                )}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-base-border bg-base-800 text-accent-blue2">
                  <Icon size={18} />
                </div>
                <h3 className="mb-1 text-sm font-semibold text-white">{link.label}</h3>
                <p className="truncate text-xs text-muted">{link.value}</p>
                <ArrowUpRight
                  size={16}
                  className="absolute right-5 top-5 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                />
              </motion.a>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
