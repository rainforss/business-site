import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import businessLogo from "../public/logo-color.svg";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer>
      <div>
        <div>
          <Image
            src={businessLogo}
            width={300}
            height={300}
            alt="EffiTech Logo"
          />
          <p></p>
          <ul>
            <li>
              <Link href="#">1</Link>
            </li>
            <li>
              <Link href="#">1</Link>
            </li>
            <li>
              <Link href="#">1</Link>
            </li>
            <li>
              <Link href="#">1</Link>
            </li>
          </ul>
        </div>
        <aside>
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
        </aside>
      </div>
      <div>
        <p>EffiTech Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
