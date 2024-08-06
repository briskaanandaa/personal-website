import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    name: "Berbinar Insightful",
    description: "Landing Page",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: "",
  },
  {
    name: "Relays",
    description: "Website Design",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: "",
  },
  {
    name: "Kalys",
    description: "Company Website",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: "",
  },
  {
    name: "Note App",
    description: "Web Application",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
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
