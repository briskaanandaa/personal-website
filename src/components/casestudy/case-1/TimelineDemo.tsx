import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Design Overview",
      content: (
        <div>
          <p className="text-slate-500  text-sm md:text-lg mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <Image
              src="/case1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Techstack",
      content: (
        <div>
          <p className="text-slate-500  text-sm md:text-lg mb-4">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-slate-500  text-sm md:text-lg mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <Image
              src="/case1.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Goals",
      content: (
        <div>
          <p className="text-slate-500  text-sm md:text-lg mb-4">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-slate-500  text-sm md:text-lg mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2  gap-2 md:gap-4">
            <Image
              src="/case1.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Testimonial",
      content: (
        <div>
          <p className="text-slate-500  text-sm md:text-lg mb-4">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-slate-500  text-sm md:text-lg mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            <Image
              src="/case1.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
            <Image
              src="/case1.png"
              alt=""
              width={500}
              height={500}
              className="rounded-lg object-cover h-fit w-fit   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
