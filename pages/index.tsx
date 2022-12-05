import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { IPageSection, IWebPage } from "../@types/generated/contentful";
import { sectionConfig } from "../components/designedSections/sectionsConfig";
import Layout from "../components/Layout";
import {
  client,
  getAllWebPages,
  getSectionsOfPage,
} from "../services/contentful";

interface IHomePageProps {
  sections: IPageSection[];
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Home: React.FunctionComponent<IHomePageProps> = ({ sections }) => {
  return (
    <Layout>
      {sections.map((s) => {
        const Section = sectionConfig[s.fields.designedSection];
        return <Section key={s.sys.id} section={s} />;
      })}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{
  sections: IPageSection[];
}> = async (_context) => {
  const { sections } = await getSectionsOfPage(client, "home");
  if (!sections) {
    return {
      props: {
        sections: [],
      },
    };
  }
  return {
    // Passed to the page component as props
    props: { sections },
  };
};

export default Home;
