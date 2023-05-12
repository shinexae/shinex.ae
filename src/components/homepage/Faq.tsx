import Link from "next/link";
import FaqItem from "../FaqItem";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const FaqGroup = ({ content, homepage }: any) => {
  const [visibleQuestion, setVisibleQuestion] = useState(
    content[0]?.question || ""
  );

  const { t } = useTranslation("faq");
  const { locale } = useRouter();

  if (!content) return <></>;

  return (
    <section
      id='faq'
      className='customer !p-4 md:!p-20 !border-none'
      dir={locale === "ar" ? "rtl" : ""}>
      {homepage ? <h2 className='!text-start !mt-0'>{t("title")}</h2> : <></>}
      <ul className='max-w-[800px] mb-10'>
        {content.map((item: any, i: any) => (
          <FaqItem
            key={i}
            {...item}
            question={t(item.question)}
            answer={t(item.answer)}
            onClick={() =>
              setVisibleQuestion((prev: any) =>
                prev === t(item.question) ? "" : t(item.question)
              )
            }
            visibleQuestion={visibleQuestion}
          />
        ))}
      </ul>
      {homepage ? (
        <Link href='/faq'>{t("loadMore")}</Link>
      ) : (
        <Link href='/'>{t("goHome")}</Link>
      )}
    </section>
  );
};

export default FaqGroup;
