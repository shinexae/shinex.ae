import IconElement from "@/components/IconElement";
import SocialLink from "@/components/SocialLink";
import info from "@/lib/companyInfo";
import {
  contactFooter,
  servicesFooter,
  socialMediaLinks,
} from "@/lib/homepage";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='pt-5'>
      <div className='arrange max-w-[1400px] mx-auto'>
        <div className='column1'>
          <h2>Services</h2>
          <div className='services_footer flex flex-col gap-8 '>
            {servicesFooter.map((service, index) => (
              <IconElement key={index} {...service} roundedIcon />
            ))}
          </div>
        </div>
        <div className='column2'>
          <h2>Contacts</h2>
          <div className='services_footer flex flex-col gap-8 '>
            {contactFooter.map((service, index) => (
              <IconElement key={index} {...service} roundedIcon />
            ))}
          </div>
        </div>
      </div>
      <div className='location my-10 max-w-[1400px] mx-auto'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21480.103074891787!2d55.282385119629296!3d25.202096898167987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2z2KjYsdisINiu2YTZitmB2Kk!5e0!3m2!1sar!2ssa!4v1683170337901!5m2!1sar!2ssa'
          className='border-none scale-[0.98] rounded-3xl shadow-2xl'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'></iframe>
      </div>
      <div className='contact-us flex flex-col items-center pt-10 max-w-[1400px] mx-auto'>
        <div className='text'>
          <h2 className='capitalize font-normal'>Contact Us With A Click!</h2>
        </div>
        <div className='images'>
          {socialMediaLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
        <div className='logo'>
          <a href={info.siteUrl}>
            <Image width={300} height={300} src='/logo.jpg' alt='' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
