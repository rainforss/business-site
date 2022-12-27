import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { mulish } from "../pages/_app";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    if (window.scrollY < scrollPosition) {
      document.getElementById("header")?.classList.add("sticky");
      document.getElementById("header")?.classList.remove("opacity-0");
      document.getElementById("header")?.classList.add("opacity-100");
      setScrollPosition(window.scrollY);
    }
    if (window.scrollY > scrollPosition) {
      document.getElementById("header")?.classList.remove("sticky");
      document.getElementById("header")?.classList.remove("opacity-100");
      document.getElementById("header")?.classList.add("opacity-0");
      setScrollPosition(window.scrollY);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <header
      id="header"
      className="flex justify-between items-center p-6 w-full mx-auto bg-white top-0 transition-opacity duration-500 opacity-100"
    >
      <div className={`flex justify-start items-center ${mulish.className}`}>
        <Image
          src={
            "https://images.ctfassets.net/o5j01g0vn1o7/6ROP4WqqVBok3qOPlzTpbG/89bdddec38f73ef7db698ffb6bec5212/logo-black.svg.png"
          }
          width={300}
          height={100}
          alt="EffiTech Logo"
        />
        <nav className="ml-24 hidden lg:block">
          <ul className="flex gap-8 uppercase font-bold">
            <li>
              <Link
                href="/about"
                passHref
                className="px-4 py-2 hover:bg-[#374151] hover:text-white transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                passHref
                className="px-4 py-2 hover:bg-[#374151] hover:text-white transition-all duration-300"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/resources"
                passHref
                className="px-4 py-2 hover:bg-[#374151] hover:text-white transition-all duration-300"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                passHref
                className="px-4 py-2 hover:bg-[#374151] hover:text-white transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden lg:block">
        <button className="uppercase bg-[#374151] border-[#374151] border-2 border-solid text-white px-6 py-2 hover:bg-white hover:text-[#374151] transition-all duration-500">
          Ask a question
        </button>
      </div>
    </header>
  );
};

export default Header;
