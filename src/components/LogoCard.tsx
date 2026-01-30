/**
 * Logo Card Component
 * 
 * Displays a grey square card containing a circular logo badge:
 * - Outer wrapper: Light grey square card (520x520px)
 * - Inner circle: Video background + PNG overlay (420x420px, rounded-full)
 * 
 * @param className - Additional Tailwind classes
 */
interface LogoCardProps {
  className?: string
}

const LogoCard = ({ className = '' }: LogoCardProps) => {
  return (
    <div
      className={`bg-[#f3f5f7] w-[520px] h-[520px] flex items-center justify-center shadow-sm rounded-md ${className}`}
    >
      {/* Inner circle wrapper - ONLY this has rounded-full + overflow-hidden */}
      <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden ring-1 ring-black/10">
        {/* Video Background - absolute positioned, full cover */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
          <source src="/images/hero/file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* PNG Overlay - contains logo + text, transparent background, FULL COVER */}
        {/* object-cover + scale-[1.08] ensures overlay fills entire circle perfectly */}
        <img
          src="/logo/innovate-overlay.png"
          alt="Innovate East Logo"
          className="absolute inset-0 w-full h-full object-cover scale-[1.08] pointer-events-none"
          onError={(e) => {
            // Fallback to existing path if new path doesn't exist
            if (e.currentTarget.src !== '/images/hero/logohero2.png') {
              e.currentTarget.src = '/images/hero/logohero2.png'
            }
          }}
          loading="eager"
        />
      </div>
    </div>
  )
}

export default LogoCard
