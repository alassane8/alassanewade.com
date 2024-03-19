import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="mx-auto bg-gray-800 max-w-6xl">

      <h1 className="text-6xl font-bold text-white">
        <br />/projects/<br /><br />
      </h1>

      <div className="grid grid-cols-3 gap-5">

        <a href="https://github.com/alassane8/BattleShip">
          <div className="p-4 block rounded-lg bg-gray-700 hover:scale-105 hover:bg-gray-600">
            <div className="text-white font-bold mx-2 my-2">
              <img src="images/folder.png" alt="Folder" className="h-6 w-6"></img>
            </div>
            <h5
              className="mb-6 text-xl leading-tight text-white font-bold hover:text-blue-300">
              Battleship
            </h5>
            <p className="mb-4 text-base text-gray-400 font-bold">
              Battleship game developped in C completed and ready to be played
            </p>
          </div>
        </a>
        
        <a href="https://github.com/alassane8/Electrocardiogram">
          <div className="p-4 block rounded-lg bg-gray-700 hover:scale-105 hover:bg-gray-600">    
            <div className="text-white font-bold mx-2 my-2">
              <img src="images/folder.png" alt="Folder" className="h-6 w-6"></img>
            </div>
            <h5
              className="mb-6 text-xl leading-tight  text-white font-bold hover:text-blue-300">
              Electrocardiogram
            </h5>
            <p className="mb-4 text-base text-gray-400 font-bold">
              Electrocardiogram in C++ using Arduino boards in progress
            </p>
          </div>
        </a>
        
        <a href="https://github.com/alassane8/Tic-Tac-Toe">
          <div className="p-4 block rounded-lg bg-gray-700 hover:scale-105 hover:bg-gray-600">    
            <div className="text-white font-bold mx-2 my-2">
              <img src="images/folder.png" alt="Folder" className="h-6 w-6"></img>
            </div>
            <h5
              className="mb-6 text-xl leading-tight text-white font-bold hover:text-blue-300">
              Tic-Tac-Toe
            </h5>
            <p className="mb-4 text-base text-gray-400 font-bold">
              Tic-Tac-Toe game developped with JAVA completed and ready to be played
            </p>
          </div>
        </a>

        <a href="https://github.com/alassane8">
          <div className="p-4 block rounded-lg bg-gray-700 hover:scale-105 hover:bg-gray-600">    
            <div className="text-white font-bold mx-2 my-2">
              <img src="images/folder.png" alt="Folder" className="h-6 w-6"></img>
            </div>
            <h5
              className="mb-6 text-xl leading-tight text-white font-bold hover:text-blue-300">
              Starbucks
            </h5>
            <p className="mb-4 text-base text-gray-400 font-bold">
              C# Windows Form Application for Starbucks management in progress
            </p>
          </div>
        </a>


        <a href="https://github.com/alassane8">
          <div className="p-4 block rounded-lg bg-gray-700 hover:scale-105 hover:bg-gray-600">    
            <div className="text-white font-bold mx-2 my-2">
              <img src="images/folder.png" alt="Folder" className="h-6 w-6"></img>
            </div>
            <h5
              className="mb-6 text-xl leading-tight text-white font-bold hover:text-blue-300">
              alassanewade.com
            </h5>
            <p className="mb-4 text-base text-gray-400 font-bold">
              Online resume in progress using Next.js, React and Tailwind CSS
            </p>
          </div>
        </a>

      </div>

      <div className="h-screen mx-auto bg-gray-800 max-w-6xl">
      </div>

    </div>
  );
};
export default Projects;