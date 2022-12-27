import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as React from "react";
import { IPageSection } from "../../@types/generated/contentful";
import { bodoni } from "../../pages/_app";
import { getRenderOption } from "../../utils/richTextParser";
import Image from "next/image";
import Link from "next/link";

interface IRecentBlogsSectionProps {
  section: IPageSection;
}

const RecentBlogsSection: React.FunctionComponent<IRecentBlogsSectionProps> = ({
  section,
}) => {
  return (
    <section
      id={section.fields.sectionId}
      className="bg-[#faf8f5] flex pb-24 pt-12"
    >
      <div className="p-6 w-full md:w-4/5 flex flex-col-reverse md:flex-row mx-auto text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-2/3">
          {section.fields.publications?.map((p) => (
            <div
              key={p.sys.id}
              className="bg-white flex flex-col gap-4 recent-blog-container"
            >
              <div className="p-6 flex flex-col gap-4">
                <h4 className="text-2xl">
                  <Link
                    href={`/publications/${p.fields.slug}`}
                    className="hover:underline"
                  >
                    {p.fields.blogTitle}
                  </Link>
                </h4>
                <p className="overflow-ellipsis line-clamp-3">
                  {p.fields.coverText}
                </p>
              </div>
              <div className="overflow-hidden h-[165px] lg:h-[245px]">
                <Link href={`/publications/${p.fields.slug}`}>
                  <Image
                    src={`https:${p.fields.blogAttachment?.fields.file.url}`}
                    width={500}
                    height={500}
                    alt={p.fields.blogTitle}
                    className="object-cover hover:scale-125 transition-all"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <aside className="w-full md:w-1/3 flex flex-col gap-8 md:pl-12 md:pt-12">
          <h5 className="text-lg">{section.fields.overline}</h5>
          <h1
            className={`text-5xl md:text-6xl font-bold leading-[3rem] md:leading-[5rem] ${bodoni.className}`}
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
        </aside>
      </div>
    </section>
  );
};

export default RecentBlogsSection;
