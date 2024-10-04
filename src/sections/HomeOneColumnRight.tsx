"use client";

import styled from "styled-components";
import Link from "next/link";
import homeScalableTagline from "@/app/(mdx)/homeScalableTagline.mdx";
import homeScalableContent from "@/app/(mdx)/homeScalableContent.mdx";
import { Route } from "next";
import Image from "next/image";
import { TbBible, TbLink, TbMassage, TbStethoscope } from "react-icons/tb";

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
      <article className={`hidden xl:block`}></article>

      <article
        className={`relative hidden md:block w-full h-full border-x-[1px] border-ravenci-gray/60`}
      >
        <div
          className={`group absolute top-1/3 -translate-y-1/2 w-full h-72 opacity-50 hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <Image
            src={"/clients/prev_insight-medical-careers.jpg"}
            className={`object-cover w-full`}
            alt={"Insight Medical Careers on WordPress"}
            width={1000}
            height={1000}
          />

          <span
            className={`p-2 absolute top-1/2 -translate-y-1/2 left-0 right-0 bg-ravenci-primary text-xs text-white uppercase opacity-0 group-hover:opacity-100 transition-all delay-200 duration-500 ease-in-out z-20`}
          >
            <Link
              className={`flex gap-2 justify-center items-center tracking-wider`}
              href={"https://insightmedicalcareers.com.au/"}
              title={"Insight Medical Careers"}
              target={"_blank"}
            >
              <TbStethoscope size={18} />
              Insight Medical Careers
            </Link>
          </span>
        </div>
      </article>

      <article className={`relative hidden lg:grid place-content-center`}>
        <div
          className={`group absolute top-2/3 -translate-y-1/2 w-full h-72 opacity-50 hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <Image
            src={"/clients/prev_beauty-retreat-bribie-island.jpg"}
            className={`object-cover w-full`}
            alt={"Beauty Retreat Bribie Island on WordPress"}
            width={1000}
            height={1000}
          />

          <span
            className={`p-2 absolute top-1/2 -translate-y-1/2 left-0 right-0 bg-ravenci-primary text-xs text-white uppercase opacity-0 group-hover:opacity-100 transition-all delay-200 duration-500 ease-in-out z-20`}
          >
            <Link
              className={`flex gap-2 justify-center items-center tracking-wider`}
              href={"https://beautyretreatbribieisland.com.au/"}
              title={"Beauty Retreat Bribie Island"}
              target={"_blank"}
            >
              <TbMassage size={18} />
              Beauty Retreat
              <br />
              Bribie Island
            </Link>
          </span>
        </div>
      </article>

      <article
        className={`relative px-4 sm:px-10 py-36 col-span-3 lg:col-span-2 flex flex-col justify-start md:justify-center items-end w-full max-w-none md:max-w-xl lg:max-w-full h-full border-x-[1px] border-ravenci-gray/60 text-right`}
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

      <article className={`relative hidden lg:block`}>
        <div
          className={`group absolute top-1/3 -translate-y-1/2 w-full h-72 opacity-50 hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out`}
        >
          <Image
            src={"/clients/prev_auburn-friends.jpg"}
            className={`object-cover w-full`}
            alt={"Auburn Friends on WordPress"}
            width={1000}
            height={1000}
          />

          <span
            className={`p-2 absolute top-1/2 -translate-y-1/2 left-0 right-0 bg-ravenci-primary text-xs text-white uppercase opacity-0 group-hover:opacity-100 transition-all delay-200 duration-500 ease-in-out z-20`}
          >
            <Link
              className={`flex gap-2 justify-center items-center tracking-wider`}
              href={"https://auburnfriends.net/"}
              title={"Auburn Friends"}
              target={"_blank"}
            >
              <TbBible size={18} />
              Auburn Friends
            </Link>
          </span>
        </div>
      </article>
    </section>
  );
};

export default HomeOneColumnRight;
