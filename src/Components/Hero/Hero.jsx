import React, { useEffect, useRef, useState } from 'react'
import earthImage from '../../assets/earth-image.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import {
  earthPositions,
  responsiveScale,
  mediaQueries,
  loopDurationSeconds,
  loopEase,
  floatAnimation,
  heroContent,
} from './heroAnimation.config'

const alignmentClasses = {
  center: 'items-center text-center mx-auto',
  left: 'items-center text-center md:items-start md:text-left md:mr-auto',
  right: 'items-center text-center md:items-end md:text-right md:ml-auto',
}

const Hero = () => {
  const heroRef = useRef(null)
  const earthWrapperRef = useRef(null)
  const earthFloatRef = useRef(null)
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

  // Main Earth movement loop: cycles through earthPositions and syncs hero content.
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(mediaQueries, (context) => {
      const { desktop, tablet } = context.conditions
      const scaleKey = desktop ? 'desktop' : tablet ? 'tablet' : 'mobile'
      const { distance, size } = responsiveScale[scaleKey]

      const positions = earthPositions.map((position) => ({
        x: position.x * distance,
        y: position.y * distance,
        scale: position.scale * size,
        rotation: position.rotation,
        flip: position.flip,
      }))

      gsap.set(earthWrapperRef.current, {
        xPercent: -50,
        yPercent: -50,
        x: positions[0].x,
        y: positions[0].y,
        scaleX: positions[0].scale,
        scaleY: positions[0].scale,
        rotation: positions[0].rotation,
      })
      setActiveIndex(0)

      const legDuration = loopDurationSeconds / positions.length
      const timeline = gsap.timeline({ repeat: -1 })

      positions.forEach((_, index) => {
        const nextIndex = (index + 1) % positions.length
        const next = positions[nextIndex]

        timeline.to(earthWrapperRef.current, {
          x: next.x,
          y: next.y,
          scaleX: next.flip ? -next.scale : next.scale,
          scaleY: next.scale,
          rotation: next.rotation,
          duration: legDuration,
          ease: loopEase,
          onComplete: () => setActiveIndex(nextIndex),
        })
      })

      return () => timeline.kill()
    })

    return () => mm.revert()
  }, [])

  const activeContent = heroContent[activeIndex]

  return (
    <div
      ref={heroRef}
      className="flex flex-col relative sm:min-h-[400px] h-[100vh] min-h-screen w-full items-center bg-black overflow-hidden"
    >
      {/* Content layer, positioned per active Earth keyframe */}
      <div className="w-full h-full flex items-center px-6 md:px-16 lg:px-24 z-10 relative pointer-events-none">
        <div className="relative w-full md:w-1/2 min-h-[300px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[280px]">
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
                <h1 className="font-secondary font-bold text-[3.9rem] md:text-5xl lg:text-6xl leading-tight">
                  {activeContent.title}
                </h1>
              )}
              <p className="font-secondary font-normal text-base md:text-lg lg:text-xl max-w-md">
                {activeContent.subtitle}
              </p>
              <a
                href={activeContent.cta.href}
                target="_blank"
                rel="noreferrer"
                className={
                  activeContent.cta.variant === 'filled'
                    ? 'bg-primary-white text-[#1b1b1b] font-secondary leading-[100%] font-bold flex items-center text-sm md:text-base px-6 py-2 rounded-[10px] mt-2 w-fit transition-transform hover:scale-105'
                    : 'bg-transparent text-white font-secondary leading-[100%] font-bold flex items-center text-sm md:text-base px-6 py-2 border-2 border-white rounded-[10px] mt-2 w-fit transition-transform hover:scale-105'
                }
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
        className="absolute left-1/2 top-1/2 w-[70vw] max-w-[760px] sm:w-[55vw] md:w-[48vw] lg:w-[42vw]"
        style={{ willChange: 'transform' }}
      >
        <div ref={earthFloatRef} style={{ willChange: 'transform' }}>
          <img
            src={earthImage}
            alt="Earth"
            draggable="false"
            className="w-full h-auto object-contain select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
