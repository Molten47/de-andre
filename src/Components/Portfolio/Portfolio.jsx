import React from 'react'
import { useState, useRef, useMemo, useEffect } from 'react' // Import useMemo and useEffect
import { motion } from 'framer-motion'
import image1 from '../../assets/AloForm.png'
import image2 from '../../assets/MiracleFarm.png'
import image3 from '../../assets/FurniturePage.png'
import image4 from '../../assets/EPLPage.png'
import image5 from '../../assets/SaasPage.png'
import image6 from '../../assets/work-image3.png'
import image7 from '../../assets/NFTPage (2).png'
import image8 from '../../assets/NFTPage (1).png'
import image9 from '../../assets/Frame 675.png'
import image10 from '../../assets/Frame 676.png'

const Portfolio = () => {
    // Create a ref for the scroll container
    const scrollContainerRef = useRef(null);

    const workSamples = [
        {
            id: 1,
            title: ' Energy & Industrial Solutions',
            niche: 'Alfcom Energy',
            imgSect: image1,
            description: 'Designed a corporate website for a company in the energy & engineering industry, showcasing services in oil & gas, power generation, and automation solutions with a focus on clarity, professionalism, and industry relevance.',
            cta: 'View Prototype',
            link: 'https://www.figma.com/proto/dXaWIrX0IB9zCQnUvmJMkF/Alfcom-Energy?page-id=0%3A1&node-id=769-935&viewport=51%2C-354%2C0.54&t=cFKsa9t04SNpGu51-1&scaling=min-zoom&content-scaling=fixed',
            category: 'Website Design',
            colors: {
                title: 'text-[#052b7e]',
                niche: 'text-[#1f2937]',
                cta: 'text-[#052b7e]'
            }
        },
            {
            id: 2,
            title: 'Consulting Firm',
            niche: 'Rama Consult',
            imgSect: image9,
            description: 'Designed a high-conversion digital platform for The Rama Consult, a premier consulting firm based in Kigali, Rwanda. The project focused on communicating firm expertise and streamlining client engagement.',
            cta: 'View Prototype',
            link: 'https://www.figma.com/proto/D5IxG9SHeyvz81wJIdfvSV/Farm-Management?page-id=0%3A1&node-id=99-573&viewport=-172%2C-395%2C0.29&t=rq3rcjBjdRxPRcKU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A25&show-proto-sidebar=1',
            category: 'Mobile Design',
            colors: {
                title: 'text-[#B2420D]',
                niche: 'text-[#1F2937]',
                cta: 'text-[#b2420d]'
            }
        },
            {
            id: 3,
            title: 'Real Estate ',
            niche: 'Real Estate ',
            imgSect: image10,
            description: 'Designed an end-to-end digital solution for a Real Estate platform, bridging the gap between property listings (Rent, lease, buy) and user trust.',
            cta: 'View Prototype',
            link: 'https://www.figma.com/proto/D5IxG9SHeyvz81wJIdfvSV/Farm-Management?page-id=0%3A1&node-id=99-573&viewport=-172%2C-395%2C0.29&t=rq3rcjBjdRxPRcKU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A25&show-proto-sidebar=1',
            category: 'Mobile Design',
            colors: {
                title: 'text-[#0B7B83]',
                niche: 'text-[#1f2937]',
                cta: 'text-[#0B7B83]'
            }
        },
        {
            id: 4,
            title: 'Agriculture',
            niche: 'FarmWhiz',
            imgSect: image2,
            description: 'Designed a MVP for farm management app within the agritech industry, focused on helping users manage livestock, monitor farm operations, and streamline daily tasks.',
            cta: 'View Prototype',
            link: 'https://www.figma.com/proto/D5IxG9SHeyvz81wJIdfvSV/Farm-Management?page-id=0%3A1&node-id=99-573&viewport=-172%2C-395%2C0.29&t=rq3rcjBjdRxPRcKU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A25&show-proto-sidebar=1',
            category: 'Mobile Design',
            colors: {
                title: 'text-[#4caf50]',
                niche: 'text-[#1f2937]',
                cta: 'text-[#4caf50]'
            }
        },
        {
            id: 5,
            title: 'E-Commerce',
            niche: 'Landing Page',
            imgSect: image3,
            description: 'Replicated an e-commerce website for purchasing furniture, focusing on a seamlessshopping experience, product filtering, and modern home aesthetics — within the home and living retail sector',
            cta: 'View Prototype',
            link: 'https://www.figma.com/proto/UKa04qgdS0BB5FtLAt6iZW/workspace?page-id=0%3A1&node-id=15-137&viewport=443%2C392%2C0.02&t=L8DNDKH8CuctlHiV-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=15%3A137',
            category: 'Landing Page',
            colors: {
                title: 'text-[#a9745b]',
                niche: 'text-[#1f2937]',
                cta: 'text-[#a9745b]'
            }
        },
        {
            id: 6,
            title: 'Sports & Entertainment',
            niche: 'EPL Landing Page',
            imgSect: image4,
            description: 'Replicated a responsive website for the English Premier League, focusing on user engagement, match highlights, and real-time sports updates — within the sports and entertainment sector.',
            cta: 'View Prototype',
            link: 'https://www.figma.com/proto/UKa04qgdS0BB5FtLAt6iZW/workspace?page-id=0%3A1&node-id=55-2&viewport=443%2C392%2C0.02&t=L8DNDKH8CuctlHiV-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=15%3A137&show-proto-sidebar=1',
            category: 'Landing Page',
            colors: {
                title: 'text-[#e30613]',
                niche: 'text-[#1f2937]',
                cta: 'text-[#e30613]'
            }
        },
        {
            id: 7,
            title: ' Transportation & Mobility',
            niche: 'TransUber',
            imgSect: image5,
            description: 'Designed a website for a transportation and travel service, helping users easily explore and book travel options — with a focus on usability, route clarity, and an easy booking experience.',
            cta: 'View Prototype',
            link: 'https://www.figma.com/proto/3rXm89sg2dqGNQAJpXyMzz/Untitled?page-id=0%3A1&node-id=9-2&viewport=454%2C480%2C0.23&t=jhJkCpMVte1zSxHE-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=9%3A2',
            category: 'Website Design',
            colors: {
                title: 'text-[#0083bf]',
                niche: 'text-[#1f2937]',
                cta: 'text-[#0083bf]'
            }
        },
        {
            id: 8,
            title: ' FinTech',
            niche: 'Financial Dashboard',
            imgSect: image6,
            description: 'Replicated a financial dashboard for the fintech industry, focusing on intuitive data visualization transaction tracking, and user-friendly financial insights.',
            cta: 'View Prototype',
            link: 'https://www.figma.com/proto/6CRfNZwQsXHjezXz6J3a7u/FinTech-Dashboard--Community---Copy-?page-id=0%3A1&node-id=2-2&viewport=536%2C447%2C0.59&t=BVhHJxlKhTHftOuu-1&scaling=min-zoom&content-scaling=fixed',
            category: 'Dashboard',
            colors: {
                title: 'text-[#1f2938]',
                niche: 'text-[#1f2937]',
                cta: 'text-sky-[#1f2938]'
            }
        },
        {
            id: 9,
            title: 'Transportation & Mobility', // Note: This title might be the same as another entry.
            niche: 'Knnct',
            imgSect: image7,
            description: 'Designed a dynamic freelancing marketplace where talented creatives connect with clients to offer services, collaborate on projects, and receive secure payments — within the freelance and gig economy sector.',
            cta: 'View Prototype',
            link: 'https://www.figma.com/proto/UKa04qgdS0BB5FtLAt6iZW/workspace?page-id=0%3A1&node-id=55-2&viewport=443%2C392%2C0.02&t=L8DNDKH8CuctlHiV-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=15%3A137&show-proto-sidebar=1',
            category: 'Website Design', // Ensure categories match filter strings exactly
            colors: {
                title: 'text-[#003366]',
                niche: 'text-[#1f2937]',
                cta: 'text-[#003366]'
            }
        },
        {
            id: 10,
            title: ' Web3',
            niche: 'NFT Design',
            imgSect: image8,
            description: 'Replicated a NFT designs for the Web3 space, blending digital art with blockchain technology to deliver unique, collectible assets.',
            cta: 'View Prototype',
            link: 'https://www.figma.com/proto/xbwiexWyRWD1rQegSs1coL/Untitled?page-id=0%3A1&node-id=2-2&viewport=189%2C261%2C0.18&t=LTK2ATzIvWPyFT5O-1&scaling=min-zoom&content-scaling=fixed',
            category: 'NFT Design',
            colors: {
                title: 'text-[#9f2f9d]',
                niche: 'text-[#1f2937]',
                cta: 'text-[#9f2f9d]'
            }
        }
    ]

    const [activeFilter, setActiveFilter] = useState('All Projects');

    const filters = [
        'All Projects',
        'Website Design',
        'Landing Page',
        'Mobile Design',
        'NFT Design',
        'Dashboard',
       
    ];

    const filteredWorkSamples = useMemo(() => {
        if (activeFilter === 'All Projects') {
            return workSamples;
        } else {
            // Filter based on the 'category' property
            return workSamples.filter(work => work.category === activeFilter);
        }
    }, [activeFilter, workSamples]);

    // Effect to reset scroll position when filter changes
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0;
        }
    }, [activeFilter]); // Trigger when activeFilter changes


    const scrollToPrevious = () => {
        if (scrollContainerRef.current) {
            const scrollDistance = 304 * 3; // Scroll by 3 cards (approx 280px card + 24px gap)
            scrollContainerRef.current.scrollBy({
                left: -scrollDistance,
                behavior: 'smooth'
            });
        }
    };

    const scrollToNext = () => {
        if (scrollContainerRef.current) {
            const scrollDistance = 304 * 3; // Scroll by 3 cards
            scrollContainerRef.current.scrollBy({
                left: scrollDistance,
                behavior: 'smooth'
            });
        }
    };

    // Image hover animation (kept as is)
    const imageHoverVariants = {
        rest: { scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
        hover: { scale: 1.05, transition: { duration: 0.4, ease: 'easeIn' } }
    };


    // Animation variants (kept as is)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const filterItemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 24
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.1
            }
        }
    };

    return (
        <div className='flex flex-col relative min-h-screen w-full items-center bg-[#F9FAFB] overflow-hidden px-4 md:px-6 lg:px-8 pb-16'>
            {/* Header Section (kept as is) */}
            <div className='flex flex-col items-center font-secondary justify-center pt-16 gap-4 max-w-3xl text-center'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        delay: 0.1,
                        damping: 10
                    }}
                    className='text-secondary font-bold font-secondary text-[2.5rem] md:text-[2rem] sm:text-[1.0rem] mt-3.5'>
                    My Portfolio
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        delay: 0.2,
                        damping: 10
                    }}
                    className='w-[135.74px] rounded-lg bg-[#1f2937] h-[5.66px]'
                ></motion.div>
                <p className='text-justify md:text-center px-4 text-[0.95rem] md:text-[1rem] text-paragraph'>
                    Explore my recent projects and case studies. Each project represents my dedication to creating meaningful, user-centered designs.
                </p>
            </div>

            {/* Filter Tabs (kept as is) */}
            <motion.div
                className='flex flex-wrap justify-center gap-2.5 mt-8'
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {filters.map((filter) => (
                    <motion.button
                        key={filter}
                        className={`flex px-4 py-2 text-[0.9rem] md:text-[1rem] font-medium rounded-full justify-center items-center mb-2 cursor-pointer ${
                            filter === activeFilter
                                ? 'bg-primary-navy text-white'
                                : 'bg-light-gray text-secondary hover:bg-gray-300 transition-colors'
                            }`}
                        onClick={() => setActiveFilter(filter)}
                        variants={filterItemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap="tap"
                    >
                        {filter}
                    </motion.button>
                ))}
            </motion.div>

            {/* Portfolio Items Container */}
            {/* Conditional classes applied here */}
            <div
                ref={scrollContainerRef}
                // Apply scroll/snap classes ONLY if activeFilter is 'All Projects'
                className={`flex mt-12 w-full max-w-[85rem] mx-auto
                    ${activeFilter === 'All Projects' ? 'overflow-x-auto scrollbar-hide snap-x snap-mandatory' : 'justify-center'}`
                }
            >
                 {/* Inner flex container - apply wrapping ONLY if filter is active */}
                <div className={`flex gap-6 px-6 md:px-12 lg:px-16 ${activeFilter === 'All Projects' ? 'flex-nowrap' : 'flex-wrap'}`}>
                    {/* Map over the filteredWorkSamples */}
                    {filteredWorkSamples.map((work, index) => (
                        <motion.div
                            key={work.id}
                            className='bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0'
                            style={{
                                // Maintain consistent width for all cards
                                width: '420px',
                                // flex-shrink-0 is important to prevent shrinking when wrapping
                                flexShrink: 0,
                                // Ensure it doesn't grow when wrapped
                                flexGrow: 0,
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            // Adjust initial/whileInView animation slightly based on filter for better flow
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 12,
                                    // Stagger delay slightly more for wrapped items
                                    delay: activeFilter === 'All Projects' ? index * 0.15 : index * 0.08,
                                    duration: 0.6
                                }
                            }}
                            viewport={{
                                once: false,
                                amount: 0.3,
                                margin: "0px 0px -100px 0px"
                            }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                transition: {
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 15
                                }
                            }}
                        >
                            {/* Card content (kept as is) */}
                            <motion.div
                                className='relative overflow-hidden h-60 md:h-48 lg:h-70 lg:w-full'
                                initial="rest"
                                whileHover="hover"
                            >
                                <motion.img
                                    loading='lazy'
                                    src={work.imgSect}
                                    alt={work.title}
                                    className='w-full object-cover object-top'
                                    style={{ height: '130%' }}
                                    variants={imageHoverVariants}
                                />
                                <motion.div
                                    className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                ></motion.div>
                            </motion.div>

                            <motion.div
                                className='p-6'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        // Adjust delay based on filter
                                        delay: activeFilter === 'All Projects' ? 0.1 + index * 0.15 : 0.05 + index * 0.08,
                                        duration: 0.5
                                    }
                                }}
                                viewport={{ once: false }}
                            >
                                <div className='flex flex-col justify-left items-left mb-2'>
                                    <motion.h3
                                        className={`text-[1.052rem] font-medium ${work.colors.title}`}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                // Adjust delay based on filter
                                                delay: activeFilter === 'All Projects' ? 0.2 + index * 0.15 : 0.1 + index * 0.08,
                                                duration: 0.4
                                            }
                                        }}
                                        viewport={{ once: false }}
                                    >
                                        {work.title}
                                    </motion.h3>
                                    <motion.span
                                        className={`text-[1.2rem] font-bold ${work.colors.niche}`}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                // Adjust delay based on filter
                                                delay: activeFilter === 'All Projects' ? 0.3 + index * 0.15 : 0.15 + index * 0.08,
                                                duration: 0.4
                                            }
                                        }}
                                        viewport={{ once: false }}
                                    >
                                        {work.niche}
                                    </motion.span>
                                </div>
                                <motion.p
                                    className='text-paragraph mb-4 font-normal leading-[1.69rem]'
                                    initial={{ opacity: 0 }}
                                    whileInView={{
                                        opacity: 1,
                                        transition: {
                                            // Adjust delay based on filter
                                            delay: activeFilter === 'All Projects' ? 0.4 + index * 0.15 : 0.2 + index * 0.08,
                                            duration: 0.4
                                        }
                                    }}
                                    viewport={{ once: false }}
                                >
                                    {work.description}
                                </motion.p>
                                <motion.div
                                    className={`flex flex-row items-center font-medium cursor-pointer group gap-3 ${work.colors.cta}`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{
                                        opacity: 1,
                                        transition: {
                                            // Adjust delay based on filter
                                            delay: activeFilter === 'All Projects' ? 0.5 + index * 0.15 : 0.25 + index * 0.08,
                                            duration: 0.4
                                        }
                                    }}
                                    viewport={{ once: false }}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                                >
                                    {work.cta}
                                    <a href={work.link} className='material-icons' target="_blank" rel="noopener noreferrer">open_in_new</a>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                    {filteredWorkSamples.length === 0 && (
                        <div className='w-full text-center text-paragraph'>No projects found for this category.</div>
                    )}
                </div>
            </div>

            {/* Navigation dots and arrows - Conditionally rendered */}
            {activeFilter === 'All Projects' && (
                <div className="flex flex-row items-center justify-center gap-3 mt-8">
                    <span
                        className="material-symbols-outlined cursor-pointer hover:text-primary-navy transition-colors"
                        onClick={scrollToPrevious}
                    >
                        arrow_back_ios
                    </span>
                    <div className="flex gap-2">
                         {/* You might want to make these dots dynamic based on filteredWorkSamples.length if possible */}
                        {[1, 2, 3].map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-primary-navy' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                    <span
                        className="material-symbols-outlined cursor-pointer hover:text-primary-navy transition-colors"
                        onClick={scrollToNext}
                    >
                        arrow_forward_ios
                    </span>
                </div>
            )}

            {/* CSS to hide scrollbar (still useful for the 'All Projects' view) */}
            <style jsx>{`
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;  /* Chrome, Safari and Opera */
                }
            `}</style>

            {/* CTA Section (kept as is) */}
            <div className='flex flex-col text-center justify-center items-center gap-4 mt-16'>
                <motion.p
                    className='text-paragraph'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: false }}
                >
                    Want to see more of my work? Check out my portfolio on Behance!
                </motion.p>
                <motion.div
                    className='flex items-center text-primary-navy font-bold text-lg cursor-pointer group'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.05 }}
                >
                    Go to Behance
                    <a href='https://www.behance.net/DeAndre' className='ml-2 group-hover:translate-x-1 transition-transform material-icons' target="_blank" rel="noopener noreferrer">arrow_forward</a>
                </motion.div>
            </div>
        </div>
    )
}

export default Portfolio