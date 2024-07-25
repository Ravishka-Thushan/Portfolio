import React from 'react'
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiJava,
  DiPython,
  DiMysql,
} from "react-icons/di"
import { SiCsharp, SiPhp, } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel, FaFigma } from "react-icons/fa6";



const skills = [
  {
    category: 'Frameworks',
    technologies: [
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
      { name: 'Laravel', icon: <FaLaravel className='text-red-600' /> },
    ],
  },
  {
    category: 'UI Design',
    technologies: [
      { name: 'HTML5', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
      { name: 'Tailwind', icon: <RiTailwindCssFill className='text-blue-500' /> },
      { name: 'Figma', icon: <FaFigma className='text-pink-500' /> },
    ],
  },
  {
    category: 'Programming Languages',
    technologies: [
      { name: 'PHP', icon: <SiPhp className='text-blue-400' /> },
      { name: 'Java', icon: <DiJava className='text-orange-600' /> },
      { name: 'Python', icon: <DiPython className='text-blue-800' /> },
      { name: 'C#', icon: <SiCsharp className='text-purple-600' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
    ],
  },
  {
    category: 'Database Design',
    technologies: [
      { name: 'MySQL', icon: <DiMysql className='text-orange-500' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
    ],
  },
  
]

function Skills() {
  return (
    <>
      <section className="max-w-screen-xl px-4 mx-auto pb-20" id="skills">
      <h5 className='text-primary text-2xl md:text-4xl font-semibold text-center md:text-center pb-10 md:pb-14'>My Skills</h5>
      
        <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8">
          <div className="max-w-[1500px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-4" id="skills">
          <h2 className="text-3xl font-semibold mb-4 text-center md:py-5">Technical Skills</h2>

            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="border border-sky-400 p-6 rounded-lg bg-slate-900 shadow-lg w-full md:w-1/2">

                  <h3 className="text-lg font-semibold mb-4 text-center">
                    {skill.category}
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {skill.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-2xl">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills