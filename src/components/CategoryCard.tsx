import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CategoryCardProps {
  imageSrc?: string
  icon?: ReactNode
  title: string
  iconColor?: 'green' | 'blue'
  greyBackground?: boolean
}

const CategoryCard = ({ imageSrc, icon, title, iconColor = 'blue', greyBackground = false }: CategoryCardProps) => {
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
      className={`flex flex-col items-center text-center p-4 md:p-5 lg:p-5 w-full min-h-[320px] self-stretch flex ${greyBackground ? 'bg-[#F3F4F6]' : 'bg-white'}`}
    >
      {/* Gif or icon – larger, crisp */}
      <div className={`mb-3 md:mb-4 flex-shrink-0 ${!imageSrc ? colorClasses[iconColor] : ''}`}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 object-contain select-none"
            draggable={false}
          />
        ) : (
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>

      {/* Text block – fixed height, max-width so text wraps below gif (not one long line) */}
      <div className="h-[110px] w-full flex items-center justify-center shrink-0 px-1">
        <h3 className="text-black text-sm md:text-base font-medium leading-relaxed text-center break-words text-pretty w-full max-w-[min(100%,18rem)]">
          {title}
        </h3>
      </div>
    </motion.div>
  )
}

export default CategoryCard
