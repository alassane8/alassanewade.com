import React from 'react';

const NavigationBar = () => {

  return (
    <nav className="text-white font-bold flex items-center justify-between fixed top-0 w-full bg-gray-900">
      <div className="flex items-center">
        <p className="text-blue-500 font-bold mr-4">
          Alassane WADE
        </p>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500">
          <a href="#home">home</a>
        </button>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500">
          <a href="#about">about</a>
        </button>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500">
          <a href="#experiences">experiences</a>
        </button>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500">
          <a href="#projects">projects</a>
        </button>
      </div>
      <div>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500">
          #mail
        </button>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500">
          #github
        </button>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-500">
          #linkedin
        </button>
      </div>
    </nav>
  );
};
export default NavigationBar;