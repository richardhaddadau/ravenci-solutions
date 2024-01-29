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
    <section className={`w-full max-w-page bg-ravenci-light-gray`}>
      <article
        className={`relative py-36 mx-auto flex justify-center w-full max-w-xl h-full`}
      >
        <div
          className={`relative flex flex-col items-center w-full h-full text-center`}
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
        </div>
        <div
          className={`absolute bottom-0 w-full h-1.5 bg-ravenci-primary`}
        ></div>
      </article>
    </section>
  );
};

export default HomeOneColumnCenter;
