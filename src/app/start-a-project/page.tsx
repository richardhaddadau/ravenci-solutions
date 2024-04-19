"use client";

import SecondaryHero from "@/sections/SecondaryHero";
import styled from "styled-components";
import { useState } from "react";

const FormBlock = styled.div`
  margin-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;
const Label = styled.label`
  font-size: 0.75rem;
  line-height: 1rem;
`;
const Input = styled.input`
  padding: 0.375rem 0.625rem;

  width: 100%;

  background: transparent;
  border-bottom: 1px solid #d4d4d4;

  outline: none;

  color: #7f1670;
  -webkit-text-fill-color: #7f1670;

  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.25rem;

  transition: all 0.3s ease;

  &:-webkit-autofill {
    -webkit-text-fill-color: #7f1670 !important;
    -webkit-box-shadow: 0 0 0 1000px #fbfbfb inset !important;
  }

  &:hover {
    border-bottom: 1px solid #1b1b1b;
  }

  &:focus {
    border-bottom: 1px solid #7f1670;
  }
`;

export default function StartAProjectPage() {
  const [selectedType, setSelectedType] = useState<number>(0);

  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-ravenci-light-gray`}
    >
      <SecondaryHero
        title={`Work With Me`}
        subtitle={`Start a New Project`}
        theme={"primary"}
      />

      <section
        className={`pt-20 pb-10 px-4 flex flex-col justify-center items-center gap-10 w-full`}
      >
        <div
          className={`pb-8 w-full max-w-4xl border-b border-ravenci-dark-gray/20`}
        >
          <Label className={`font-poppins`}>Service Type:</Label>
          <div className={`mt-2 flex gap-4`}>
            {SERVICE_TYPES.map(({ title }, index) => (
              <article
                className={`cursor-pointer px-3 pt-1.5 pb-1 bg-ravenci-gray/40 border border-ravenci-dark-gray/50 whitespace-nowrap font-poppins text-xs text-center ${
                  selectedType === index
                    ? "border-ravenci-primary text-ravenci-primary opacity-100"
                    : "opacity-40 hover:opacity-80"
                } transition duration-300`}
                onClick={() => setSelectedType(index)}
              >
                {title}
              </article>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-2 gap-10 w-full max-w-4xl`}>
          <article>
            <FormBlock>
              <Label className={`font-poppins`}>Name:</Label>
              <Input name={"name"} />
            </FormBlock>

            <FormBlock>
              <Label className={`font-poppins`}>
                Company Name (If Applicable):
              </Label>
              <Input name={"name"} />
            </FormBlock>

            <FormBlock>
              <Label className={`font-poppins`}>Email:</Label>
              <Input name={"name"} />
            </FormBlock>

            <FormBlock>
              <Label className={`font-poppins`}>Phone (Optional):</Label>
              <Input name={"name"} />
            </FormBlock>
          </article>

          <article>
            <FormBlock>
              <Label className={`font-poppins`}>Project Description:</Label>
              <Input name={"name"} />
            </FormBlock>

            <FormBlock>
              <Label className={`font-poppins`}>
                Existing Website (If Applicable):
              </Label>
              <Input name={"name"} />
            </FormBlock>

            <FormBlock>
              <Label className={`font-poppins`}>Features Required:</Label>
              <Input name={"name"} />
            </FormBlock>

            <FormBlock>
              <Label className={`font-poppins`}>Preferred Technologies:</Label>
              <Input name={"name"} />
            </FormBlock>
          </article>
        </div>
      </section>
    </main>
  );
}

const SERVICE_TYPES = [
  {
    title: "Business Website",
  },
  {
    title: "eCommerce Store",
  },
  {
    title: "Web Platform or App",
  },
  {
    title: "Mobile Apps",
  },
  {
    title: "Web Maintenance",
  },
  {
    title: "Web Hosting Services",
  },
];

const SpecialFields = {
  business: (
    <>
      <FormBlock>
        <Label className={`font-poppins`}>
          Number of products to be listed initially (rough estimate):
        </Label>
        <Input name={"name"} />
      </FormBlock>
      ,
      <FormBlock>
        <Label className={`font-poppins`}>Extra Addons:</Label>
        <Input name={"name"} />
      </FormBlock>
    </>
  ),
  eCommerce: (
    <>
      <FormBlock>
        <Label className={`font-poppins`}>
          Number of products to be listed initially (rough estimate):
        </Label>
        <Input name={"name"} />
      </FormBlock>
      ,
      <FormBlock>
        <Label className={`font-poppins`}>Extra Addons:</Label>
        <Input name={"name"} />
      </FormBlock>
    </>
  ),
  platform: (
    <>
      <FormBlock>
        <Label className={`font-poppins`}>
          Number of products to be listed initially (rough estimate):
        </Label>
        <Input name={"name"} />
      </FormBlock>
      ,
      <FormBlock>
        <Label className={`font-poppins`}>Extra Addons:</Label>
        <Input name={"name"} />
      </FormBlock>
    </>
  ),
  app: (
    <>
      <FormBlock>
        <Label className={`font-poppins`}>
          Number of products to be listed initially (rough estimate):
        </Label>
        <Input name={"name"} />
      </FormBlock>
      ,
      <FormBlock>
        <Label className={`font-poppins`}>Extra Addons:</Label>
        <Input name={"name"} />
      </FormBlock>
    </>
  ),
  maintenance: (
    <>
      <FormBlock>
        <Label className={`font-poppins`}>
          Number of products to be listed initially (rough estimate):
        </Label>
        <Input name={"name"} />
      </FormBlock>
      ,
      <FormBlock>
        <Label className={`font-poppins`}>Extra Addons:</Label>
        <Input name={"name"} />
      </FormBlock>
    </>
  ),
  hosting: (
    <>
      <FormBlock>
        <Label className={`font-poppins`}>
          Number of products to be listed initially (rough estimate):
        </Label>
        <Input name={"name"} />
      </FormBlock>
      ,
      <FormBlock>
        <Label className={`font-poppins`}>Extra Addons:</Label>
        <Input name={"name"} />
      </FormBlock>
    </>
  ),
};
