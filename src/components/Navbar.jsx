import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RiCloseFill } from 'react-icons/ri';
import { CgMenuMotion } from 'react-icons/cg';
import MobileNavbar from './MobileNavbar';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>

    {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} /> }

    <div className="w-screen hidden md:flex items-center justify-center py-4 fixed top-0 z-10">
      <nav className="max-w-screen-xl bg-blue-950 rounded-xl shadow-lg shadow-sky-600/10 mx-auto py-3 px-6">
        <ul className="flex items-center gap-14">
          <li>
            <Link to="hero" smooth spy offset={-80} className="menu-item"> Home </Link>
          </li>
          <li>
            <Link to="skills" smooth spy offset={-80} className="menu-item"> Skills </Link>
          </li>
          <li>
            <Link to="about" smooth spy offset={-80} className="menu-item"> About </Link>
          </li>
          <li>
            <Link to="portfolio" smooth spy offset={-80} className="menu-item"> Portfolio </Link>
          </li>
          <li>
            <Link to="contact" smooth spy offset={-80} className="menu-item"> Contact </Link>
          </li>
        </ul>
      </nav>
    </div>

    <div className="p-3 fixed top-0 right-0 z-50">
        <button onClick={toggleMenu} className='w-11 h-11 text-2xl text-sky-300 bg-blue-800/40 border border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded md:hidden z-50 ml-auto'>
          {isMenuOpen ? <RiCloseFill/> : <CgMenuMotion/>}
        </button>
    </div>
    </>
  )
}

export default Navbar