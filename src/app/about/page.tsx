import HeaderGradient from "@/components/Sections/HeaderGradient";
import{ Navbar} from "@/components/Sections/Navbar";

const page = () => {
  return (
    <main className=" flex flex-col h-fit w-full bg-white ">
      <HeaderGradient />
      <Navbar />
    </main>
  );
};

export default page;
