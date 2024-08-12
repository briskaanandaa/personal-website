"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope); // Memantau apakah elemen dalam viewport
  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      // Hanya menjalankan animasi jika elemen dalam viewport
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [isInView]); // Memicu useEffect ketika isInView berubah

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="w-full h-fit flex justify-center mt-7 mb-12 z-10">
        <div className="relative w-[90vw] md:w-[75vw] h-fit z-10">
          <div className=" text-slate-900 font-semibold md:text-3xl lg:text-4xl text-3xl sm:text-left md:leading-10 leading-8 tracking-wide text-center">
            {renderWords()}
          </div>
        </div>
      </div>
    </div>
  );
};
