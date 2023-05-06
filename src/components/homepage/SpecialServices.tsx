import { specialServicesList } from "@/lib/homepage";
import IconElement from "../IconElement";

const SpecialServices = () => {
  return (
    <section>
      <h2>Special Services</h2>
      <div className='container items-center pt-6 md:pt-10'>
        {specialServicesList.map((elem, index) => (
          <IconElement key={index} {...elem} />
        ))}
      </div>
    </section>
  );
};

export default SpecialServices;
