import React from "react";
import { TimelineDemo } from "@/components/casestudy/case-1/TimelineDemo";
import HeaderGradient from "@/components/Sections/HeaderGradient";
import { Navbar } from "@/components/Sections/Navbar";
import Footer from "@/components/Sections/Footer";
import { NavbarWork } from "@/components/Sections/NavbarWork";

const page = () => {
  return (
    <main className="flex flex-col h-fit w-full bg-white">
      <HeaderGradient />
      <NavbarWork />

      <div className="w-full h-fit flex justify-center mt-5 md:mt-10 md:mb-0 z-10">
        <div className="relative w-[90vw] md:w-[75vw] h-fit z-10">
          <div className="mb-4 sm:mb-0  py-3 md:py-5">
            <h1 className="relative text-4xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-6 inline-block">
              Sisyphus
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
              Website Design
            </p>
          </div>
          <div className="flex flex-col sm:flex-row align-center justify-between">
            <TimelineDemo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
