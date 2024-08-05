import { IconChevronRight } from "@tabler/icons-react";

const WorkSections = () => {
  return (
    <div className="relative w-full h-fit flex justify-center bottom-0 py-5 z-10 bg-white">
      <div className="relative w-[90vw] md:w-[75vw] h-fit z-10">
        <div className="flex flex-col sm:flex-row align-center justify-between py-3 md:py-5">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
              Selected Work
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500 ">
              Take a look below at some of my featured work.
            </p>
          </div>

          <div className="h-fill flex justify-center items-center w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex pr-4 pl-6 py-2 animate-shimmer items-center justify-center h-fit rounded-full font-semibold text-white border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 gap-x-2">
              View All <IconChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSections;
