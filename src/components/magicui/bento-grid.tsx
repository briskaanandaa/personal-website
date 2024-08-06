import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col lg:w-fit lg:mx-4 mx-auto w-[95%] gap-1 transition-all duration-300 group-hover:-translate-y-14 px-4 py-2 bg-slate-900 lg:mb-4 mb-3 rounded-lg">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="max-w-lg text-slate-300">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <button className="pointer-events-auto px-6 py-2 items-center justify-center h-fit rounded-full font-semibold bg-gradient-to-b from-slate-700 to-slate-900 text-white ring-4 ring-slate-300 focus:ring-0 transition-all duration-500 ease-in-out transform-gpu focus:translate-y-1">
        <a href={href}>{cta}</a>
      </button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300" />
  </div>
);

export { BentoCard, BentoGrid };
