"use client";

import { List, X } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

function Header() {
  const [currentDisplay, setCurretDisplay] = useState("p-0 h-0");
  const [className, setClassName] = useState("py-8 bg-transparent text-white");

  useEffect(() => {
    const onPageScroll = () => {
      setClassName(
        window.pageYOffset > 20
          ? "py-6 text-black bg-white"
          : "py-8 bg-transparent text-white"
      );
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-20">
      <div
        className={`flex justify-between items-center px-6 lg:px-12 z-20 relative duration-300 ease-linear ${className}`}
      >
        <a href="/">
          <img src="/assets/logo.png" alt="logo" width={50} height={50} />
        </a>
        <button
          className="lg:hidden"
          onClick={() => {
            setCurretDisplay(
              currentDisplay === "p-0 h-0" ? "p-4 h-fit" : "p-0 h-0"
            );
          }}
        >
          {currentDisplay === "p-0 h-0" ? <List size={32} /> : <X size={32} />}
        </button>
        <div className="hidden lg:flex gap-6">
          <a href="/">Home</a>
          <a href="/">Portfolio</a>
          <a href="/">About</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
        </div>
      </div>

      <div
        className={`absolute top-24 right-6 bg-white z-20 shadow-lg w-[150px] flex flex-col gap-4 overflow-hidden ${currentDisplay}`}
      >
        <a href="/">Home</a>
        <a href="/">Portfolio</a>
        <a href="/">About</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
      </div>
    </div>
  );
}

export default Header;
