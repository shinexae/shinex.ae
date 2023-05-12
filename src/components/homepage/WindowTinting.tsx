import { windowTintingContent } from "@/lib/homepage";
import Image from "next/image";
import IconElement from "../IconElement";
import { useTranslation } from "next-i18next";
import CTA from "../CTA";

const WindowTinting = () => {
  const { t } = useTranslation("home");
  return (
    <section className='cont2 items-center column-gap-10'>
      <div className='image'>
        <Image
          width={600}
          height={800}
          src='/images/window_tinting.webp'
          alt='window_tinting'
        />
      </div>
      <div className='content2'>
        <h2>{t("Window_Tint")}</h2>
        <h3>{t("Window_Tinth5")}</h3>
        <div className='colt mt-4 lg:mt-20 mb-4 md:mb-10 grid !grid-cols-3'>
          {windowTintingContent.map((elem, index) => (
            <IconElement
              key={index}
              {...elem}
              hStyle='text-[#fe0000]'
              title={t(`Window_Benfits_Main` + Math.floor(index + 1))}
              description={
                t(`Window_Benfits_P` + Math.floor(index + 1) || "") || ""
              }
            />
          ))}
        </div>
        <div className='uppercase w-fit mx-auto'>
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default WindowTinting;
