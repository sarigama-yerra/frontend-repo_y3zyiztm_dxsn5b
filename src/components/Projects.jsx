import { motion } from 'framer-motion'

const projects = [
  { title: 'Personal Portfolio Website', status: 'This Site', desc: 'Modern, animated portfolio built with care.' },
  { title: 'College Routine Automation', status: 'Future', desc: 'Automate timetable notifications and resources.' },
  { title: 'DSA Practice Tracker', status: 'In Progress', desc: 'Track solved problems and patterns.' },
  { title: 'DevOps Deployment Practice', status: 'Future', desc: 'Hands-on with CI/CD and containers.' },
  { title: 'Quantum Logic Visualizer', status: 'Experimental', desc: 'Visualize simple quantum gates and states.' },
]

export default function Projects() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 backdrop-blur hover:-translate-y-1 hover:shadow-xl transition-all">
          <div className="text-xs uppercase tracking-wide text-blue-600 dark:text-cyan-300">{p.status}</div>
          <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{p.desc}</p>
          <div className="mt-4 h-28 rounded-lg bg-gradient-to-r from-blue-600/10 via-purple-500/10 to-emerald-400/10 border border-black/5 dark:border-white/10" />
        </motion.div>
      ))}
    </div>
  )
}
