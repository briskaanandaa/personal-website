import Footer from "@/components/Footer";
import FooterGradient from "@/components/FooterGradient";
import HeaderGradient from "@/components/HeaderGradient";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative flex flex-col h-fit bg-white ">
      <HeaderGradient />
      <Navbar />
      <HeroSection />
      <Footer />
      <FooterGradient />
    </main>
  );
}
