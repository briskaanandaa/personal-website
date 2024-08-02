import HeaderGradient from "@/components/HeaderGradient";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <HeaderGradient />
      <Navbar />
    </main>
  );
}
