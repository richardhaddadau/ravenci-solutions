import Link from "next/link";
import { Route } from "next";
import Image from "next/image";

export default function AboutClients() {
  return (
    <section
      className={`relative py-28 px-4 sm:px-10 flex flex-col items-center justify-center w-full bg-ravenci-light-gray z-10`}
    >
      <div className={`w-full max-w-md md:max-w-5xl`}>
        <h2
          className={`w-full font-poppins font-medium text-3xl tracking-tight text-center sm:text-left`}
        >
          Serving clients since{" "}
          <span className={`text-ravenci-primary`}>2018</span>
        </h2>
        <article
          className={`mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full`}
        >
          {CLIENTS.map(({ name, path, image }, index) => (
            <Link
              key={`about-clients-item-${index}`}
              href={path as Route}
              target={"_blank"}
              className={`group cursor-pointer relative mx-auto px-4 py-2 grid place-content-center border border-transparent hover:border-neutral-300 max-w-[200px] lg:max-w-lg text-center transition-all duration-150`}
            >
              {image ? <img src={image} className={`w-full h-full`} /> : name}
              <div
                className={`absolute -top-0.5 -left-0.5 w-0 group-hover:w-3 h-0 group-hover:h-3 border-t border-l border-transparent group-hover:border-neutral-500 transition-all duration-500`}
              ></div>

              <div
                className={`absolute -top-0.5 -right-0.5 w-0 group-hover:w-3 h-0 group-hover:h-3 border-t border-r border-transparent group-hover:border-neutral-500 transition-all duration-500`}
              ></div>

              <div
                className={`absolute -bottom-0.5 -right-0.5 w-0 group-hover:w-3 h-0 group-hover:h-3 border-b border-r border-transparent group-hover:border-neutral-500 transition-all duration-500`}
              ></div>

              <div
                className={`absolute -bottom-0.5 -left-0.5 w-0 group-hover:w-3 h-0 group-hover:h-3 border-b border-l border-transparent group-hover:border-neutral-500 transition-all duration-500`}
              ></div>
            </Link>
          ))}
        </article>
      </div>
      <Image
        className={`absolute -bottom-5 md:-bottom-3 lg:-bottom-1 right-2 scale-50 sm:scale-75 lg:scale-100`}
        src={`/standing-raven.svg`}
        alt={``}
        width={74}
        height={88}
      />
    </section>
  );
}

const CLIENTS = [
  {
    name: "Nikita Morell",
    path: "https://nikitamorell.com",
    image: "/clients/nikita-morell-logo.svg",
  },
  {
    name: "Insight Medical Careers",
    path: "https://insightmedicalcareers.com.au",
    image: "/clients/insight-medical-careers-logo.svg",
  },
  {
    name: "SAC Consulting",
    path: "https://sacconsulting.com.au",
    image: "/clients/sac-consulting-logo.svg",
  },
  {
    name: "Cadeaurable",
    path: "https://cadeaurable.com.au",
    image: "/clients/cadeaurable-logo.svg",
  },
  {
    name: "Stickeroo",
    path: "https://stickeroo.com.au",
    image: "/clients/stickeroo-logo.svg",
  },
  {
    name: "Willis Electrical QLD",
    path: "https://weq.com.au",
    image: "/clients/weq-logo.svg",
  },
  {
    name: "Beauty Retreat Bribie Island",
    path: "https://beautyretreatbribieisland.com.au",
    image: "/clients/beauty-retreat-logo.svg",
  },
  {
    name: "Intercorp",
    path: "https://intercorpdevelopments.com.au",
    image: "/clients/intercorp-logo.svg",
  },
];
