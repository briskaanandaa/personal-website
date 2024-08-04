const Footer = () => {
  return (
    <div className="relative w-full h-fit flex justify-center bottom-0 py-8 md:py-10 border-t-2 border-slate-300 z-10">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: "url(/footergradient.svg)" }}
      ></div>
      <div className="relative w-[90vw] h-fit z-10">
        <div className="flex flex-col sm:flex-row align-center justify-between py-3 md:py-5">
          <div className="mb-6 sm:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-1">
              Wanna Work Together
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500">
              Take a shoot to connect with me!
            </p>
          </div>

          <div className="h-fill flex justify-center items-center w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex px-4 py-2 animate-shimmer items-center justify-center h-fit rounded-full font-semibold text-white border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Take a Shoot
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between">
          <div className="text-sm font-normal text-slate-500 mb-4 sm:mb-2">
            <p>
              Made with NextJs and designed happily using Figma by
              <span className="font-semibold"> Briska Ananda</span>
            </p>
          </div>

          <div className="flex flex-row gap-x-5 justify-center sm:justify-end">
            <a
              href="https://github.com/briskaanandaa"
              className="text-sm font-normal text-slate-500"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/briskaanandaa"
              className="text-sm font-normal text-slate-500"
            >
              Linkedin
            </a>
            <a
              href="mailto:briskaananda103@gmail.com"
              className="text-sm font-normal text-slate-500"
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
