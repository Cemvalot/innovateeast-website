import { useEffect, useRef, ReactNode } from 'react'

interface LogoItem {
  src?: string
  alt?: string
  node?: ReactNode
  href?: string
}

interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right'
  logoHeight?: number
  gap?: number
  hoverSpeed?: number
  scaleOnHover?: boolean
  fadeOut?: boolean
  fadeOutColor?: string
  ariaLabel?: string
  useCustomRender?: boolean
}

const LogoLoop = ({
  logos,
  speed = 50,
  direction = 'left',
  logoHeight = 28,
  gap = 32,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel,
  useCustomRender = false,
}: LogoLoopProps) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const currentPositionRef = useRef(0)
  const isHoveredRef = useRef(false)

  useEffect(() => {
    if (!trackRef.current) return

    const track = trackRef.current
    const list = track.querySelector('.logoloop__list') as HTMLElement
    if (!list) return

    // Duplicate logos for seamless loop
    const clonedList = list.cloneNode(true) as HTMLElement
    track.appendChild(clonedList)

    const animate = () => {
      if (!isHoveredRef.current) {
        currentPositionRef.current += direction === 'left' ? -speed / 60 : speed / 60
      } else if (hoverSpeed !== 0) {
        currentPositionRef.current += direction === 'left' ? -hoverSpeed / 60 : hoverSpeed / 60
      }

      const listWidth = list.offsetWidth
      if (Math.abs(currentPositionRef.current) >= listWidth) {
        currentPositionRef.current = 0
      }

      if (track) {
        track.style.transform = `translate3d(${currentPositionRef.current}px, 0, 0)`
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    const handleMouseEnter = () => {
      isHoveredRef.current = true
    }

    const handleMouseLeave = () => {
      isHoveredRef.current = false
    }

    track.addEventListener('mouseenter', handleMouseEnter)
    track.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      track.removeEventListener('mouseenter', handleMouseEnter)
      track.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [speed, direction, hoverSpeed])

  const logoStyle = {
    '--logoloop-gap': `${gap}px`,
    '--logoloop-logoHeight': `${logoHeight}px`,
    '--logoloop-fadeColor': fadeOutColor,
  } as React.CSSProperties

  return (
    <div
      className={`logoloop ${scaleOnHover ? 'logoloop--scale-hover' : ''} ${fadeOut ? 'logoloop--fade' : ''}`}
      style={logoStyle}
      aria-label={ariaLabel}
    >
      <div className="logoloop__track" ref={trackRef}>
        <div className="logoloop__list">
          {logos.map((logo, index) => (
            <div key={index} className="logoloop__item">
              {logo.href ? (
                <a href={logo.href} className="logoloop__link" target="_blank" rel="noopener noreferrer">
                  {logo.src ? (
                    <img 
                      src={logo.src} 
                      alt={logo.alt || ''} 
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                    />
                  ) : (
                    <div className="logoloop__node">{logo.node}</div>
                  )}
                </a>
              ) : logo.src ? (
                <img 
                  src={logo.src} 
                  alt={logo.alt || ''} 
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              ) : (
                <div className="logoloop__node">{logo.node}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoLoop
