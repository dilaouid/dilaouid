// src/components/organisms/Navbar/Navbar.tsx
import React, { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X, Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/atoms/Button/Button'

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'Projets', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'À propos', path: '/about' },
  /* { label: 'Contact', path: '/contact' }, */
]

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Détection du scroll pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-background border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
        >
          <span className="text-primary">D</span>Laouid
        </Link>

        {/* Navigation sur desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-muted-foreground hover:text-foreground transition-colors relative group"
              activeProps={{
                className: 'text-foreground',
              }}
            >
              {item.label}
              <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        {/* Bouton GitHub */}
        <div className="hidden md:flex items-center">
          <a
            href="https://github.com/dilaouid"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4"
          >
            <Button variant="outline" size="icon">
              <Github className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
        </div>

        {/* Bouton menu mobile */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background md:hidden"
          >
            <div className="container h-full flex flex-col">
              <div className="flex items-center justify-between py-4">
                <Link to="/" className="text-xl font-bold">
                  <span className="text-primary">D</span>Laouid
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fermer"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <nav className="flex flex-col items-center justify-center space-y-8 flex-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="text-2xl font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                      activeProps={{
                        className: 'text-primary',
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="py-6 flex justify-center">
                <a
                  href="https://github.com/dilaouid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Github size={18} />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}