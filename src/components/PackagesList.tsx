import site from "@/lib/companyInfo";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";

const PackagesList = ({
  title,
  packages,
}: {
  title: string;
  packages: PackageProps[];
}) => {
  const { push, locale } = useRouter();

  const { t } = useTranslation(title);
  const { t: t_common } = useTranslation("common");

  return (
    <div
      className='relative z-10 wishing-list my-10 !p-0'
      dir={locale === "ar" ? "rtl" : "ltr"}>
      <h2 id={title} className='relative text-3xl text-center mx-auto mb-6'>
        {t("title")}
      </h2>
      <div className='relative container m-0 max-w-[initial] flex md:grid grid-cols-4 gap-8'>
        {packages.map((package_, i) => (
          <ServicePackage
            key={i}
            {...package_}
            title={t(`box${i + 1}_h2`)}
            menu={package_.menu.map((item, i2) => t(`box${i + 1}_p${i2 + 1}`))}
            type={package_.type ? t(`box${i + 1}_type`) || "" : ""}
          />
        ))}
      </div>
      <button className='relative mx-auto' onClick={() => push("/")}>
        {t_common("goHome")}
      </button>
    </div>
  );
};

export default PackagesList;

const ServicePackage = ({ title, menu, prices, type }: PackageProps) => {
  const { t } = useTranslation("common");

  return (
    <div className='box p-4 flex flex-col items-center gap-4 border-4 border-secondary'>
      <h3 className='text-center font-bold'>{title}</h3>
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
          {t("cta")}
        </a>
      </div>
      <div className='icons flex justify-center items-center mx-auto mt-6'>
        <div className='flex flex-col items-center'>
          <div className='w-24 scale-[.8]'>
            <Image width={80} height={96} src='/icons/car_sm.jpg' alt='' />
          </div>
          <p className='text-[#fe0000] !font-bold'>{prices.sm}</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='w-24 scale-90 scale-y-100'>
            <Image width={80} height={110} src='/icons/car_lg.jpg' alt='' />
          </div>
          <p className='text-[#fe0000] !font-bold'>{prices.lg}</p>
        </div>
      </div>
    </div>
  );
};
