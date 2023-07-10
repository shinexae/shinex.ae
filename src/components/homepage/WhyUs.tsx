import { whyUsList } from "@/lib/homepage";
import IconElement from "../IconElement";
import { useTranslation } from "next-i18next";

const WhyUs = () => {
  const { t } = useTranslation("home");

  return (
    <section className='why-us grid gap-3'>
      <h2>{t("whyUs")}</h2>
      <div className='lg:boxes text-center grid grid-cols-4 gap-6'>
        {whyUsList.map((elem, index) => (
          <IconElement key={index} {...elem} title={t(elem.title)} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
