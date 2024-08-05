const HeroSection = () => {
  return (
    <div className="w-full h-fit flex justify-center my-5 md:my-10 z-10">
      <div className="w-[90vw] md:w-[75vw] flex flex-col lg:flex-row">
        <div className="w-full h-fill flex flex-col justify-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold text-slate-900 flex mt-5 mb-2">
            Hey there! I&apos;m Briska Ananda
          </h1>
          <p className="text-lg sm:text-xl md:text-5xl md:text-slate-900 md:font-semibold text-slate-500 flex mb-8">
            A happy Web Developer who loves creating beautiful web experiences
            &amp; help others grow in web development.
          </p>
          <div className="flex flex-row gap-x-3 mb-5">
            <a href="https://www.figma.com/">
              <button className="gap-x-2 text-xs w-full sm:w-auto flex px-4 py-2 items-center justify-start align-center h-fit rounded-full font-semibold text-white border-2 bg-[#F24E1E]/50 border-[#F24E1E]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="20"
                    height="20"
                    rx="10"
                    fill="white"
                  />
                  <rect
                    x="1"
                    y="1"
                    width="20"
                    height="20"
                    rx="10"
                    stroke="#F24E1E"
                    stroke-width="2"
                  />
                  <path
                    d="M9.55469 16.0781C10.4844 16.0781 11.2344 15.3281 11.2344 14.3984V12.7188H9.55469C8.625 12.7188 7.875 13.4688 7.875 14.3984C7.875 15.3281 8.625 16.0781 9.55469 16.0781Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M7.875 11.0391C7.875 10.1094 8.625 9.35938 9.55469 9.35938H11.2344V12.7188H9.55469C8.625 12.7188 7.875 11.9687 7.875 11.0391Z"
                    fill="#A259FF"
                  />
                  <path
                    d="M7.875 7.67969C7.875 6.75 8.625 6 9.55469 6H11.2344V9.35938H9.55469C8.625 9.35938 7.875 8.60937 7.875 7.67969Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M11.2344 6H12.9141C13.8437 6 14.5938 6.75 14.5938 7.67969C14.5938 8.60937 13.8437 9.35938 12.9141 9.35938H11.2344V6Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M14.5938 11.0391C14.5938 11.9687 13.8437 12.7188 12.9141 12.7188C11.9844 12.7188 11.2344 11.9687 11.2344 11.0391C11.2344 10.1094 11.9844 9.35938 12.9141 9.35938C13.8437 9.35938 14.5938 10.1094 14.5938 11.0391Z"
                    fill="#1ABCFE"
                  />
                </svg>
                Figma
              </button>
            </a>
            <a href="https://www.framer.com/">
              <button className="gap-x-2 text-xs w-full sm:w-auto flex px-4 py-2 items-center justify-start align-center h-fit rounded-full font-semibold text-white border-2 bg-[#0055ff]/50 border-[#0055ff]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="20"
                    height="20"
                    rx="10"
                    fill="white"
                  />
                  <rect
                    x="1"
                    y="1"
                    width="20"
                    height="20"
                    rx="10"
                    stroke="#0055FF"
                    stroke-width="2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.15625 12.6667H11V15.3751L8.15625 12.6667Z"
                    fill="#0055FF"
                  />
                  <path
                    d="M11 9.95827H8.15625V12.6666H13.8437L11 9.95827Z"
                    fill="#00AAFF"
                  />
                  <path
                    d="M8.15625 7.25L11 9.95833H13.8437V7.25H8.15625Z"
                    fill="#88DDFF"
                  />
                </svg>
                Framer
              </button>
            </a>
            <a href="https://nextjs.org/">
              <button className="gap-x-2 text-xs w-full sm:w-auto flex px-4 py-2 items-center justify-start align-center  h-fit rounded-full font-semibold text-white border-2 bg-[#000000]/50 border-[#000000]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="20"
                    height="20"
                    rx="10"
                    fill="white"
                  />
                  <rect
                    x="1"
                    y="1"
                    width="20"
                    height="20"
                    rx="10"
                    stroke="black"
                    stroke-width="2"
                  />
                  <path
                    d="M11 6C8.24219 6 6 8.24219 6 11C6 13.7578 8.24219 16 11 16C11.875 16 12.6953 15.7734 13.4062 15.3828L9.78125 10.3203V13.1797H9.25V9.26562H9.78125L13.7266 15.1875C15.0938 14.2969 16 12.7578 16 11C16 8.24219 13.7578 6 11 6ZM12.7266 12.6094L12.1406 11.7266V9.26562H12.7266V12.6094Z"
                    fill="black"
                  />
                </svg>
                NextJs
              </button>
            </a>
          </div>
        </div>
        {/* <div className="lg:w-[50%] w-full h-fill relative flex justify-center ">
          <Image
            src="/briskaanandaa.svg"
            alt="Header Gradient"
            width={720}
            height={100}
            priority
            style={{ width: "auto", height: "100%", objectFit: "cover" }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
