import { useLenis } from '@/hooks/useLenis'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/about/About'
import { Projects } from '@/components/projects/Projects'
import { Skills } from '@/components/skills/Skills'
import { Contact } from '@/components/contact/Contact'
import { CursorGlow } from '@/components/ui/CursorGlow'
import { GridBackground } from '@/components/ui/GridBackground'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

function App() {
  useLenis()

  return (
    <div className="relative min-h-screen bg-base-950 text-white antialiased">
      <GridBackground />
      <CursorGlow />
      <ScrollProgress />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
