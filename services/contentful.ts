import * as contentful from "contentful";
import { Entry } from "contentful";
import { IWebPageFields } from "../@types/generated/contentful";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getAllWebPages = async (
  client: contentful.ContentfulClientApi
) => {
  const webPages: Entry<IWebPageFields>[] = (
    await client.getEntries<IWebPageFields>({
      content_type: "webPage",
      include: 3,
    })
  ).items;
  return {
    webPages,
  };
};

export const getSectionsOfPage = async (
  client: contentful.ContentfulClientApi,
  relativeUrl: string
) => {
  const webPages: Entry<IWebPageFields>[] = (
    await client.getEntries<IWebPageFields>({
      content_type: "webPage",
      "fields.relativeUrl": relativeUrl,
      include: 3,
    })
  ).items;
  if (webPages.length === 0) {
    return { sections: [] };
  }
  return {
    page: webPages[0],
    sections: webPages[0].fields.pageSections,
  };
};
