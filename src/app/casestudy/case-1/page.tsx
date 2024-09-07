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

      <div className="w-full h-fit flex justify-center mt-5 md:mt-10 md:mb-0 z-10e">
        <div className="relative w-[90vw] md:w-[75vw] h-fit z-10">
          <TimelineDemo />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
