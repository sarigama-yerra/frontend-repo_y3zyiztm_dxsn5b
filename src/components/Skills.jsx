import { motion } from 'framer-motion'

const groups = [
  {
    title: 'Programming Languages',
    items: ['C', 'Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
  },
  {
    title: 'DevOps Tools (Learning)',
    items: ['Git', 'Docker', 'Linux', 'CI/CD Pipelines', 'Cloud Basics'],
  },
  {
    title: 'Core Subjects',
    items: ['DSA', 'Quantum Computing', 'BE&EE'],
  },
  {
    title: 'Soft Skills',
    items: ['Time Management', 'Focus', 'Adaptability', 'Problem Solving'],
  },
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map((group, idx) => (
        <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 backdrop-blur">
          <h3 className="text-lg font-semibold mb-3">{group.title}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-600/10 to-cyan-500/10 text-blue-700 dark:text-cyan-200 border border-blue-600/20 dark:border-cyan-500/20">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
