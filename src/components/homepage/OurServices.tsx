import { useState } from "react";
import PackagesList from "../PackagesList";
import ServiceElement from "../ServiceElement";
import { services } from "@/lib/homepage";

const OurServices = () => {
  return (
    <section className='figure' id='ourServices'>
      <h2>Our Services</h2>
      <div className='container !max-w-[100vw] px-2'>
        {services.map((elem, index) => (
          <ServiceElement key={index} {...elem} />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
