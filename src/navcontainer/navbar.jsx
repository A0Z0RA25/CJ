import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';
// Import React and Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope, faUser, faLaptop } from '@fortawesome/free-solid-svg-icons';

// Add icons to library
library.add(faTwitter, faFacebook, faGithub, faCoffee, faEnvelope, faUser, faLaptop);


function Navbar({ onClickNav }) {
    // Track the active navigation item
    const [activeIndex, setActiveIndex] = useState(0);

    const icons = ['fa fa-house', 'fa fa-coffee', 'fa fa-user', 'fa fa-laptop', 'fa fa-envelope'];
    const navContainer = ['home', 'projects', "about", "skills", "contact"]


    return (
        <div className="flex md:relative fixed bottom-2 w-full left-0">
                <motion.ul className="flex justify-evenly border left-0 
                                      md:mb-0 backdrop-blur-3xl md:backdrop-blur-0 border-black 
                                      md:bg-none h-12 items-center font-bold relative w-[300px] mx-auto md:h-[100px] md:border-none rounded-full 
                                      md:w-full text-sm md:text-[20px] md:my-auto"
                            variants={fadeIn('down', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: null}}>
                    {/* Highlight banner div */}
                    

                {[...new Set(icons)].map((icon, i) => (
                        <li className={`z-10 bg-banner cursor-pointer transition md:hidden duration-300 relative  text-[14px] rounded-full ${activeIndex === i ? 'text-white md:-translate-y-0 -translate-y-5 transition-all ease-linear duration-300' : 'text-black'}`} 
                            onClick={() => {
                            setActiveIndex(i);
                            onClickNav(navContainer[i]);
                            }} key={i}>
                            <FontAwesomeIcon className="px-3 py-3" icon={icon.split(' ')} />
                        </li>
                    ))}

                {navContainer.map((nav, index) => (
                    <li className={` cursor-pointer font-itim font-bold md:py-10 md:px-6 md:rounded-bl-full md:rounded-br-full z-10 hidden md:flex items-center relative text-[20px] ${activeIndex === index ? 'text-white translate-y-0 md:mt-10 md:py-20 bg-banner transition-all ease-linear duration-300' : 'text-black'}`} 
                        onClick={() => {
                        setActiveIndex(index);
                        onClickNav(nav);
                        }} key={index}>{nav.toUpperCase()}</li>
                ))}
                </motion.ul>
            </div>
    );
}

export default Navbar;
