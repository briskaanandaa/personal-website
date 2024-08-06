"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  const handleScroll = () => {
    const sectionRefs = document.querySelectorAll(".scroll-section");
    sectionRefs.forEach((section, index) => {
      if (
        section.getBoundingClientRect().top < window.innerHeight / 2 &&
        section.getBoundingClientRect().bottom > window.innerHeight / 2
      ) {
        setActiveCard(index);
      }
    });
  };

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundGradient,
      }}
      className="flex gap-x-20 rounded-md mt-10 mb-2"
      ref={ref}
    >
      <div className="relative flex items-start w-full">
        <div className="w-full">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="scroll-section mb-20 w-full p-10 bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]  rounded-md"
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-900"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-500 mt-5"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md sticky top-28 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
