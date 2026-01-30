import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

/**
 * Hero Left Logo Component
 * 
 * Features:
 * - Circular logo container with video background
 * - PNG overlay on top of video (white shapes/lines with transparency)
 * - "INNOVATE EAST" text with video fill effect
 * 
 * Layout:
 * - Desktop: Left-aligned with generous whitespace
 * - Mobile: Centered
 */
const HeroLeftLogo = () => {
  const textRef = useRef<HTMLHeadingElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create a canvas-based mask from the text
    const createTextMask = () => {
      if (!textRef.current || !videoRef.current || !containerRef.current) return

      const textElement = textRef.current
      const videoElement = videoRef.current
      const container = containerRef.current

      // Get computed styles
      const styles = window.getComputedStyle(textElement)
      const fontSize = parseInt(styles.fontSize)
      const fontWeight = styles.fontWeight
      const fontFamily = styles.fontFamily
      const letterSpacing = styles.letterSpacing

      // Create canvas
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // Set canvas size to match text bounds
      const text = 'INNOVATE EAST'
      canvas.width = container.offsetWidth || 800
      canvas.height = container.offsetHeight || 200

      // Draw black background (hidden areas in mask)
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw text in white (visible areas in mask)
      // White areas in mask = video visible, Black areas = video hidden
      ctx.fillStyle = 'white'
      ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
      ctx.textAlign = 'left'
      ctx.textBaseline = 'top'
      
      // Apply letter spacing if supported
      if (letterSpacing && letterSpacing !== 'normal') {
        const spacing = parseFloat(letterSpacing)
        // Manual letter spacing by drawing each character
        let x = 0
        for (let i = 0; i < text.length; i++) {
          const char = text[i]
          const metrics = ctx.measureText(char)
          ctx.fillText(char, x, (canvas.height - fontSize) / 2)
          x += metrics.width + (i < text.length - 1 ? spacing : 0)
        }
        // Center the entire text
        const totalWidth = x
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'black'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = 'white'
        x = (canvas.width - totalWidth) / 2
        for (let i = 0; i < text.length; i++) {
          const char = text[i]
          const metrics = ctx.measureText(char)
          ctx.fillText(char, x, (canvas.height - fontSize) / 2)
          x += metrics.width + (i < text.length - 1 ? spacing : 0)
        }
      } else {
        // Center text horizontally
        const textMetrics = ctx.measureText(text)
        const x = (canvas.width - textMetrics.width) / 2
        const y = (canvas.height - fontSize) / 2
        ctx.fillText(text, x, y)
      }

      // Convert canvas to data URL and use as mask for video
      // White areas = video visible, Black areas = video hidden
      const maskUrl = canvas.toDataURL()
      videoElement.style.maskImage = `url(${maskUrl})`
      ;(videoElement.style as any).webkitMaskImage = `url(${maskUrl})`
      videoElement.style.maskSize = 'contain'
      ;(videoElement.style as any).webkitMaskSize = 'contain'
      videoElement.style.maskRepeat = 'no-repeat'
      ;(videoElement.style as any).webkitMaskRepeat = 'no-repeat'
      videoElement.style.maskPosition = 'center'
      ;(videoElement.style as any).webkitMaskPosition = 'center'
      
      // Position video to align with text
      videoElement.style.width = '100%'
      videoElement.style.height = '100%'
    }

    // Wait for fonts and layout
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setTimeout(createTextMask, 100)
      })
    } else {
      setTimeout(createTextMask, 300)
    }

    // Recreate mask on resize
    const handleResize = () => {
      setTimeout(createTextMask, 100)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center lg:items-start"
    >
      {/* Circular Logo Container with Video + Overlay */}
      <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] mb-8 rounded-full overflow-hidden">
        {/* Video Background - absolute positioned, covers entire container */}
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

        {/* PNG Overlay - white shapes/lines with transparency, centered */}
        <img
          src="/images/hero/logoheromasked.png"
          alt="Innovate East Logo"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          loading="eager"
        />
      </div>

      {/* INNOVATE EAST Text with Video Fill */}
      <div
        ref={containerRef}
        className="relative w-full max-w-md video-text-container"
        style={{ minHeight: '120px' }}
      >
        {/* Video element masked by text shape - positioned behind text */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="video-text-bg absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        >
          <source src="/images/hero/file.mp4" type="video/mp4" />
        </video>

        {/* Text element - visible with stroke, video shows through inside */}
        <h1
          ref={textRef}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-left tracking-tight relative"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            /* 
             * Text stroke/outline in dark color (visible around letters)
             * Video fills the inside via mask
             */
            WebkitTextStroke: '2px rgba(0, 0, 0, 0.3)',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            /* Ensure text is visible for mask calculation */
            opacity: 1,
          }}
        >
          INNOVATE EAST
        </h1>
      </div>
    </motion.div>
  )
}

export default HeroLeftLogo
