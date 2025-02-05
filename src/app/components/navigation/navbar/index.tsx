import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0 bg-background z-50">
        <div className="container mx-auto px-4 h-full">
          <div className="font-medium flex justify-between items-center h-full">
            <div className="color-var(--foreground) inline-flex align-middle text-4xl font-bold">
              <Logo />
            </div>
            <ul className="hidden md:flex gap-x-6 text-white font-bold">
              <li>
                <Link href="/about" className="px-3 py-1.5">
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="px-3 py-1.5">
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link href="https://webui.matthewyjiang.com" className="px-3 py-1.5 text-blue-500 hover:text-blue-300 font-extrabold ">
                  <span>AI Chat</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/matthewyjiang/" className="px-3 py-1.5">
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
