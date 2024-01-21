type Testimonial = {
  content: string;
  author: string;
  image: null | string;
};

const TestimonialCarousel = (testimonial: Testimonial) => {
  return (
    <section className={`pt-20 pb-16 w-full bg-ravenci-primary`}>
      <article className={`mx-auto max-w-md`}>
        <p
          className={`mb-10 font-poppins font-light text-sm leading-6 text-ravenci-light-gray`}
        >
          {testimonial.content}
        </p>
        <h3
          className={`inline-block py-1 pl-2 border-l-4 border-ravenci-gray/60 font-poppins text-xs font-bold uppercase text-ravenci-gray/60`}
        >
          {testimonial.author}
        </h3>
      </article>
    </section>
  );
};

export default TestimonialCarousel;
