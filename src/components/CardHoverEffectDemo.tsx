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
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "",
  },
  {
    title: "Netflix",
    description:
      "A technology company that builds economic infrastructure for the internet..",
    link: "",
  },
  {
    title: "Google",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "",
  },
  {
    title: "Meta",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "",
  },
  {
    title: "Amazon",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "",
  },
  {
    title: "Microsoft",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "",
  },
];
