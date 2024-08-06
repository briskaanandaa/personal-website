import Image from "next/image";

const HeaderGradient = () => {
  return (
    <div className="w-full h-auto absolute z-0">
      <Image
        src="/headergradient.svg"
        alt="Header Gradient"
        width={720}
        height={193}
        priority
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
      />
    </div>
  );
};

export default HeaderGradient;
