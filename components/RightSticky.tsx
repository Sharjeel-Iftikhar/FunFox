import React from 'react';
type RightColumnProps = {
    secondImage: string;
    };
const RightColumn = ({secondImage}: RightColumnProps) => {
  return (
    <>
    {/* // right column */}
    <div className="absolute right-0 flex flex-col items-start justify-start h-full gap-60 mt-[1rem] md:mt-[-1rem]">
      <img src="/assets/ruler.png" alt="Image 1" className="md:w-full mb-3 w-10 object-contain" />
      { secondImage == "hint" ? <img src="/assets/hint.png" alt="Image 2" className="md:w-full mb-3 w-10 object-contain"/> : <img src="/assets/bookgreen.png" alt="Image 2" className="md:w-full mb-3 w-10 object-contain" />}
      <img src="/assets/cap.png" alt="Image 3" className="md:w-full mb-3 w-10 object-contain" />
    </div>
    </>
  );
};

export default RightColumn;