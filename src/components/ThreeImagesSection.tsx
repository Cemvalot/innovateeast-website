/**
 * Section με τρεις εικόνες σε σειρά (INNOVATE EAST – ομιλία, ακροατήριο, ομαδική φωτογραφία).
 */
const ThreeImagesSection = () => {
  const images = [
    { src: '/images/about/1stimageunder.png', alt: 'Ομιλία – INNOVATE EAST' },
    { src: '/images/about/2ncdimageunder.png', alt: 'Ακροατήριο – INNOVATE EAST' },
    { src: '/images/about/3rdimageunder.png', alt: 'Ομαδική φωτογραφία – INNOVATE EAST' },
  ]

  return (
    <section
      className="bg-white pt-0 pb-0"
      aria-label="Στιγμιότυπα από την εκδήλωση INNOVATE EAST"
    >
      <div className="w-full max-w-none h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
          {images.map((img, index) => (
            <div key={index} className="w-full overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover object-center"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThreeImagesSection
