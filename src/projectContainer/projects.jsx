import { useState } from "react";
import '../projectContainer/project.css'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


function Projects(){

    const projectsContainer = [
        {
            key: 1,
            src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5bb106c2-398b-4fbb-bf64-6a092993f2df/dhh9ds9-54fd2c60-25d3-420f-beef-c0b49d6eb4f9.jpg/v1/fill/w_1280,h_732,q_75,strp/aesthetic_pink_landscape_w__cat_desktop_wallpaper_by_airashiiiineko_dhh9ds9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMyIiwicGF0aCI6IlwvZlwvNWJiMTA2YzItMzk4Yi00ZmJiLWJmNjQtNmEwOTI5OTNmMmRmXC9kaGg5ZHM5LTU0ZmQyYzYwLTI1ZDMtNDIwZi1iZWVmLWMwYjQ5ZDZlYjRmOS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8wsA1UmK-WBwoI7ZGhcRlMmbdvHPXVs3SDxWg3qgYGs',
            title: 'Educational Website(ConCalc)',
            descrip: 'An educatinal Website for Pre-Calculus'
        },{
            key: 2,
            src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c5c1d388-9881-4125-992e-051627259838/dga2j1s-dade2b5f-2c17-4c22-8205-e47b616d2ce2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1YzFkMzg4LTk4ODEtNDEyNS05OTJlLTA1MTYyNzI1OTgzOFwvZGdhMmoxcy1kYWRlMmI1Zi0yYzE3LTRjMjItODIwNS1lNDdiNjE2ZDJjZTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jfx71t0fZPBPksg0icbZewnr6-qbGQZmYqGMi2OSA4s',
            title: 'Calculator',
            descrip: 'An educatinal Website for Pre-Calculus'
        },{
            key: 3,
            src: 'https://4kwallpapers.com/images/walls/thumbs_2t/18775.jpg',
            title: 'E-commerce Website',
            descrip: 'An educatinal Website for Pre-Calculus'
        },{
            key: 4,
            src: 'https://wallpapers-clan.com/wp-content/uploads/2024/07/lo-fi-aesthetic-landscape-wallpaper-preview.jpg',
            title: 'School Year Book',
            descrip: 'An educatinal Website for Pre-Calculus'
        }
    ];

    const [project, setProjects] = useState(projectsContainer[0].src)

    function handleActiveProject(src, i){


        setProjects(src);
        
    };


    return(
        <div className="border font-itim bg-background px-5 py-0 md:py-[31.5px] md:h-[500px] h-[530px] md:items-center md:my-14 flex md:flex-wrap flex-col-reverse md:justify-evenly border-black" >
           <div className="project-container flex flex-col w-fit overflow-scroll md:full mx-auto  md:justify-evenly h-full py-3 my-5 md:my-0">
                <motion.h1 className="text-center text-[30px] font-bold mb-2"
                           variants={fadeIn('up', 0.3)}
                           initial='hidden'
                           whileInView={'show'}
                           viewport={{ once:true }}
                           >My Projects</motion.h1> 

            <div className="grid md:grid-cols-2 md:gap-5 gap-1">
             {projectsContainer.map((work, index) =>  (
            <motion.div className="border border-black md:w-full h-fit overflow-hidden md:h-full flex flex-col text-center p-4 md:p-5 md:rounded-md"
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: true, amount:0.2}} 
                 onClick={() => handleActiveProject(work.src, index)}>
                <img className="md:h-[150px] w-full md:w-[250px] h-full mx-auto" key={index} src={work.src} alt="" />
                <h1 className="hover:text-red-600 mt-2" key={index}>{work.title}</h1>
                <motion.hr class="h-[2px] bg-black"
                           initial={{ width: '0%' }}
                           whileInView={{ width: '100%' }}
                           transition={{ duration: 0.8, ease: "easeInOut" }} />
            </motion.div>
        ))}
            </div>
                
           </div>
    <div className="md:h-fit md:w-[500px] h-full md:overflow-visible">

        <motion.div className="border border-black md:p-4 p-3 rounded-xl my-5"
                    variants={fadeIn('down', 0.2)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{ once: true }}>  
           <motion.img  className="md:h-[300px] md:w-[500px] h-[170px] w-full transition duration-200 ease-in"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        key={project} src={project} alt=""/>
        </motion.div>
                <div className="flex md:justify-evenly justify-center">
                    <motion.button className="bg-banner text-white md:text-10 text-sm rounded-md px-3 md:py-2 p-1 md:mx-0 mx-1"
                                   whileHover={{ scale:0.8, rotate: -6 }}
                                   whileTap={{ scale: 1.2, rotate: 4 }}
                                   variants={fadeIn('up', 0.2)}
                                   initial="hidden"
                                   whileInView={'show'}
                                   viewport={{once: true, amount:0.2}}
                                   >Github</motion.button>
                    <motion.button className="bg-banner text-white md:text-10 text-sm rounded-md px-3 md:py-2 py-1 md:mx-0 md:2 mx-1"
                                   whileHover={{ scale:0.8, rotate: -6 }}
                                   whileTap={{ scale: 1.2, rotate: 4 }}
                                   variants={fadeIn('up', 0.2)}
                                   initial="hidden"
                                   whileInView={'show'}
                                   viewport={{once: true, amount:0.2}}
                                   >Live Demo</motion.button> 
                </div>
    
           </div>
        </div>
        
    )
}

export default Projects