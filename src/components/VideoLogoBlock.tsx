/**
 * Video Logo Block Component
 * 
 * Displays a layered block with:
 * - Video background (full cover)
 * - PNG overlay on top (object-contain to show full logo without clipping)
 * 
 * The overlay PNG contains both the logo and "INNOVATE EAST" text.
 * NO circle crop - shows the full logo/overlay as-is.
 * 
 * @param size - Size in pixels (default: 520)
 * @param className - Additional Tailwind classes
 */
interface VideoLogoBlockProps {
  size?: number
  className?: string
}

const VideoLogoBlock = ({ size = 520, className = '' }: VideoLogoBlockProps) => {
  return (
    <div
      className={`relative max-w-[90vw] aspect-square ${className}`}
      style={{
        width: `${size}px`,
        maxWidth: '90vw',
        aspectRatio: '1 / 1',
      }}
    >
      {/* Video Background - absolute positioned, full cover */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero/file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* PNG Overlay - contains logo + text, transparent background, object-contain to show full logo */}
      <img
        src="/images/hero/logoheromasked.png"
        alt="Innovate East Logo"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        onError={(e) => {
          // Fallback to existing path if new path doesn't exist
          if (e.currentTarget.src !== '/images/hero/logohero2.png') {
            e.currentTarget.src = '/images/hero/logohero2.png'
          }
        }}
        loading="eager"
      />
    </div>
  )
}

export default VideoLogoBlock
