const Footer = () => {
  return (
    <footer className="w-full p-4 left-0 bottom-0 mt-14 md:mt-24">
      <div className="flex flex-wrap justify-around gap-[8rem] md:gap-[22rem] ">
        <img src="/assets/vol.png" className="w-10 h-10 md:w-12 md:h-12" />
        <div className="flex items-center justify-center mt-[-0.5rem]">
          <button className="px-5 py-3">
            <img src="/assets/left.png" className="w-8 h-8 md:w-12 md:h-12" />
          </button>
          <div className="">
            <img src="/assets/middle.png" className="w-16 h-10 md:w-20 md:h-12" />
          </div>
          <button className="px-5 py-3">
            <img src="/assets/forward.png" className="w-8 h-8 md:w-12 md:h-12" />
          </button>
        </div>
        <img src="/assets/info.png" className="w-10 h-10 md:w-12 md:h-12" />
      </div>
    </footer>
  );
};
export default Footer;
