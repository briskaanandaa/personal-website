import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import Footer from "@/components/Sections/Footer";
import HeaderGradient from "@/components/Sections/HeaderGradient";
import { Navbar } from "@/components/Sections/Navbar";

const page = () => {
  return (
    <main className="flex flex-col h-fit w-full bg-white">
      <HeaderGradient />
      <Navbar />
      <div className="w-full h-fit flex justify-center mt-5 md:mt-10 md:mb-0 z-10e">
        <div className="relative w-[90vw] md:w-[75vw] h-fit z-10">
          <div className="flex flex-col sm:flex-row align-center justify-between py-3 md:py-5">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-4xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
                My Recent Posts
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-500 ">
                Discover my process here.
              </p>
            </div>
          </div>
          <div className="mb-6 mt-2">
            <CardHoverEffectDemo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
