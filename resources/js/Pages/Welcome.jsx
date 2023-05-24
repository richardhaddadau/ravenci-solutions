import { useState } from "react";

const Welcome = () => {
  return (
    <div>
      {/* Navigation */}
      <nav></nav>
      {/* Hero */}
      <article className="px-14 py-32 flex flex-col justify-center bg-black text-white">
        <section className="">
          <h1 className="max-w-2xl font-abril text-6xl font-bold">
            Transforming your digital vision into reality
          </h1>
          <h3 className="max-w-xl text-3xl font-light">
            We simplify the process with tailored business packages and
            transparent pricing
          </h3>
        </section>

        <section className="mt-24 flex gap-8">
          <button className="px-4 py-1 bg-white hover:bg-yellow-500 rounded-full uppercase text-black text-lg font-normal transition-all duration-200">
            Build with us
          </button>
          <button className="uppercase border-b-2 border-white hover:border-yellow-500 hover:text-yellow-500 transition-all duration-200">
            Still deciding?
          </button>
        </section>
      </article>
      {/* Main Content */}
      <main></main>
      {/* Short Blurb */}
      <article></article>
      {/* Previous Work */}
      <section></section>
      {/* Testimonial */}
      <article></article>
      {/* Packages */}
      <article>
        <h2></h2>
        <h3></h3>
        <section></section>
      </article>
      {/* Footer */}
      <footer></footer>
    </div>
  );
};

export default Welcome;
