import React from 'react';

const Header = () => {
  return (
    <header>
    <div id="home">
      <div className="grid place-items-center">
          <h1 className="text-8xl font-bold text-white">
            <br />hi, it's{' '}
            <span className="text-blue-500 animate-fade-in">
              Alassane
            </span>{' '}
            !<br /><br />
          </h1>
          <div className="grid place-items-center">
            <p className="text-5xl font-bold text-white">
                I enjoy doing personal projects.<br /><br />
            </p>
            <p className="text-2xl font-bold text-white">
                I am a {' '}
                <span className="text-blue-500">
                  Software Engineer
                </span>{' '}
                majoring <br />in {' '}
                <span className="text-blue-500">
                  Cybersecurity
                </span>{' '}
                in Paris, France.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
