import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'gray' | 'blue'
  fullWidth?: boolean
  tightPadding?: boolean
}

const Section = ({ children, className = '', id, background = 'white', fullWidth = false, tightPadding = false }: SectionProps) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50',
  }

  const noTopPad = className.includes('pt-0')
  const sectionPadding = noTopPad ? 'pb-10 md:pb-14' : 'py-10 md:py-14'
  const innerPadding = tightPadding ? 'px-2 sm:px-3 lg:px-4' : 'px-4 sm:px-6 lg:px-8'
  const innerClass = fullWidth ? `w-full max-w-none ${innerPadding}` : `container mx-auto ${innerPadding}`

  return (
    <section
      id={id}
      className={`${sectionPadding} ${bgClasses[background]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className={innerClass}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default Section
