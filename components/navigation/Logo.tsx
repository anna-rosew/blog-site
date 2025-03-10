"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import LogoImg from "@/public/Assets/Icons/Logo.svg";
import { Button } from "../ui/button";

const Logo = () => {
  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link href="/" style={{ display: showButton ? "none" : "block" }}>
        <Image
          src={LogoImg}
          alt="Logo"
          width={250}
          height={74}
          className="relative cursor-pointer w-[150px] h-[45px] md:w-[250px] md:h-[74px]"
          priority={true}
        />
      </Link>
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
        <Button />
      </div>
    </>
  );
};

export default Logo;
