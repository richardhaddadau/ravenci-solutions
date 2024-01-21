type Testimonial = {
  content: string;
  author: string;
  image: null | string;
};

type TestimonialArray = Testimonial[];

const TestimonialCarousel = (
  testimonials: TestimonialArray = [],
  exclusive: boolean = true,
) => {
  const isValidTestimonial = Array.isArray(
    testimonials && testimonials.length > 0,
  );
  const defaultTestimonials: TestimonialArray = [
    {
      content:
        "...professional in every way. I'm glad that I trusted them with this job.",
      author: "Rachelle Gerges Melhem",
      image: null,
    },
    {
      content:
        "I could not recommend Richard From 1VINE Design more highly. His knowledge is remarkable, his professionalism exceptional, and the way he completely sorted my issues, quickly, effortlessly was simply brilliant. Champion bloke, brilliant at what he does.",
      author: "Geoff Beisler",
      image: null,
    },
    {
      content:
        "Richard is amazing! He really cares about his work, his customers and people in general. The work that he has done for me goes above and beyond. Definitely recommend Richard to anyone!",
      author: "Viv Luhrs",
      image: null,
    },
    {
      content:
        "I highly recommend Richard from 1VINE Design to any business looking for a highly-skilled and experienced developer.",
      author: "Dannielle Green",
      image: null,
    },
  ];

  const useTestimonials =
    exclusive && isValidTestimonial ? testimonials : defaultTestimonials;

  return (
    <section className={`py-20 w-full bg-ravenci-primary`}>
      {useTestimonials.map((testimonial, index) => (
        <article
          key={`testimonial-${index}`}
          className={`max-w-sm text-center text-ravenci-gray`}
        >
          <p className={`mb-5 font-poppins text-sm`}>{testimonial.content}</p>
          <h3 className={`font-poppins text-xs font-bold uppercase`}>
            - {testimonial.author}
          </h3>
        </article>
      ))}
    </section>
  );
};

export default TestimonialCarousel;
