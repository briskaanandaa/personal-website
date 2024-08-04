const Footer = () => {
  return (
    <div className="w-full h-fit flex z-11 absolute justify-center bottom-0 bg-cover bg-center my-10  border-t-2 border-slate-300">
      <div className="w-[90vw] h-fit z-10 ">
        <div className="flex flex-row align-center justify-between py-10">
          <div>
            <h1 className="text-5xl font-semibold text-slate-900 mb-2">
              Wanna Work Together
            </h1>
            <p className="text-2xl text-slate-500">
              Take a shoot to connect with me!
            </p>
          </div>

          <div className="h-fill flex justify-center items-center">
            <button className="inline-flex px-4 py-2 animate-shimmer items-center justify-center h-fit rounded-full font-semibold text-white border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Take a Shoot
            </button>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between">
          <div className="text-sm font-normal text-slate-500">
            <p>
              Made with NextJs and designed happily using Figma by Briska Ananda
            </p>
          </div>

          <div className="flex flex-row gap-x-5 justify-end">
            <a href="" className="text-sm font-normal text-slate-500">
              Github
            </a>
            <a href="" className="text-sm font-normal text-slate-500">
              Linkedin
            </a>
            <a href="" className="text-sm font-normal text-slate-500">
              Gmail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
