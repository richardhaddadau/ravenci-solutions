"use client";

import styled from "styled-components";
import Link from "next/link";
import homeReliableTagline from "@/app/(mdx)/homeReliableTagline.mdx";
import homeReliableContent from "@/app/(mdx)/homeReliableContent.mdx";

const ContentBlock = styled.div`
  margin-top: 2rem;

  p {
    margin-bottom: 1.25rem;

    font-size: 0.875rem;
    line-height: 1.5rem;
    text-align: center;
    color: #7b7b7b;
  }
`;

type HomeOneColumnCenterProps = {
  tagline: any;
  title: string;
  content: any;
  ctaLink: string;
  ctaText: string;
  ctaTitle: string;
};

const HomeOneColumnCenter = ({
  tagline,
  title,
  content,
  ctaText,
  ctaLink,
  ctaTitle,
}: HomeOneColumnCenterProps) => {
  const TaglineComponent: { [key: string]: any } = {
    reliable: homeReliableTagline,
  };

  const ContentComponent: { [key: string]: any } = {
    reliable: homeReliableContent,
  };

  const MDXTagline = TaglineComponent[tagline];
  const MDXContent = ContentComponent[content];

  return (
    <section className={`grid grid-cols-2 lg:grid-cols-4 w-full max-w-page`}>
      <article
        className={`hidden md:block h-full border-l-[1px] border-ravenci-gray/60`}
      ></article>

      <article
        className={`relative mx-auto px-4 sm:px-10 py-36 col-span-2 flex flex-col justify-start md:justify-center text-center max-w-xl lg:max-w-none h-full border-x-[1px] border-ravenci-gray/60`}
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
          href={ctaLink}
          title={ctaTitle}
          className={`self-center mt-8 py-3 px-8 bg-ravenci hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-ravenci-dark-gray font-poppins text-xs text-ravenci-light-gray uppercase transition-all duration-[0.4s]`}
        >
          {ctaText}
        </Link>
        <div
          className={`absolute left-0 bottom-0 w-full h-1.5 bg-ravenci-primary`}
        ></div>
      </article>

      <article
        className={`hidden md:block h-full border-r-[1px] border-ravenci-gray/60`}
      ></article>
    </section>
  );
};

export default HomeOneColumnCenter;
