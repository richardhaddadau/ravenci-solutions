import Navigation from "../Components/Navigation.jsx";
import { useEffect, useLayoutEffect } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Welcome = () => {
  const previousWork = [
    {
      title: "QRmory",
      img: "images/Previous Work/prev_qrmory.jpg",
    },

    {
      title: "Nikita Morell",
      img: "images/Previous Work/prev_nikita-morell.jpg",
    },

    {
      title: "Intercorp",
      img: "images/Previous Work/prev_intercorp.jpg",
    },
    // {
    //   title: "Cadeaurable",
    //   img: "./Previous Work/prev_cadeaurable.jpg",
    // },
    // {
    //   title: "Teacher Speechie",
    //   img: "./Previous Work/prev_teacher-speechie.jpg",
    // },
  ];

  const packages = [
    {
      title: "Brochure Website",
      tagline: 'Perfect to "just get online"',
      image: "",
      price: 499,
      key: "pacakage-brochure",
    },
    {
      title: "Premium Website Website",
      tagline: "Expand your digital footprint",
      image: "",
      price: 999,
      key: "pacakage-premium",
    },
    {
      title: "Brochure Website",
      tagline: "Serve your customers online",
      image: "",
      price: 2899,
      key: "pacakage-extensive",
    },
    {
      title: "Mobile App",
      tagline: "Build an app that serves many",
      image: "",
      price: 7999,
      key: "pacakage-mobile",
    },
  ];

  const fixWorkLayout = () => {
    const workItems = document.querySelectorAll(".previous-work-item");
    const workWrapper = document.querySelector(".previous-work-wrapper");

    if (workItems.length > 0) {
      workItems.forEach((item) => {
        item.style.width = window.innerWidth / 2 + "px";
      });
    }

    if (workWrapper) {
      workWrapper.style.width =
        previousWork.length * (window.innerWidth / 2 + 16) + "px";

      workWrapper.style.left =
        -(workWrapper.offsetWidth - window.innerWidth) / 2 + "px";
    }
  };

  useEffect(() => {
    fixWorkLayout();
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      fixWorkLayout();
    });
  });

  return (
    <div>
      {/* Navigation */}
      <Navigation />
      {/* Hero */}
      <article className="hero px-6 lg:px-14 py-32 flex flex-col justify-center bg-black text-white">
        <section className="mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="w-full md:max-w-lg lg:max-w-2xl font-abril text-3xl md:text-4xl lg:text-6xl font-bold">
            Transforming your digital vision into reality
          </h1>
          <h3 className="max-w-xl text-xl lg:text-3xl font-light">
            We simplify the process with tailored business packages and
            transparent pricing
          </h3>
        </section>

        <section className="mt-14 lg:mt-24 flex flex-col lg:flex-row gap-8 justify-start items-center">
          <button className="px-4 py-1 bg-white hover:bg-yellow-500 rounded-full uppercase text-black text-base lg:text-lg font-normal transition-all duration-200">
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
        <section className="px-6 py-14 bg-black text-white text-lg lg:text-xl font-light shadow-2xl shadow-black">
          <article className="mx-auto w-full max-w-lg lg:max-w-xl text-center">
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

          <section className="relative pt-16 w-full overflow-x-hidden">
            <div
              className="previous-work-wrapper relative"
              style={{
                width:
                  previousWork.length * (window.innerWidth / 2 + 16) + "px",
              }}
            >
              {previousWork.map((work) => {
                return (
                  <article
                    className="previous-work-item mx-2 my-0 pt-4 md:pt-6 lg:pt-10 px-4 md:px-6 lg:px-10 inline-block bg-yellow-500 overflow-hidden"
                    style={{ width: window.innerWidth / 2 }}
                    key={work.title}
                  >
                    <img
                      className="shadow-black shadow-xl"
                      src={work.img}
                      alt=""
                    />
                  </article>
                );
              })}
            </div>
          </section>
        </section>
        {/* Testimonial */}
        <section className="pt-24 pb-10 md:py-24 w-full bg-white shadow-black shadow-xl">
          <article className="mx-auto px-4 max-w-xl font-light text-2xl text-center">
            <img
              className="relative mx-auto md:absolute mb-6 -mt-16 md:left-10 w-20"
              src="images/open-quote.svg"
              alt=""
            />
            <p className="mb-8">
              Richard is amazing! He really cares about his work, his customers
              and people in general. The work that he has done for me goes above
              and beyond.
            </p>
            <p>Definitely recommend Richard to anyone!</p>
            <img
              className="relative mx-auto md:absolute mt-6 md:mt-4 md:right-10 w-20"
              src="images/close-quote.svg"
              alt=""
            />
          </article>
        </section>
        {/* Packages */}
        <section className="starry-end px-6 md:px-10 pt-28 pb-40 lg:pb-80 flex flex-col items-center max-w-full text-white">
          <h2 className="">Our Packages Structure</h2>
          <h3 className="text-center">
            Choose the product you are after and the add-ons you need. That's
            it!
          </h3>
          <section className="mt-20 flex flex-row flex-wrap justify-evenly gap-8 w-full">
            {packages.map((item) => {
              return (
                <article className="p-6 flex flex-col justify-between bg-white rounded-xl w-full w-1/2 lg:w-1/4 max-w-xxs text-black text-center">
                  <div>
                    <img
                      className="mb-3 w-full aspect-square bg-black"
                      src={item.image}
                      alt=""
                    />
                    <h3 className="uppercase font-bold text-lg">
                      {item.title}
                    </h3>
                    <p className="font-light">{item.tagline}</p>
                  </div>

                  <h4 className="mt-8 text-xl font-bold text-right uppercase">
                    From ${item.price}
                  </h4>
                </article>
              );
            })}
          </section>
        </section>
      </main>
      {/* Footer */}
      <footer className="p-16 grid grid-cols-12 flex items-stretch bg-black">
        <section className="p-4 col-span-4">
          {/* Logo */}
          <p className="text-stone-400 text-right">Australia, Brisbane</p>
          <article className="text-right">
            <a className="font-light hover:font-bold" href="tel:+61730960059">
              (07) 3096 0059
            </a>
            <br />
            <a className="font-light hover:font-bold" href="tel:+61426238272">
              (+61) 426 238 272
            </a>
          </article>
        </section>
        <section className="p-4 col-span-8 flex flex-col items-center border-2">
          <h5 className="text-white font-bold">
            Subscribe to our newsletter for great tips on improving designs,
            enhancing web performance, doing your own SEO, and much more:
          </h5>
          <FontAwesomeIcon icon="fa-sharp fa-solid fa-arrow-right" />
        </section>
      </footer>
    </div>
  );
};

export default Welcome;
