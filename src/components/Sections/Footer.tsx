const Footer = () => {
  return (
    <div className="relative w-full h-fit flex justify-center bottom-0 py-5 md:py-5 border-t-2 border-slate-300 z-10 bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: "url(/footergradient.svg)",
          width: "100%",
          height: "auto",
        }}
      ></div>
      <div className="relative w-[90vw] md:w-[75vw] h-fit z-10">
        <div className="flex flex-col sm:flex-row align-center justify-between py-3 md:py-5">
          <div className="mb-4 sm:mb-0">
            <h1 className="relative text-4xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-6 inline-block">
              Let&apos;s Connect
              <span
                className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#FE79B9] via-[#AD00FF] to-[#2489FF]"
                style={{
                  transform: "rotate(-2deg) translateY(12px)",
                  height: "10px",
                  clipPath: "polygon(0% 0%, 100% 100%, 100% 100%, 0% 100%)",
                  zIndex: -1,
                }}
              ></span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500">
              Our collaboration can bring idea to life.
            </p>
          </div>

          <div className="h-fill flex justify-center items-center w-full sm:w-auto">
            <a href="mailto:briskaananda103@gmail.com">
              {" "}
              <button className="w-full sm:w-auto inline-flex px-6 py-2 items-center justify-center h-fit rounded-full font-semibold bg-gradient-to-b from-slate-700 to-slate-900 text-white ring-4 ring-slate-300 focus:ring-0 transition-all duration-500 ease-in-out transform-gpu focus:translate-y-1">
                Say Hello
              </button>
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between mt-4 mb-2">
          <div className="text-sm font-normal text-slate-500 mb-4 sm:mb-2">
            <p>
              Made with NextJs and joyfully designed in Figma by
              <span className="font-semibold"> Briska Ananda</span>
            </p>
          </div>

          <div className="flex flex-row gap-x-5 justify-center sm:justify-end">
            <a
              href="https://github.com/briskaanandaa"
              className="text-sm font-normal text-slate-500 hover:text-slate-900"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/briskaanandaa"
              className="text-sm font-normal text-slate-500 hover:text-slate-900"
            >
              Linkedin
            </a>
            <a
              href="mailto:briskaananda103@gmail.com"
              className="text-sm font-normal text-slate-500 hover:text-slate-900"
            >
              Gmail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
