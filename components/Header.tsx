import React from 'react';
import LeftColumn from './StickyColumn';

const Header = () => {
  return (
    <header className="flex justify-items-start items-center pl-5 pr-4">
      {/* Logo */}
      <div className="flex items-center md:gap-0 ">
        <img src="/assets/Logo.png" alt="Logo" className="md:w-full md:object-contain w-3/4 object-cover"  />
      </div>
      
      {/* Week 1 Heading */}
      <div>
        <img src="/assets/week1.png" alt="Week 1" className="md:h-10 md:mt-[-44px] h-8 mt-[-20px] ml-[-20px] md:ml-0" />
      </div>
    </header>
    

  );
};

export default Header;