"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Company A",
    year: "Agustus 2024",
    roles: "UI UX Designer",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-slate-900 flex items-center justify-center text-white">
        Company A
      </div>
    ),
  },

  {
    title: "Company B",
    roles: "UI UX Designer",
    year: "Agustus 2024",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-slate-900 flex items-center justify-center text-white">
        Company B
      </div>
    ),
  },
  {
    title: "Company C",
    roles: "UI UX Designer",
    year: "Agustus 2024",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-slate-900 flex items-center justify-center text-white">
        Company C
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="0">
      <StickyScroll content={content} />
    </div>
  );
}
