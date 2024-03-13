import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="grid place-items-center">
        <h1 className="text-8xl font-bold text-white">
          hi, it's{' '}
          <span className="text-blue-400 animate-fade-in">
            Alassane.<br /><br />
          </span>{' '}
        </h1>
        <div className="grid place-items-center">
        <p className="text-5xl font-bold text-white">
            I enjoy doing personal projects!<br /><br />
        </p>
        <p className="text-2xl font-bold text-white">
            I am a Software Engineer majoring<br />in Cybersecurity in Paris, France.
        </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
