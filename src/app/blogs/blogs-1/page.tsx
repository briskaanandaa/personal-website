import React from "react";
import { TimelineDemo } from "@/components/casestudy/case-1/TimelineDemo";
import HeaderGradient from "@/components/Sections/HeaderGradient";
import { Navbar } from "@/components/Sections/Navbar";
import Footer from "@/components/Sections/Footer";

import { TracingBeamDemo } from "@/components/blogs/blogs-1/TracingBeamDemo";
import { NavbarBlog } from "@/components/Sections/NavbarBlog";

const page = () => {
  return (
    <main className="flex flex-col h-fit w-full bg-white">
      <HeaderGradient />
      <NavbarBlog />

      <div className="w-full h-fit flex justify-center mt-5 md:mt-10 md:mb-0 z-10">
        <div className="relative w-[90vw] md:w-[75vw] h-fit z-10">
          <div className="flex flex-col sm:flex-row align-center justify-between py-3 md:py-5">
            <TracingBeamDemo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
