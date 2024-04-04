import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`fixed bottom-0 left-0 right-0 -z-10`}>
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
            Want to work with me?
          </p>
          <p className={`font-poppins text-ravenci-light-gray text-center`}>
            <Link
              href={"/contact"}
              className={`pb-1 inline-block opacity-70 hover:opacity-100 font-bold text-3xl border-b-[1.5px] border-ravenci-gray hover:border-ravenci-primary transition-all duration-500`}
            >
              get in touch
            </Link>
          </p>
        </div>
        <p
          className={`font-poppins text-ravenci-dark-gray text-xs font-light text-center`}
        >
          &copy; 2018 - {new Date().getFullYear()} RAVENCI
        </p>
      </section>
    </footer>
  );
};

export default Footer;
