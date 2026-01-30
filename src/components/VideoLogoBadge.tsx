/**
 * Video Logo Badge Component
 *
 * Layers (back to front):
 * 1. Grey background (#F3F4F6)
 * 2. Video layer (middle)
 * 3. Logo layer (on top, mask with #F3F4F6)
 *
 * @param size - Size in pixels (default: 520)
 * @param className - Additional Tailwind classes
 */

const HERO_LOGO_COLOR = '#F3F4F6'
const HERO_LOGO_IMAGE = '/images/hero/logohero2.png'
const HERO_VIDEO_SRC = '/images/hero/file.mp4'

interface VideoLogoBadgeProps {
  size?: number
  className?: string
}

const VideoLogoBadge = ({ size = 520, className = '' }: VideoLogoBadgeProps) => {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: HERO_LOGO_COLOR,
      }}
    >
      {/* Layer 2 (middle): video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Layer 3 (top): logo in exact colour via mask */}
      <div
        className="relative z-10 w-full h-full scale-150 pointer-events-none"
        style={{
          backgroundColor: HERO_LOGO_COLOR,
          maskImage: `url(${HERO_LOGO_IMAGE})`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url(${HERO_LOGO_IMAGE})`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
        }}
        role="img"
        aria-label="Innovate East"
      />
    </div>
  )
}

export default VideoLogoBadge
