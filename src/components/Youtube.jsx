import React from 'react';

const YouTube = () => {
  return (
    <div className="flex justify-center bg-gray-400 items-center h-full w-full">
      <div className="w-full">
        <div className="relative" style={{ paddingTop: '56.25%', width: '100%' }}>
          <iframe
            className="absolute inset-0 w-full h-full  p-4"
            src="https://www.youtube.com/embed/XxtfwsN5TEw?autoplay=0"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
