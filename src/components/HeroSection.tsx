const HeroSection = () => {
  return (
    <div className="w-full h-fit flex justify-center my-5 md:my-10 z-10">
      <div className="w-[90vw] flex flex-col lg:flex-row">
        <div className="lg:w-[50%] w-full h-[50vh]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 flex my-5">
            Hello, I&apos;m Briska Ananda
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-500 flex my-5">
            A happy Web Developer who loves creating beautiful web experiences
            &amp; helping others grow in web development.
          </p>
          <div className="flex flex-row gap-x-3 my-5">
            <a href="https://www.figma.com/">
              <button className="gap-x-2 w-full sm:w-auto inline-flex px-4 py-2 items-center justify-center h-fit rounded-full font-semibold text-white border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Figma
              </button>
            </a>
            <a href="https://www.framer.com/">
              <button className="gap-x-2 w-full sm:w-auto inline-flex px-4 py-2 items-center justify-center h-fit rounded-full font-semibold text-white border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Framer
              </button>
            </a>
            <a href="https://nextjs.org/">
              <button className="gap-x-2 w-full sm:w-auto inline-flex px-4 py-2 items-center justify-center h-fit rounded-full font-semibold text-white border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                NextJs
              </button>
            </a>
          </div>
        </div>
        <div className="lg:w-[50%] w-full h-[50vh] relative"></div>
      </div>
    </div>
  );
};

export default HeroSection;
