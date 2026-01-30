import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import MobileMenu from './MobileMenu'
import logotype1 from '../assets/logos/logotype1.png'
import logotype2 from '../assets/logos/logotype2.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)
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
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-md'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24 lg:h-28">
            {/* Logo - links to homepage; one in-flow img for size, hover overlay on top */}
            <Link
              to="/"
              className="flex-shrink-0 flex items-center relative block"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              {/* In-flow image so link has size; always visible */}
              <img
                src={logotype1}
                alt="Innovate East"
                className="h-14 md:h-20 lg:h-24 xl:h-28 w-auto block"
              />
              {/* Hover image overlays on top */}
              <img
                src={logotype2}
                alt=""
                role="presentation"
                className="h-14 md:h-20 lg:h-24 xl:h-28 w-auto absolute left-0 top-1/2 -translate-y-1/2 object-contain object-left transition-opacity duration-200 pointer-events-none"
                style={{ opacity: isLogoHovered ? 1 : 0 }}
              />
            </Link>

            {/* Desktop Navigation - centered, shifted a little to the right */}
            <div className="hidden lg:flex flex-1 justify-center items-center pl-8 lg:pl-12">
              <div className="flex items-center space-x-6 xl:space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm lg:text-base font-medium transition-colors ${
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
            </div>

            {/* Right spacer (desktop) / Mobile Menu Button */}
            <div className="flex-shrink-0 w-28 md:w-36 lg:w-40 flex justify-end items-center">
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
