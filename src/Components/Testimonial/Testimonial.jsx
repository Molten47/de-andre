import React from 'react'
import { motion } from 'framer-motion'


const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            comment: '"DeAndre\'s approach to design completely transformed our product. The user experience is intuitive and our customers love the new interface."',
            userImage: 'BS',
            name: 'Bello Samad',
            role: 'Founder, StartUp',
            organ: 'Innbode',
            rating: 5 // 5-star rating
        },
        {
            id: 2,
            comment: '"Working with DeAndre was a game changer for our startup. The detail, expertise and attention to details is applaudable."',
            userImage: 'FE',
            name: 'Feyi Eniola',
            role: 'Product Manager',
            organ: 'Olukowe',
            rating: 5 // 5-star rating
        },
        {
            id: 3,
            comment: '"DeAndre has an exceptional ability to translate complex requirements into beautiful, functional designs, and that has improved our user engagement."',
            userImage: 'DA',
            name: 'Daniel Adedokun',
            role: 'Product Manager',
            organ: 'Zette Technologies',
            rating: 5 // 5-star rating
        }
    ]

    // Star rating component
    const StarRating = ({ rating }) => {
        return (
            <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 ${i < rating ? 'text-[#ff9529]' : 'text-gray-300'}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path 
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" 
                        />
                    </svg>
                ))}
            </div>
        )
    }

    return (
        <div className='flex flex-col relative min-h-[70vh] w-full items-center bg-[#052B7E] overflow-hidden px-4 md:px-8 lg:px-16 py-16'>
            <div className='flex flex-col items-center font-secondary justify-center mb-12 gap-4 max-w-3xl text-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        delay: 0.1,
                        damping: 10
                    }}
                    className='text-white font-bold font-secondary text-[1.25rem] md:text-4xl lg:text-5xl mt-3.5'
                >
                    Testimonials
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        delay: 0.2,
                        damping: 10
                    }}
                    className='w-32 rounded-lg bg-white h-1.5'
                ></motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        delay: 0.3,
                        damping: 10
                    }}
                    className='text-center px-4 text-[1.25rem]  md:text-lg text-primary-lightblue max-w-3xl'
                >
                    Don't just take my word for it. Here's what clients and colleagues have to say about working with me.
                </motion.p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto'>
                {testimonials.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ 
                            once: false,  
                            amount: 0.3,
                            margin: "0px 0px -100px 0px" 
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            delay: 0.2 * index, // Increased delay between items
                            damping: 12,
                            duration: 0.5
                        }}
                        whileHover={{ 
                            y: -10, 
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            transition: {
                                type: 'spring',
                                stiffness: 400,
                                damping: 10
                            }
                        }}
                        className='bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full'
                    >
                        {/* Star Rating  */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 * index, duration: 0.5 }}
                        >
                            <StarRating rating={item.rating} />
                        </motion.div>
                        
                        <div className='mb-6'>
                            <div className='text-primary-navy text-paragraph text-lg mb-6 font-secondary'>
                                {item.comment}
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <p className='w-14 h-14 rounded-full object-cover border-none font-semibold leading-[32.02px] text-[1.5rem] flex items-center justify-center bg-[#052B7E] text-white'>{item.userImage}</p>
                           
                            <div className='ml-4 gap-3'>
                                <h3 className='text-secondary font-secondary font-bold text-lg '>{item.name}</h3>
                                <p className='text-paragraph font-secondary text-sm'>{item.role}</p>
                                <p className='font-secondary text-sm text-[#ff9529]'>{item.organ}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial