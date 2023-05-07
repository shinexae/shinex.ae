import Image from "next/image";
import { useRouter } from "next/router";

const ServiceElement = ({ image, title, description }: ServiceInterface) => {
  const { push } = useRouter();

  return (
    <div
      id={title.replaceAll(" ", "-")}
      className='box flex flex-col border-4 border-secondary'>
      <Image width={500} height={700} src={image} alt={title} />
      <div className='grow content flex flex-col gap-3 items-center !pt-10'>
        <h3 className='uppercase !font-bold font-sans !mb-0'>{title}</h3>
        <p className='grow'>{description}</p>
        <button
          className='button'
          onClick={() => push(`/${title.toLowerCase()}`)}>
          {title} Pricing
        </button>
      </div>
    </div>
  );
};

export default ServiceElement;
