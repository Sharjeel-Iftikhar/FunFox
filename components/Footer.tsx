const Footer = () => {
  return (
    <footer className="w-full p-4 left-0 bottom-0 mt-14">
      <div className="flex flex-wrap justify-around gap-[26rem] ">
        <img src="/assets/vol.png" className="w-12 h-12" />
        <div className="flex items-center justify-center">
          <button className="px-5 py-3 rounded-l-md ">
            <img src="/assets/left.png"/>
          </button>
          <div className="">
            <img src="/assets/middle.png"/>
          </div>
          <button className="px-5 py-3 rounded-r-md">
          <img src="/assets/forward.png"/>
          </button>
        </div>
        <img src="/assets/info.png" className="w-12 h-12" />
      </div>
    </footer>
  );
};
export default Footer;
