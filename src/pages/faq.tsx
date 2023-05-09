import FaqGroup from "@/components/homepage/Faq";
import { tabs } from "@/lib/homepage";
import Head from "next/head";
import { useState } from "react";
import site from "@/lib/companyInfo";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "faq"])),
    },
  };
}

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useTranslation("faq");
  return (
    <>
      <Head>
        <title>FAQs | {site.name}</title>
      </Head>

      <section className='homepageContainer !border-none max-w-[1400px] mx-auto my-16'>
        <h2 className='!text-start !text-secondary !mt-0'>{t("title")}</h2>
        <nav className='flex border-b border-gray-100 text-sm font-medium flex-col md:flex-row'>
          {tabs.map((tab, i) => (
            <span
              key={i}
              onClick={() => setActiveTab(i)}
              className={`font-bold font-sans -mb-px border-b text-xl p-4 cursor-pointer ${
                i === activeTab
                  ? "text-primary border-current"
                  : "border-transparent hover:text-primary"
              }`}>
              {tab.title}
            </span>
          ))}
        </nav>
        <FaqGroup content={tabs[activeTab].content} />
      </section>
    </>
  );
};

export default Faq;
