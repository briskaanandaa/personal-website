import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className=" mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "How to use NextJs",
    description:
      "This content is currently in progress and will be available soon. Please check back later for the full article",
    link: "",
  },
  {
    title: "Auto Layout in Figma",
    description:
      "This content is currently in progress and will be available soon. Please check back later for the full article",
    link: "",
  },
  {
    title: "Framer Tips & Tricks",
    description:
      "This content is currently in progress and will be available soon. Please check back later for the full article",
    link: "",
  },
  {
    title: "Why Shadcn ?",
    description:
      "This content is currently in progress and will be available soon. Please check back later for the full article",
    link: "",
  },
  {
    title: "Hi-Fi Prototypes",
    description:
      "This content is currently in progress and will be available soon. Please check back later for the full article",
    link: "",
  },
  {
    title: "Tailwind for styling",
    description:
      "This content is currently in progress and will be available soon. Please check back later for the full article",
    link: "",
  },
];
