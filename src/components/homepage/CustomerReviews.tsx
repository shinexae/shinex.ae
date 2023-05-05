import { reviews } from "@/lib/homepage";
import Image from "next/image";

const CustomerReviews = () => {
  return (
    <section className='customer !border-none !pb-0'>
      <h2>Customer Reviews</h2>

      <div className='mt-20'>
        {reviews.map((review, index) => (
          <CustomerReview key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

const CustomerReview = ({ title, stars, description, author }: ReviewProps) => {
  return (
    <div className='max-w-[800px]'>
      <h3 className='!mt-10 !capitalize !mb-5 font-bold font-serif'>{title}</h3>
      <p className='flex gap-[2px] mb-3'>
        {Array.apply(null, Array(stars)).map((star, i) => (
          <Image key={i} src='/icons/star.svg' alt='*' width={20} height={20} />
        ))}
      </p>
      <p className='opacity-70 text-xl font-[300]'>{description}</p>
      <p className='text-2xl mt-3 opacity-70'>- {author}</p>
      <hr className='border-[2px] opacity-60 mt-6' />
    </div>
  );
};
