import BrushIcon from "@/Icons/BrushIcon";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 px-4 py-5 lg:px-6 h-14 flex items-center justify-center bg-black z-10 mt-2.5 mb-2.5">
      <Link
        href="/"
        className="flex items-center justify-center py-10 px-4 rounded-3xl text-black"
        prefetch={false}
      >
        <BrushIcon />
        <span className="sr-only">Creator Studio</span>
      </Link>
      <nav className="ml-auto flex gap-4 ">
        <Link
          href="#"
          className="text-sm font-medium hover:bg-white hover:text-black rounded-3xl p-2"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:bg-white hover:text-black rounded-3xl p-2"
          prefetch={false}
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:bg-white hover:text-black rounded-3xl p-2"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:bg-white hover:text-black rounded-3xl p-2"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
