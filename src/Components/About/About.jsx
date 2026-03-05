import React, { useState } from 'react'
import ProfileImage from '../../assets/2f025a6f9659f48af15c52d05257d11b.png'
import ResumePDF from '../../assets/DEANDRE - RESUME 2026 (1).pdf'
// Import framer motion
import { motion } from 'framer-motion'

// Animated paragraph component without fixed height to allow content to flow naturally
const AnimatedText = ({ text, className = "" }) => {
  // Animation variants for paragraph animation
  const paragraphVariant = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.p
      className={`${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={paragraphVariant}
    >
      {text}
    </motion.p>
  );
};

const About = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    const data = [
        {
            id: 1,
            bagIcon: <i className="material-symbols-outlined">trip</i>,
            title: 'Experience',
            description: '3+ in UI/UX Design'
        },
        {
            id: 2,
            bagIcon: <i className="material-symbols-outlined">lightbulb</i>,
            title: 'Projects',
            description: '10+ live completed projects'
        },
        {
            id: 3,
            bagIcon: <i className="material-symbols-outlined">license</i>,
            title: 'Awards',
            description: '1 Techie Award'
        },
        {
            id: 4,
            bagIcon: <i className="material-symbols-outlined">download</i>,
            title: 'Resume',
            description: 'Download CV',
            isDownloadButton: true,
            action: () => {
                const link = document.createElement('a');
                link.href = ResumePDF;
                link.download = 'DeAndre_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    ]

  const paragraph1 = "Hi, I am a top notch UI/UX Designer. I don’t just draw interfaces; I build digital ecosystems that breathe. With over two years of experience, I transform complex problems into intuitive, high-performing user journeys across high-impact sectors including fintech, energy, E-commerce and Agriculture.";
  
  const paragraph2 = "Backed by a professional certification from SQI College of ICT, I combine a data-informed approach with technical mastery to help startups and established enterprises scale. My expertise isn’t just in aesthetics; it’s in the full-stack design lifecycle: from User Research and Wireframing to High-Fidelity Prototyping and Scalable Design Systems. ";

  const paragraph3 = "I believe that great design is invisible. It should feel like a natural extension of the user’s thought process, guiding them through a journey without friction or confusion. To me, every pixel is a decision, and every interaction must have a purpose.";
  
  const handleDownloadClick = (item) => {
    if (item.action) {
      item.action();
    }
  };

  // Bounce animation for the download button
  const bounceAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut"
    }
  };
      
  return (
    <div className="w-full bg-white min-h-screen flex flex-col overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col items-center font-secondary justify-center pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10">
          <motion.h1 
            className="text-secondary font-bold font-secondary text-3xl sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h1>
          <motion.div 
            className="w-24 sm:w-32 md:w-40 rounded-lg bg-[#1f2937] h-1.5 mt-2 sm:mt-3"
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        {/* Main content section */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pb-12 sm:pb-16 md:pb-24">
          <div className="flex flex-col md:flex-row md:gap-8 lg:gap-14">
            {/* Profile image section - Fixed centering on mobile */}
            <motion.div 
              className="w-full md:w-[40%] mb-8 md:mb-0 flex justify-center md:block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-[90%] flex items-center justify-center md:items-start md:justify-start pt-4 sm:pt-10 md:pt-12 lg:pt-20">
                <img 
                  src={ProfileImage} 
                  className="rounded-xl w-full object-center max-w-sm md:max-w-none h-auto object-cover shadow-md md:h-auto lg:h-[60vh]" 
                  alt="Profile" 
                />
              </div>
            </motion.div>

            {/* Content section */}
            <div className="w-full md:w-[60%] lg:w-[60%]">
              {/* Who Am I section */}
              <motion.div 
                className="mb-6 mx-0 sm:mx-4 md:mx-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold font-secondary text-secondary mb-4 sm:mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Who I Am
                </motion.h2>
                <AnimatedText 
                  text={paragraph1}
                  className="text-paragraph text-base sm:text-lg leading-relaxed mt-3 sm:mt-4 text-justify"
                />
                <AnimatedText 
                  text={paragraph2}
                  className="text-paragraph text-base sm:text-lg leading-relaxed mt-4 text-justify"
                />
              </motion.div>

              {/* Design Philosophy section */}
              <motion.div 
                className="mb-8 sm:mb-10 md:mb-12 mx-0 sm:mx-4 md:mx-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.h2 
                  className="text-xl sm:text-2xl lg:text-3xl font-bold font-secondary text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Design Philosophy
                </motion.h2>
                <AnimatedText 
                  text={paragraph3}
                  className="text-paragraph text-base sm:text-lg leading-relaxed mt-3 sm:mt-4 md:mt-6 text-justify"
                />
              </motion.div>

              {/* Grid items section - Cards slide in from right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mx-0 sm:mx-4 md:mx-6">
                {data.map((item, index) => (
                  <motion.div
                    key={item.id} 
                    className={`flex items-center gap-3 sm:gap-4 md:gap-5 ${item.isDownloadButton ? 'relative cursor-pointer bg-blue-50 p-3 rounded-lg transition-all hover:bg-blue-100 hover:shadow-md' : ''}`}
                    onClick={() => item.action && handleDownloadClick(item)}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                    viewport={{ once: true }}
                    onMouseEnter={() => item.isDownloadButton && setIsHovered(true)}
                    onMouseLeave={() => item.isDownloadButton && setIsHovered(false)}
                    whileHover={item.isDownloadButton ? { scale: 1.03 } : {}}
                  >
                    {item.isDownloadButton ? (
                      <motion.div 
                        className="flex text-[#052b7e] items-center justify-center bg-blue-200 p-3 sm:p-4 md:p-5 rounded-lg"
                        animate={isHovered ? bounceAnimation : {}}
                      >
                        {item.bagIcon}
                      </motion.div>
                    ) : (
                      <div className="flex text-[#052b7e] items-center justify-center bg-blue-100 p-3 sm:p-4 md:p-5 rounded-lg">
                        {item.bagIcon}
                      </div>
                    )}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-secondary text-secondary mb-0.5 sm:mb-1">{item.title}</h3>
                      <p className={`text-paragraph text-sm sm:text-base ${item.isDownloadButton ? 'font-medium text-blue-800' : ''}`}>{item.description}</p>
                    </div>
                    {item.isDownloadButton && (
                      <motion.div 
                        className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About