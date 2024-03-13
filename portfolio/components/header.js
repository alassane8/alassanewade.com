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
              I like to code and create things.<br /><br />
            </p>
            <p className="text-xl font-bold text-white">
                I am a {' '}
                <span className="text-blue-500">
                  Software Engineer
                </span>{' '}
                from {' '}
                <span className="text-blue-500">
                  Paris
                </span>
                , in France<br />
                and I enjoy very much programming languages as it offers <br />{' '}
                <span className="text-blue-500">
                  countless possiblities
                </span>{' '}
                  to create what one has in mind.<br /><br /><br />
            </p>
          </div>
          <button class="border-white border-t-4 border-l-4 border-r-4 border-b-4 bg-gray-900 text-2xl text-white font-bold px-7 py-7 rounded-md hover:scale-110 hover:text-blue-500 hover:border-blue-500">
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpccgnBHnpWBsdDfwHSHRzHXmJPKrJTFcDgdpKTLwMKLzBfGDJrtXszGHmhcktHdsbSwNV">Contact me!</a>
          </button>

        </div>
      </div>
    </header>
  );
};
export default Header;
