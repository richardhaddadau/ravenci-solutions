import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ravenci.solutions"),
  title: "Get in touch | RAVENCI",
  description:
    "Want to work with me? Let me know how RAVENCI can help you with your next project.",
  openGraph: {
    url: "https://ravenci.solutions/contact",
    title: "Get in touch | RAVENCI",
    description:
      "Want to work with me? Let me know how RAVENCI can help you with your next project.",
    images: [
      {
        url: "https://www.example.com/image.png",
        width: 1200,
        height: 630,
        alt: "Welcome to Ravenci",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://ravenci.solutions/contact",
    title: "Get in touch | RAVENCI",
    description:
      "Want to work with me? Let me know how RAVENCI can help you with your next project.",
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center bg-ravenci-light-gray">
      <section
        className={`pt-40 pb-20 px-4 flex flex-col justify-center items-center w-full min-h-[450px] bg-ravenci-primary`}
      >
        <h1
          className={`font-poppins font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-ravenci-light-gray text-center`}
        >
          Let's work together
        </h1>
      </section>
    </main>
  );
}
