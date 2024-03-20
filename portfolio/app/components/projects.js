import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="mx-auto bg-gray-800 max-w-6xl">

      <h1 className="text-6xl font-bold text-white">
      <br /><br />projects
        <div class="border-t border-gray-600"></div>
        <br /><br />
      </h1>

      <div className="grid grid-cols-3 gap-5">

        <a href="https://github.com/alassane8/BattleShip">
          <div className="p-4 block rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:scale-105 hover:bg-gray-700">
            <div className="text-white font-bold mx-2 my-2">
              <img src="images/folder.png" alt="Folder" className="h-6 w-6"></img>
            </div>
            <h5
              className="mb-6 text-xl leading-tight text-white font-bold hover:text-blue-300">
              Battleship
            </h5>
            <p className="mb-4 text-base text-gray-400">
              Battleship game developped in <strong>C language</strong> completed and ready to be played
            </p>
          </div>
        </a>
        
        <a href="https://github.com/alassane8/Electrocardiogram">
          <div className="p-4  block rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:scale-105 hover:bg-gray-700">    
            <div className="text-white font-bold mx-2 my-2">
              <img src="images/folder.png" alt="Folder" className="h-6 w-6"></img>
            </div>
            <h5
              className="mb-6 text-xl leading-tight  text-white font-bold hover:text-blue-300">
              Electrocardiogram
            </h5>
            <p className="mb-4 text-base text-gray-400">
              Electrocardiogram in <strong>C++ using Arduino boards</strong> in progress
            </p>
          </div>
        </a>
        
        <a href="https://github.com/alassane8/Tic-Tac-Toe">
          <div className="p-4 block rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:scale-105 hover:bg-gray-700">    
            <div className="text-white font-bold mx-2 my-2">
              <img src="images/folder.png" alt="Folder" className="h-6 w-6"></img>
            </div>
            <h5
              className="mb-6 text-xl leading-tight text-white font-bold hover:text-blue-300">
              Tic-Tac-Toe
            </h5>
            <p className="mb-4 text-base text-gray-400">
              Tic-Tac-Toe game developped with <strong>Java</strong> completed and ready to be played
            </p>
          </div>
        </a>

        <a href="https://github.com/alassane8">
          <div className="p-4 block rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:scale-105 hover:bg-gray-700">    
            <div className="text-white font-bold mx-2 my-2">
              <img src="images/folder.png" alt="Folder" className="h-6 w-6"></img>
            </div>
            <h5
              className="mb-6 text-xl leading-tight text-white font-bold hover:text-blue-300">
              Starbucks
            </h5>
            <p className="mb-4 text-base text-gray-400">
              <strong>C# Windows Form Application</strong> for Starbucks management in progress
            </p>
          </div>
        </a>


        <a href="https://github.com/alassane8/alassanewade.com">
          <div className="p-4 block rounded-lg overflow-hidden shadow-lg bg-gray-900 hover:scale-105 hover:bg-gray-700">    
            <div className="text-white font-bold mx-2 my-2">
              <img src="images/folder.png" alt="Folder" className="h-6 w-6"></img>
            </div>
            <h5
              className="mb-6 text-xl leading-tight text-white font-bold hover:text-blue-300">
              alassanewade.com
            </h5>
            <p className="mb-4 text-base text-gray-400">
              Online resume in progress using <strong>Next.js, React and Tailwind CSS</strong> in progress
            </p>
          </div>
        </a>
        
      </div>
    </div>
  );
};
export default Projects;