import Link from "next/link";
import FaqItem from "../FaqItem";
import { useState } from "react";

const FaqGroup = ({ content, homepage }: any) => {
  const [visibleQuestion, setVisibleQuestion] = useState(
    content[0]?.question || ""
  );

  if (!content) return <></>;

  return (
    <section id='faq' className='customer !p-4 md:!p-20 !border-none'>
      {homepage ? <h2 className='!text-start !mt-0'>FAQs</h2> : <></>}
      <ul className='max-w-[800px] mb-10'>
        {content.map((item: any, i: any) => (
          <FaqItem
            key={i}
            {...item}
            onClick={() =>
              setVisibleQuestion((prev: any) =>
                prev === item.question ? "" : item.question
              )
            }
            visibleQuestion={visibleQuestion}
          />
        ))}
      </ul>
      {homepage ? (
        <Link href='/faq'>Load more</Link>
      ) : (
        <Link href='/'>Go home</Link>
      )}
    </section>
  );
};

export default FaqGroup;
