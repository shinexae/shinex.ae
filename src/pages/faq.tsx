import FaqGroup from "@/components/homepage/Faq";
import { tabs } from "@/lib/homepage";
import Head from "next/head";
import { useState } from "react";
import companyInfo from "@/lib/companyInfo";

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Head>
        <title>
          {`FAQ's`} | {companyInfo.companyName}
        </title>
      </Head>

      <section className='homepageContainer !border-none max-w-[1400px] mx-auto my-16'>
        <h2 className='!text-start !text-secondary !mt-0'>FAQ`S</h2>
        <nav className='flex border-b border-gray-100 text-sm font-medium flex-col md:flex-row'>
          {tabs.map((tab, i) => (
            <span
              key={i}
              onClick={() => setActiveTab(i)}
              className={`font-semibold font-sans -mb-px border-b text-xl p-4 cursor-pointer ${
                i === activeTab
                  ? "text-primary border-current"
                  : "border-transparent hover:text-primary"
              }`}>
              {tab.title}
            </span>
          ))}
        </nav>
        <hr className='border-primary/50 md:hidden' />
        <FaqGroup content={tabs[activeTab].content} />
      </section>
    </>
  );
};

export default Faq;
