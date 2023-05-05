import info from "@/lib/companyInfo";
import { mobileServicesContent } from "@/lib/homepage";
import Image from "next/image";

const MobileServices = () => {
  return (
    <section className='cont items-center'>
      <div className='image'>
        <Image
          width={600}
          height={800}
          src='/images/mobile_services.webp'
          alt='mobile services'
        />
      </div>
      <div className='content'>
        <h2 className='underline'>{mobileServicesContent.title}</h2>
        <p className='pp text-4xl mb-3 uppercase opacity-85'>
          {mobileServicesContent.subtitle}
        </p>
        <p className='pp opacity-75'>{mobileServicesContent.desciption}</p>
        <a href={info.social.whatsapp} target='_blank' className='uppercase'>
          {mobileServicesContent.btnText}
        </a>
      </div>
    </section>
  );
};

export default MobileServices;
