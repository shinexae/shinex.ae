import Image from "next/image";

const ServiceElement = ({
  image,
  title,
  description,
  packages,
  setPackage,
}: ServiceInterface) => (
  <div className='box flex flex-col '>
    <Image width={500} height={700} src={image} alt={title} />
    <div className='grow content flex flex-col gap-3'>
      <h3 className='uppercase'>{title}</h3>
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
