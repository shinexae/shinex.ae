import { reviews } from "@/lib/homepage";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const CustomerReviews = () => {
  const { t } = useTranslation("home");
  const { locale } = useRouter();
  return (
    <section className='customer !border-none !pb-0'>
      <h2>{t("Customer_Reviews")}</h2>

      <div className='mt-20' dir={locale === "ar" ? "rtl" : ""}>
        {reviews.map((review, index) => (
          <CustomerReview
            key={index}
            {...review}
            title={t(`Customer_Reviews_h2_` + Math.floor(index + 1))}
            description={t(`Customer_Reviews_p_` + Math.floor(index + 1))}
            author={t(`Customer_Reviews_commenter_` + Math.floor(index + 1))}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;

const CustomerReview = ({ title, stars, description, author }: ReviewProps) => {
  return (
    <div className='max-w-[800px]'>
      <h3 className='!mt-10 !capitalize !mb-5 font-bold font'>{title}</h3>
      <p className='flex gap-[2px] mb-3'>
        {Array.apply(null, Array(stars)).map((star, i) => (
          <Image key={i} src='/icons/star.svg' alt='*' width={20} height={20} />
        ))}
      </p>
      <p className='opacity-70 text-xl font-[300]'>{description}</p>
      <p className='text-2xl mt-3 opacity-70'>{author}</p>
      <hr className='border-[2px] opacity-60 mt-6' />
    </div>
  );
};
