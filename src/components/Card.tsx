import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
  className?: string
  image?: string
  imageAlt?: string
  title?: string
  description?: string
}

const Card = ({ children, className = '', image, imageAlt, title, description }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title || ''}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        )}
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        {children && children}
      </div>
    </motion.div>
  )
}

export default Card
