import Head from "next/head";

import companyInfo from "@/lib/companyInfo";

import WhyUs from "@/components/homepage/WhyUs";
import OurServices from "@/components/homepage/OurServices";
import SpecialServices from "@/components/homepage/SpecialServices";
import MobileServices from "@/components/homepage/MobileServices";
import WindowTinting from "@/components/homepage/WindowTinting";
import AboutUs from "@/components/homepage/AboutUs";
import CustomerReviews from "@/components/homepage/CustomerReviews";
import Faq from "@/components/homepage/Faq";

export default function Home() {
  return (
    <>
      <Head>
        <title>{companyInfo.companyName}</title>
      </Head>

      <div className='homepageContainer max-w-[1400px] mx-auto'>
        <WhyUs />

        <OurServices />

        <SpecialServices />

        <MobileServices />

        <WindowTinting />

        <AboutUs />

        <CustomerReviews />

        <Faq />
      </div>
    </>
  );
}
