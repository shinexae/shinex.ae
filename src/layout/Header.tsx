import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

const Header = () => {
  const { locale } = useRouter();

  const otherLang = useMemo(
    () =>
      locale === "en"
        ? { label: "arabic", symbol: "ar", icon: "uae_full_flag" }
        : { label: "english", symbol: "en" },
    [locale]
  );

  return (
    <header
      className='w-screen relative md:max-h-auto z-50'
      style={{
        height: "calc(100vw / 1.78)",
      }}>
      <nav className='bg-primary px-2 h-16 flex items-center md:px-10 fixed top-0 left-0 w-full z-10'>
        <ul className='flex gap-2 w-full items-center'>
          <li>
            <Link className='p-2 md:p-4' href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='p-2 md:p-4' href='/#ourServices'>
              Services
            </Link>
          </li>
          <li>
            <Link className='p-2 md:p-4' href='/#faq'>
              FAQs
            </Link>
          </li>
          <li>
            <Link className='p-2 md:p-4' href='/#contacts'>
              Contacts
            </Link>
          </li>
          <li className='grow'>
            <Link
              href='/'
              locale={otherLang.symbol}
              className='mr-0 ml-auto text-white bg-transparent hover:scale-100 hover:bg-white/10 rounded-lg w-fit cursor-pointer px-4 py-2 text-xl flex item-center gap-2'>
              <Image
                priority
                src={`/icons/${otherLang.icon || otherLang.label}.svg`}
                className='m-0'
                alt=''
                width={30}
                height={30}
              />
              <span className='capitalize hidden md:inline'>
                {otherLang.label}
              </span>
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
          className=' block mt-16 md:mt-0'
        />
      </Link>
    </header>
  );
};

export default Header;
