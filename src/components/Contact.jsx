import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows="5" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" required />
        <button className="inline-flex px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">Send Message</button>
        {sent && <p className="text-emerald-600">Thanks! I'll get back to you soon.</p>}
      </motion.form>

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
        <h3 className="text-xl font-semibold">Let’s Collaborate</h3>
        <p className="text-gray-700 dark:text-gray-300">Open to opportunities, internships, and collaborations in Web Dev, DevOps, and research projects.</p>
        <div className="flex gap-3">
          <a href="#" className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10">GitHub</a>
          <a href="#" className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10">LinkedIn</a>
          <a href="#" className="px-4 py-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10">Email</a>
        </div>
      </motion.div>
    </div>
  )
}
