export default function AboutOneColumnCenter() {
  return (
    <section
      className={`pt-36 flex flex-col items-center justify-center w-full bg-ravenci-gray`}
    >
      <div className={`mb-20 px-4 flex flex-col items-center`}>
        <h3
          className={`mb-1 font-poppins font-medium text-sm tracking-wide text-ravenci-dark-gray uppercase`}
        >
          Based, Made and Built
        </h3>
        <h2
          className={`font-poppins font-semibold text-4xl tracking-tight text-center`}
        >
          Down Under!
        </h2>
        <article
          className={`mt-10 grid gap-6 max-w-lg font-poppins text-center font-light text-neutral-600`}
        >
          <p>
            Right in the beating heart of the sunshine state, Queensland,{" "}
            <span className={`font-bold`}>Ravenci</span> is proudly Australian &
            based in beautiful Brisbane.
          </p>
          <p>
            My commitment to maintaining all development work in-house is not
            just a business strategy; it is a reflection of my dedication to
            quality code and reliable results.
          </p>
        </article>
      </div>
    </section>
  );
}
