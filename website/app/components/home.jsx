

import React from 'react';
import background from '../../public/background.jpg'
import Searchbar from './searchbar'
const HomePage = () => {
  const htitle = "Home";
  return (
    <div
      className="bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: 'url(/background.jpg)', opacity: 1.8 }}
    >
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <span className="text-white">
            <Searchbar />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;