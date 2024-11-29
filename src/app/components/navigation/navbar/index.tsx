import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="font-medium flex justify-between items-center h-full">
            <div className="color-var(--foreground) inline-flex align-middle text-4xl font-bold">
              <Logo />
              &nbsp;Matthew Jiang
            </div>
            <ul className="hidden md:flex gap-x-6 text-white font-bold">
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/matthewyjiang/">
                  <p>LinkedIn</p>
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
