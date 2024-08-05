import { FeaturesSectionDemo } from "@/components/FeatureSectionsDemo";
import Footer from "@/components/Footer";
import HeaderGradient from "@/components/HeaderGradient";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import WorkSections from "@/components/WorkSections";

export default function Home() {
  return (
    <main className=" flex flex-col h-fit w-full bg-white ">
      <HeaderGradient />
      <Navbar />
      <HeroSection />
      <FeaturesSectionDemo />
      <WorkSections />
      <Footer />
    </main>
  );
}
