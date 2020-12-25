import React from 'react';

const Header = ({ name, role }) => {
  const nameString = name.split(' ')
  return (
    <header className="border-b-2 border-neutral-300 pb-12 pt-12 md:flex items-center justify-between" >
      <div>
        <h1 className="text-primary-900 text-4xl md:text-6xl font-bold font-mono tracking-wide leading-tight" style={{ whiteSpace: 'pre-wrap'}}>
          {nameString[0].toUpperCase()}{'\n'}
          {nameString[1].toUpperCase()}
        </h1>
        <h2 className="font-light text-lg md:text-2xl text-primary-600 leading-relaxed tracking-widest">
          {role}
        </h2>
      </div>
    </header>
  );
}

export default Header;
