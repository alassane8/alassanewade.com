import { Span } from 'next/dist/trace';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div id="home" className="mx-auto bg-gray-800 max-w-6xl">
        <div className="grid place-items-center">
          <h1 className="text-8xl font-bold text-white">
            <br /><br />hi, it's{' '}
            <span className="text-blue-300 animate-fade-in">
              Alassane
            </span>{' '}
            !<br /><br />
          </h1>
          <div className="grid place-items-center">
            <p className="text-5xl font-bold text-white">
              I like to code and create things.<br /><br />
            </p>
            <p className="text-xl text-white">
              &emsp;&emsp;I enjoy programming languages as it offers <br />{' '}
              <span className="text-blue-300">
                <strong>countless possiblities</strong>
              </span>{' '}
              to create what one has in mind.<br /><br /><br />
            </p>
          </div>
          <button className="border-white border-t-4 border-l-4 border-r-4 border-b-4 bg-gray-800 text-2xl text-white font-bold px-4 py-4 rounded hover:scale-110 hover:text-blue-300 hover:border-blue-300">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpccgnBHnpWBsdDfwHSHRzHXmJPKrJTFcDgdpKTLwMKLzBfGDJrtXszGHmhcktHdsbSwNV">
              <div align="center">
                <img src="images/email.png" alt="Email" className="h-10 w-10"></img>
                Contact me!
              </div>
            </a>
          </button><br /><br />
        </div>
      </div>
    </header>
  );
};
export default Header;