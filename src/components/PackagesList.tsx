import site from "@/lib/companyInfo";
import Image from "next/image";

const PackagesList = ({
  title,
  packages,
  setPackage,
}: {
  title: string;
  packages: PackageProps[];
  setPackage: any;
}) => {
  return (
    <div
      className='relative z-10 wishing-list'
      aria-labelledby='PackagesList'
      role='dialog'
      aria-modal='true'>
      <div className='fixed inset-0 z-10 overflow-y-auto p-4 md:py-10'>
        <div
          className='w-full h-full fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity'
          onClick={() => setPackage({})}
        />
        <h1 className='relative text-3xl text-white capitalize mb-6 underline'>
          {title} Package
        </h1>
        <div className='relative container'>
          {packages.map((package_, i) => (
            <ServicePackage key={i} {...package_} />
          ))}
        </div>
        <button className='relative' onClick={() => setPackage({})}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PackagesList;

const ServicePackage = ({ title, menu, prices, type }: PackageProps) => (
  <div className='box p-8 flex flex-col gap-4'>
    <h3>{title}</h3>
    <ul className='!list-inside'>
      {menu.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
    {type ? (
      <p className='text-center !font-bold underline !mb-0'>{type}</p>
    ) : (
      <></>
    )}
    <div className='button bb'>
      <a href={site.social.whatsapp} target='_blank' className='br uppercase'>
        Book Now
      </a>
    </div>
    <div className='icons'>
      <div className='small'>
        <Image width={100} height={50} src='/icons/car_sm.webp' alt='' />
        <p className='text-[#fe0000] !font-bold'>{prices.sm} AED</p>
      </div>
      <div className='big'>
        <Image width={100} height={50} src='/icons/car_lg.jpg' alt='' />
        <p className='text-[#fe0000] !font-bold'>{prices.lg} AED</p>
      </div>
    </div>
  </div>
);
