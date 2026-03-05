import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import earthImage from '../../assets/earth-image.jpg'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [showAlternate, setShowAlternate] = useState(false)
  
  const handleScreenTouch = () => {
    setShowAlternate(prev => !prev)
  }

  return (
    <div 
      className='flex flex-col relative sm:min-h-[400px] h-[100vh] min-h-screen w-full items-center bg-black overflow-hidden'
      onClick={handleScreenTouch}
    >
      {/* Navbar at the top */}
      
      {/* Content container with AnimatePresence for transitions */}
      <AnimatePresence mode="wait">
        {!showAlternate ? (
          /* Main content centered */
          <motion.div 
            key="main"
            className="h-[70vh] mx-auto flex flex-col justify-center items-center pt-16 mt-8 pb-8 px-4 text-white text-center gap-4 z-10 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.h1 
            initial={{opacity:0, y: -100}}
            whileInView={{opacity:1, y:0}}
            transition={{type:'spring',
                  damping:10,
                  stiffness:100,
                  delay:0.2
            }}
            className='font-secondary font-bold text-[3.9rem] 
            md:text-5xl lg:text-6xl leading-tight'>
              Designed By DeAndre
            </motion.h1>
            <motion.p
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}} 
            transition={{type:"spring",
                        stiffness:100,
                        delay:0.41,
                        damping:10
            }}    
            className='font-secondary font-normal text-base md:text-lg lg:text-xl max-w-md mx-auto lg:text-nowrap'>
              Where Creativity Runs Wild and Aesthetics Rules
              </motion.p>
            
            {/* Glowing button */}
            <motion.a
            href='https://www.behance.net/DeAndre' 
            
              className='bg-primary-white text-[#1b1b1b] font-secondary leading-[100%] font-bold flex items-center text-sm md:text-base px-6 py-2 rounded-[10px] mt-2 relative overflow-hidden'
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.5)'
              }}
              whileTap={{ 
                scale: 0.98,
                boxShadow: '0 0 20px 8px rgba(255, 255, 255, 0.7)'
              }}
              transition={{
                scale: { type: 'spring', stiffness: 400, damping: 10 },
                boxShadow: { duration: 0.2 }
              }}
            >
              Explore
            </motion.a>
          </motion.div>
        ) : (
          /* Alternate content centered */
          <motion.div 
            key="alternate"
            className="h-[70vh] mx-auto flex flex-col justify-center items-center pt-16 mt-8 pb-8 px-4 text-white text-center gap-4 z-10 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className='font-secondary font-normal text-base md:text-lg lg:text-xl max-w-md mx-auto'
            >
              With Augmented Reality, we will give life to your imagination
            </motion.p>
            <motion.a
              href='https://www.behance.net/DeAndre' 
              className='bg-transparent text-[#ffffff] font-secondary leading-[100%] font-bold flex items-center text-sm md:text-base px-6 py-2 border-2 border-white rounded-[10px] mt-2 relative overflow-hidden'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Earth image with bounce and rotation - preserving original animation */}
      <motion.div
        initial={{ opacity: 0, x: 0, y: 0 }}
        animate={{ 
          opacity: 1,
          rotate: 360,
          x: [0, 50, -40, 30, -20, 0],
          y: [0, -40, 30, -20, 40, 0]
        }}
        transition={{
          opacity: { duration: 1.5, type: 'spring', bounce: 0.3 },
          rotate: { 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          },
          x: {
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          },
          y: {
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className='absolute top-1/4 w-full flex justify-center'
      >
        <img 
          src={earthImage} 
          alt="Earth background" 
          className="w-full md:w-2/3 lg:w-full h-auto object-contain"
        />
      </motion.div>
      
      {/* Optional tap instruction that fades out after first use */}
      <motion.div 
        initial={{ opacity: 0.8 }}
        animate={{ opacity: [0.8, 0.4, 0.8] }}
        transition={{ 
          opacity: { repeat: Infinity, duration: 2 },
        }}
        className="absolute bottom-8 text-center text-white text-sm opacity-70"
      >
        Tap anywhere to switch view
      </motion.div>
    </div>
  )
}

export default Hero