import Image from "next/image";
import Link from "next/link";
import { Route } from "next";

const Footer = () => {
  return (
    <footer>
      <div className={`pt-10 w-full`}>
        <Image
          src={`raven-on-rock.svg`}
          alt={`RAVENCI crow standing on a rock`}
          width={200}
          height={79}
          className={`mx-auto`}
        />
      </div>
      <section className={`pt-32 pb-20 px-6 bg-black`}>
        <div className={`mb-16 mx-auto grid gap-4 w-fit`}>
          <p
            className={`mb-2 font-poppins text-ravenci-gray/60 font-light text-3xl text-center`}
          >
            Are you ready to get started?
          </p>
          <p className={`font-poppins text-ravenci-light-gray text-center`}>
            <Link
              href={`/start-a-project` as Route}
              className={`group relative pb-1 inline-block opacity-70 hover:opacity-100 font-bold text-3xl transition-all duration-500`}
            >
              let's talk!
              <span
                className={`absolute bottom-0 right-0 w-full group-hover:w-0 h-1.5 bg-white/70 group-hover:bg-white/100 z-0 transition-all duration-500 ease-in-out`}
              ></span>
              <span
                className={`absolute bottom-0 left-0 w-0 group-hover:w-full h-1.5 bg-ravenci-primary z-10 transition-all duration-500 ease-in-out`}
              ></span>
            </Link>
          </p>
        </div>
        <p
          className={`font-poppins text-ravenci-dark-gray text-xs font-light text-center`}
        >
          &copy; 2018 - {new Date().getFullYear()} 1VINE Design (Operating as{" "}
          <span className={`font-bold`}>RAVENCI</span>)
        </p>
      </section>
    </footer>
  );
};

export default Footer;
