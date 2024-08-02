import Image from "next/image";

const HeaderGradient = () => {
  return (
    <Image
      className="w-full h-auto absolute  z-0"
      src="/headergradient.svg"
      alt="Next.js Logo"
      width={720}
      height={193}
      priority
      layout="responsive"
    />
  );
};

export default HeaderGradient;
