import { Link } from 'react-router-dom'

const footerNavLinks = [
  { path: '/competition', label: 'Διαγωνισμός' },
  { path: '/timeline', label: 'Χρονοδιάγραμμα' },
  { path: '/terms', label: 'Όροι' },
  { path: '/committees', label: 'Επιτροπές' },
  { path: '/news', label: 'Νέα' },
  { path: '/contact', label: 'Επικοινωνία' },
]

const Footer = () => {
  return (
    <footer>
      {/* Main footer: teal-blue → purple-blue gradient, rounded top corners (design match) */}
      <div
        className="rounded-t-[15px]"
        style={{
          background: 'linear-gradient(to right, #2B789C 0%, #2F2C84 55%, #2F2C84 100%)',
        }}
      >
        <div className="container mx-auto px-8 sm:px-10 lg:px-16 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">
            {/* Left: logo + tagline — bigger, pushed right with margin */}
            <div className="flex-shrink-0 ml-0 lg:ml-12">
              <Link to="/" className="block max-w-[320px] sm:max-w-[380px] lg:max-w-[420px]">
                <img
                  src="/logos/innovate-east-footer-logo.png"
                  alt="INNOVATE EAST - 1ος Διαγωνισμός Πρασινης & Γαλαζιας Καινοτομιας της Μητροπολης Μεσογειας και Λαυρεωτικης"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </Link>
            </div>

            {/* Right: nav — way more to the left, bigger text, left-aligned */}
            <div className="flex flex-col gap-4 text-left mr-0 lg:mr-[18%] xl:mr-[22%]">
              <p className="text-[#A6A6CC] text-base lg:text-lg font-bold uppercase tracking-wide">
                Innovate East
              </p>
              <nav className="flex flex-col gap-3" aria-label="Footer navigation">
                {footerNavLinks.map((link) => 
                  link.path === '/terms' ? (
                    <a
                      key={link.path}
                      href="https://383534e7-7332-4e0f-8956-daa42e69494b.filesusr.com/ugd/100ec9_5feae83082ab445eb5a9ab69002b5264.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-base lg:text-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-white text-base lg:text-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright strip */}
      <div className="bg-white py-4">
        <p className="text-center text-gray-700 text-sm">
          © 2024 by{' '}
          <a
            href="https://break-even.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#1A4B7A]"
          >
            Break Even.
          </a>{' '}
          Powered by{' '}
          <a
            href="https://designature.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#1A4B7A]"
          >
            Designature
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
