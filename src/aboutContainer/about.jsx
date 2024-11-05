import myImg from '../assets/myImg.jpg';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function About(){

    return(
        <div className="border font-itim text-center md:overflow-visible overflow-scroll flex flex-col bg-background px-5 py-[31.5px] md:h-fit h-[530px] md:my-14 border-black ">
            <motion.h1 className='mb-3 text-3xl font-bold'
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once:true }}
                        >About Me</motion.h1>
            <div className='flex justify-around items-center flex-wrap'>
                 <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once:true }}>
                    <img className='md:h-[350px] md:w-[350px] md:rounded-none rounded-full h-[100px] w-[100px] shadow-md shadow-black' src={myImg} alt="" />
                </motion.div>
                <div className='flex flex-col md:justify-evenly md:h-full md:w-[800px] h-[400px]'>
                    <motion.div className='grid justify-evenly md:grid-cols-3 gap-y-5 md:gap-y-0 mt-4 md:mt-0 gap-x-10 flex-wrap w-full'
                                variants={fadeIn('up', 0.3)}
                                initial={"hidden"}
                                whileInView={'show'}
                                viewport={{ once:true }}
                                >
                        <div className='h-[150px] md:h-full rounded-md shadow-md md:px-4 md:py-2'>
                            <h1 className='text-xl font-semibold'>EXPERIENCE</h1>
                            <motion.hr  class="border-0 h-[2px] bg-black"
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }} />
                            <p className='text-sm md:text-base leading-relaxed px-2 md:px-0'>
                                I've been studying programming (web development) since 2022
                                and it's been almost 3years now.
                            </p>
                        </div>
                        <div className='h-[150px] md:h-full rounded-md shadow-md md:px-4 md:py-2'>
                            <h1 className='text-xl font-semibold'>EDUCATION</h1>
                            <motion.hr  class="border-0 h-[2px] bg-black"
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }} />
                            <p className='text-sm md:text-base leading-relaxed px-2 md:px-0'>
                                I'm currently a grade 12 STEM student and will graduate this 2025
                                ,the course that I will take in college is Computer Science.
                            </p>
                        </div>
                        <div className='h-[150px] md:h-full rounded-md shadow-md md:px-4 md:py-2'>
                            <h1 className='text-xl font-semibold'>GOAL</h1>
                            <motion.hr  class="border-0 h-[2px] bg-black"
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }} />
                            <p className='text-sm md:text-base leading-relaxed px-2 md:px-0'>
                                My goal is to get a job or a freelance job while studying in college so that I can support
                                my needs in college and I don't to just rely on my parents.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div className='md:w-[700px] '
                                variants={fadeIn('up', 0.4)}
                                initial="hidden"
                                whileInView={'show'}>
                        <p className='text-left md:text-lg my-5 md:my-3'>
                            Frontend developer, I create web pages with UI / 
                            UX user interface, I have years of experience and many 
                            clients are happy with the projects carried out.
                        </p>
                    </motion.div>
                    
                </div>
            </div>
           
        </div>
    )
}

export default About 