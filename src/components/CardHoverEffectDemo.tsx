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
    link: "blogs/blogs-1",
  },
  {
    title: "Auto Layout in Figma",
    description:
      "This content is currently in progress and will be available soon. Please check back later for the full article",
    link: "blogs/blogs-1",
  },
  {
    title: "Framer Tips & Tricks",
    description:
      "This content is currently in progress and will be available soon. Please check back later for the full article",
    link: "blogs/blogs-1",
  },
  {
    title: "Why Shadcn ?",
    description:
      "This content is currently in progress and will be available soon. Please check back later for the full article",
    link: "blogs/blogs-1",
  },
  {
    title: "Hi-Fi Prototypes",
    description:
      "This content is currently in progress and will be available soon. Please check back later for the full article",
    link: "blogs/blogs-1",
  },
  {
    title: "Tailwind for styling",
    description:
      "This content is currently in progress and will be available soon. Please check back later for the full article",
    link: "blogs/blogs-1",
  },
];
