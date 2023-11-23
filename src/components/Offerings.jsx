import React from 'react';

const Offerings = () => {
  return (
    <div className='w-screen h-full py-10 bg-gray-300 text-[#030355]'>
      <div className='max-w-full max-h-[70%] mx-auto px-20'>
        <h1 className='text-3xl grid sm:text-6xl text-center mb-8 font-bold'>Our Offerings</h1>
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-8  justify-center items-center'>
          {/* Box 1 */}
          <div className='group bg-gray-500 rounded-lg shadow-md overflow-hidden'>
            <div className='w-full h-[300px] group-hover:bg-[#030355] perspective-card'>
              <div className='card-content p-4 h-full flex-col justify-center items-center'>
                <div className='text-2xl md:text-4xl flex flex-col justify-center items-center mt-14'>
                  <h2 className='group-hover:hidden mb-10'>Live Trades</h2>
                  <div className='border-2 border-yellow-400 group-hover:hidden w-20'></div>
                  <h2 className='group-hover:hidden text-2xl md:text-4xl mt-6'>Access</h2>
                </div>
                <div className='max-w-4xl'>
                  <p className='hidden group-hover:flex text-lg p-4 mt-6 md:text-2xl  text-white justify-center items-center'>
                    ICTC members have instant access to view ongoing trades through investor password.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
 
         {/* Box 1 */}
          <div className='group bg-gray-500 rounded-lg shadow-md overflow-hidden'>
            <div className='w-full h-[300px] group-hover:bg-[#030355] perspective-card'>
              <div className='card-content p-4 h-full flex-col justify-center items-center'>
                <div className='text-2xl md:text-4xl flex flex-col justify-center items-center mt-14'>
                  <h2 className='group-hover:hidden mb-10'>AI-Powered</h2>
                  <div className='border-2 border-yellow-400 group-hover:hidden w-20 mb-2'></div>
                  <h2 className='group-hover:hidden text-2xl md:text-4xl mt-4'>Risk Management</h2>
                </div>
                <div className='max-w-4xl'>
                  <p className='hidden group-hover:flex text-lg p-4 mt-0 md:text-2xl 
                   text-white justify-center items-center'>
                  ICTC uses AI-powered risk management tools that monitor and analyze trading behavior, providing personalized risk alerts and suggestions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
 {/* Box 1 */}
 <div className='group bg-gray-500 rounded-lg shadow-md overflow-hidden'>
            <div className='w-full h-[300px] group-hover:bg-[#030355] perspective-card'>
              <div className='card-content p-4 h-full flex-col justify-center items-center'>
                <div className='text-2xl md:text-4xl flex flex-col justify-center items-center mt-14'>
                  <h2 className='group-hover:hidden mb-10 justify-center items-center'>Transparency & <br/> Security</h2>
                  <div className='border-2 border-yellow-400 group-hover:hidden w-20'></div>
                  <h2 className='group-hover:hidden text-2xl md:text-4xl mt-4'>Operations</h2>
                </div>
                <div className='max-w-4xl'>
                  <p className='hidden group-hover:flex text-lg p-4 mt-2 md:text-2xl  text-white justify-center items-center'>
                  ICTC ensures transparency, and security, and safeguard your capital, allowing confident trading without fear.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
 

           {/* Box 1 */}
           <div className='group bg-gray-500 rounded-lg shadow-md overflow-hidden'>
            <div className='w-full h-[300px] group-hover:bg-[#030355] perspective-card'>
              <div className='card-content p-4 h-full flex-col justify-center items-center'>
                <div className='text-2xl md:text-4xl flex flex-col justify-center items-center mt-14'>
                  <h2 className='group-hover:hidden mb-10'>Educational</h2>
                  <div className='border-2 border-yellow-400 group-hover:hidden w-20'></div>
                  <h2 className='group-hover:hidden text-2xl md:text-4xl mt-6'>Webinar</h2>
                </div>
                <div className='max-w-4xl'>
                  <p className='hidden group-hover:flex text-lg p-4 mt-0 md:text-2xl  text-white justify-center items-center'>
                  Learn from ICTC experienced traders and experts through webinars covering our strategies, financial literacy, market trends and insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
 
        </div>
      </div>
    </div>
  );
};

export default Offerings;
