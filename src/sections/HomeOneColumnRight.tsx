"use client";

import styled from "styled-components";
import Link from "next/link";
import homeScalableTagline from "@/app/(mdx)/homeScalableTagline.mdx";
import homeScalableContent from "@/app/(mdx)/homeScalableContent.mdx";
import { Route } from "next";

const ContentBlock = styled.div`
  margin-top: 2rem;

  p {
    margin-bottom: 1.25rem;

    font-size: 0.875rem;
    line-height: 1.5rem;
    text-align: right;
    color: #7b7b7b;
  }
`;

type HomeOneColumnRightProps = {
  tagline: any;
  title: string;
  content: any;
  ctaLink: string;
  ctaText: string;
  ctaTitle: string;
};

const HomeOneColumnRight = ({
  tagline,
  title,
  content,
  ctaText,
  ctaLink,
  ctaTitle,
}: HomeOneColumnRightProps) => {
  const TaglineComponent: { [key: string]: any } = {
    reliable: homeScalableTagline,
  };

  const ContentComponent: { [key: string]: any } = {
    reliable: homeScalableContent,
  };

  const MDXTagline = TaglineComponent[tagline];
  const MDXContent = ContentComponent[content];

  return (
    <section
      className={`relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full bg-ravenci-light-gray`}
    >
      <article
        className={`hidden md:block grid place-content-center`}
      ></article>
      <article
        className={`hidden md:block h-full border-x-[1px] border-ravenci-gray/60`}
      ></article>
      <article className={`hidden xl:block`}></article>

      <article
        className={`relative px-4 sm:px-10 py-36 col-span-2 flex flex-col justify-start md:justify-center items-end w-full max-w-none md:max-w-lg h-full border-x-[1px] border-ravenci-gray/60 text-right`}
      >
        <h3
          className={`mb-7 font-poppins font-medium text-sm tracking-wide text-ravenci-dark-gray uppercase`}
        >
          {MDXTagline && <MDXTagline />}
        </h3>
        <h2 className={`font-poppins font-semibold text-4xl tracking-tight`}>
          {title}
        </h2>
        <ContentBlock>{MDXContent && <MDXContent />}</ContentBlock>
        <Link
          href={ctaLink as Route}
          title={ctaTitle}
          className={`self-end mt-8 py-3 px-8 bg-ravenci hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-ravenci-dark-gray font-poppins text-xs text-ravenci-light-gray uppercase transition-all duration-[0.4s]`}
        >
          {ctaText}
        </Link>
        <div className={`absolute top-0 w-full h-1.5 bg-ravenci-primary`}></div>
      </article>
      <article className={`hidden md:block`}></article>
    </section>
  );
};

export default HomeOneColumnRight;
