import React from 'react';

const LeftColumn = () => {
  return (
    <>
    <div className="absolute left-0 flex flex-col items-start justify-start h-full gap-64 mt-8">
      <img src="/assets/pencil.png" alt="Image 1" className="w-full mb-4" />
      <img src="/assets/bag.png" alt="Image 2" className="w-full mb-4" />
      <img src="/assets/book.png" alt="Image 3" className="w-full" />
    </div>
    {/* // right column */}
    <div className="absolute right-0 flex flex-col items-start justify-start h-full gap-60 mt-[-1rem]">
      <img src="/assets/ruler.png" alt="Image 1" className="w-full mb-4" />
      <img src="/assets/bookgreen.png" alt="Image 2" className="w-full mb-4" />
      <img src="/assets/cap.png" alt="Image 3" className="w-full mb-4" />
    </div>
    </>
  );
};

export default LeftColumn;