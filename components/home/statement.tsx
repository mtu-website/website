const statements = [
  {
    id: 1,
    heading: 'our mission',
    text: 'Mountain Top University provides a transformative and quality education rooted in Christian values, empowering students to reach their fullest potential. We cultivate creativity, critical thinking, and social responsibility, preparing our students to excel in their fields and tackle global challenges.',
    backgroundImage: '/images/mission-card.png',
    className:
      'border-b-[1.5px] border-r-0 border-[#E6E6E6] lg:border-b-0 lg:border-r-[1.5px]',
  },
  {
    id: 2,
    heading: 'our vision',
    text: 'Mountain Top University is envisioned as a dynamic centre of excellence in the liberal tradition for the production of top-rated, morally sound graduates of distinctions who will be globally competitive for outstanding impact on the Nigerian societal and global development.',
    backgroundImage: '/images/vision-card.png',
    className:
      'border-b-[1.5px] border-r-0 border-[#E6E6E6] lg:border-b-0 lg:border-r-[1.5px]',
  },
  {
    id: 3,
    heading: 'our goal',
    text: 'Mountain Top University is designed to be a unique tertiary institution where a new generation of students will be imbued and empowered by the spirit of excellence. The university is to provide much needed qualified, competent, skilled and conscientious manpower.',
    backgroundImage: '/images/goal-card.png',
    className: '',
  },
];

export default function Statement() {
  return (
    // if this clear..you're good
    <section className="bg-[#FAFFEA] px-6 py-12 lg:px-0 lg:py-24">
      <div className="mx-auto justify-center lg:flex">
        {statements.map(({ id, heading, text, className }) => {
          return (
            <article
              key={id}
              className={`h-auto w-full bg-[#FAFFEA] p-9 lg:w-[440px] ${className}`}
              style={
                {
                  // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  // transition: "box-shadow 0.3s ease",
                }
              }
            >
              <h2 className="inter mb-3 text-[25px] text-xl font-semibold capitalize leading-8 tracking-[-4%] text-[#84B000] lg:text-[28px] xl:mb-10">
                {heading}
              </h2>
              <p className="inter text-[14px] leading-6 tracking-[-3%] text-[#0F0F0F] lg:text-[16px] xl:leading-8">
                {text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
