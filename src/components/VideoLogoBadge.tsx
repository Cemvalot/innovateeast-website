/**
 * Video Logo Badge Component
 * 
 * Displays a perfect circle with:
 * - Video background (Wix wow-image fill mode equivalent)
 * - PNG overlay on top (does not clip, shows full logo)
 * 
 * Video behaves like Wix wow-image with displayMode="fill":
 * - Fills container completely (520x520px) without distortion
 * - Uses object-fit: cover and object-position: center
 * - Crops where needed to maintain aspect ratio
 * 
 * @param size - Size in pixels (default: 520)
 * @param className - Additional Tailwind classes
 */
interface VideoLogoBadgeProps {
  size?: number
  className?: string
}

const VideoLogoBadge = ({ size = 520, className = '' }: VideoLogoBadgeProps) => {
  return (
    <div
      className={`relative w-[520px] h-[520px] rounded-full overflow-hidden ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {/* Video Background - Wix wow-image fill mode equivalent */}
      {/* object-cover + object-center = fill mode: fills container, crops if needed, centers content */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        <source src="/images/hero/file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* PNG Overlay - does not clip, shows full logo */}
      {/* object-contain ensures overlay is not cropped, scale-[1.2] for larger size */}
      <img
        src="/images/hero/logohero2.png"
        className="absolute inset-0 w-full h-full object-contain scale-[1.33] pointer-events-none"
        alt="Innovate East"
        loading="eager"
      />
    </div>
  )
}

export default VideoLogoBadge
