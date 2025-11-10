import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const goals = [
  'Master DSA before 3rd year',
  'Build and deploy a Full-Stack Web App',
  'Learn Cloud Platforms (AWS, Azure, or GCP)',
  'Contribute to Open Source Projects',
  'Attain DevOps Internship Experience',
  'Maintain CGPA 9+ consistently',
  'Travel to 5+ new places to gain new perspectives',
  'Create a Tech Blog to share learning experiences',
]

export default function Goals() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {goals.map((g, i) => (
        <motion.div key={g} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 p-5 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
          <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
          <span className="font-medium">{g}</span>
        </motion.div>
      ))}
    </div>
  )
}
