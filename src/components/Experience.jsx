import React from 'react'
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const projects = [
  {
    img: project1,
    title: "MangoMart Web Application",
    description: "A full-stack web application utilizing the MERN Stack to development.",
    links: {
      site: "#",
      github: "https://github.com/Ravishka-Thushan/MangoMart",
    },
  },
  {
    img: project2,
    title: "Portfolio Web Site",
    description: "This is my personal portfolio web site developed using React Framework",
    links: {
      site: "#",
      github: "https://github.com/Ravishka-Thushan/Portfolio",
    },
  },
  {
    img: project3,
    title: "ECO Trash Web System",
    description: "PHP based web system as a solution to the current garbage problem.",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: project4,
    title: "Employee Salary Calculator",
    description: "This is a Java project using NetBeans IDE.",
    links: {
      site: "#",
      github: "https://github.com/Ravishka-Thushan/Java-Project",
    },
  },
]

function Experience() {
  return (
    <>
    <section className='max-w-screen-xl mx-auto pb-0 md:pb-20 relative' id='portfolio'>
      <h5 className='text-primary text-2xl md:text-3xl font-semibold text-center pb-14 md:pb-4'> My Portfolio </h5>

      <div className='max-w-[1000px] mx-auto p-6 md:my-20'>

        {projects.map((project, index) => (
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-blue-800/30 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Code 
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-blue-800/30 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <FaGithub className='text-lg md:text-xl' />
                        </a>

                    </div>

                </div>

            </div>
           
        ))}
        
    </div>

    </section>
    </>
  )
}


export default Experience