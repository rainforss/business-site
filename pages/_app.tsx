import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Bodoni_Moda, Libre_Bodoni, Mulish } from "@next/font/google";

export const bodoni = Libre_Bodoni({ subsets: ["latin"] });
export const mulish = Mulish({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${mulish.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
