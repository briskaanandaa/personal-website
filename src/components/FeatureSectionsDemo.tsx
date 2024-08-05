import { cn } from "@/lib/utils";
import {
  IconCode,
  IconPencilCode,
  IconVectorBezier,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "UI/UX Designer",
      description:
        "I’m passionate about creating beautiful and user-friendly designs. I focus on making sure that every user interaction is smooth and enjoyable",
      icon: <IconPencilCode />,
    },
    {
      title: "No Code Developer",
      description:
        "I use no-code tools to build solutions quickly and efficiently. This helps businesses turn their ideas into reality without long development times.",
      icon: <IconVectorBezier />,
    },
    {
      title: "Front-End Developer",
      description:
        "I turn designs into interactive websites. My work ensures that websites look good and work well, helping businesses achieve their goals.",
      icon: <IconCode />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto w-[90vw] md:w-[75vw]">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col  py-10 relative group/feature ",
        (index === 0 || index === 3) && "",
        index < 3 && "border-b border-l border-slate-300 md:border-none"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-slate-100 dark:from-slate-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-slate-600 dark:text-slate-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-300 dark:bg-slate-700 group-hover/feature:bg-slate-900 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-slate-800 dark:text-slate-100 ">
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
