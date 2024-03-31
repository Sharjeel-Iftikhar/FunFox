
import Image from "next/image";
import { Element } from "@/constants";
import Footer from "@/components/Footer";
import RightColumn from "@/components/RightSticky";
type ElementsProps = {
  text: string;
  imageSrc: string;
};

const Elements = ({ text, imageSrc }: ElementsProps) => (
  <div className="relative">
            <img
              src={imageSrc}
              alt="Your Image"
              className="w-full h-auto max-w-[7.5rem] md:max-w-[14rem]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-black text-[13px] md:text-[16px] font-Short_Stack uppercase pl-12 pr-14">
                {text}
              </p>
            </div>
          </div>
 
);

export default function Home() {
  return (

    <>
    <RightColumn secondImage="book" />
      <div className="flex flex-col w-[85%] mx-auto gap-3 md:gap-1 ">
        <div className="bg-rose-400 rounded-3xl border-rose-300 border-dashed border-[3px] max-w-[529px] min-h-[50px] shadow-[0px_0px_11px_rgba(0,0,0,0.25)] mx-auto">
          <h1 className="text-white font-Short_Stack text-[25px] md:text-[32px] flex items-center justify-center pl-5 pr-5">
            Elements of Story Writing
          </h1>
        </div>
        <h1 className="text-black font-Short_Stack text-[18px] md:text-[24px] flex items-center justify-start mt-[-0.5rem] md:mt-3 mb-3 leading-[29px] tracking-[0.06]">
          Welcome to term 2 of Writers Club. Are you excited for this amazing
          journey? <br />
          Over the next week, we will be practicing the different elements of
          story writing.
          <br /> Our aim is to make stories more interesting and exciting.
        </h1>

        <div className="bg-teal-500 rounded-md border-cyan-200 border-dashed shadow-sm border-[3px] min-h-[114px]">
          <div className="flex flex-row justify-between items-center gap-3">
            <h1 className="text-white font-Short_Stack text-[18px] md:text-[24px] px-4 ">
              There are <span className="font-bold">five</span> elements which
              make the foundation for story writing. An element is an essential
              part of something and every fiction story has the same key
              elements:
            </h1>
            <Image
              src="/assets/thinkingBoy.png"
              alt="Image"
              width={100}
              height={100}
              className=" relative"
              style={{
                marginRight: "43px",
                marginBottom: "-23px",
                marginTop: "28px",
              }}
            />
          </div>
        </div>

        <div className="flex justify-between mt-8 mb-4">
          {Element.map((element) => {
            return (
              <Elements key={element.label} text={element.label} imageSrc={element.imageSrc} />
            );
          })}
        </div>

        <h1 className="text-black font-Short_Stack text-[18px] md:text-[24px] flex items-center justify-start mt-0 md:mt-3 md:mb-3 mb-0">
        You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.
        </h1>

        <div className="flex flex-col px-5 pb-2 bg-rose-400 rounded-3xl shadow-lg shadow-slate-500 relative">
          <div className="relative">
            <img
              src="/assets/Isolation.png"
              className="w-full aspect-[8.33] max-md:max-w-full"
            />
            <div className="absolute inset-0 flex ">
              <p className="text-black text-[14px] md:text-[24px] font-Short_Stack uppercase w-[96%] pl-7 pt-1 md:pl-10 md:pt-3">
              For today’s lesson, we will try to understand and practice writing the setting for our stories.<br/> 
              The setting is an important element of every fiction story.
              </p>
            </div>
          </div>
        </div>
       
      </div>
      
      
    </>
  );
}
