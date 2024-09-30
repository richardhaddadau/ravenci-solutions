import Link from "next/link";

export default function AboutCollaborate() {
  return (
    <section
      className={`py-20 flex flex-col items-center justify-center w-full bg-ravenci-primary`}
    >
      <h3
        className={`mb-1 font-poppins font-medium text-sm tracking-wide uppercase text-ravenci-light-gray/50`}
      >
        Join Forces
      </h3>
      <h2
        className={`font-poppins font-semibold text-4xl tracking-tight text-center text-ravenci-light-gray`}
      >
        Let's Collaborate!
      </h2>
      <article
        className={`mt-6 grid gap-6 max-w-lg font-poppins text-center font-light text-ravenci-light-gray`}
      >
        <p> </p>
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
