import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="text-white font-bold flex items-center justify-between w-full fixed bg-gray-900">
      <div className="flex items-center">
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
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-110 hover:text-blue-500 mx-2">
          <a href="https://github.com/alassane8">
            <img src="images/github.png" alt="Github" class="h-8 w-8"></img>
          </a>
        </button>
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-110 hover:text-blue-500 mx-2">
          <a href="https://www.linkedin.com/in/alassane-wade-91181725b/">
            <img src="images/linkedin.png" alt="LinkedIn" class="h-8 w-8"></img>
          </a>
        </button>        
        <button className="text-white font-bold py-2 px-4 transition-transform hover:scale-110 hover:text-blue-500 mx-2">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpccgnBHnpWBsdDfwHSHRzHXmJPKrJTFcDgdpKTLwMKLzBfGDJrtXszGHmhcktHdsbSwNV">
            <img src="images/email.png" alt="Email" class="h-8 w-8"></img>
          </a>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;