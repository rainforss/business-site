import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as React from "react";
import { IPageSection } from "../../@types/generated/contentful";
import { bodoni } from "../../pages/_app";
import { getRenderOption } from "../../utils/richTextParser";

interface IHeroSectionProps {
  section: IPageSection;
}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = ({
  section,
}) => {
  return (
    <section
      id={section.fields.sectionId}
      className="bg-[#faf8f5] flex pb-24 pt-12"
      style={{
        backgroundImage: "url('/atomshine.svg')",
        backgroundSize: "cover",
      }}
    >
      <div className="p-6 w-4/5 mx-auto text-[#faf8f5]">
        <div className="flex flex-col gap-8 w-1/2">
          <h5 className="text-lg">{section.fields.overline}</h5>
          <h1
            className={`text-6xl font-bold leading-[5rem] ${bodoni.className}`}
          >
            {section.fields.mainHeading}
          </h1>
          <h3 className="text-2xl">{section.fields.subHeading}</h3>
          <div>
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

export default HeroSection;
