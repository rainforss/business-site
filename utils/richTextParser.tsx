import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";

export const getRenderOption = () => {
  const option: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, file } = node.data.target.fields;
        return (
          <div className="w-48 mx-auto my-16">
            <Image
              src={`https:${file.url}`}
              alt={title}
              width={file.details.image.width}
              height={file.details.image.height}
            />
          </div>
        );
      },
      [BLOCKS.PARAGRAPH]: (_node, children) => {
        return <div className="my-12">{children}</div>;
      },
      [BLOCKS.HEADING_1]: (_node, children) => {
        return <h1 className="my-6">{children}</h1>;
      },
      [BLOCKS.HEADING_2]: (_node, children) => {
        return <h2 className="my-6 capitalize">{children}</h2>;
      },
      [BLOCKS.HEADING_4]: (_node, children) => {
        return <h4 className="my-6 capitalize">{children}</h4>;
      },
      [BLOCKS.HEADING_5]: (_node, children) => {
        return <h5 className="my-6 capitalize">{children}</h5>;
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const contentType = node.data.target.sys.contentType.sys.id;

        // if (contentType === "interactiveComponent") {
        //   const { carouselItems, imageCarouselItems } = node.data.target.fields;
        //   if (carouselItems) {
        //     return (
        //       <Box my={32}>
        //         <Carousel
        //           responsive={responsive}
        //           ssr={true}
        //           infinite={true}
        //           autoPlaySpeed={5000}
        //           autoPlay={true}
        //           removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        //           showDots={true}
        //         >
        //           {(carouselItems as IInteractiveComponentFields["carouselItems"])!.map(
        //             (ci) => (
        //               <Box
        //                 key={ci.sys.id}
        //                 w="360px"
        //                 h="292px"
        //                 bg="rgba(236,240,242,0.3)"
        //                 border="1px solid #F1F1F1"
        //                 mx="auto"
        //                 p={4}
        //               >
        //                 <Image
        //                   src={`https:${
        //                     (ci as IStaticComponent).fields.image!.fields.file
        //                       .url
        //                   }`}
        //                   width={50}
        //                   height={50}
        //                   alt="Test"
        //                 />
        //                 <Heading as="h6">
        //                   {(ci as IStaticComponent).fields.title as string}
        //                 </Heading>
        //                 <Box as="p">{ci.fields.description as string}</Box>
        //               </Box>
        //             )
        //           )}
        //         </Carousel>
        //       </Box>
        //     );
        //   }
        //   if (imageCarouselItems) {
        //     return (
        //       <Box my={32}>
        //         <Carousel
        //           responsive={responsive}
        //           ssr={true}
        //           infinite={true}
        //           autoPlaySpeed={5000}
        //           autoPlay={true}
        //           removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        //           showDots={true}
        //         >
        //           {(imageCarouselItems as IInteractiveComponentFields["imageCarouselItems"])!.map(
        //             (ci) => (
        //               <Box key={ci.sys.id} w="360px" h="292px" p={4}>
        //                 <Image
        //                   src={`https:${(ci as any).fields.file.url}`}
        //                   width={360}
        //                   height={292}
        //                   alt="Test"
        //                 />
        //               </Box>
        //             )
        //           )}
        //         </Carousel>
        //       </Box>
        //     );
        //   }
        // }

        if (contentType === "button") {
          const { label } = node.data.target.fields;
          return (
            <button className="text-2xl bg-transparent border-white border-2 border-solid text-white px-6 py-2 hover:bg-white hover:text-[#374151] transition-all duration-500">
              {label}
            </button>
          );
        }

        return null;
      },
      [INLINES.HYPERLINK]: (node) => {
        return (
          <a href={node.data.uri as string} className="underline font-bold">
            {node.content.map((c: any) => c.value)}
          </a>
        );
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    },
  };

  return option;
};
