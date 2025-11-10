import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState('system')

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'dark'
    setTheme(stored)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = theme === 'dark' || (theme === 'system' && prefersDark)
    root.classList.toggle('dark', shouldDark)
    localStorage.setItem('theme', theme)
  }, [theme])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#goals', label: 'Goals' },
    { href: '#travel', label: 'Travel & Hobbies' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 bg-white/70 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Dev Singanjude</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 hover:scale-105 transition-all"
            >
              <Sun className="h-4 w-4 hidden dark:block" />
              <Moon className="h-4 w-4 dark:hidden" />
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <a href="#" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a href="#" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#contact" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition" aria-label="Email"><Mail className="h-5 w-5" /></a>
            </div>
            <button className="md:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
