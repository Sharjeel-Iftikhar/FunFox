import React from 'react';

const LeftColumn = () => {
  return (
    <>
    <div className="absolute left-0 flex flex-col items-start justify-start h-full gap-64 mt-8">
      <img src="/assets/pencil.png" alt="Image 1" className="md:w-full mb-3 w-10 object-contain" />
      <img src="/assets/bag.png" alt="Image 2" className="md:w-full mb-3 w-10 object-contain" />
      <img src="/assets/book.png" alt="Image 3" className="md:w-full mb-3 w-10 object-contain" />
    </div>
    {/* // right column */}
    
    </>
  );
};

export default LeftColumn;