import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ServiceElement = ({
  image,
  title,
  description,
  ctaText,
  url,
}: ServiceInterface) => {
  const { locale } = useRouter();

  return (
    <div
      id={title.replaceAll(" ", "-")}
      className='box flex flex-col border-4 border-secondary'>
      <Image
        width={500}
        height={700}
        src={image}
        alt={title}
        className='h-[500px]'
      />
      <div className='grow content flex flex-col gap-3 items-center !pt-10'>
        <h3 className='uppercase !font-bold  !mb-0'>{title}</h3>
        <p className='grow'>{description}</p>
        <Link href={url} locale={locale} className='capitalize'>
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default ServiceElement;
