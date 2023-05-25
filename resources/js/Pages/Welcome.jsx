import Navigation from "../Components/Navigation.jsx";
import { useEffect } from "react";

const Welcome = () => {
  const previousWork = [
    {
      title: "QRmory",
      img: "./Previous Work/prev_qrmory.jpg",
    },

    {
      title: "Nikita Morell",
      img: "./Previous Work/prev_nikita-morell.jpg",
    },

    {
      title: "Intercorp",
      img: "./Previous Work/prev_intercorp.jpg",
    },
    {
      title: "Cadeaurable",
      img: "./Previous Work/prev_cadeaurable.jpg",
    },
    {
      title: "Teacher Speechie",
      img: "./Previous Work/prev_teacher-speechie.jpg",
    },
  ];

  useEffect(() => {}, []);

  return (
    <div>
      {/* Navigation */}
      <Navigation />
      {/* Hero */}
      <article className="hero px-14 py-32 flex flex-col justify-center bg-black text-white">
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
      <main>
        {/* Short Blurb */}
        <section className="py-14 bg-black text-white text-xl font-light shadow-2xl shadow-black">
          <article className="mx-auto max-w-xl text-center">
            RAVENCI specialise in developing superior websites and mobile apps
            tailored for small to medium-sized businesses. Our mission is to
            transform your digital aspirations into tangible results. If you're
            looking for a robust website or a dynamic app to push your business
            forward, we are ready to deliver.
          </article>
        </section>
        {/* Previous Work */}
        <section className="starry py-28 flex flex-col items-center max-w-full text-white">
          <h2 className="z-10">Previous Work</h2>

          <section className="pt-16 w-full overflow-x-hidden">
            <div
              className=""
              style={{
                width:
                  previousWork.length * (window.innerWidth / 2 + 32) + "px",
                marginLeft: -(window.innerWidth / 4 + 16) + "px",
              }}
            >
              {previousWork.map((work) => {
                return (
                  <article
                    className="mx-4 my-0 pt-10 pb-0 px-10 inline-block bg-yellow-500"
                    style={{ width: window.innerWidth / 2 }}
                    key={work.title}
                  >
                    <img className="" src={work.img} alt="" />
                  </article>
                );
              })}
            </div>
          </section>
        </section>
        {/* Testimonial */}
        <article></article>
        {/* Packages */}
        <article>
          <h2></h2>
          <h3></h3>
          <section></section>
        </article>
      </main>
      {/* Footer */}
      <footer></footer>
    </div>
  );
};

export default Welcome;
