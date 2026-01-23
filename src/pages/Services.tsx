import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'

const Services = () => {
  const services = [
    {
      image: '/service-1.jpg',
      title: 'Innovation Consulting',
      description:
        'Strategic guidance to help your business innovate and stay ahead of the competition.',
    },
    {
      image: '/service-2.jpg',
      title: 'Market Analysis',
      description:
        'Comprehensive market research and analysis to identify opportunities in Eastern markets.',
    },
    {
      image: '/service-3.jpg',
      title: 'Digital Transformation',
      description:
        'End-to-end digital transformation services to modernize your business operations.',
    },
    {
      image: '/service-4.jpg',
      title: 'Technology Solutions',
      description:
        'Custom technology solutions tailored to your business needs and objectives.',
    },
    {
      image: '/service-5.jpg',
      title: 'Business Strategy',
      description:
        'Strategic planning and execution to help you achieve your business goals.',
    },
    {
      image: '/service-6.jpg',
      title: 'Training & Development',
      description:
        'Comprehensive training programs to upskill your team and drive organizational growth.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Services | InnovateEast</title>
        <meta
          name="description"
          content="Explore our comprehensive range of services including innovation consulting, market analysis, and digital transformation."
        />
        <meta property="og:title" content="Services | InnovateEast" />
        <meta
          property="og:description"
          content="Discover our services designed to help your business grow and innovate."
        />
      </Helmet>

      <div className="pt-16 md:pt-20">
        <Section background="blue">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to help your business thrive in Eastern markets
            </p>
          </motion.div>
        </Section>

        <Section background="white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                image={service.image}
                imageAlt={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </Section>
      </div>
    </>
  )
}

export default Services
