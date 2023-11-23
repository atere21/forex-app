import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white bg-[#030355] w-screen min-h-screen grid items-center justify-center'>
      <div className='px-4 max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <Typed
          strings={['Your Earning Path to Endless']}
          className='sm:text-4xl md:text-8xl text-2xl font-bold mx-auto'
          typeSpeed={40}
        />

        <Typed
          strings={[
            'Growth',
            'Opportunity',
            'Abundance',
            'Success',
            'Joy',
          ]}

          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            type="text"
            className='ml-[30%] sm:ml-0 bg-transparent md:text-5xl text-3xl font-bold text-white 
            outline-none cursor-none mt-4'
          />
        </Typed>
        <p className='mt-12 mx-10 sm:mx-0 text-2xl'>We help you unlock prosperity by helping you achieve up <br/> to 30% monthly return lifting no finger.</p>
        <button className='text-white text-xl bg-yellow-600 p-4 mt-6 w-[60%] ml-[20%] cursor-pointer hover:bg-[#030355] border-4 border-yellow-600 hover:text-yellow-400 hover:font-bold rounded-md'>
          Click to make 30% monthly
        </button>
      </div>
    </div>
  );
};

export default Hero;
