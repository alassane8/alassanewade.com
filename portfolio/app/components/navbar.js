import React from 'react';

const NavigationBar = () => {
  return (
    <div id="navbar" className=" mx-auto bg-gray-800 max-w-6xl">
    <div className = "fixed">
    <div className="text-white font-bold flex items-center bg-gray-800  ">
        <div className="flex items-center w-full">
          <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-300 mx-2">
            <a href="#home">home</a>
          </button>
          <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-300 mx-2">
            <a href="#about">about</a>
          </button>
          <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-300 mx-2">
            <a href="#experiences">experiences</a>
          </button>
          <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-300 mx-2">
            <a href="#projects">projects</a>
          </button>
          <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-105 hover:text-blue-300 mx-2">
            <a href="#hobbies">hobbies</a>
          </button>
        </div>
        <div className="flex items-center ">
          <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-110 hover:text-blue-300 mx-2">
            <a href="https://github.com/alassane8">
              <img src="images/github.png" alt="Github" className="h-8 w-11"></img>
            </a>
          </button>
          <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-110 hover:text-blue-300 mx-2">
            <a href="https://www.linkedin.com/in/alassane-wade-91181725b/">
              <img src="images/linkedin.png" alt="LinkedIn" className="h-8 w-11"></img>
            </a>
          </button>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default NavigationBar;