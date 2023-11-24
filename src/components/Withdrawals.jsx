import React from 'react'
import image1 from "../assets/withdraw1.png"
import image2 from "../assets/withdraw2.png"
import image3 from "../assets/withdraw3.png"

const Withdrawals = () => {
  return (
    <div className='bg-[#030355] text-white min-h-screen w-full flex items-center justify-center'>
    <div className='max-w-full mx-auto px-4 text-center mt-12 '>
      <h2 className='sm:text-4xl text-2xl mb-12 font-bold max-w-6xl justify-center flex mx-auto'>Here are some snippets of Inner Circle Trading Club Members' Withdrawals</h2>
       <div className='grid w-full mb-12'>
         <img src={image1} alt='' className=''
         />
         <p className='text-3xl'>Withdrawal of about 1000 dollars from an ICTC Member</p>
       </div>

       <div className='grid w-full mb-12'>
       <img src={image2} alt='' className=''
       />
       <p className='text-3xl'>Withdrawal of about 1000 dollars from an ICTC Member</p>
     </div>

     <div className='grid w-full mb-12'>
     <img src={image3} alt='' className=''
     />
     <p className='text-3xl'>Withdrawal of about 1000 dollars from an ICTC Member</p>
   </div>
    </div>
    </div>
  )
}

export default Withdrawals