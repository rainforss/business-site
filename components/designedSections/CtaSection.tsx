import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as React from "react";
import { IPageSection } from "../../@types/generated/contentful";
import { bodoni } from "../../pages/_app";
import { getRenderOption } from "../../utils/richTextParser";
import EmailListForm from "../forms/emailListForm";

interface ICtaSectionProps {
  section: IPageSection;
}

const CtaSection: React.FunctionComponent<ICtaSectionProps> = ({ section }) => {
  return (
    <section
      id={section.fields.sectionId}
      className="bg-[#faf8f5] flex pb-0 pt-12"
    >
      <div className="w-full flex flex-wrap mx-auto text-black">
        <div
          className="w-full md:w-1/2"
          style={{
            backgroundImage: "url('/atomshine.svg')",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex flex-col w-full md:w-1/2 gap-6 bg-slate-100 p-6">
          <h1 className={`text-5xl font-bold ${bodoni.className}`}>
            {section.fields.mainHeading}
          </h1>
          <h3 className="text-xl">{section.fields.subHeading}</h3>
          <EmailListForm />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
