import Image from "next/image";

const FooterGradient = () => {
  return (
    <div className="w-full h-auto absolute bottom-0 z-0 opacity-15">
      <Image
        src="/footer.svg"
        alt="Footer Gradient"
        width={720}
        height={193}
        priority
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
};

export default FooterGradient;
