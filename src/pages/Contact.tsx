import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Επικοινωνία | InnovateEast</title>
        <meta
          name="description"
          content="Επικοινωνήστε μαζί μας για ερωτήσεις σχετικά με τον διαγωνισμό"
        />
        <meta property="og:title" content="Επικοινωνία | InnovateEast" />
        <meta
          property="og:description"
          content="Επικοινωνήστε μαζί μας"
        />
      </Helmet>

      <div className="bg-white grid grid-cols-1 lg:grid-cols-2 items-stretch gap-0 w-full">
              {/* Left Section - Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white flex items-center justify-center overflow-hidden p-8 md:p-12 lg:p-16"
              >
                <img
                  src="/images/news/try2.png"
                  alt="Green and blue innovation illustration"
                  className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain"
                  loading="lazy"
                  style={{ imageRendering: 'auto' }}
                />
              </motion.div>

              {/* Right Section - Contact details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-100 relative p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center"
              >
                <div className="space-y-4 text-left">
                  <div>
                    <h2 className="text-xl font-semibold tracking-widest text-purple-800 uppercase mb-2">
                      ΥΠΕΥΘΥΝΗ ΕΠΙΚΟΙΝΩΝΙΑΣ
                    </h2>
                    <p className="text-xl font-semibold text-green-500">
                      Ασημίνα Αλτάνη
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-widest text-purple-800 uppercase mb-2">
                      EMAIL
                    </h3>
                    <a
                      href="mailto:info@innovateeast.gr"
                      className="text-xl text-green-500 font-semibold hover:underline"
                    >
                      info@innovateeast.gr
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-widest text-purple-800 uppercase mb-2">
                      ΤΗΛΕΦΩΝΟ ΕΠΙΚΟΙΝΩΝΙΑΣ
                    </h3>
                    <div className="space-y-1 text-xl text-green-500 font-semibold">
                      <p>+30 216 070 3626 - 301</p>
                      <p>+30 694 405 7587</p>
                    </div>
                  </div>
                </div>
              </motion.div>
      </div>
    </>
  )
}

export default Contact
