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

interface IMasterPageProps {
  sections: IPageSection[];
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const MasterPage: React.FunctionComponent<IMasterPageProps> = ({
  sections,
}) => {
  return (
    <Layout>
      {sections.map((s) => {
        const Section = sectionConfig[s.fields.designedSection];
        return <Section key={s.sys.id} section={s} />;
      })}
    </Layout>
  );
};

export async function getStaticPaths() {
  const { webPages } = await getAllWebPages(client);
  const paths = webPages.map((wp) => ({
    params: {
      slug: wp.fields.relativeUrl,
    },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps<{
  sections: IPageSection[];
}> = async (context) => {
  if (!context.params) {
    return {
      props: { sections: [] },
    };
  }
  const { slug } = context.params as IParams;
  const { sections } = await getSectionsOfPage(client, slug as string);

  if (!sections) {
    return {
      props: { sections: [] },
    };
  }
  return {
    // Passed to the page component as props
    props: { sections },
  };
};

export default MasterPage;
