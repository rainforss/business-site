import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import businessLogo from "../public/logo-color.svg";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header>
      <div>
        <Image
          src={businessLogo}
          width={300}
          height={300}
          alt="EffiTech Logo"
        />
        <nav>
          <ul>
            <li>
              <Link href="/services" passHref>
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/resources" passHref>
                <a>Resources</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button>Contrast</button>
        <button>Ask a question</button>
      </div>
    </header>
  );
};

export default Header;
