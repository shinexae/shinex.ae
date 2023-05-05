import { whyUsList } from "@/lib/homepage";
import IconElement from "../IconElement";

const WhyUs = () => {
  return (
    <section className='why-us grid gap-3'>
      <h2>WHY CHOOSE US</h2>
      <div className='boxes text-center flex justify-evenly flex-wrap gap-6'>
        {whyUsList.map((elem, index) => (
          <IconElement key={index} {...elem} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
