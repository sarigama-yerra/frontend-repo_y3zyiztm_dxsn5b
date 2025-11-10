import { motion } from 'framer-motion'

export default function Travel() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="aspect-video rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-blue-600/10 to-purple-500/10" />
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">A separate space for travelling, cultures, and creativity through exploration.</p>
        <p className="italic text-gray-600 dark:text-gray-400">“Every new place teaches something new — just like every new codebase.”</p>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-lg bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10" />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
