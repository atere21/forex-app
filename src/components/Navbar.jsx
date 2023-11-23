import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleItemClick = () => {
    setNav(true); // Close the mobile menu when an item is clicked
  };

  return (
    <div className='text-white bg-[#030355] h-24 max-w-screen'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='flex justify-center mx-auto items-center h-24'>
        <h1 className='w-full text-4xl text-white font-bold '>ICTC.</h1>
          <ul className='md:flex hidden justify-center text-xl'>
            
            <li className='p-4'>Home</li>
            <li className='p-4'>Features</li>
            <li className='p-4'>About</li>
            <li className='p-4'>FAQs</li>
            <li className='p-4'>Contact</li>
          </ul>

          <div onClick={handleNav} className='block md:hidden bg-[#030355] cursor-pointer'>
            {!nav ? <AiOutlineClose size={20} color='white' /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={!nav ? 'fixed w-full h-full  bg-[#030355] z-50' : 'hidden md:hidden'}>
        <div className=' mx-auto px-4 py-10'>
          <ul className='p-4 text-center uppercase'>
            <li className='p-4 border-b border-gray-600' onClick={handleItemClick}>Home</li>
            <li className='p-4 border-b border-gray-600' onClick={handleItemClick}>Features</li>
            <li className='p-4 border-b border-gray-600' onClick={handleItemClick}>About</li>
            <li className='p-4 border-b border-gray-600' onClick={handleItemClick}>FAQs</li>
            <li className='p-4 border-b border-gray-600' onClick={handleItemClick}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
