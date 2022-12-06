import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import businessLogo from "../public/logo-color.svg";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className="bg-black">
      <div className="flex w-4/5 mx-auto justify-between items-center p-8 text-[#faf8f5]">
        <div className="w-1/3 pr-24">
          <Image
            src={
              "https://images.ctfassets.net/o5j01g0vn1o7/6lJAZZydyLtTCgGDLgc1Lj/3b891be69177adf0ce349536ba93f3e0/logo-no-background.svg"
            }
            color="white"
            width={300}
            height={200}
            alt="EffiTech Logo"
          />
          <p></p>
          <blockquote className="pt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </blockquote>
        </div>
        <div className="w-1/3 pr-24">
          <nav className="flex gap-16 justify-around">
            <ul>
              <li>
                <Link href="/services" passHref>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" passHref>
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/services" passHref>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" passHref>
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <form className="w-1/3 h-64 bg-[#faf8f5]"></form>
      </div>
      <div className="bg-[#faf8f5] p-6 flex justify-between items-center">
        <p>© 2022 EffiTech Ltd. All rights reserved.</p>
        <p>
          Powered by <Link href="https://nextjs.org/">NextJS</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
