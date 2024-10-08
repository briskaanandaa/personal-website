import { StickyScrollRevealDemo } from "../StickyScrollRevealDemo";

export const AboutSections = () => {
  return (
    <div className="relative w-full h-fit flex justify-center bottom-0 py-5 z-10 bg-white">
      <div className="relative w-[90vw] md:w-[75vw] h-fit z-10">
        <div className="flex flex-col sm:flex-row align-center justify-between py-3 md:py-5">
          <div className="mb-4 sm:mb-0">
            <h1 className="relative text-4xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-6 inline-block">
              My Experiences
              <span
                className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#FE79B9] via-[#AD00FF] to-[#2489FF]"
                style={{
                  transform: "translateY(9px) translateX(3px)",
                  height: "16px",
                  clipPath: "polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)",
                  zIndex: -1,
                }}
              ></span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500 ">
              Dive into My Journey
            </p>
          </div>

          <div className="h-fill flex justify-center items-center w-full sm:w-auto">
            <a href="/about">
              <button className="hidden sm:inline-flex w-full sm:w-auto px-6 py-2 items-center justify-center h-fit rounded-full font-semibold bg-gradient-to-b from-slate-700 to-slate-900 text-white ring-4 ring-slate-300 focus:ring-0 transition-all duration-500 ease-in-out transform-gpu focus:translate-y-1">
                See More
              </button>
            </a>
          </div>
        </div>
        <div className="">
          <StickyScrollRevealDemo />
        </div>
        <a href="/about">
          <button className="w-full  inline-flex md:hidden lg:hidden px-6 py-2 items-center justify-center h-fit rounded-full font-semibold bg-gradient-to-b from-slate-700 to-slate-900 text-white ring-4 ring-slate-300 focus:ring-0 transition-all duration-500 ease-in-out transform-gpu focus:translate-y-1">
            See More
          </button>
        </a>
      </div>
    </div>
  );
};
