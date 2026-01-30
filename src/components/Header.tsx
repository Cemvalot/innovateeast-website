import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Innovate East' },
    { path: '/competition', label: 'Διαγωνισμός' },
    { path: '/timeline', label: 'Χρονοδιάγραμμα' },
    { path: '/terms', label: 'Όροι' },
    { path: '/committees', label: 'Επιτροπές' },
    { path: '/news', label: 'Νέα' },
    { path: '/contact', label: 'Επικοινωνία' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-md'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.img
                src="/logo.svg"
                alt="InnovateEast"
                className="h-10 md:h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              />
              <span className="text-lg md:text-xl font-semibold text-gray-800 uppercase tracking-tight">
                INNOVATE EAST
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#1A4B7A]'
                      : 'text-gray-700 hover:text-[#1A4B7A]'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#1A4B7A]"
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </motion.header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        currentPath={location.pathname}
      />
    </>
  )
}

export default Header
