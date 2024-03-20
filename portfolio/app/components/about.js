import React from 'react';

const About = () => {
  return (
    <div id="about" className = "mx-auto bg-gray-800 max-w-6xl">
      <h1 className = "text-6xl font-bold text-white"> 
      <br /><br />about me
        <div class="border-t border-gray-600"></div>
        <br />
      </h1>
        <p className="text-xl text-white">
        <br /> {/* New paragraph */}
        &emsp;&emsp;I am a {' '}
          <span className="text-blue-300">
            <strong>Software engineering student</strong>
          </span>{' '}
            , majoring in {' '}
          <br />
          <span className="text-blue-300">
          <strong>Cybersecurity</strong>
          </span>.
            With my development skills, and guided <br />by my proactivity
            and my desire to learn, I am eager to <br />take on challenges.<br /><br />
            &emsp;&emsp;I enjoy working on {' '}
          <span className="text-blue-300"> 
            <strong>personal projects</strong>
          </span>{' '} in order to learn <br />
          new ways to code and {' '}
          <span className="text-blue-300">
          <strong>create things</strong>
          </span>.<br /><br /><br />
            Here are some technologies I have been working with:<br /><br />
        </p>
        <div class="flex">
          <div class="w-1/4 text-xl text-white">
              <li className = "hover:text-blue-300 hover:font-bold">JavaScript</li>
              <li className = "hover:text-blue-300 hover:font-bold">React.js</li>
              <li className = "hover:text-blue-300 hover:font-bold">Three.js</li>
          </div>
          <div class="w-2/4 text-xl text-white">
              <li className = "hover:text-blue-300 hover:font-bold">Python</li>
              <li className = "hover:text-blue-300 hover:font-bold">Java</li>
              <li className = "hover:text-blue-300 hover:font-bold">C#</li>
          </div>
      </div>
      <p className="text-xl text-white"><br />
      &emsp;&emsp;When I am not coding, I am interested in multiple sort <br />of {' '}
          <span className="text-blue-300">
          <strong>art</strong>
          </span>{' '} such as paintings,
          music, drawings and sculpture.<br /><br /> &emsp;&emsp;I also enjoy {' '}
          <span className="text-blue-300">
          <strong>video games</strong>
          </span>{' '} and {' '}
          <span className="text-blue-300">
          <strong>outside adventures</strong>
          </span><br />
        with my friends.
      </p>
    </div>
  );
};
export default About;
      /*<div className = "float-right">  
          <img src="images/my_photo.png" alt="my_photo" class="h-10 w-10"></img>
      </div>*/