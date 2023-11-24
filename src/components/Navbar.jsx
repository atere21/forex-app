import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleItemClick = () => {
    setNav(true); 
  };

  return (
    <div className='text-white bg-[#030355] h-24 max-w-screen'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='flex justify-center mx-auto items-center h-24'>
          <h1 className='w-full text-4xl text-white font-bold'>ICTC.</h1>
          <ul className='md:flex hidden justify-center text-xl'>
            <li className='p-4 cursor-pointer'>
              <Link activeClass="active" to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className='p-4 cursor-pointer'>
              <Link activeClass="active" to="features" smooth={true} duration={500}>Features</Link>
            </li>
            <li className='p-4 cursor-pointer'>
              <Link activeClass="active" to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li className='p-4 cursor-pointer'>
              <Link activeClass="active" to="faq" smooth={true} duration={500}>FAQs</Link>
            </li>
            <li className='p-4 cursor-pointer'>
              <Link activeClass="active" to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>

          <div onClick={handleNav} className='block md:hidden bg-[#030355] cursor-pointer'>
            {!nav ? <AiOutlineClose size={20} color='white' /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={!nav ? 'fixed  bg-[#030355] z-50' : 'hidden md:hidden'}>
        <div className='mx-auto px-4 py-10'>
          <ul className='p-4 text-center uppercase'>
            <li className='p-4 border-b border-gray-600' onClick={handleItemClick}>
              <Link to="home" smooth={true} duration={500} onClick={handleItemClick}>Home</Link>
            </li>
            <li className='p-4 border-b border-gray-600' onClick={handleItemClick}>
              <Link to="features" smooth={true} duration={500} onClick={handleItemClick}>Features</Link>
            </li>
            <li className='p-4 border-b border-gray-600' onClick={handleItemClick}>
              <Link to="about" smooth={true} duration={500} onClick={handleItemClick}>About</Link>
            </li>
            <li className='p-4 border-b border-gray-600' onClick={handleItemClick}>
              <Link to="faq" smooth={true} duration={500} onClick={handleItemClick}>FAQs</Link>
            </li>
            <li className='p-4 border-b border-gray-600' onClick={handleItemClick}>
              <Link to="contact" smooth={true} duration={500} onClick={handleItemClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
