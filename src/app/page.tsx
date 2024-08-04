import Footer from "@/components/Footer";
import HeaderGradient from "@/components/HeaderGradient";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" flex flex-col h-fit w-full bg-white ">
      <HeaderGradient />
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}
