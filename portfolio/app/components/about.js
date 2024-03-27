import React from 'react';

const About = () => {
  return (
    <div id="about" className="mx-auto bg-gray-800 max-w-6xl">
      <h1 className="text-6xl font-bold text-white">
        <br /><br />about me
        <div className="border-t border-gray-600"></div>
        <br />
      </h1>
      <div className="float-right">
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 bg-gray-900">
          <img className="w-full" src="/images/Alassane.jpeg" alt="ArianeGroup"></img>
          <div className="px-6 py-4">
            <div className="font-bold text-3xl text-white hover:scale-105">
              Alassane WADE
            </div>
          </div>
          <div className="flex">
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">About:</div>
              <div className="text-gray-300">
                <li className="hover:text-blue-300 hover:font-bold">21 years old</li>
                <li className="hover:text-blue-300 hover:font-bold">Paris, FRANCE</li>
                <li className="hover:text-blue-300 hover:font-bold">Driver License</li>
                <li className="hover:text-blue-300 hover:font-bold">Personal car</li>
              </div>
            </div>
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">Soft Skills:</div>
              <div className="text-gray-300">
                <li className="hover:text-blue-300 hover:font-bold">Creativity</li>
                <li className="hover:text-blue-300 hover:font-bold">Communication</li>
                <li className="hover:text-blue-300 hover:font-bold">Adaptativity</li>
                <li className="hover:text-blue-300 hover:font-bold">Team work</li>
              </div>
            </div></div>
        </div>
      </div>
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
      <div className="flex">
        <div className="w-1/3 text-xl text-white">
          <li className="hover:text-blue-300 hover:font-bold">JavaScript</li>
          <li className="hover:text-blue-300 hover:font-bold">React.js</li>
          <li className="hover:text-blue-300 hover:font-bold">Three.js</li>
        </div>
        <div className="w-2/3 text-xl text-white">
          <li className="hover:text-blue-300 hover:font-bold">Python</li>
          <li className="hover:text-blue-300 hover:font-bold">Java, C#</li>
          <li className="hover:text-blue-300 hover:font-bold">C, C++</li>
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
        In addition, I practice daily physical<br />
        activity  with {' '}
        <span className="text-blue-300">
          <strong>athletic training</strong>
        </span>.
        I specialize in {' '}
        <span className="text-blue-300">
          <strong>100 and<br />200 meters races</strong>
        </span>.
      </p>
      <p>
      </p>
    </div>
  );
};
export default About;
/*<div className = "float-right">
    <img src="images/my_photo.png" alt="my_photo" className="h-10 w-10"></img>
</div>*/