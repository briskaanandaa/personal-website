"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { title: "Home", value: "home", href: "/" },
  { title: "About", value: "about", href: "/about" },
  { title: "Work", value: "work", href: "/work" },
];

const socialLinks = [
  {
    href: "https://github.com/briskaanandaa",
    svg: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_28_898)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0099 0.5C5.36875 0.5 0 5.90833 0 12.5992C0 17.9475 3.43994 22.4748 8.21205 24.0771C8.80869 24.1976 9.02724 23.8168 9.02724 23.4965C9.02724 23.216 9.00757 22.2545 9.00757 21.2527C5.6667 21.974 4.97099 19.8104 4.97099 19.8104C4.43409 18.4082 3.63858 18.0478 3.63858 18.0478C2.54511 17.3066 3.71823 17.3066 3.71823 17.3066C4.93117 17.3868 5.56763 18.5486 5.56763 18.5486C6.64118 20.3913 8.37111 19.8707 9.06706 19.5501C9.16638 18.7688 9.48473 18.228 9.82275 17.9276C7.15817 17.6471 4.35469 16.6055 4.35469 11.958C4.35469 10.6359 4.8316 9.55428 5.58729 8.71304C5.46807 8.41263 5.0504 7.17043 5.70677 5.50787C5.70677 5.50787 6.72083 5.1873 9.00732 6.74981C9.98625 6.48497 10.9958 6.35024 12.0099 6.34911C13.024 6.34911 14.0577 6.48948 15.0123 6.74981C17.299 5.1873 18.3131 5.50787 18.3131 5.50787C18.9695 7.17043 18.5515 8.41263 18.4323 8.71304C19.2079 9.55428 19.6652 10.6359 19.6652 11.958C19.6652 16.6055 16.8617 17.6269 14.1772 17.9276C14.6148 18.3081 14.9924 19.0292 14.9924 20.1711C14.9924 21.7936 14.9727 23.0957 14.9727 23.4962C14.9727 23.8168 15.1915 24.1976 15.7879 24.0774C20.56 22.4745 23.9999 17.9475 23.9999 12.5992C24.0196 5.90833 18.6312 0.5 12.0099 0.5Z"
            fill="#24292F"
          />
        </g>
        <defs>
          <clipPath id="clip0_28_898">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/briskaanandaa",
    svg: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_28_899)">
          <path
            d="M22.2283 0.5H1.77167C1.30179 0.5 0.851161 0.686657 0.518909 1.01891C0.186657 1.35116 0 1.80179 0 2.27167V22.7283C0 23.1982 0.186657 23.6488 0.518909 23.9811C0.851161 24.3133 1.30179 24.5 1.77167 24.5H22.2283C22.6982 24.5 23.1488 24.3133 23.4811 23.9811C23.8133 23.6488 24 23.1982 24 22.7283V2.27167C24 1.80179 23.8133 1.35116 23.4811 1.01891C23.1488 0.686657 22.6982 0.5 22.2283 0.5ZM7.15333 20.945H3.545V9.48333H7.15333V20.945ZM5.34667 7.895C4.93736 7.8927 4.53792 7.7692 4.19873 7.54009C3.85955 7.31098 3.59584 6.98653 3.44088 6.60769C3.28591 6.22885 3.24665 5.81259 3.32803 5.41145C3.40941 5.01032 3.6078 4.64228 3.89816 4.35378C4.18851 4.06529 4.55782 3.86927 4.95947 3.79046C5.36112 3.71165 5.77711 3.75359 6.15495 3.91099C6.53279 4.06838 6.85554 4.33417 7.08247 4.67481C7.30939 5.01546 7.43032 5.41569 7.43 5.825C7.43386 6.09903 7.38251 6.37104 7.27901 6.6248C7.17551 6.87857 7.02198 7.1089 6.82757 7.30207C6.63316 7.49523 6.40185 7.64728 6.14742 7.74915C5.893 7.85102 5.62067 7.90062 5.34667 7.895ZM20.4533 20.955H16.8467V14.6933C16.8467 12.8467 16.0617 12.2767 15.0483 12.2767C13.9783 12.2767 12.9283 13.0833 12.9283 14.74V20.955H9.32V9.49167H12.79V11.08H12.8367C13.185 10.375 14.405 9.17 16.2667 9.17C18.28 9.17 20.455 10.365 20.455 13.865L20.4533 20.955Z"
            fill="#0A66C2"
          />
        </g>
        <defs>
          <clipPath id="clip0_28_899">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    href: "mailto:briskaananda103@gmail.com",
    svg: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_28_900)">
          <path
            d="M1.63636 21.5045H5.45455V12.2318L0 8.1409V19.8682C0 20.7736 0.733636 21.5045 1.63636 21.5045Z"
            fill="#4285F4"
          />
          <path
            d="M18.5455 21.5045H22.3637C23.2691 21.5045 24 20.7709 24 19.8682V8.1409L18.5455 12.2318"
            fill="#34A853"
          />
          <path
            d="M18.5455 5.14101V12.2319L24 8.14101V5.95919C24 3.93555 21.69 2.78191 20.0727 3.99555"
            fill="#FBBC04"
          />
          <path
            d="M5.45453 12.2318V5.14088L12 10.05L18.5454 5.14088V12.2318L12 17.1409"
            fill="#EA4335"
          />
          <path
            d="M0 5.95919V8.14101L5.45455 12.2319V5.14101L3.92727 3.99555C2.30727 2.78191 0 3.93555 0 5.95919Z"
            fill="#C5221F"
          />
        </g>
        <defs>
          <clipPath id="clip0_28_900">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

export const Navbar = ({
  containerClassName,
  activeItemClassName,
  itemClassName,
}: {
  containerClassName?: string;
  activeItemClassName?: string;
  itemClassName?: string;
}) => {
  const [active, setActive] = useState(navItems[0]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const currentNavItem =
        navItems.find((item) => item.href === path) || navItems[0];
      setActive(currentNavItem);
    };

    // Set the initial active item
    handlePopState();

    // Listen for popstate events (when the user navigates with browser's back/forward buttons)
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row items-center justify-center lg:justify-between mx-auto w-[90vw] md:w-[75vw] z-10 mt-[4vh] lg:mt-[6vh]",
        containerClassName
      )}
    >
      {/* Logo */}
      <h1 className="text-3xl font-semibold text-slate-900 hidden lg:block">
        Briska
      </h1>

      {/* Navbar Items */}
      <div className="flex flex-row items-center justify-center p-3 rounded-full bg-white lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
        {navItems.map((item) => (
          <Link key={item.value} href={item.href}>
            <button
              onClick={() => setActive(item)}
              className="relative px-4 py-2 rounded-full focus:outline-none"
            >
              {active.value === item.value && (
                <motion.div
                  layoutId="activeItem"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 rounded-full",
                    "border border-slate-800 animate-shimmer bg-[linear-gradient(110deg,#0F172A,45%,#1e2631,55%,#0F172A)] bg-[length:200%_100%] transition-colors ring-4 ring-slate-300"
                  )}
                />
              )}
              <span
                className={cn(
                  "relative block font-semibold",
                  active.value === item.value ? "text-white" : "text-slate-900"
                )}
              >
                {item.title}
              </span>
            </button>
          </Link>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="space-x-6 hidden lg:flex">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white"
          >
            {link.svg}
          </a>
        ))}
      </div>
    </div>
  );
};
