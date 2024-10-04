"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import homeReliableTagline from "@/app/(mdx)/homeReliableTagline.mdx";
import homeReliableContent from "@/app/(mdx)/homeReliableContent.mdx";

import { TbBuilding, TbBuildingStore } from "react-icons/tb";

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
    <section className={`relative grid grid-cols-4 w-full max-w-page`}>
      <article
        className={`relative hidden lg:block h-full border-l-[1px] border-ravenci-gray/60`}
      >
        <div
          className={`group absolute top-1/2 -translate-y-1/2 w-full h-72 opacity-50 hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <Image
            src={"/clients/prev_intercorp-developments.jpg"}
            className={`object-cover w-full`}
            alt={"Intercorp Developments on WordPress"}
            width={1000}
            height={1000}
          />

          <span
            className={`p-2 absolute top-1/2 -translate-y-1/2 left-0 right-0 bg-ravenci-primary text-xs text-white uppercase opacity-0 group-hover:opacity-100 transition-all delay-200 duration-500 ease-in-out z-20`}
          >
            <Link
              className={`flex gap-2 justify-center items-center tracking-wider`}
              href={"https://intercorpdevelopments.com.au/"}
              title={"Intercorp Developments"}
              target={"_blank"}
            >
              <TbBuilding size={18} />
              Intercorp
            </Link>
          </span>
        </div>
      </article>

      <article
        className={`relative mx-auto px-4 sm:px-10 py-36 col-span-4 lg:col-span-2 flex flex-col justify-start md:justify-center text-center w-full max-w-none md:max-w-lg lg:max-w-full h-full border-x-[1px] border-ravenci-gray/60`}
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
        className={`relative hidden lg:block h-full border-r-[1px] border-ravenci-gray/60`}
      >
        <div
          className={`group absolute top-2/3 -translate-y-1/2 w-full h-72 opacity-50 hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <Image
            src={"/clients/prev_vipertac.jpg"}
            className={`object-cover w-full`}
            alt={"Viptertac on Shopify"}
            width={1000}
            height={1000}
          />

          <span
            className={`p-2 absolute top-1/2 -translate-y-1/2 left-0 right-0 bg-ravenci-primary text-xs text-white uppercase opacity-0 group-hover:opacity-100 transition-all delay-200 duration-500 ease-in-out z-20`}
          >
            <Link
              className={`flex gap-2 justify-center items-center tracking-wider`}
              href={"https://vipertac.com.au/"}
              title={"Viptertac"}
              target={"_blank"}
            >
              <TbBuildingStore size={18} />
              Vipertac
            </Link>
          </span>
        </div>
      </article>
    </section>
  );
};

export default HomeOneColumnCenter;
