const HeroSection = () => {
  return (
    <div className="w-full h-fit flex justify-center my-5 md:my-10 z-10">
      <div className="w-[90vw] flex flex-col lg:flex-row">
        <div className="lg:w-[50%] w-ful h-[50vh] ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 flex my-5">
            Hello, I'm Briska Ananda
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-500 flex my-5">
            A happy Web Developer who loves creating beautiful web experiences &
            helping others grow in web development.
          </p>
          <div className="flex flex-row gap-x-3 my-5">
            <a href="https://www.figma.com/">
              <button className="gap-x-2 w-full sm:w-auto inline-flex px-4 py-2 animate-shimmer items-center justify-center h-fit rounded-full font-semibold text-white border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Figma
              </button>
            </a>
            <a href="https://www.framer.com/">
              <button className="gap-x-2 w-full sm:w-auto inline-flex px-4 py-2 animate-shimmer items-center justify-center h-fit rounded-full font-semibold text-white border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="18" height="18" rx="9" fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.15625 10.6667H9V13.3751L6.15625 10.6667Z"
                    fill="#0055FF"
                  />
                  <path
                    d="M9 7.95827H6.15625V10.6666H11.8437L9 7.95827Z"
                    fill="#00AAFF"
                  />
                  <path
                    d="M6.15625 5.25L9 7.95833H11.8437V5.25H6.15625Z"
                    fill="#88DDFF"
                  />
                </svg>
                Framer
              </button>
            </a>
            <a href="https://nextjs.org/">
              <button className="gap-x-2 w-full sm:w-auto inline-flex px-4 py-2 animate-shimmer items-center justify-center h-fit rounded-full font-semibold text-white border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.390015"
                    width="18"
                    height="18"
                    rx="9"
                    fill="white"
                  />
                  <path
                    d="M9.39001 4C6.6322 4 4.39001 6.24219 4.39001 9C4.39001 11.7578 6.6322 14 9.39001 14C10.265 14 11.0853 13.7734 11.7963 13.3828L8.17126 8.32031V11.1797H7.64001V7.26562H8.17126L12.1166 13.1875C13.4838 12.2969 14.39 10.7578 14.39 9C14.39 6.24219 12.1478 4 9.39001 4ZM11.1166 10.6094L10.5306 9.72656V7.26562H11.1166V10.6094Z"
                    fill="black"
                  />
                </svg>
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
