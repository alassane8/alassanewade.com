import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="text-white font-bold flex items-center justify-between w-full fixed bg-gray-900">
    
      <div className="flex items-center">
        <img className="w-12 h-12 rounded-full overflow-hidden object-cover" src="/images/logo.jpg" alt="Logo" />
      </div>  

      <div className="flex-grow flex justify-center">
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500 mx-2">
          <a href="#home">home</a>
        </button>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500 mx-2">
          <a href="#about">about</a>
        </button>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500 mx-2">
          <a href="#experiences">experiences</a>
        </button>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500 mx-2">
          <a href="#projects">projects</a>
        </button>
      </div>

      <div className="flex items-center">
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500 mx-2">
          #mail
        </button>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500 mx-2">
          #github
        </button>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500 mx-2">
          #linkedin
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
