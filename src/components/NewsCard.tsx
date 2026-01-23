import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface NewsCardProps {
  image: string
  date: string
  title: string
  description: string
  slug?: string
}

const NewsCard = ({ image, date, title, description, slug }: NewsCardProps) => {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Date */}
        <p className="text-sm text-gray-500 mb-2">{date}</p>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#1A4B7A] mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  )

  if (slug) {
    return (
      <Link to={`/news/${slug}`} className="block h-full">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}

export default NewsCard
