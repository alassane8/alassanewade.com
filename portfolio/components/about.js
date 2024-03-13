import React from 'react';

const About = () => {
  return (
    <div id="about" className = "ml-20 min-h-screen bg-gray-900">
      <h1 className = "text-6xl font-bold text-white"> 
      about me<br /><br />
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
          <div class="w-1/3 text-xl font-bold text-white">
              <li className = "hover:text-blue-500">JavaScript</li>
              <li className = "hover:text-blue-500">React.js</li>
              <li className = "hover:text-blue-500">Three.js</li>
          </div>
          <div class="w-2/3 text-xl font-bold text-white">
              <li className = "hover:text-blue-500">Python</li>
              <li className = "hover:text-blue-500">Java</li>
              <li className = "hover:text-blue-500">C#</li>
          </div>
      </div>
    </div>
  );
};
export default About;
