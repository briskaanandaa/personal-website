"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion, AnimatePresence } from "framer-motion";

export function TimelineDemo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleZoom = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const data = [
    {
      title: "Design Overview",
      content: (
        <div>
          <p className="text-slate-500 text-sm md:text-lg mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {["/case1.png", "/case1.png", "/case1.png", "/case1.png"].map(
              (src, index) => (
                <motion.div
                  key={index}
                  className="relative  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] rounded-lg"
                  layout
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleZoom(src)}
                >
                  <Image
                    src={src}
                    alt={`startup template ${index + 1}`}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover cursor-pointer"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      ),
    },
    {
      title: "User Research",
      content: (
        <div>
          <p className="text-slate-500 text-sm md:text-lg mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {["/case1.png", "/case1.png", "/case1.png", "/case1.png"].map(
              (src, index) => (
                <motion.div
                  key={index}
                  className="relative   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] rounded-lg"
                  layout
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleZoom(src)}
                >
                  <Image
                    src={src}
                    alt={`startup template ${index + 1}`}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover cursor-pointer"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      ),
    },
    {
      title: "TechStack",
      content: (
        <div>
          <p className="text-slate-500 text-sm md:text-lg mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {["/case1.png", "/case1.png", "/case1.png", "/case1.png"].map(
              (src, index) => (
                <motion.div
                  key={index}
                  className="relative   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] rounded-lg"
                  layout
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleZoom(src)}
                >
                  <Image
                    src={src}
                    alt={`startup template ${index + 1}`}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover cursor-pointer"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Conclusion",
      content: (
        <div>
          <p className="text-slate-500 text-sm md:text-lg mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-2 md:gap-4">
            {["/case1.png", "/case1.png", "/case1.png", "/case1.png"].map(
              (src, index) => (
                <motion.div
                  key={index}
                  className="relative   [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] rounded-lg"
                  layout
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleZoom(src)}
                >
                  <Image
                    src={src}
                    alt={`startup template ${index + 1}`}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover cursor-pointer"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      ),
    },
  ];

  // Tambahkan data lainnya di sini

  return (
    <div className="w-full">
      <Timeline data={data} />

      {/* Modal untuk gambar yang diperbesar */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-3xl w-full p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Agar klik di dalam modal tidak menutup modal
            >
              <Image
                src={selectedImage}
                alt="Enlarged image"
                layout="responsive"
                width={1000}
                height={600}
                className="rounded-lg object-cover"
              />
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
