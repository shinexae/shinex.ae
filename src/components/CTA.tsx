import site from "@/lib/companyInfo";
import React from "react";
import { useTranslation } from "next-i18next";

const CTA = () => {
  const { t } = useTranslation("home");
  return (
    <a href={site.social.whatsapp} target='_blank' className='uppercase'>
      {t("cta")}
    </a>
  );
};

export default CTA;
