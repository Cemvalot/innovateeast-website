import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CategoryCardProps {
  icon: ReactNode
  title: string
  iconColor: 'green' | 'blue'
}

const CategoryCard = ({ icon, title, iconColor }: CategoryCardProps) => {
  const colorClasses = {
    green: 'text-[#4CAF50]',
    blue: 'text-[#1A4B7A]',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center text-center p-6"
    >
      {/* Icon */}
      <div className={`mb-4 ${colorClasses[iconColor]}`}>
        <div className="w-20 h-20 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base md:text-lg font-medium text-gray-800 leading-relaxed">
        {title}
      </h3>
    </motion.div>
  )
}

export default CategoryCard
