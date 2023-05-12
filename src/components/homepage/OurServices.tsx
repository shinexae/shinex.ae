import ServiceElement from "../ServiceElement";
import { services } from "@/lib/homepage";
import { useTranslation } from "next-i18next";

const OurServices = () => {
  const { t } = useTranslation("home");

  return (
    <section className='figure' id='ourServices'>
      <h2>{t("services")}</h2>
      <div className='container !max-w-[100vw] px-2'>
        {services.map((elem, index) => (
          <ServiceElement
            key={index}
            {...elem}
            title={t(elem.title)}
            description={t(elem.title + "_Description")}
            ctaText={t(`${elem.title.toLowerCase()}_Button`) || ""}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
