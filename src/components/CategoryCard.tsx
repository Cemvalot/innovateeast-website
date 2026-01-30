import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CategoryCardProps {
  imageSrc?: string
  icon?: ReactNode
  title: string
  iconColor?: 'green' | 'blue'
}

const CategoryCard = ({ imageSrc, icon, title, iconColor = 'blue' }: CategoryCardProps) => {
  const colorClasses = {
    green: 'text-[#65AF43]',
    blue: 'text-[#2A488A]',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center p-8 md:p-10 lg:p-12 bg-white min-h-[320px] flex-1 flex"
    >
      {/* Gif or icon – clear gap below like second image */}
      <div className={`mb-7 md:mb-8 flex-shrink-0 ${!imageSrc ? colorClasses[iconColor] : ''}`}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain"
          />
        ) : (
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>

      {/* Words below – black, centered, good line spacing like second image */}
      <h3 className="text-black text-base md:text-lg font-medium leading-relaxed flex-1 flex items-center justify-center">
        {title}
      </h3>
    </motion.div>
  )
}

export default CategoryCard
