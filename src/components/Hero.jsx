import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-black/60 dark:via-black/30 dark:to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
          <span className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-blue-600 dark:text-cyan-300">Portfolio • Dev Singanjude</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 bg-clip-text text-transparent">
              Building systems. Solving problems. Exploring the world.
            </span>
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            B.Tech CSE student passionate about Web Development, DevOps, DSA and Quantum Computing.
            I learn deeply, build practically, and live meaningfully.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition text-gray-900 dark:text-white">Contact Me</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
