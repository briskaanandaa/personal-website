import Footer from "@/components/Footer";
import FooterGradient from "@/components/FooterGradient";
import HeaderGradient from "@/components/HeaderGradient";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative flex flex-col h-[100vh] bg-white ">
      <HeaderGradient />
      <Navbar />
      <Footer />
      <FooterGradient />
    </main>
  );
}
