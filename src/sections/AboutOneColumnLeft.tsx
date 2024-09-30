"use client";

import styled from "styled-components";

import aboutWhoAreWeContent from "@/app/(mdx)/aboutWhoAreWeContent.mdx";

const ContentBlock = styled.div`
  margin-top: 2rem;
  width: 100%;

  h3 {
    margin-top: 2.5rem;

    font-size: 1.25rem;
    line-height: 2.5rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 1.25rem;

    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.5rem;
    text-align: left;
  }
`;

type HomeOneColumnLeftProps = {
  tagline?: any;
  title?: string;
  content?: any;
};

export default function AboutOneColumnLeft({
  tagline = "subtitle",
  title = "main title",
  content = "a couple of words",
}: HomeOneColumnLeftProps) {
  const ContentComponent: { [key: string]: any } = {
    whoWeAre: aboutWhoAreWeContent,
  };

  const MDXContent = ContentComponent[content];

  return (
    <section
      className={`relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full bg-ravenci text-ravenci-light-gray`}
    >
      <article className={`hidden md:block`}></article>
      <article
        className={`relative px-4 sm:px-10 py-36 col-span-2 flex flex-col justify-start md:justify-center items-center w-full h-full bg-ravenci`}
      >
        <h3 className={`self-start font-poppins font-light opacity-50`}>
          {tagline}
        </h3>
        <h2
          className={`self-start font-poppins font-semibold text-4xl tracking-tight`}
        >
          {title}
        </h2>
        <ContentBlock className={`font-poppins text-ravenci-light-gray`}>
          {MDXContent && <MDXContent />}
        </ContentBlock>
      </article>

      <article className={`hidden md:block`}></article>
      <article className={`hidden lg:block`}></article>
      <article className={`hidden xl:block`}></article>
    </section>
  );
}
