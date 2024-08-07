import { FeaturesSectionDemo } from "@/components/FeatureSectionsDemo";
import { AboutSections } from "@/components/Sections/AboutSections";
import Footer from "@/components/Sections/Footer";
import HeaderGradient from "@/components/Sections/HeaderGradient";
import HeroSection from "@/components/Sections/HeroSections";
import { Navbar } from "@/components/Sections/Navbar";
import PostSections from "@/components/Sections/PostSections";
import WorkSections from "@/components/Sections/WorkSections";

export default function Home() {
  return (
    <main className=" flex flex-col h-fit w-full bg-white ">
      <HeaderGradient />
      <Navbar />
      <HeroSection />
      <FeaturesSectionDemo />
      <AboutSections />
      <WorkSections />
      <PostSections />
      <Footer />
    </main>
  );
}
