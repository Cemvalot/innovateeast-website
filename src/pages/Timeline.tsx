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
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-3 items-center px-8 sm:px-12 lg:px-16 xl:px-20 gap-1 md:gap-2 lg:gap-3">
          {/* Αριστερα: ημερομηνία + STAGE I - αριστερα απο το GIF */}
          <div className="flex flex-col justify-center">
            <p className="text-base md:text-lg lg:text-xl" style={{ color: '#333333' }}>
              ΦΕΒΡΟΥΑΡΙΟΣ – ΙΟΥΝΙΟΣ 2024
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-1" style={{ color: '#9ea2b5' }}>
              STAGE I
            </p>
          </div>

          {/* Μεση: GIF */}
          <div className="flex items-center justify-center">
            <img
              src="/images/about/diagram~mv2.gif"
              alt=""
              className="max-h-24 md:max-h-32 lg:max-h-40 w-auto object-contain"
            />
          </div>

          {/* Δεξια: Ideas Generation - δεξια απο το GIF */}
          <div className="flex items-center justify-center">
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

      {/* Stage II Block - κατω απο το 30 ΙΟΥΝΙΟΥ - ίδια στοίχιση με Stage I */}
      <div className="w-full py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center h-[320px] md:h-[360px] lg:h-[400px]" style={{ backgroundColor: '#eef1f6' }}>
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-3 items-center px-8 sm:px-12 lg:px-16 xl:px-20 gap-1 md:gap-2 lg:gap-3">
          {/* Αριστερα: ημερομηνία + STAGE II - ίδια δομή με Stage I */}
          <div className="flex flex-col justify-center">
            <p className="text-base md:text-lg lg:text-xl" style={{ color: '#333333' }}>
              ΙΟΥΝΙΟΣ 2024 – ΙΑΝΟΥΑΡΙΟΣ 2025
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-1" style={{ color: '#9ea2b5' }}>
              STAGE II
            </p>
          </div>

          {/* Μεση: GIF - ίδια δομή με Stage I */}
          <div className="flex items-center justify-center">
            <img
              src="/images/about/2cnddiagram.gif"
              alt=""
              className="max-h-24 md:max-h-32 lg:max-h-40 w-auto object-contain"
            />
          </div>

          {/* Δεξια: Ideas Maturity - ίδια δομή με Stage I */}
          <div className="flex items-center justify-center">
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold" style={{ color: '#3730a3' }}>
              Ideas Maturity
            </p>
          </div>
        </div>
      </div>

      {/* Three blocks - Stage II details */}
      <div className="w-full h-[320px] md:h-[360px] lg:h-[400px] relative" style={{ backgroundColor: '#eef1f6' }}>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 items-stretch">
          {/* Αριστερα: Αξιολόγηση προτάσεων */}
          <div className="py-12 md:py-16 lg:py-20 px-6 md:px-8 text-center h-full flex flex-col justify-center" style={{ backgroundColor: '#ffffff' }}>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold" style={{ color: '#333333' }}>
              Αξιολόγηση προτάσεων
            </p>
          </div>

          {/* Μεση: Αντιστοίχιση υποψηφίων με δίκτυο μεντόρων - γκρι background */}
          <div className="py-12 md:py-16 lg:py-20 px-6 md:px-8 flex flex-col justify-center items-center text-center h-full" style={{ backgroundColor: '#f5f5f5' }}>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold" style={{ color: '#333333' }}>
              Αντιστοίχιση υποψηφίων με δίκτυο μεντόρων
            </p>
          </div>

          {/* Δεξια: Mentoring */}
          <div className="py-12 md:py-16 lg:py-20 px-6 md:px-8 h-full flex flex-col justify-center text-center" style={{ backgroundColor: '#ffffff' }}>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold" style={{ color: '#333333' }}>
              Mentoring
            </p>
          </div>
        </div>
      </div>

      {/* Stage III Block - κατω απο το Stage II details - ίδια στοίχιση με Stage I και II */}
      <div className="w-full py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center h-[320px] md:h-[360px] lg:h-[400px]" style={{ backgroundColor: '#eef1f6' }}>
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-3 items-center px-8 sm:px-12 lg:px-16 xl:px-20 gap-1 md:gap-2 lg:gap-3">
          {/* Αριστερα: ημερομηνία + STAGE III - ίδια δομή με Stage I και II */}
          <div className="flex flex-col justify-center">
            <p className="text-base md:text-lg lg:text-xl" style={{ color: '#333333' }}>
              ΦΕΒΡΟΥΑΡΙΟΣ – ΑΠΡΙΛΙΟΣ 2025
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-1" style={{ color: '#9ea2b5' }}>
              STAGE III
            </p>
          </div>

          {/* Μεση: GIF - λίγο μεγαλύτερο από Stage I και II */}
          <div className="flex items-center justify-center">
            <img
              src="/images/about/3rdgifdiagram.gif"
              alt=""
              className="max-h-28 md:max-h-36 lg:max-h-44 xl:max-h-52 w-auto object-contain"
            />
          </div>

          {/* Δεξια: Ideas Evaluation - ίδια δομή με Stage I και II */}
          <div className="flex items-center justify-center">
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold" style={{ color: '#3730a3' }}>
              Ideas Evaluation
            </p>
          </div>
        </div>
      </div>

      {/* Two blocks - Stage III details */}
      <div className="w-full h-[320px] md:h-[360px] lg:h-[400px] relative" style={{ backgroundColor: '#eef1f6' }}>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Αριστερα: Παρουσίαση των προτάσεων στα μέλη της Επιστημονικής Επιτροπής Αξιολόγησης */}
          <div className="py-12 md:py-16 lg:py-20 px-6 md:px-8 text-center h-full flex flex-col justify-center" style={{ backgroundColor: '#f5f5f5' }}>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold" style={{ color: '#333333' }}>
              Παρουσίαση των προτάσεων στα μέλη
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold" style={{ color: '#333333' }}>
              της Επιστημονικής Επιτροπής
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold" style={{ color: '#333333' }}>
              Αξιολόγησης
            </p>
          </div>

          {/* Δεξια: Αξιολόγηση των προτάσεων από την Επιτροπή */}
          <div className="py-12 md:py-16 lg:py-20 px-6 md:px-8 h-full flex flex-col justify-center text-center" style={{ backgroundColor: '#ffffff' }}>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold" style={{ color: '#333333' }}>
              Αξιολόγηση των προτάσεων από την
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold" style={{ color: '#333333' }}>
              Επιτροπή
            </p>
          </div>
        </div>
      </div>

      {/* Stage IV Block - κατω απο το Stage III details - ίδια στοίχιση με Stage I, II και III */}
      <div className="w-full py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center h-[320px] md:h-[360px] lg:h-[400px]" style={{ backgroundColor: '#eef1f6' }}>
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-3 items-center px-8 sm:px-12 lg:px-16 xl:px-20 gap-1 md:gap-2 lg:gap-3">
          {/* Αριστερα: ημερομηνία + STAGE IV - ίδια δομή με Stage I, II και III */}
          <div className="flex flex-col justify-center">
            <p className="text-base md:text-lg lg:text-xl" style={{ color: '#333333' }}>
              ΟΚΤΩΒΡΙΟΣ 2025
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-1" style={{ color: '#9ea2b5' }}>
              STAGE IV
            </p>
          </div>

          {/* Μεση: GIF - ίδια δομή με Stage I, II και III */}
          <div className="flex items-center justify-center">
            <img
              src="/images/about/4thgiddiagram.gif"
              alt=""
              className="max-h-24 md:max-h-32 lg:max-h-40 w-auto object-contain"
            />
          </div>

          {/* Δεξια: Ideas East - ίδια δομή με Stage I, II και III */}
          <div className="flex items-center justify-center">
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold" style={{ color: '#3730a3' }}>
              Ideas East
            </p>
          </div>
        </div>
      </div>

      {/* Two blocks - Stage IV details */}
      <div className="w-full h-[320px] md:h-[360px] lg:h-[400px] relative" style={{ backgroundColor: '#eef1f6' }}>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 items-stretch">
          {/* Αριστερα: Ανάδειξη των νικητήριων ιδεών στην Τελετή Βράβευσης */}
          <div className="py-12 md:py-16 lg:py-20 px-6 md:px-8 text-center h-full flex flex-col justify-center" style={{ backgroundColor: '#ffffff' }}>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold" style={{ color: '#333333' }}>
              Ανάδειξη των νικητήριων ιδεών στην
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold" style={{ color: '#333333' }}>
              Τελετή Βράβευσης
            </p>
          </div>

          {/* Δεξια: Βραβεία */}
          <div className="py-12 md:py-16 lg:py-20 px-6 md:px-8 h-full flex flex-col justify-center text-center" style={{ backgroundColor: '#f5f5f5' }}>
            <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#333333' }}>
              Βραβεία
            </p>
            <div className="space-y-2">
              <p className="text-lg md:text-xl lg:text-2xl font-bold" style={{ color: '#69b42a' }}>
                1η Θέση: 5.000 €
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-bold" style={{ color: '#69b42a' }}>
                2η Θέση: 3.000 €
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-bold" style={{ color: '#69b42a' }}>
                3η Θέση: 2.000 €
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline
