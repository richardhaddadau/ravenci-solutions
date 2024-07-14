import Link from "next/link";
import { Route } from "next";

export const ContactLink = ({ link = "/", text = "get in touch" }) => {
  return (
    <div
      className={`ml-0.5 group relative px-1 inline-block text-ravenci-primary hover:text-ravenci-light-gray transition-all duration-500 ease-in-out z-10`}
    >
      <Link href={link as Route}>{text}</Link>
      <span
        className={`absolute -top-1.5 left-0 w-0 group-hover:w-full h-[125%] bg-ravenci-primary transition-all duration-500 ease-in-out -z-10`}
      ></span>
    </div>
  );
};
