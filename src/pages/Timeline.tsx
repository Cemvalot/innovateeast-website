import { Helmet } from 'react-helmet-async'

const Timeline = () => {
  return (
    <>
      <Helmet>
        <title>Χρονοδιάγραμμα | InnovateEast</title>
        <meta
          name="description"
          content="Χρονοδιάγραμμα του Διαγωνισμού Πράσινης & Γαλάζιας Καινοτομίας"
        />
      </Helmet>

      {/* Stage I Block - ακριβως οπως στην εικονα */}
      <div className="w-full py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center h-[320px] md:h-[360px] lg:h-[400px]" style={{ backgroundColor: '#eef1f6' }}>
        <div className="w-full flex items-center justify-center px-8 sm:px-12 lg:px-16 xl:px-20 gap-6 md:gap-10 lg:gap-12">
          {/* Αριστερα: ημερομηνία + STAGE I - αριστερα απο το GIF */}
          <div className="flex flex-col flex-shrink-0">
            <p className="text-base md:text-lg lg:text-xl" style={{ color: '#333333' }}>
              ΦΕΒΡΟΥΑΡΙΟΣ – ΙΟΥΝΙΟΣ 2024
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-1" style={{ color: '#9ea2b5' }}>
              STAGE I
            </p>
          </div>

          {/* Μεση: GIF */}
          <div className="flex items-center justify-center flex-shrink-0">
            <img
              src="/images/about/diagram~mv2.gif"
              alt=""
              className="max-h-24 md:max-h-32 lg:max-h-40 w-auto object-contain"
            />
          </div>

          {/* Δεξια: Ideas Generation - δεξια απο το GIF */}
          <div className="flex items-center flex-shrink-0">
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold" style={{ color: '#3730a3' }}>
              Ideas Generation
            </p>
          </div>
        </div>
      </div>

      {/* Three blocks - Stage I details */}
      <div className="w-full h-[320px] md:h-[360px] lg:h-[400px] relative" style={{ backgroundColor: '#eef1f6' }}>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 items-stretch">
          {/* Αριστερα: Εναρκτήρια Εκδήλωση */}
          <div className="py-12 md:py-16 lg:py-20 px-6 md:px-8 text-center h-full flex flex-col justify-center" style={{ backgroundColor: '#ffffff' }}>
            <p className="text-sm md:text-base uppercase tracking-wide mb-3" style={{ color: '#333333' }}>
              Εναρκτήρια Εκδήλωση
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1" style={{ color: '#69b42a' }}>
              5 ΜΑΡΤΙΟΥ
            </p>
            <p className="text-lg md:text-xl font-semibold mb-4" style={{ color: '#69b42a' }}>
              17:00
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-1" style={{ color: '#333333' }}>
              Αίθουσα Τεχνολογικού Πολιτιστικού Πάρκου Λαυρίου
            </p>
            <p className="text-sm md:text-base" style={{ color: '#69b42a' }}>
              &quot;Επίπλευση&quot;
            </p>
          </div>

          {/* Μεση: Υποβολή προτάσεων - πρασινο background */}
          <div className="py-12 md:py-16 lg:py-20 px-6 md:px-8 flex flex-col justify-center items-center text-center h-full" style={{ backgroundColor: '#69b42a' }}>
            <p className="text-white uppercase tracking-wide text-sm md:text-base mb-1">
              Υποβολή προτάσεων
            </p>
            <p className="text-white text-sm mb-2">έως</p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              30 ΙΟΥΝΙΟΥ
            </p>
          </div>

          {/* Δεξια: Δυνατότητα συμμετοχής */}
          <div className="py-12 md:py-16 lg:py-20 px-6 md:px-8 h-full flex flex-col justify-center" style={{ backgroundColor: '#ffffff' }}>
            <h3 className="text-base md:text-lg font-semibold mb-4 text-center" style={{ color: '#333333' }}>
              Δυνατότητα συμμετοχής
            </h3>
            <ul className="space-y-2 text-sm md:text-base text-left" style={{ color: '#333333' }}>
              <li>• Ερευνητές/-τριες</li>
              <li>• Νέοι/-ες Απόφοιτοι</li>
              <li>• Φοιτητές/-τριες</li>
              <li>• Spin-off επιχειρήσεις</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline
