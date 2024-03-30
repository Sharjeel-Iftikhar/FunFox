import React from 'react';
import LeftColumn from './StickyColumn';

const Header = () => {
  return (
    <header className="flex justify-items-start items-center pl-5 pr-4">
      {/* Logo */}
      <div className="flex items-center ">
        <img src="/assets/Logo.png" alt="Logo" className="w-full object-contain"  />
      </div>
      
      {/* Week 1 Heading */}
      <div>
        <img src="/assets/week1.png" alt="Week 1" className="h-10 mt-[-44px]" />
      </div>
    </header>
    

  );
};

export default Header;