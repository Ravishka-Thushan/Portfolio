import React from 'react'
import { PROFILE_DATA } from '../utils/data';
import IMG_4814 from '../assets/IMG_4814.jpg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { MdOutlineBadge } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaBriefcase } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import RavishkaResume from '../assets/RavishkaResume.pdf';

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


function Hero() {

  const {
    name,
    tagline,
    jobTitle,
    location,
    email,
  } = PROFILE_DATA;
  return (
    <>
    <section className='max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto' id="hero" >

      <div className='flex-1 text-center md:text-left z-[1]'>

      <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Software Dev",
                        1000,
                        "Fullstack Dev",
                        1000,
                        "Software Dev",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    Hello, I AM <br/>
                    <span className="text-sky-400">{name}</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[700px] md:text-2xl text-xl mb-6"
                >
                    {tagline}
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-2 border
                                     border-sky-500 rounded-xl"     
                    >
                        <span><FaBriefcase /> Hire Me </span>
                    </motion.button>

                </motion.div>
            </motion.div>
      </div>

      <div className='flex gap-2 justify-center md:gap-3 lg:gap-5 z-[1]'>
        <div className='w-[450px] bg-gradient-to-br from-blue-950 to-slate-900 border border-blue-950 p-6'>
          <div className='flex items-center justify-center'>
            <img src={IMG_4814} alt="profile" className='hero-img'/>
          </div>

          <div className='bg-backgrounnd rounded-md text-center mt-3 p-4'>
            <h5 className='text-sm md:text-base text-white'>{name}</h5>
            <p className='text-slate-500 text-xs md:font-medium mt-1'>{jobTitle}</p>

            <div className='flex items-center justify-center gap-2 text-slate-500 text-xs mt-1'>
              <HiOutlineLocationMarker />
              <p className='font-medium'>{location}</p>
            </div>
          </div>

          <InfoTile icon={<FiMail size={20} className='text-sky-400'/>} text={email} />
          <InfoTile icon={<TbFileCv  size={20} className='text-sky-400'/>} text={<a href={RavishkaResume} download=""> Download Resume </a>} />
          <div className='flex items-center gap-2 flex-wrap my-3'>
           {/* {skills.map((item) => (
              <div key={item} className='text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1'> {item} </div>
            ))}*/}
          </div>

          <div className='flex items-center justify-center gap-4 flex-wrap'> 
            <div className='bg-blue-800/30 p-2 rounded'>
            <a href="https://github.com/Ravishka-Thushan" target="_blank" rel="Github Account">
            <FaGithub className='text-lg md:text-3xl' />
            </a>
            </div>

            <div className='bg-blue-800/30 p-2 rounded '>
            <a href="https://www.linkedin.com/in/ravishka-thushan-bba21026b" target="" rel="Linkedin">
            <FaLinkedin className='text-lg md:text-3xl' />
            </a>
            </div>

            <div className='bg-blue-800/30 p-2 rounded'>
            <a href="https://x.com/RavishkaTh77026" target="_blank" rel="Xtwitt">
            <FaXTwitter className='text-lg md:text-3xl' />
            </a>
            </div>

            <div className='bg-blue-800/30 p-2 rounded'>
            <a href="https://www.instagram.com/thushan_senanayaka" target="_blank" rel="Github Account">
            <FaInstagram className='text-lg md:text-3xl' />
            </a>
            </div>

            <div className='bg-blue-800/30 p-2 rounded'>
            <a href="https://www.facebook.com/profile.php?id=100076520277041&mibextid=LQQJ4d" target="_blank" rel="Github Account">
            <FaFacebookSquare className='text-lg md:text-3xl' />
            </a>
            </div>
          </div>
        </div>
      </div>

      <div className='ui-circle absolute top-6 md:top-10 -left-10 md:left-0'></div>
    </section>
    </>
  )
}

const InfoTile = ({ icon, text }) => {
  return (
    <div className='flex items-center gap-4 bg-backgrounnd p-4 mt-3 rounded-md' > 
    {icon}
    <p className='text-xs md:text-sm font-normal'>{text}</p>
    </div>
  );
}

export default Hero