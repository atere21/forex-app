import React from 'react';
import { data } from "../../components/data/data.js";
import { Accordion } from './Accordion';
import useOpenController from './UseOpenController';
import { useEffect } from 'react';

export const Faq = () => {
  return (
    <div className='w-full h-full px-4 bg-white text-[#030355] m-8 p-8 grid place-items-center max-w-[1240px] mx-auto md:mt-[4rem] Faq'>
      <div className='px-[2px] w-full'>
        <h3 className='my-4 justify-center font-abc text-2xl md:text-4xl mb-8 flex items-center'>
          INNER CIRCLE TRADING CLUB FREQUENTLY ASKED QUESTIONS (FAQs)
        </h3>
        <div className=''>
          {data.map((section, index) => (
            <div key={index} className='border-b-2 border-blue-500 py-4'>
              <Accordion section={section} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
