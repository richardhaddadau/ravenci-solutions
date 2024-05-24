"use client";

import Image from "next/image";
import styled from "styled-components";

const ContentBlock = styled.div`
  margin-top: 2rem;
  width: 100%;

  p {
    margin-bottom: 1.25rem;

    font-size: 0.875rem;
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
  return (
    <section
      className={`relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full bg-ravenci-primary text-ravenci-light-gray`}
    >
      <article className={`hidden md:block`}></article>
      <article
        className={`relative px-4 sm:px-10 py-36 col-span-2 flex flex-col justify-start md:justify-center items-center w-full max-w-none md:max-w-lg h-full`}
      >
        <h2
          className={`self-start font-poppins font-semibold text-4xl tracking-tight`}
        >
          {title}
        </h2>
        <ContentBlock className={`text-ravenci-light-gray/80`}>
          {content}
        </ContentBlock>
      </article>

      <article className={`hidden md:grid place-content-center`}></article>
      <article className={`hidden md:block h-full`}></article>
      <article className={`hidden xl:block`}></article>
    </section>
  );
}
