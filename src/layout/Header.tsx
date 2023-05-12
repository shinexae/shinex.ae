import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { locale } = useRouter();

  const otherLang = useMemo(
    () =>
      locale === "en"
        ? { label: "arabic", symbol: "ar", icon: "uae_full_flag" }
        : { label: "english", symbol: "en" },
    [locale]
  );

  const { t } = useTranslation("home");

  return (
    <header
      className='w-screen relative md:max-h-auto z-50 mt-16'
      style={{
        height: "calc(100vw / 1.78)",
      }}>
      <nav
        className={`
          bg-primary px-2 h-16 flex items-center md:px-10 fixed top-0 left-0 w-full z-10
          ${locale === "ar" ? "rtl-grid" : ""}
        `}>
        <ul className='flex gap-2 w-full items-center'>
          <li>
            <Link className='p-2 md:p-4' href='/'>
              {t("home_nav")}
            </Link>
          </li>
          <li>
            <Link className='p-2 md:p-4' href='/#ourServices'>
              {t("services_nav")}
            </Link>
          </li>
          <li>
            <Link className='p-2 md:p-4' href='/#faq'>
              {t("faqs_nav")}
            </Link>
          </li>
          <li>
            <Link className='p-2 md:p-4' href='/#contacts'>
              {t("contacts_nav")}
            </Link>
          </li>
          <li
            className={`
              grow
          `}>
            <Link
              href='/'
              locale={otherLang.symbol}
              className={`${
                locale === "ar" ? "ml-0 mr-auto" : "mr-0 ml-auto"
              } flex-col md:flex-row text-white bg-transparent md:scale-90 hover:scale-100 hover:bg-white/10 rounded-lg w-fit cursor-pointer px-4 py-2 text-xl flex item-center md:gap-2 scale-[.8] gap-0 `}>
              <Image
                priority
                src={`/icons/${otherLang.icon || otherLang.label}.svg`}
                className='m-0'
                alt=''
                width={30}
                height={30}
              />
              <span className='capitalize'>{otherLang.label}</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Link href='/#ourServices' className='default'>
        <Image
          priority
          src='/images/hero.webp'
          alt='Hero image'
          fill
          className=' block md:mt-0'
        />
      </Link>
    </header>
  );
};

export default Header;
