import { Entry } from "contentful";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { ParsedUrlQuery } from "querystring";
import {
  IPageSection,
  IWebPage,
  IWebPageFields,
} from "../@types/generated/contentful";
import { sectionConfig } from "../components/designedSections/sectionsConfig";
import Layout from "../components/Layout";
import {
  client,
  getAllWebPages,
  getSectionsOfPage,
} from "../services/contentful";

interface IHomePageProps {
  sections: IPageSection[];
  page: Entry<IWebPageFields>;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const Home: React.FunctionComponent<IHomePageProps> = ({ sections, page }) => {
  return (
    <>
      <NextSeo
        title={page.fields.seoTitle}
        description={page.fields.seoDescription}
        openGraph={{
          url: page.fields.relativeUrl,
          title: page.fields.seoTitle,
          description: page.fields.seoDescription,
          site_name: "EffiTech",
          images: page.fields.seoPageSnapshot?.map((s) => ({
            url: s.fields.file.url,
            width: s.fields.file.details.image?.width,
            height: s.fields.file.details.image?.height,
            alt: s.fields.title,
            type: s.fields.file.contentType,
          })),
        }}
      />
      <Layout>
        {sections.map((s) => {
          const Section = sectionConfig[s.fields.designedSection];
          return <Section key={s.sys.id} section={s} />;
        })}
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  sections: IPageSection[];
  page?: Entry<IWebPageFields>;
}> = async (_context) => {
  const { page, sections } = await getSectionsOfPage(client, "home");
  if (!sections) {
    return {
      props: {
        sections: [],
      },
    };
  }
  return {
    // Passed to the page component as props
    props: { sections, page },
  };
};

export default Home;
