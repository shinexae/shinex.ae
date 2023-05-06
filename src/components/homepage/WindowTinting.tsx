import { windowTintingContent } from "@/lib/homepage";
import Image from "next/image";
import IconElement from "../IconElement";
import site from "@/lib/companyInfo";

const WindowTinting = () => {
  return (
    <section className='cont2 items-center gap-10'>
      <div className='image'>
        <Image
          width={600}
          height={800}
          src='/images/window_tinting.webp'
          alt='window_tinting'
        />
      </div>
      <div className='content2'>
        <h2>Residental Window Tinting</h2>
        <h3>Benifets of Tenting Your Home</h3>
        <div className='colt mt-20 mb-10'>
          {windowTintingContent.map((elem, index) => (
            <IconElement key={index} {...elem} hStyle='text-[#fe0000]' />
          ))}
        </div>
        <a
          href={site.social.whatsapp}
          target='_blank'
          className='uppercase w-fit mx-auto'>
          Book Now
        </a>
      </div>
    </section>
  );
};

export default WindowTinting;
