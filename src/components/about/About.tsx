import { profile } from '@/data/profile'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { AnimatedHeading } from '@/components/ui/AnimatedHeading'

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-3xl">
        <SectionReveal blur={false} y={12}>
          <span className="mb-8 block font-mono text-sm tracking-wide text-accent-blue2">
            About
          </span>
        </SectionReveal>

        <AnimatedHeading
          text={profile.aboutTitle}
          className="text-3xl font-medium leading-[1.35] tracking-tight text-paper sm:text-4xl"
        />

        <SectionReveal delay={0.3}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {profile.aboutDescription}
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
