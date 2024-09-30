export default function OurPromisePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-ravenci-gray">
      <article
        className={`flex flex-col items-center w-full`}
        style={{
          backgroundImage: `url(/office-space-photo.jpg)`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`,
        }}
      >
        <section
          className={`pt-10 flex flex-col justify-center items-center w-full min-h-[550px] bg-ravenci/80`}
          style={{
            backdropFilter: `blur(2px)`,
          }}
        >
          <h2
            className={`mt-2 font-poppins font-normal text-sm lg:text-base text-center text-ravenci-light-gray/70`}
          >
            Uniquely yours
          </h2>
          <h1
            className={`font-poppins font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-ravenci-light-gray`}
          >
            Our Promise
          </h1>
        </section>
      </article>
    </main>
  );
}
