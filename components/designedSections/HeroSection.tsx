import * as React from "react";
import { IPageSection } from "../../@types/generated/contentful";

interface IHeroSectionProps {
  section: IPageSection;
}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = ({
  section,
}) => {
  return (
    <section id={section.fields.sectionId}>
      <div>
        <h5>{section.fields.overline}</h5>
        <h1>{section.fields.mainHeading}</h1>
        <h3>{section.fields.subHeading}</h3>
      </div>
      <aside></aside>
    </section>
  );
};

export default HeroSection;
