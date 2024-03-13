import React from 'react';

const NavigationBar = () => {

  return (
    <nav className="text-white font-bold flex items-center justify-between fixed top-0 w-full bg-gray-9 00">
      <div className="flex items-center">
        <div className="rounded-full overflow-hidden">
          <img className="object-cover w-full h-full" src="logo.jpg" alt="Logo"></img>
        </div>
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