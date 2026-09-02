import { useRef, useState, type MouseEvent } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { staggerItem } from '@/components/ui/SectionReveal'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  size?: 'large' | 'default'
}

export function ProjectCard({ project, size = 'default' }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const isLarge = size === 'large'

  const { scrollYProgress } = useScroll({
    target: imageWrapRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rx: py * -4, ry: px * 4 })
  }

  function handleMouseLeave() {
    setTilt({ rx: 0, ry: 0 })
  }

  return (
    <motion.div
      variants={staggerItem}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-base-border bg-base-900/50 transition-colors duration-500 hover:border-accent-blue/40',
        isLarge && 'lg:grid lg:grid-cols-2'
      )}
    >
      <div
        ref={imageWrapRef}
        className={cn(
          'relative overflow-hidden',
          isLarge ? 'aspect-[16/10] lg:aspect-auto' : 'aspect-[16/10]'
        )}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{ y: imageY, scale: 1.15 }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-base-950/5 to-transparent lg:bg-gradient-to-r" />
        <span className="absolute left-4 top-4 rounded-md border border-white/10 bg-base-950/70 px-2.5 py-1 font-mono text-xs text-accent-blue2 backdrop-blur-sm">
          {project.number}
        </span>
      </div>

      <div className={cn('flex flex-col justify-center p-6', isLarge && 'lg:p-10')}>
        <h3 className={cn('mb-3 font-semibold text-paper', isLarge ? 'text-2xl lg:text-3xl' : 'text-lg')}>
          {project.title}
        </h3>
        <p className={cn('mb-5 leading-relaxed text-muted', isLarge ? 'text-base' : 'text-sm')}>
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-base-border bg-base-800/60 px-2.5 py-1 text-[11px] font-medium text-muted-light"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-blue2 transition-transform duration-300 hover:translate-x-0.5"
            >
              View Project <ArrowUpRight size={15} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="text-muted transition-colors hover:text-paper"
            >
              <Github size={17} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
