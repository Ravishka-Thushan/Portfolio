import React from 'react'

function MobileNavbar({ isOpen, setIsMenuOpen }) {
    const handleScroll = (sectionId) => {
        if (isOpen) setIsMenuOpen(false);
        document.getElementById(sectionId).scrollIntoView({ behavior:"smooth" });
    };

  return (
    <>
    <div className='w-screen flex top-0 z-20'>
        <div className='w-1/2 h-screen flex flex-col p-8 bg-backgrounnd'>
        <div className='ui-circle -ml-20 -mt-10' />

        <ul>
            <li className='mb-5'>
                <a className='menu-item' onClick={() => handleScroll("hero")}> Home </a>
            </li>
            <li className='mb-5'>
                <a className='menu-item' onClick={() => handleScroll("skills")}> Skills </a>
            </li>
            <li className='mb-5'>
                <a className='menu-item' onClick={() => handleScroll("experience")}> Work Experience </a>
            </li>
            <li className='mb-5'>
                <a className='menu-item' onClick={() => handleScroll("about")}> About Me </a>
            </li>
        </ul>

        <button className='h-10 bg-primary text-white text-xs md:text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block' 
         onClick={() => handleScroll("contact")}> 
        Contact Me 
        </button>
        </div>

        <div onClick={() => { setIsMenuOpen(false); className="w-screen h-screen bg-overlayBg fixed top-0 -z-10" }}/>

    </div>
    </>
  )
}

export default MobileNavbar