import { aboutSection } from "@/lib/homepage";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const AboutUs = () => {
  const { t } = useTranslation("home");
  const { locale } = useRouter();

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
        <h2
          style={{
            direction: locale === "ar" ? "rtl" : "ltr",
          }}>
          {t("AboutUs")}
        </h2>
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
