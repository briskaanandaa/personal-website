"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam>
      <div className=" mx-auto antialiased pt-4 relative ml-20">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-slate-900 text-white rounded-full text-xs w-fit px-4 py-2 mb-4">
              {item.badge}
            </h2>

            <p className="text-2xl mb-4 font-bold">{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "How To Use Next Js",
    description: (
      <>
        <p>
          Next.js is a powerful React framework that allows developers to build
          fast, user-friendly web applications. Whether you&apos;re creating
          dynamic websites or static pages, Next.js provides a smooth experience
          for both beginners and seasoned developers. In this guide, we&apos;ll
          walk you through the basics of getting started with Next.js.
        </p>
        <h1 className="text-lg font-semibold mt-6">What is Next.js?</h1>
        <p>
          Next.js is a React framework that makes building web applications
          easier by providing features like server-side rendering, static site
          generation, and more. It&apos;s designed to help developers focus on
          writing code, while it handles performance optimizations and routing.
        </p>
        <h1 className="text-lg font-semibold mt-6 mb-2">Install Node.js</h1>
        <p>
          Before you start, make sure you have{" "}
          <a href="https://nodejs.org/" className="text-[#AD00FF] font-medium">
            Node.js
          </a>{" "}
          installed. You&apos;ll need it to manage packages and run your
          project.
        </p>
        <h1 className="text-lg font-semibold mt-6 mb-2">
          Setting Up Your Next.js Project
        </h1>
        <p>
          Create a New Next.js App: In your terminal, run the following command:
        </p>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg shadow-lg overflow-auto my-4">
          <code>npx create-next-app@latest my-nextjs-app</code>
        </pre>
        <h1 className="text-lg font-semibold mt-6 mb-2">
          Run the development server
        </h1>
        <p>Run the development In your terminal, run the following command:</p>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg shadow-lg overflow-auto my-4">
          <code>npm run dev</code>
        </pre>
        <h1 className="text-lg font-semibold mt-6 mb-2">
          Congratulations, your Next.js project is up and running!
        </h1>
        <p>
          Now, it&apos;s time to make it your own. You can start customizing by
          modifying the default content in the pages/index.js file of your
          project. The production is live on{" "}
          <span className="font-medium">localhost:3000</span>
        </p>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg shadow-lg overflow-auto my-4">
          <code>localhost:300</code>
        </pre>
      </>
    ),
    badge: "Developer",
    image: "",
  },
];
