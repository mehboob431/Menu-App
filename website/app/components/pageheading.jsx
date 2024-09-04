import React from 'react';
import Image from 'next/image';

const Pageheading = ({ htitle, bgimage }) => {
  return (
    <div className="relative flex items-center h-64 md:pt-8 w-full justify-center md:h-96">
      <Image  
        src={bgimage} 
        alt={htitle} 
        layout="fill" 
        objectFit="cover" 
        
      />
      <h1 className="relative flex justify-center items-center align-bottom  text-3xl  md:text-4xl lg:text-5xl pt-8 text-white font-bold drop-shadow-lg">
        {htitle}
      </h1>
    </div>
  );
};

export default Pageheading;
