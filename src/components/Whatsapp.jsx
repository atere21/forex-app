import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Whatsapp = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsBlinking((prevState) => !prevState);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleButtonClick = () => {
    window.open('https://web.whatsapp.com/send?phone=2347026328160', '_blank');
    console.log('WhatsApp button clicked!');
  };

  return (
    <button
      name='contact'
      className={`fixed bottom-4 left-4 md:left-0 p-3 rounded-full bg-green-500 ${
        isBlinking ? 'animate-blink' : ''
      }`}
      onClick={handleButtonClick}
    >
      <FaWhatsapp className="text-white text-3xl md:text-4xl" />
    </button>
  );
};

export default Whatsapp;
