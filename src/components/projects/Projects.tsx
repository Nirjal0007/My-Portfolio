import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionReveal, StaggerGroup } from '@/components/ui/SectionReveal'
import { AnimatedHeading } from '@/components/ui/AnimatedHeading'

export function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projects" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <SectionReveal blur={false} y={12}>
              <span className="mb-3 block font-mono text-sm tracking-wide text-accent-blue2">
                Work
              </span>
            </SectionReveal>
            <AnimatedHeading
              text="Featured Projects"
              className="text-4xl font-semibold tracking-tight text-paper sm:text-5xl"
            />
          </div>
          <SectionReveal blur={false} y={12} delay={0.2}>
            <a
              href="https://github.com/nirjal0007"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-paper sm:flex"
            >
              View All <ArrowRight size={15} />
            </a>
          </SectionReveal>
        </div>

        <StaggerGroup className="flex flex-col gap-6" staggerDelay={0.1}>
          {featured && <ProjectCard project={featured} size="large" />}

          {rest.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </StaggerGroup>
      </div>
    </section>
  )
}
