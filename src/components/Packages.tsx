interface FeatureProps {
  primary: string;
  secondary: string;
}

interface PackageProps {
  title: string;
  subtitle: string;
  price: string;
  features: FeatureProps[];
  link: string;
}

export default function Packages({
  packages = DEFAULT_PACKAGES,
  featuredPackage = 0,
}) {
  return (
    <section className={`grid grid-cols-3 w-full max-w-5xl`}>
      {packages.map(({ title, subtitle, price, features, link }, index) => (
        <article
          key={`package-price-${index}`}
          className={`relative px-12 py-28 bg-white text-center`}
        >
          {featuredPackage === index && (
            <div className={`absolute top-0 px-4 py-1 bg-ravenci-primary`}>
              <p className={`uppercase text-white font-medium text-xs`}>
                Popular
              </p>
            </div>
          )}
          <h4 className={`text-xl font-semibold uppercase`}>{title}</h4>
          <h5 className={`text-sm uppercase text-neutral-500`}>{subtitle}</h5>
          <h3 className={`mt-10 mb-2 text-3xl tracking-wide`}>$29.99</h3>
          <h6 className={`text-sm text-neutral-400 font-light`}>monthly</h6>
          <ul className={`mt-10 mx-auto grid`}>
            {features.map(({ primary, secondary }, index) => (
              <li
                key={`${title}-feature-${index}`}
                className={`py-4 text-sm [&:not(:last-child)]:border-b border-neutral-200 text-ravenci`}
              >
                <span className={`font-bold`}>{primary}</span>
                <span className={`text-neutral-400 font-light ml-2`}>
                  {secondary}
                </span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

const DEFAULT_PACKAGES: PackageProps[] = [
  {
    title: "Package Title",
    subtitle: "Package Subtitle",
    price: "$29.99",
    features: [
      {
        primary: "20",
        secondary: "Feature",
      },
      {
        primary: "Unlimited",
        secondary: "Feature",
      },
    ],
    link: "/package",
  },
];
