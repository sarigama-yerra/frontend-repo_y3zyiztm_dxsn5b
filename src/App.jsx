import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Goals from './components/Goals'
import Travel from './components/Travel'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />

        <Section id="about" title="About" subtitle="CSE student and explorer">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                I am a B.Tech Computer Science Engineering student balancing a 9–5 academic schedule with personal growth and skill development. I love building on the web, automating with DevOps practices, and sharpening my problem-solving with DSA. I also explore Quantum Computing as a beginner and enjoy travelling to learn from the world beyond screens.
              </p>
              <ul className="list-disc ml-5">
                <li>Computer Science Core</li>
                <li>Data Structures & Algorithms</li>
                <li>Web Development (HTML, CSS, JavaScript)</li>
                <li>Quantum Computing (beginner)</li>
                <li>DevOps (Linux, CI/CD, Cloud basics)</li>
              </ul>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic">“I believe in learning deeply, building practically, and living meaningfully.”</blockquote>
            </div>
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-emerald-400/10 p-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10">Focused • Disciplined</div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10">Curious • Consistent</div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10">Creativity • Automation</div>
                <div className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10">Tech • Travel</div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="What I’m learning and applying">
          <Skills />
        </Section>

        <Section id="projects" title="Projects" subtitle="Work in progress and ideas">
          <Projects />
        </Section>

        <Section id="goals" title="Goals" subtitle="Milestones I’m aiming for">
          <Goals />
        </Section>

        <Section id="travel" title="Travel & Hobbies" subtitle="Finding creativity through exploration">
          <Travel />
        </Section>

        <Section id="contact" title="Contact" subtitle="Let’s collaborate or just say hi">
          <Contact />
        </Section>
      </main>

      <footer className="py-10 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-black/5 dark:border-white/10">
        © 2025 Dev Singanjude | Designed with Logic & Passion.
      </footer>
    </div>
  )
}

export default App
