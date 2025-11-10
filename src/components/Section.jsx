import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-blue-500/0 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
            {subtitle && <p className="mt-3 text-gray-600 dark:text-gray-300">{subtitle}</p>}
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
