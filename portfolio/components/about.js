import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className = "mx-auto bg-gray-900 max-w-6xl">
      <h1 className = "text-6xl font-bold text-white"> 
      <br />/about me/<br /><br />
      </h1>
        <p className="text-xl font-bold text-white">
          I am an {' '}
          <span className="text-blue-500">
            Software engineering student
          </span>{' '}
            , majoring in {' '}
          <span className="text-blue-500">
            Cybersecurity
          </span>.<br />
            With my development skills, and guided by my proactivity<br />
            and my desire to learn, I am eager to take on challenges.<br />
            I enjoy working on {' '}
          <span className="text-blue-500">
            personnal projects
          </span>{' '} in order to learn new<br />
            ways to code and {' '}
          <span className="text-blue-500">
            create things
          </span>.<br /><br />
            Here are some technologies I have been working with:<br /><br />
        </p>
        <div class="flex">
          <div class="w-1/4 text-xl font-bold text-white">
              <li className = "hover:text-blue-500">JavaScript</li>
              <li className = "hover:text-blue-500">React.js</li>
              <li className = "hover:text-blue-500">Three.js</li>
          </div>
          <div class="w-2/4 text-xl font-bold text-white">
              <li className = "hover:text-blue-500">Python</li>
              <li className = "hover:text-blue-500">Java</li>
              <li className = "hover:text-blue-500">C#</li><br /><br />
          </div>
      </div>
      <p className="text-xl font-bold text-white">
        When I am not coding, I am interested in multiple sort of {' '}
          <span className="text-blue-500">
            art
          </span>{' '} such as paintings,<br />
          music, drawings and sculpture. I also enjoy {' '}
          <span className="text-blue-500">
            video games
          </span>{' '} and {' '}
          <span className="text-blue-500">
            outside adventures
          </span><br />
        with my friends.
      </p>
    </div>
  );
};
export default About;
