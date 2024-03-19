import React from 'react';

const About = () => {
  return (
    <div id="hobbies" className = "mx-auto bg-gray-800 max-w-6xl">
      <h1 className = "text-6xl font-bold text-white"> 
      <br />/hobbies/<br /><br />
      </h1> 
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
      <div className = "h-screen mx-auto bg-gray-800 max-w-6xl">
      </div>
    </div>
  );
};
export default About;