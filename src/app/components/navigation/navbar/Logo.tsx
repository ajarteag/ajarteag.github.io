"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);


  return (
    <>
  <Link
    href="/"
    style={{
      display: "flex",
      alignItems: "center",
      padding: "10px 15px",
    }}
  >
    <Image
      src="/assets/icon.png"
      alt="Logo"
      width="40"
      height="40"
      className="relative"
    />
    <span>&nbsp;Matthew Jiang</span>
  </Link>

</>


  );
};

export default Logo;