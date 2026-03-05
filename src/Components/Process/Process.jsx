import React from 'react'
import { motion } from 'framer-motion'

const Process = () => {
  const processes = [
    {
      id: 1,
      iconName: 'search',
      title: 'Research & Discovery',
      description: 'Deep dive into user needs, market analysis, and project requirements to establish a solid foundation.'
    },
    {
      id: 2,
      iconName: 'people',
      title: 'User Experience Design',
      description: 'Creating user flows, wireframes, and information architecture to optimize the user journey.'
    },
    {
      id: 3,
      iconName: 'palette',
      title: 'Visual Design',
      description: 'Crafting beautiful, consistent design systems that align with brand guidelines and enhance usability.'
    },
    {
      id: 4,
      iconName: 'view_carousel',
      title: 'Prototyping',
      description: 'Building interactive prototypes to validate design decisions and gather user feedback.'
    },
    {
      id: 5,
      iconName: 'code',
      title: 'Development Handoff',
      description: 'Preparing detailed specifications and assets for seamless implementation.'
    },
    {
      id: 6,
      iconName: 'task_alt',
      title: 'Testing & Iteration',
      description: 'Continuous testing and refinement to ensure the best possible user experience.'
    }
  ]
  
  // Icon animation variants
  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  }
  
  return (
    <div className="flex flex-col relative min-h-[80vh] w-full items-center bg-white overflow-hidden px-4 md:px-6 lg:px-8 pb-16">
      <div className='flex flex-col items-center font-secondary justify-center pt-16 gap-4 max-w-3xl text-center'>
        <motion.h1 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{
            type:'spring',
            stiffness:100,
            delay:0.1,
            damping:10
          }}
          className='text-secondary font-bold font-secondary text-[2.5rem] md:text-[2rem] sm:text-[1.8rem] mt-3.5'
        >
          My Process
        </motion.h1>
        <motion.div 
          initial={{opacity:0, y:100}}
          whileInView={{opacity:1, y:0}}
          transition={{
            type:'spring',
            stiffness:100,
            delay:0.2,
            damping:10
          }}
          className='w-[135.74px] rounded-lg bg-[#1f2937] h-[5.66px]'
        ></motion.div>
        <p className='text-justify md:text-center px-4 text-[0.95rem] md:text-[1rem] text-paragraph'>
          Explore my recent projects and case studies. Each project represents my dedication to creating meaningful, user-centered designs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
        {processes.map((process, index) => (
          <motion.div 
            key={process.id}
            className="bg-light rounded-xl shadow-lg px-8 py-12 flex flex-col items-start hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
                delay: index * 0.15 // Increased delay between items for more noticeable stagger
              }
            }}
            viewport={{ 
              once: false, 
              amount: 0.3,
              margin: "0px 0px -100px 0px" 
            }}
            whileHover={{ 
              y: -10,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 8
              }
            }}
          >
            <div className="flex items-center mb-4 w-full">
              <motion.div 
                className="w-12 h-12 bg-primary-lightblue rounded-lg flex items-center justify-center text-blue-800 mr-4"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false }}
              >
                <span className="material-icons">{process.iconName}</span>
              </motion.div>
              <motion.h3 
                className="text-xl font-bold w-2/3 text-gray-800"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.3 + index * 0.05, duration: 0.5 }
                }}
                viewport={{ once: false }}
              >
                {process.title}
              </motion.h3>
            </div>
            <motion.p 
              className="text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { delay: 0.4 + index * 0.05, duration: 0.5 }
              }}
              viewport={{ once: false }}
            >
              {process.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Process