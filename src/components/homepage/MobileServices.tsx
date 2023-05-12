import site from "@/lib/companyInfo";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import CTA from "../CTA";

const MobileServices = () => {
  const { t } = useTranslation("home");
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
        <h2>{t("Mobile_Service")}</h2>
        <p className='pp text-4xl mb-3 uppercase opacity-85'>
          {t("Mobile_P1")}
        </p>
        <p className='pp opacity-75'>{t("Mobile_P2")}</p>
        <CTA />
      </div>
    </section>
  );
};

export default MobileServices;
