import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ravenci.solutions"),
  title: "The RAVENCI Promise - RAVENCI",
  description:
    "I stand by the RAVENCI Promise to deliver what you hire me for and not be satisfied until you are.",
};

export default function OurPromisePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-ravenci-gray">
      <section
        className={`pt-40 pb-20 px-4 flex flex-col justify-center items-center w-full min-h-[450px] bg-ravenci-primary`}
      >
        <h2
          className={`mt-2 font-poppins font-normal text-sm lg:text-base text-center text-ravenci-light-gray/70`}
        >
          I stand by
        </h2>
        <h1
          className={`font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-ravenci-light-gray`}
        >
          The RAVENCI Promise
        </h1>
      </section>
    </main>
  );
}
