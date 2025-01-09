import Image from 'next/image';

const testimonials = [
  {
    id: '1',
    name: 'david ufot',
    department: 'Department of Computer Science and Mathematics',
    role: 'alumni',
    year: '2024',
    imageUrl: '/images/why-mtu/testimonial-image-1.png',
    statement:
      'My Mountain Top University experience was a mixed bag. An impactful journey of academic excellence, spiritual and personal growth, and meaningful connections. Inspired by passionate professors, supported by lifelong friends that I have discovered along my way here, and grounded in faith, I graduated equipped with purpose, conviction, and a heart to serve and make a difference. Mountain Top University has become a huge part in my life’s story and I will always be grateful for it.',
  },
  {
    id: '2',
    name: 'daniel ikemefuna',
    department: 'Department of Computer Science and Mathematics',
    role: 'alumni',
    year: '2024',
    imageUrl: '/images/why-mtu/testimonial-image-2.png',
    statement:
      'My experience at Mountain Top University was truly transformative. Beyond academic growth, the university fostered a sense of community, faith, and purpose that shaped me into a well-rounded individual. The supportive faculty, rigorous curriculum, and vibrant campus life offered countless opportunities for learning and self-discovery. Friendships formed here became like family, and challenges along the way taught resilience and perseverance. From engaging lectures to impactful spiritual activities',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="h-fit bg-[#84B000] px-8 py-24">
      <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
        {testimonials.map((testimony) => (
          <article
            key={testimony.id}
            className="bg-white"
            style={{
              border: '1px solid',
              borderImageSource:
                'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(102, 102, 102, 0.1) 100%)',
            }}
          >
            <Image
              src={testimony.imageUrl}
              alt={testimony.name}
              width={2000}
              height={2000}
              className="h-auto w-full sm:h-[230px] sm:w-[450px]"
            />
            <div className="w-full bg-white p-6 sm:h-full sm:w-[450px] lg:h-[400px]">
              <p className="font-sans text-sm font-normal leading-7 tracking-[-4%] text-[#5E5E5E] lg:text-[16px] lg:leading-8">
                {testimony.statement}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
