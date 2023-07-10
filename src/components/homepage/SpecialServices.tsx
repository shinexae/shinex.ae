import { specialServicesList } from "@/lib/homepage";
import IconElement from "../IconElement";
import { useTranslation } from "next-i18next";

const SpecialServices = () => {
  const { t } = useTranslation("home");

  return (
    <section>
      <h2>{t("SpecialServices")}</h2>
      <div className='!container pt-6 md:pt-10 grid grid-cols-3'>
        {specialServicesList.map((elem, index) => (
          <IconElement
            key={index}
            {...elem}
            title={t(`Special` + Math.floor(index + 1))}
          />
        ))}
      </div>
    </section>
  );
};

export default SpecialServices;
