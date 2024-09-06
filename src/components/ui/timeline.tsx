"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full " ref={containerRef}>
      <div className="mb-4 sm:mb-0  py-3 md:py-5">
        <h1 className="relative text-4xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-6 inline-block">
          Sisyphus
          <span
            className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#FE79B9] via-[#AD00FF] to-[#2489FF]"
            style={{
              transform: "translateY(9px) translateX(3px)",
              height: "16px",
              clipPath: "polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)",
              zIndex: -1,
            }}
          ></span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-500 ">
          Website Design
        </p>
      </div>

      <div ref={ref} className="relative  mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-20 pb-20 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full  bg-gradient-to-b from-slate-700 to-slate-900  ring-4 ring-slate-300 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-semibold text-slate-900 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-slate-900">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#FE79B9] via-[#AD00FF] to-[#2489FF] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
