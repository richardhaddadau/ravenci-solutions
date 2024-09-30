"use client";

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import homeStableTagline from "@/app/(mdx)/homeStableTagline.mdx";
import homeStableContent from "@/app/(mdx)/homeStableContent.mdx";
import {
  TbBallpen,
  TbGift,
  TbLink,
  TbWoman,
  TbWomanFilled,
} from "react-icons/tb";

const ContentBlock = styled.div`
  margin-top: 2rem;

  p {
    margin-bottom: 1.25rem;

    font-size: 0.875rem;
    line-height: 1.5rem;
    text-align: left;
    color: #7b7b7b;
  }
`;

type HomeOneColumnLeftProps = {
  tagline: any;
  title: string;
  content: any;
  ctaLink: string;
  ctaText: string;
  ctaTitle: string;
};

const HomeOneColumnLeft = ({
  tagline,
  title,
  content,
  ctaText,
  ctaLink,
  ctaTitle,
}: HomeOneColumnLeftProps) => {
  const TaglineComponent: { [key: string]: any } = {
    stable: homeStableTagline,
  };

  const ContentComponent: { [key: string]: any } = {
    stable: homeStableContent,
  };

  const MDXTagline = TaglineComponent[tagline];
  const MDXContent = ContentComponent[content];

  return (
    <section
      id={`find-out-more`}
      className={`relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full bg-ravenci-light-gray`}
    >
      <article className={`relative hidden md:block`}>
        <div
          className={`group absolute top-2/3 -translate-y-1/2 w-full h-72 bg-amber-500 opacity-50 hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <Image
            src={"/clients/prev_cadeaurable.jpg"}
            className={`object-cover w-full`}
            alt={"Cadeaurable on BigCommerce"}
            width={1000}
            height={1000}
          />

          <span
            className={`p-2 absolute top-1/2 -translate-y-1/2 left-0 right-0 bg-ravenci-primary text-xs text-white uppercase opacity-0 group-hover:opacity-100 transition-all delay-200 duration-500 ease-in-out z-20`}
          >
            <Link
              className={`flex gap-2 justify-center items-center tracking-wider`}
              href={"https://cadeaurable.com.au/"}
              title={"Cadeaurable"}
              target={"_blank"}
            >
              <TbGift size={18} />
              Cadeaurable
            </Link>
          </span>
        </div>
      </article>
      <article
        className={`relative px-4 sm:px-10 py-36 col-span-2 flex flex-col justify-start md:justify-center items-center w-full max-w-none md:max-w-lg lg:max-w-full h-full border-x-[1px] border-ravenci-gray/60`}
      >
        <h3
          className={`self-start mb-7 font-poppins font-medium text-sm tracking-wide text-ravenci-dark-gray uppercase`}
        >
          {MDXTagline && <MDXTagline />}
        </h3>
        <h2
          className={`self-start font-poppins font-semibold text-4xl tracking-tight`}
        >
          {title}
        </h2>
        <ContentBlock>{MDXContent && <MDXContent />}</ContentBlock>
        <Link
          href={ctaLink}
          title={ctaTitle}
          className={`mt-8 py-3 px-8 bg-ravenci hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-ravenci-dark-gray font-poppins text-xs text-ravenci-light-gray uppercase transition-all duration-[0.4s]`}
        >
          {ctaText}
        </Link>
        <div
          className={`absolute bottom-0 w-full h-1.5 bg-ravenci-primary`}
        ></div>
      </article>

      <article className={`relative hidden md:grid place-content-center`}>
        <div
          className={`group absolute top-2/3 -translate-y-1/2 w-full h-72 bg-amber-500 opacity-50 hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <Image
            src={"/clients/prev_sac-consulting.jpg"}
            className={`object-cover w-full`}
            alt={"SAC Consulting on WordPress"}
            width={1000}
            height={1000}
          />

          <span
            className={`p-2 absolute top-1/2 -translate-y-1/2 left-0 right-0 bg-ravenci-primary text-xs text-white uppercase opacity-0 group-hover:opacity-100 transition-all delay-200 duration-500 ease-in-out z-20`}
          >
            <Link
              className={`flex gap-2 justify-center items-center tracking-wider`}
              href={"https://sacconsulting.com.au/"}
              title={"SAC Consulting"}
              target={"_blank"}
            >
              <TbWomanFilled size={18} />
              SAC Consulting
            </Link>
          </span>
        </div>
      </article>

      <article
        className={`relative hidden md:block w-full h-full border-x-[1px] border-ravenci-gray/60`}
      >
        <div
          className={`group absolute top-1/3 -translate-y-1/2 w-full h-72 bg-amber-500 opacity-50 hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <Image
            src={"/clients/prev_nikita-morell.jpg"}
            className={`object-cover w-full`}
            alt={"Nikita Morell on WordPress"}
            width={1000}
            height={1000}
          />

          <span
            className={`p-2 absolute top-1/2 -translate-y-1/2 left-0 right-0 bg-ravenci-primary text-xs text-white uppercase opacity-0 group-hover:opacity-100 transition-all delay-200 duration-500 ease-in-out z-20`}
          >
            <Link
              className={`flex gap-2 justify-center items-center tracking-wider`}
              href={"https://nikitamorell.com/"}
              title={"Nikita Morell"}
              target={"_blank"}
            >
              <TbBallpen size={18} />
              Nikita Morell
            </Link>
          </span>
        </div>
      </article>
      <article className={`hidden xl:block`}></article>

      <Image
        className={`absolute bottom-2 md:-bottom-3 lg:-bottom-1 right-2 scale-50 sm:scale-75 lg:scale-100`}
        src={`/standing-raven.svg`}
        alt={``}
        width={74}
        height={88}
      />
    </section>
  );
};

export default HomeOneColumnLeft;
