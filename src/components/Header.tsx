import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
      <header
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-md'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <nav className="w-full pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-8 py-1">
          <div className="flex items-center justify-between min-h-[5rem] md:min-h-[6.5rem] lg:min-h-[7.5rem] xl:min-h-[8.5rem] w-full">
            {/* Logo - λιγο πιο δεξια, πιο μεγαλο */}
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
                className="h-16 md:h-24 lg:h-28 xl:h-32 w-auto block"
              />
              {/* Hover image overlays on top */}
              <img
                src={logotype2}
                alt=""
                role="presentation"
                className="h-16 md:h-24 lg:h-28 xl:h-32 w-auto absolute left-0 top-1/2 -translate-y-1/2 object-contain object-left transition-opacity duration-200 pointer-events-none"
                style={{ opacity: isLogoHovered ? 1 : 0 }}
              />
            </Link>

            {/* Desktop Navigation - μεγαλο κενο αριστερα, κεντραρισμενα links */}
            <div className="hidden lg:flex flex-1 justify-center items-center pl-12 lg:pl-20 xl:pl-28">
              <div className="flex items-center space-x-6 xl:space-x-10">
              {navLinks.map((link) => 
                link.path === '/terms' ? (
                  <a
                    key={link.path}
                    href="https://383534e7-7332-4e0f-8956-daa42e69494b.filesusr.com/ugd/100ec9_5feae83082ab445eb5a9ab69002b5264.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative text-sm lg:text-base font-bold transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#54AD40]'
                        : 'text-[#3D4C7F] hover:text-[#54AD40]'
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-sm lg:text-base font-bold transition-colors ${
                      location.pathname === link.path
                        ? 'text-[#54AD40]'
                        : 'text-[#3D4C7F] hover:text-[#54AD40]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
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
      </header>
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
