import React from 'react';

const Header = ({ profile }) => {
  return (
    <header className="flex flex-col items-center py-6">
      <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4">
        <img 
          src={profile.image} 
          alt={profile.name}
          className="w-full h-full object-cover rounded-full shadow-md border border-lavender-200"
        />
      </div>
      <h1 className="text-2xl font-bold text-center mb-1 text-white">{profile.name}</h1>
      <p className="text-sm text-lavender-200 text-center">{profile.tagline}</p>
    </header>
  );
};

export default Header; 