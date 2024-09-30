import Link from "next/link";

export default function AboutWorkWithUs() {
  return (
    <section
      className={`py-20 flex flex-col items-center justify-center w-full bg-ravenci-primary`}
    >
      <h3
        className={`mb-1 font-poppins font-medium text-sm tracking-wide uppercase text-ravenci-light-gray/50`}
      >
        Based, Made and Built
      </h3>
      <h2
        className={`font-poppins font-semibold text-4xl tracking-tight text-center text-ravenci-light-gray`}
      >
        Down Under!
      </h2>
      <article
        className={`mt-6 grid gap-6 max-w-lg font-poppins text-center font-light text-ravenci-light-gray`}
      >
        <Link
          href={`/`}
          className={`px-6 pt-2.5 pb-2 rounded-full border border-ravenci-light-gray text-xs font-semibold uppercase`}
        >
          Increase Traffic
        </Link>
      </article>
    </section>
  );
}
