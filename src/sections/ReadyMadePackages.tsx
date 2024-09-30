"use client";

import { useState } from "react";

export const ReadyMadePackages = () => {
  // States
  const [selectedPackage, setSelectedPackage] = useState("Single Page");

  return (
    <section className={`mt-10`}>
      <h3 className={`font-bold text-xl`}>Choose Your Package</h3>
      <div className={`mb-5 w-20 h-1 bg-ravenci/90`}></div>

      <section className={`flex gap-4`}>
        <article
          className={`flex flex-col items-center bg-ravenci-light-gray opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out`}
        >
          <div className={`w-40 aspect-square bg-ravenci-dark-gray`}></div>
          <div className={`p-2 flex flex-col w-full`}>
            <h4 className={`text-base font-bold uppercase`}>Single Page</h4>
            <p className={`text-sm opacity-70`}>Description</p>
          </div>
        </article>

        <article
          className={`flex flex-col items-center bg-ravenci-light-gray opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out`}
        >
          <div className={`w-40 aspect-square bg-ravenci-dark-gray`}></div>
          <div className={`p-2 flex flex-col w-full`}>
            <h4 className={`text-base font-bold uppercase`}>Single Page</h4>
            <p className={`text-sm opacity-70`}>Description</p>
          </div>
        </article>

        <article
          className={`flex flex-col items-center bg-ravenci-light-gray opacity-60 hover:opacity-100 transition-all duration-500 ease-in-out`}
        >
          <div className={`w-40 aspect-square bg-ravenci-dark-gray`}></div>
          <div className={`p-2 flex flex-col w-full`}>
            <h4 className={`text-base font-bold uppercase`}>Single Page</h4>
            <p className={`text-sm opacity-70`}>Description</p>
          </div>
        </article>
      </section>
    </section>
  );
};
