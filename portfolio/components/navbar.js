import React from 'react';

const NavigationBar = () => {
  return (
    <nav class="text-white font-bold flex items-center">
      <p class="text-white font-bold mr-4 text-l">
        Alassane WADE
      </p>
      <button class="text-white font-bold py-2 px-2 transition-transform hover:scale-110 hover:text-blue-500">
        Home
      </button>
      <button class="text-white font-bold py-2 px-2 transition-transform hover:scale-110 hover:text-blue-500">
        About
      </button>
      <button class="text-white font-bold py-2 px-2 transition-transform hover:scale-110 hover:text-blue-500">
        Experiences
      </button>
      <button class="text-white font-bold py-2 px-2 transition-transform hover:scale-110 hover:text-blue-500">
        Projects
      </button>
    </nav>
  );
};

export default NavigationBar;