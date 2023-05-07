import site from "@/lib/companyInfo";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PackagesList = ({
  title,
  packages,
}: {
  title: string;
  packages: PackageProps[];
}) => {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      location.href = "#";
      location.href = `#${title}`;
    }, 1000);
  });
  return (
    <div className='relative z-10 wishing-list my-10 !p-0'>
      <h2 id={title} className='relative text-3xl text-center mx-auto mb-6'>
        {title} Package
      </h2>
      <div className='relative container m-0 max-w-[initial]'>
        {packages.map((package_, i) => (
          <ServicePackage key={i} {...package_} />
        ))}
      </div>
      <button className='relative mx-auto' onClick={() => push("/")}>
        Go Home
      </button>
    </div>
  );
};

export default PackagesList;

const ServicePackage = ({ title, menu, prices, type }: PackageProps) => (
  <div className='box p-4 flex flex-col gap-4'>
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
    <div className='button bb mx-auto'>
      <a
        href={site.social.whatsapp}
        target='_blank'
        className='br uppercase text-[1rem]'>
        Book Now
      </a>
    </div>
    <div className='icons'>
      <div className='small'>
        <Image width={100} height={50} src='/icons/car_sm.webp' alt='' />
        <p className='text-[#fe0000] !font-bold'>{prices.sm}</p>
      </div>
      <div className='big'>
        <Image width={100} height={50} src='/icons/car_lg.jpg' alt='' />
        <p className='text-[#fe0000] !font-bold'>{prices.lg}</p>
      </div>
    </div>
  </div>
);
