import Head from "next/head";

import site from "@/lib/companyInfo";

import WhyUs from "@/components/homepage/WhyUs";
import OurServices from "@/components/homepage/OurServices";
import SpecialServices from "@/components/homepage/SpecialServices";
import MobileServices from "@/components/homepage/MobileServices";
import WindowTinting from "@/components/homepage/WindowTinting";
import AboutUs from "@/components/homepage/AboutUs";
import CustomerReviews from "@/components/homepage/CustomerReviews";
import Faq from "@/components/homepage/Faq";
import { faq } from "@/lib/homepage";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{site.title}</title>
      </Head>

      <div className='homepageContainer max-w-[1400px] mx-auto'>
        <WhyUs />

        <OurServices />

        <SpecialServices />

        <MobileServices />

        <WindowTinting />

        <AboutUs />

        <CustomerReviews />

        <Faq homepage content={faq.general.slice(0, 6)} />
      </div>
    </>
  );
}
