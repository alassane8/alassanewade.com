import React from 'react';

const About = () => {
  return (
    <div id="about" className = "h-screen mx-auto bg-gray-800 max-w-6xl">
      <h1 className = "text-6xl font-bold text-white"> 
      <br />/about me/<br /><br />
      </h1>
        <p className="text-xl font-bold text-white">
        <br /> {/* New paragraph */}
        &emsp;&emsp;I am a {' '}
          <span className="text-blue-300">
            Software engineering student
          </span>{' '}
            , majoring in {' '}
          <span className="text-blue-300">
          <br />Cybersecurity
          </span>.
            With my development skills, and guided <br />by my proactivity
            and my desire to learn, I am eager to <br />take on challenges.<br /><br />
            &emsp;&emsp;I enjoy working on {' '}
          <span className="text-blue-300"> 
            personal projects
          </span>{' '} in order to learn <br />
          new ways to code and {' '}
          <span className="text-blue-300">
            create things
          </span>.<br /><br /><br />
            Here are some technologies I have been working with:<br /><br />
        </p>
        <div class="flex">
          <div class="w-1/4 text-xl font-bold text-white">
              <li className = "hover:text-blue-300">JavaScript</li>
              <li className = "hover:text-blue-300">React.js</li>
              <li className = "hover:text-blue-300">Three.js</li>
          </div>
          <div class="w-2/4 text-xl font-bold text-white">
              <li className = "hover:text-blue-300">Python</li>
              <li className = "hover:text-blue-300">Java</li>
              <li className = "hover:text-blue-300">C#</li><br /><br /><br />
          </div>
      </div>
      <p className="text-xl font-bold text-white">
      &emsp;&emsp;When I am not coding, I am interested in multiple sort <br />of {' '}
          <span className="text-blue-300">
            art
          </span>{' '} such as paintings,
          music, drawings and sculpture.<br /><br /> &emsp;&emsp;I also enjoy {' '}
          <span className="text-blue-300">
            video games
          </span>{' '} and {' '}
          <span className="text-blue-300">
            outside adventures
          </span><br />
        with my friends.
      </p>
    </div>
  );
};
export default About;