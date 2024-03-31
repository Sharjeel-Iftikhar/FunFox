'use client'
import { useState } from "react";
import { pages } from "@/constants";
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleForwardClick = () => {
    const nextPageIndex = Math.min(currentPageIndex + 1, pages.length - 1);
    setCurrentPageIndex(nextPageIndex);
    router.push(pages[nextPageIndex].url);
  };

  const handleBackwardClick = () => {
    const prevPageIndex = Math.max(currentPageIndex - 1, 0);
    setCurrentPageIndex(prevPageIndex);
    router.push(pages[prevPageIndex].url);
  };
  return (
    <footer className="w-full p-4 left-0 bottom-0 mt-3 md:mt-10">
      <div className="flex flex-wrap justify-around gap-[8rem] md:gap-[22rem] ">
        <img src="/assets/vol.png" className="w-10 h-10 md:w-12 md:h-12" />
        <div className="flex items-center justify-center mt-[-0.5rem]">
          <button className="px-5 py-3" onClick={handleBackwardClick} disabled={currentPageIndex === 0}>
            <img src="/assets/left.png" className="w-8 h-8 md:w-12 md:h-12" />
          </button>
          <div className="relative">
        <img src={`/assets/middle.png`} alt={`page no`} className="w-16 h-10 md:w-20 md:h-12" />
        <span className="absolute top-1/2 left-[36%] transform -translate-x-1/2 -translate-y-1/2 text-white font-Short_Stack font-bold text-[18px]">{pages[currentPageIndex].title}</span>
      </div>
          <button className="px-5 py-3" onClick={handleForwardClick} disabled={currentPageIndex === pages.length - 1}>
            <img src="/assets/forward.png" className="w-8 h-8 md:w-12 md:h-12" />
          </button>
        </div>
        <img src="/assets/info.png" className="w-10 h-10 md:w-12 md:h-12" />
      </div>
    </footer>
  );
};
export default Footer;
