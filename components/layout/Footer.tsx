import React from "react";
import LogoWhite from "@/public/Assets/Icons/logo_white.svg";
import InstaIcon from "@/public/Assets/Icons/insta-footer.svg";
import VimeoIcon from "@/public/Assets/Icons/footer-vimeo.svg";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const Footer = () => {
  const serviceLinks = [
    { name: "Groups Overview", link: "/groups" },
    { name: "One-to-Ones", link: "/onetoone" },
    { name: "Online Groups", link: "/groups" },
    { name: "In-Person Sessions", link: "/groups" },
    { name: "Retreats", link: "/groups" },
  ];

  const aboutLinks = [
    { name: "Approach", link: "/approach" },
    { name: "About", link: "/about" },
    { name: "Qualifications", link: "/about" },
  ];

  const resourceLinks = [
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
    { name: "Members Portal", link: "/dashboard" },
    { name: "Newsletter", link: "/" },
  ];

  return (
    <div className="w-full m-0 bg-customSienna text-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 lg:container lg:mx-auto lg:px-5">
        <div className="order-last md:order-first items-center">
          <div className="items-center text-center md:text-left">
            <Link href="/">
              <Image
                src={LogoWhite}
                alt="Rose Long Logo"
                height={64}
                width={0}
                className="mx-auto md:mx-1"
              />
            </Link>
            <div>
              <Link
                href="https://www.instagram.com/lifechangesrose/?hl=en"
                className="inline-block m-3 transform transition-transform duration-300 hover:scale-110"
              >
                <Image src={InstaIcon} alt="Instagram" height={48} width={48} />
              </Link>
              <Link
                href="https://vimeo.com/roselong"
                className="inline-block m-3 transform transition-transform duration-300 hover:scale-110"
              >
                <Image src={VimeoIcon} alt="Vimeo" height={48} width={48} />
              </Link>
            </div>
            <Link href="/contact">
              <Button variant="secondary" className="my-2 mx-auto lg:mx-3">
                Get in Touch
              </Button>
            </Link>
            <div className="my-6">
              <p className="text-xs text-white leading-6">
                Website built by{" "}
                <Link href="https://annarosewain.com/" className="font-bold">
                  {" "}
                  Anna-Rose Wain{" "}
                </Link>{" "}
                | Artwork by{" "}
                <Link
                  href="https://www.sacredintuitiveart.com/about"
                  className="font-bold"
                >
                  Lynn Hanford Day - Sacred Intuitive Art
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 items-start justify-between text-center md:text-left">
          {/* Services Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-base my-4 text-center md:text-left">
              services
            </h3>
            <ul className="list-none p-0">
              {serviceLinks.map((item, index) => (
                <li key={index} className="block mb-3">
                  <Link
                    className="white-links text-xs leading-6 md:text-base"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-base my-4 text-center md:text-left">
              about
            </h3>
            <ul className="list-none p-0">
              {aboutLinks.map((item, index) => (
                <li key={index} className="block mb-3">
                  <Link
                    className="white-links text-xs leading-6 md:text-base"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white text-base my-4 text-center md:text-left">
              resources
            </h3>
            <ul className="list-none p-0">
              {resourceLinks.map((item, index) => (
                <li key={index} className="block mb-3">
                  <Link
                    className="white-links text-xs leading-6 md:text-base"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
