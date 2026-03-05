import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Replace these with your own EmailJS service ID, template ID, and public key
    emailjs.sendForm(
      'service_zpua9df',
      'template_y7yii3j',
      form.current,
      'OnD1U1l5LMQGzQAtT'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setLoading(false);
        setSuccess(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.error('Email sending failed:', error.text);
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div className='flex flex-col relative min-h-[80vh] w-full items-center bg-[#FFFFFF] overflow-hidden px-4 md:px-6 lg:px-8 pb-16'>
        <div className='flex flex-col items-center font-secondary justify-center pt-16 gap-4 max-w-3xl text-center'>
                <motion.h1 
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    type:'spring',
                    stiffness:100,
                    delay:0.1,
                    damping:10
                 }}className='text-secondary font-bold font-secondary text-[2.5rem] md:text-[2rem] sm:text-[1.8rem] mt-3.5'>Get In Touch
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
                Have a project in mind or want to discuss potential collaborations? I'd love to hear from you. Fill out the form below or reach out directly.
                </p>
            </div>

        <motion.div 
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1, y:0}}
         transition={{
         type:'spring',
         stiffness:100,
         delay:0.2,
         damping:10
                }}
        className='flex flex-col md:flex-row gap-6 mt-8 w-full max-w-7xl'>
            <div className='flex flex-col bg-[#F9FAFB] rounded-lg p-4 md:p-8 w-full md:w-[45rem] lg:w-[40%]'>
                <h2 className='font-bold text-xl mb-8'>Contact Information</h2>
                
                <div className='flex flex-col gap-6 mt-5'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-blue-100 p-3 rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className='font-medium text-sm'>Location</p>
                            <p className='text-gray-600 text-sm'>Ikeja, Lagos State</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center gap-4'>
                        <div className='bg-blue-100 p-3 rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p className='font-medium text-sm'>Email</p>
                            <p className='text-gray-600 text-sm'>alabioluwadamilare@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className='flex items-center gap-4'>
                        <div className='bg-blue-100 p-3 rounded-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className='font-medium text-sm'>Phone</p>
                            <p className='text-gray-600 text-sm'>08065084743</p>
                        </div>
                    </div>
                </div>
                
                <div className='mt-12'>
                    <h3 className='font-bold mb-4'>Follow Me</h3>
                    <div className='flex gap-4 mt-4'>
                        <a href="http://instagram.com/_deandr3" className='bg-gray-200 p-2 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://x.com/_deandr3" className='bg-gray-200 p-2 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <a href="http://linkedin.com/in/t.co/E4mNxh5NDB" className='bg-gray-200 p-2 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <motion.div 
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    type:'spring',
                    stiffness:100,
                    delay:0.2,
                    damping:10
                }}
            className='flex flex-col bg-[#Ffffff] rounded-lg p-6 md:p-8 w-full md:w-[80rem] lg:w-[60%]'>
                <form ref={form} onSubmit={sendEmail} className='w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name" 
                                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email" 
                                className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                required
                            />
                        </div>
                    </div>
                    
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Subject</label>
                        <input 
                            type="text" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject of your message" 
                            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        />
                    </div>
                    
                    <div className='mb-6'>
                        <label className='block text-sm font-medium text-gray-700 mb-1'>Message</label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message" 
                            rows="5" 
                            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            required
                        ></textarea>
                    </div>
                    
                    <div className='flex items-center gap-4'>
                        <button 
                            type="submit" 
                            className='bg-blue-800 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-900 transition-colors w-fit flex items-center'
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                        
                        {success && (
                            <p className='text-green-600 font-medium'>Message sent successfully!</p>
                        )}
                        
                        {error && (
                            <p className='text-red-600 font-medium'>Failed to send message. Please try again.</p>
                        )}
                    </div>
                </form>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Contact