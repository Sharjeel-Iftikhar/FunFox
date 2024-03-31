import RightColumn from "@/components/RightSticky";
import React from "react";

export default function page() {
  return (
    <>
    <RightColumn secondImage="hint" />
      <div className="flex flex-col w-[85%] mx-auto gap-3 md:gap-1 ">
        <h1 className="text-black font-Short_Stack text-[24px] md:text-[32px] flex items-center justify-start mt-[-0.5rem] md:mb-1 mb-1 leading-[30px] md:leading-[40px] tracking-[0.06] w-[94%]">
          Can you figure out the definition of setting from the following
          examples?
        </h1>
        <h3 className="text-black font-Short_Stack text-[16px] md:text-[22px]">
          (take a minute to think about it)
        </h3>
        <div className="flex justify-evenly items-start gap-3 mt-3">
          <div className="relative flex flex-col items-center">
            <div className="flex justify-center items-center bg-white rounded-xl border-dashed shadow-sm border-[3px] border-stone-300 max-w-[235px] md:h-[200px] h-[140px] overflow-hidden">
              <img
                src="/assets/suunyday.png"
                className="w-full h-full aspect-[1.22] px-5 py-5"
              />
            </div>
            <p className="mt-1 text-start text-black p-1 text-[12px] md:text-[16px] font-Short_Stack max-w-[291px] overflow-hidden">
              Sunny Day at a beach
            </p>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="flex justify-center items-center bg-white rounded-xl border-dashed shadow-sm border-[3px] border-stone-300 max-w-[235px] md:h-[200px] h-[140px] overflow-hidden">
              <img
                src="/assets/horror.png"
                className="w-full h-full aspect-[1.22] px-5 py-5"
              />
            </div>
            <p className="mt-1 text-center text-[12px] md:text-[16px] text-black p-1 font-Short_Stack max-w-[291px] overflow-hidden">
              A cold rainy night in a<br /> haunted house in October
            </p>
          </div>
        </div>

        <h2 className="text-black font-Short_Stack md:text-[20px] text-[18px] md:mt-2 mt-1 ">
          So, what do you think the definition of setting is?
        </h2>

        <div className="flex gap-3 items-center md:mt-5 mt-3">
          <p className="text-black font-Short_Stack md:text-[20px] text-[14px]">
            Any guesses?
          </p>
          <div className="flex justify-center items-center px-8 md:py-2 py-1 w-[757px] bg-white rounded-xl border-dashed shadow-sm border-[3px] border-stone-300">
            <div className="relative w-full">
              <input
                type="text"
                id="inputField"
                className="w-full border-b border-gray-300 focus:outline-none"
              />
            </div>
          </div>
          <p className="text-black font-Short_Stack md:text-[20px] text-[14px] md:pl-8 pl-[-0.5rem]">Hint:</p>
          <div className="flex items-center justify-center md:gap-6 gap-2">
            <img src="/assets/time.png" className="md:w-[80%] w-[50%]" />
            <img src="/assets/place.png" className="md:w-[80%] w-[50%]" />
          </div>
        </div>
        <div className="bg-teal-500 rounded-md border-cyan-200 border-dashed shadow-sm border-[3px] min-h-[85px] mt-4 mb-0 ">
          <div className="text-white font-Short_Stack md:text-[24px] text-[16px] px-4 py-4 md:w-[90%] w-full">
            <p>
              Setting is the time
              <img
                src="/assets/time.png"
                className="inline md:w-10 w-8 md:h-10 h-8 mx-4 "
                alt="Time"
              />
              and place
              <img
                src="/assets/place.png"
                className="inline md:w-10 w-8 md:h-10 h-8 mx-4 "
                alt="Place"
              />
              of a story. It often answers the questions: when? and where?
            </p>
          </div>
        </div>
        <h2 className="text-black font-Short_Stack md:text-[20px] text-[16px] w-[98%]  mb-1">
          The time of the story could be in the past, future, day, night, summer
          or winter. A story may take place in a school, a mall, a desert, an
          airplane or in a variety of other places.
        </h2>
      </div>
    </>
  );
}
