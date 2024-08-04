import Image from "next/image";

const FooterGradient = () => {
  return (
    <Image
      className="w-full h-auto absolute bottom-0 z-0 opacity-15"
      src="/footer.svg"
      alt="Footer Gradient"
      width={720}
      height={86}
      priority
      layout="responsive"
    />
  );
};

export default FooterGradient;
