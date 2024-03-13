import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="grid place-items-center h-screen">
        <h1 className="text-8xl font-bold text-white justify-center">
          hi, it's{' '}
          <span className="text-blue-400 animate-fade-in">
            Alassane.
          </span>{' '}
        </h1>
        <p className="text-5xl font-bold text-white grid place-items-center">
            I enjoy doing personal projects!<br /><br />
        <p className="text-2xl font-bold text-white">
            I am a Software Engineer majoring<br />in Cybersecurity in Paris, France.
        </p>
        </p>
      </div>
    </header>
  );
};

export default Header;
