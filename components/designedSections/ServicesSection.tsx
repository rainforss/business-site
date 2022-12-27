import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as React from "react";
import { IPageSection } from "../../@types/generated/contentful";
import { bodoni } from "../../pages/_app";
import { getRenderOption } from "../../utils/richTextParser";

interface IServicesSectionProps {
  section: IPageSection;
}

const ServicesSection: React.FunctionComponent<IServicesSectionProps> = ({
  section,
}) => {
  return (
    <section
      id={section.fields.sectionId}
      className="bg-[#faf8f5] flex pb-12 pt-12"
    >
      <div className="p-6 w-full md:w-4/5 mx-auto text-black">
        <div className="flex flex-col gap-8 w-full">
          <h2
            className={`text-4xl md:text-6xl text-center font-bold leading-[3rem] md:leading-[5rem] ${bodoni.className}`}
          >
            {section.fields.mainHeading}
          </h2>
          <h3 className="text-2xl text-center mb-8">
            {section.fields.subHeading}
          </h3>
          <div className="flex services-container flex-wrap">
            {documentToReactComponents(
              section.fields.content!,
              getRenderOption()
            )}
          </div>
        </div>
        <aside></aside>
      </div>
    </section>
  );
};

export default ServicesSection;
