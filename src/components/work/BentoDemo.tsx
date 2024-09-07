import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    name: "Work in Progress",
    description: "Exciting updates ahead!",
    href: "/work/sisyphus",
    cta: "Case Study",
    className: "col-span-3 lg:col-span-1",
    background: "",
  },
  {
    name: "Work in Progress",
    description: "Exciting updates ahead!",
    href: "/work/sisyphus",
    cta: "Case Study",
    className: "col-span-3 lg:col-span-2",
    background: "",
  },
  {
    name: "Work in Progress",
    description: "Exciting updates ahead!",
    href: "/work/sisyphus",
    cta: "Case Study",
    className: "col-span-3 lg:col-span-2",
    background: "",
  },
  {
    name: "Work in Progress",
    description: "Exciting updates ahead!",
    className: "col-span-3 lg:col-span-1",
    href: "/work/sisyphus",
    cta: "Case Study",
    background: "",
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
