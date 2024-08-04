import Footer from "@/components/Footer";
import FooterGradient from "@/components/FooterGradient";
import HeaderGradient from "@/components/HeaderGradient";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" flex flex-col h-[100vh] bg-white ">
      <HeaderGradient />
      <Navbar />
      <HeroSection />
      <Footer />
      <FooterGradient />
    </main>
  );
}
