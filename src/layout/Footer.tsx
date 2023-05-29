import IconElement from "@/components/IconElement";
import SocialLink from "@/components/SocialLink";
import site from "@/lib/companyInfo";
import {
  contactFooter,
  servicesFooter,
  socialMediaLinks,
} from "@/lib/homepage";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const Footer = () => {
  const { t } = useTranslation("home");
  const { locale } = useRouter();
  return (
    <>
      <footer id='contacts' className='pt-5 overflow-hidden'>
        <div className='arrange px-4 max-w-[1400px] mx-auto'>
          <div className='column1'>
            <h2 className='text-white'>{t("services_nav")}</h2>
            <div className='services_footer flex flex-col gap-8 items-center'>
              {servicesFooter.map((service, index) => (
                <IconElement
                  footer
                  key={index}
                  {...service}
                  roundedIcon
                  title={t(service.title)}
                />
              ))}
            </div>
          </div>
          <div className='column2'>
            <h2 className='text-white'>{t("contacts_nav")}</h2>
            <div className='services_footer flex flex-col gap-8 items-center'>
              {contactFooter.map((service, index) => (
                <IconElement footer key={index} {...service} roundedIcon />
              ))}
            </div>
          </div>
        </div>
        <div className='location my-10 max-w-[1400px] mx-auto'>
          <iframe
            title='ShineX location on google maps '
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21480.103074891787!2d55.282385119629296!3d25.202096898167987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2z2KjYsdisINiu2YTZitmB2Kk!5e0!3m2!1sar!2ssa!4v1683170337901!5m2!1sar!2ssa'
            className='border-none scale-[0.98] rounded-3xl shadow-2xl'
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
        <div className='contact-us flex flex-col items-center pt-10 max-w-[1400px] mx-auto'>
          <div className='text'>
            <h2
              className='capitalize font-bold text-4xl'
              style={{
                direction: locale === "ar" ? "rtl" : "ltr",
              }}>
              {t("ContactUs")}
            </h2>
          </div>
          <div className='images mt-14 gap-4'>
            {socialMediaLinks.map((link, index) => (
              <SocialLink
                key={index}
                {...link}
                // className={
                //   index === Math.floor(socialMediaLinks.length / 2)
                //     ? "scale-125 p-0 !ml-3 hover:scale-[1.3]"
                //     : ""
                // }
              />
            ))}
          </div>
          <div className='logo'>
            <a
              href={site.url}
              aria-label='website link scale-100 hover:scale-100'>
              <Image width={300} height={300} src='/logo.jpeg' alt='ShineX' />
            </a>
          </div>
        </div>
      </footer>
      <div className='connectWithUs'>
        <SocialLink
          name='phone'
          image='/icons/phone.svg'
          url={"tel:" + site.social.phone}
          className='!fixed !z-50 bg-green-500 bottom-6 left-6 scale-125 border-2 border-solid p-0 !ml-3 hover:scale-[1.3]'
        />
        <SocialLink
          name='whatsapp'
          image='/icons/whatsapp.svg'
          url={site.social.whatsapp}
          className='!fixed !z-50 bottom-6 right-6 scale-125 border-2 border-solid p-0 !ml-3 hover:scale-[1.3]'
        />
      </div>
    </>
  );
};

export default Footer;
