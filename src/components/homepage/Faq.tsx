import FaqItem from "../FaqItem";
import { faq } from "@/lib/homepage";
import { useState } from "react";

const Faq = () => {
  const [visibleQuestion, setVisibleQuestion] = useState(faq[0].question);
  return (
    <section className='customer !border-none'>
      <h2 className='!text-start !text-[#331]'>FAQ`S</h2>
      <ul className='max-w-[800px]'>
        {faq.map((item, i) => (
          <FaqItem
            key={i}
            {...item}
            onClick={() =>
              setVisibleQuestion((prev) =>
                prev === item.question ? "" : item.question
              )
            }
            visibleQuestion={visibleQuestion}
          />
        ))}
      </ul>
    </section>
  );
};

export default Faq;
