import { useLenis } from './hooks/useLenis'
import { GrainOverlay } from './components/layout/GrainOverlay'
import { AuroraBackground } from './components/layout/AuroraBackground'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/hero/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Internship } from './components/sections/Internship'
import { Projects } from './components/sections/Projects'
import { Achievements } from './components/sections/Achievements'
import { Certs } from './components/sections/Certs'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'

function App() {
  useLenis()

  return (
    <>
      <GrainOverlay />
      <AuroraBackground />
      <ScrollProgress />
      <Nav />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Internship />
        <Projects />
        <Achievements />
        <Certs />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
