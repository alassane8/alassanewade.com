import React from 'react';

const NavigationBar = () => {
  return (
    <div id="navbar" className="fixed top-0 left-0 w-full bg-gray-800">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex justify-between">
          <div className="flex">
            <button className="text-white py-2 px-4 transition-transform hover:scale-105 hover:text-blue-300 hover:font-bold mx-2">
              <a href="#home">home</a>
            </button>
            <button className="text-white py-2 px-4 transition-transform hover:scale-105 hover:text-blue-300 hover:font-bold mx-2">
              <a href="#about">about</a>
            </button>
            <button className="text-white py-2 px-4 transition-transform hover:scale-105 hover:text-blue-300 hover:font-bold mx-2">
              <a href="#projects">projects</a>
            </button>
            <button className="text-white py-2 px-4 transition-transform hover:scale-105 hover:text-blue-300 hover:font-bold mx-2">
              <a href="#experiences">experiences</a>
            </button>
          </div>
          <div className="flex">
            <button className="py-2 px-4 transition-transform hover:scale-110 hover:text-blue-300 mx-2">
              <a href="https://github.com/alassane8">
                <img src="images/github.png" alt="Github" className="h-8 w-8"></img>
              </a>
            </button>
            <button className="py-2 px-4 transition-transform hover:scale-110 hover:text-blue-300 mx-2">
              <a href="https://www.linkedin.com/in/alassane-wade-91181725b/">
                <img src="images/linkedin.png" alt="LinkedIn" className="h-8 w-8"></img>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
