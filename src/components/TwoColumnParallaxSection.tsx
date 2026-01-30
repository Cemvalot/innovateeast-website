interface TwoColumnParallaxSectionProps {
  /** Path to image (e.g. /images/about/paralaximg.jpg). Add your image in public folder. */
  imageSrc?: string
}

/**
 * Δύο κομμάτια 50-50: αριστερά εικόνα (fixed parallax), δεξιά κείμενο.
 */
const TwoColumnParallaxSection = ({ imageSrc = '/images/about/paralaximg.jpg' }: TwoColumnParallaxSectionProps) => {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] lg:min-h-[560px] bg-white items-start"
      aria-label="Σχετικά με το διαγωνισμό"
    >
      {/* Left 50%: parallax + εικόνα ακριβώς 1080×1080 px (native) ώστε να φαίνεται σωστά */}
      <div
        className="w-full aspect-square min-h-[320px] lg:min-h-0 bg-left bg-no-repeat overflow-hidden bg-[#1e3a5f]"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundAttachment: 'fixed',
          backgroundSize: '1080px 1080px',
        }}
        aria-hidden
      />

      {/* Right 50%: κείμενο */}
      <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12 xl:p-16 bg-white">
        <div className="w-full max-w-xl space-y-6 text-left">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            <span className="text-[#4CAF50] font-semibold">
              Ο 1ος Διαγωνισμός Πράσινης και Γαλάζιας Καινοτομίας της Μητρόπολης Μεσογαίας και Λαυρεωτικής
            </span>{' '}
            φέρνει για πρώτη φορά κοντά, σε έναν κοινό σκοπό, το σύνολο των δημόσιων φορέων, των ακαδημαϊκών ιδρυμάτων, αλλά και των επιχειρήσεων της ευρύτερης περιοχής.
          </p>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Ο Διαγωνισμός αποσκοπεί στην ενίσχυση και αξιοποίηση των υψηλής ποιότητας επιστημονικών επιδόσεων της χώρας, καθώς και στην κινητοποίηση των νέων ερευνητών, φοιτητών, μεταπτυχιακών και μεταδιδακτορικών, που δραστηριοποιούνται τόσο στην Ελλάδα όσο και στο εξωτερικό, προκειμένου να αναδείξουν καινοτόμες ιδέες και πρωτοβουλίες που θα συνεισφέρουν στην ανάπτυξη και αξιοποίηση των δυνατοτήτων της περιοχής των Μεσογείων και της Λαυρεωτικής.
          </p>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Οι υποψήφιοι καλούνται να βρουν καινοτόμες λύσεις για την αντιμετώπιση των σύγχρονων προκλήσεων σε θέματα Πράσινης και Γαλάζιας Οικονομίας.
          </p>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            Απώτερο στόχο αποτελεί η επιτυχημένη υλοποίηση των επιχειρηματικών ιδεών που θα αναδειχθούν μέσω του Διαγωνισμού, με την εφαρμογή τους στο ευρύτερο πλαίσιο της περιοχής.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TwoColumnParallaxSection
