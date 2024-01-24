import Link from "next/link";

type Step = {
  number: number;
  title: string;
  description: string;
};

const HomeStepsSection = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: "Research",
      description:
        "Research will be key to providing a solution that best suits your needs, your business needs and your customers' needs.",
    },
    {
      number: 2,
      title: "Planning",
      description:
        "A successful end product must have a proper design and execution strategy. This includes wireframing, prototyping, scheduling and design.",
    },
    {
      number: 3,
      title: "Development",
      description:
        "Here is where your vision is finally turned into reality. Your website/app is expertly developed using the most up-to-date technologies.",
    },
    {
      number: 4,
      title: "Testing",
      description:
        "The finished product is test-driven by digital and traditional methods. Unit testing by modern technologies as well as a testing team.",
    },
    {
      number: 5,
      title: "Live",
      description:
        "Ready, Set, Go! The most exciting part, send out those emails and social media posts - We're live!",
    },
  ];

  return (
    <section
      className={`py-36 flex flex-col items-center justify-center w-full bg-ravenci-gray`}
    >
      <div className={`mb-20 px-4 flex flex-col items-center`}>
        <h3
          className={`mb-3 font-poppins font-medium text-sm tracking-wide text-ravenci-dark-gray uppercase`}
        >
          Project Planning
        </h3>
        <h2
          className={`font-poppins font-semibold text-4xl tracking-tight text-center`}
        >
          Designed for you
        </h2>
      </div>

      <section
        className={`flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-stretch gap-0 w-full max-w-page`}
      >
        {steps.map((step, index: number) => (
          // Step Box
          <article
            key={`home-page-step-${index}`}
            className={`group max-w-full sm:max-w-[230px] w-full sm:w-1/3 md:w-1/5 min-w-[100px]`}
          >
            <div
              className={`relative flex justify-center items-center w-full h-16`}
            >
              <span
                className={`absolute top-1/2 w-full h-[1px] bg-ravenci -z-10`}
              ></span>
              <span
                className={`absolute flex justify-center items-center w-12 group-hover:w-16 h-12 group-hover:h-16 bg-ravenci-primary rounded-full shadow-lg shadow-stone-300 opacity-0 group-hover:opacity-100 z-20 transition-all duration-[0.4s]`}
              ></span>
              <span
                className={`pt-1.5 flex justify-center items-center w-12 h-12 bg-ravenci-light-gray rounded-full shadow-lg shadow-stone-300 group-hover:shadow-none font-poppins font-medium z-20 transition-all duration-700`}
              >
                {step.number}
              </span>
            </div>
            <div
              className={`py-7 px-4 flex flex-col justify-center items-center`}
            >
              <h4
                className={`mb-4 font-bold text-xs tracking-widest text-ravenci-primary uppercase`}
              >
                {step.title}
              </h4>
              <p
                className={`text-xs text-ravenci-dark-gray text-center leading-6`}
              >
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </section>
      <Link
        href="/contact"
        className={`mt-20 py-3 px-8 bg-ravenci-primary text-ravenci-light-gray hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-stone-300 font-poppins text-xs uppercase transition-all duration-500`}
      >
        Start a Project
      </Link>
    </section>
  );
};

export default HomeStepsSection;
