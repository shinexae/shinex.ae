import { aboutSection } from "@/lib/homepage";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const AboutUs = () => {
  const { t } = useTranslation("home");
  return (
    <section className='cont3 lg:items-center'>
      <div className='image'>
        <Image
          width={600}
          height={800}
          src='/images/about_us.webp'
          alt='about_us'
        />
      </div>
      <div className='content3'>
        <h2>{t("AboutUs")}</h2>
        {aboutSection.paragraphs.map((par, i) => (
          <p key={i} className='pp'>
            {t(par)}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
