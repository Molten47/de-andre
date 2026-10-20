import React, { useEffect, useRef, useState } from 'react'
import earthImage from '../../assets/earth-image.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import {
  earthPositions,
  responsiveScale,
  mediaQueries,
  loopEase,
  floatAnimation,
  heroContent,
  legSeconds,
  holdSeconds,
  contentSwapAt,
  earthBaseWidthVw,
  spinSeconds,
  initialHoldSeconds
  
} from './heroAnimation.config'

const alignmentClasses = {
  center: 'items-center text-center',
  left: 'items-center text-center md:items-start md:text-left',
  right: 'items-center text-center md:items-end md:text-right',
}

const Hero = () => {
  const heroRef = useRef(null)
  const earthWrapperRef = useRef(null)
  const earthFloatRef = useRef(null)
  const earthSpinRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Gentle continuous float, independent of the position/scale/rotation timeline below.
  useEffect(() => {
    const floatTween = gsap.to(earthFloatRef.current, {
      y: `+=${floatAnimation.distance}`,
      duration: floatAnimation.duration,
      ease: floatAnimation.ease,
      repeat: -1,
      yoyo: true,
    })

    return () => floatTween.kill()
  }, [])
// Spin Effect for the earth Image

  useEffect(() => {
  const spinTween = gsap.to(earthSpinRef.current, {
    rotation: 360,
    duration: spinSeconds,
    ease: 'none',
    repeat: -1,
    transformOrigin: '50% 50%',
  })
  return () => spinTween.kill()
}, [])

  // Main Earth movement loop: cycles through earthPositions and syncs hero content.
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(mediaQueries, (context) => {
      const { desktop, tablet } = context.conditions
      const scaleKey = desktop ? 'desktop' : tablet ? 'tablet' : 'mobile'
    const { distance, size } = responsiveScale[scaleKey]
    const vw = window.innerWidth
    const vh = window.innerHeight

    const positions = earthPositions.map((position) => {
    const diameter = vw * (earthBaseWidthVw / 100) * position.scale * size

    return {
      x: position.x * vw * distance,
      // topVh pins the Earth's top edge; otherwise fall back to a plain y ratio
      y: position.topVh !== undefined
        ? (position.topVh - 0.5) * vh + diameter / 2
        : position.y * vh * distance,
      scale: position.scale * size,
      rotation: position.rotation,
      flip: position.flip,
    }
})

      gsap.set(earthWrapperRef.current, {
        xPercent: -50,
        yPercent: -50,
        x: positions[0].x,
        y: positions[0].y,
        scaleX: positions[0].flip ? -positions[0].scale : positions[0].scale,
        scaleY: positions[0].scale,
        rotation: positions[0].rotation,
      })
      setActiveIndex(0)

      const timeline = gsap.timeline({ repeat: -1 })


      positions.forEach((_, index) => {
        const nextIndex = (index + 1) % positions.length
        const next = positions[nextIndex]
        const label = `leg${index}`

        // Hold at the current keyframe (index 0 = centered main content first)
       const hold = index === 0 ? initialHoldSeconds : holdSeconds
      timeline.addLabel(label, `+=${hold}`)

        timeline.to(
          earthWrapperRef.current,
          {
            x: next.x,
            y: next.y,
            scaleX: next.flip ? -next.scale : next.scale,
            scaleY: next.scale,
            rotation: next.rotation,
            duration: legSeconds,
            ease: loopEase,
          },
          label
        )

        // Swap content partway through the move
        timeline.call(
          () => setActiveIndex(nextIndex),
          null,
          `${label}+=${legSeconds * contentSwapAt}`
        )
      }) // end forEach

      return () => timeline.kill()
    }) // end mm.add

    return () => mm.revert()
  }, [])

  const activeContent = heroContent[activeIndex]
//Cta 0r button classes control
const ctaBase =
  'font-secondary font-medium leading-none flex items-center justify-center mt-2 ' +
  'w-[clamp(9rem,13vw,12.5rem)] h-[clamp(2.5rem,3.1vw,2.95rem)] ' +
  'text-[clamp(1rem,1.35vw,1.25rem)] rounded-[10px] transition-transform hover:scale-105'

const ctaVariants = {
  filled: 'bg-primary-white text-[#1b1b1b]',
  outline: 'bg-transparent text-white border border-white',
}

  return (
    <div
      ref={heroRef}
      className="flex flex-col relative sm:min-h-[400px] h-[100vh] min-h-screen w-full items-center bg-black overflow-hidden"
    >
      {/* Content layer, positioned per active Earth keyframe */}
      <div className="w-full h-full flex items-center px-6 md:px-16 lg:px-24 z-10 relative pointer-events-none">
        {/* was: relative w-full md:w-1/2 min-h-[...] */}
<div className="relative w-full min-h-[300px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]">
          <AnimatePresence>
            <motion.div
              key={activeContent.id}
              className={`absolute inset-0 flex flex-col justify-center gap-4 text-white pointer-events-auto ${alignmentClasses[activeContent.align]}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
           {activeContent.title && (
             <h1 className="font-secondary font-bold md:font-medium text-[3.9rem] md:text-[clamp(2.5rem,7vw,7.5rem)] leading-[1.05]">
              {activeContent.title}
            </h1>
            )}
              <p
              className={`font-secondary font-normal text-[clamp(1rem,2vw,1.75rem)] ${
                activeContent.align === 'center'
                  ? 'md:whitespace-nowrap max-w-none'
                  : 'max-w-[22ch] md:max-w-lg text-balance'
              }`}
            >
              {activeContent.subtitle}
            </p>
            <a
            href={activeContent.cta.href}
            target="_blank"
            rel="noreferrer"
            className={`${ctaBase} ${ctaVariants[activeContent.cta.variant]}`}
          >
            {activeContent.cta.label}
          </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Earth: outer layer drives the GSAP position/scale/rotation/flip timeline,
          inner layer drives the independent floating bounce. */}
     <div
        ref={earthWrapperRef}
        className="absolute left-1/2 top-1/2"
        style={{ width: `${earthBaseWidthVw}vw`, willChange: 'transform' }}
      >
     <div ref={earthFloatRef} style={{ willChange: 'transform' }}>
    <div ref={earthSpinRef} style={{ willChange: 'transform' }}>
      <img
        src={earthImage}
        alt="Earth"
        draggable="false"
        className="w-full h-auto object-contain select-none pointer-events-none"
      />
    </div>
</div>
      </div>
    </div>
  )
}

export default Hero