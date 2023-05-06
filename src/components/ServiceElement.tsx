import Image from "next/image";

const ServiceElement = ({
  image,
  title,
  description,
  packages,
  setPackage,
}: ServiceInterface) => (
  <div id={title.replaceAll(" ", "-")} className='box flex flex-col'>
    <Image width={500} height={700} src={image} alt={title} />
    <div className='grow content flex flex-col gap-3 items-center !pt-10'>
      <h3 className='uppercase !mb-0'>{title}</h3>
      <p className='grow'>{description}</p>
      <button
        className='button'
        onClick={() => setPackage({ title, packages })}>
        {title} Pricing
      </button>
    </div>
  </div>
);

export default ServiceElement;
