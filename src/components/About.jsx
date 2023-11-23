import React from 'react';

const About = () => {
  return (
    <div className='w-screen py-10 md:py-20 px-4 my-8 bg-gray-300 text-[#030355]'>
      <div className='max-w-full mx-auto px-20 grid md:grid-cols-3 gap-[4rem]'>
        <div className='max-w-full shadow-xl rounded-lg p-4 hover:scale-105 duration-300'>
          <h2 className='text-4xl mb-4'>WHAT IS ICTC?</h2>
          <p>
            Inner Circle Trading Club (ICTC) is a Private Trading Club focused on providing individuals with the opportunity to make additional income without the need for active trading or in-depth knowledge of the financial markets.
          </p>
          <p>
            Members of ICTC can deposit their funds, and professional traders handle the trading activities and generate profits for all its members daily, weekly, and monthly. It's a hassle-free way for individuals to grow their wealth through financial market trading strategies.
          </p>
        </div>

        {/* Repeat the same structure for other grid items */}
        <div className='w-full shadow-xl rounded-lg p-4 hover:scale-105 duration-300'>
          <h2 className='text-4xl mb-4'>WHO IS ICTC?</h2>
          <p>
        
ICTC is for individuals who are looking for a passive income opportunity without the need to actively trade in the financial markets themselves. It's suitable for people who want to grow their wealth by becoming members of the club and having professional traders handle the trading activities on their behalf.

         <p>
         This opportunity is for those who may not have the time, expertise, or interest in actively managing their trades themselves but still want to benefit from financial market trading strategies. It provides a convenient and hands-off approach to income generation for a wide range of individuals.  </p>
    </p>
        </div>

        <div className='w-full shadow-xl rounded-lg p-4 hover:scale-105 duration-300'>
          <h2 className='text-4xl mb-4'>HOW DOES ICTC WORK?</h2>
          <p>
          ICTC allows its members to deposit a minimum of $100 (with a 5% deposit fee) or a maximum of $10,000 (with a 5% deposit fee) into the club's trading account. Professional traders manage the deposits, aiming for a 30% profit over a 30-day cycle.

       <p>
       Depositors can track the trading in real-time using an investor's password. All profits are withdrawn at the end of each 30-day cycle, regardless of when the deposits were made. It's a transparent and hands-free passive income opportunity for individuals.  </p>
      </p>
        </div>
      </div>
    </div>
  );
};

export default About;
