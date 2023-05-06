import { useState } from "react";
import PackagesList from "../PackagesList";
import ServiceElement from "../ServiceElement";
import { services } from "@/lib/homepage";

const OurServices = () => {
  const [servicePackages, setServicePackages] = useState<any>({});
  return (
    <section className='figure' id='ourServices'>
      <h2>Our Services</h2>
      <div className='container'>
        {services.map((elem, index) => (
          <ServiceElement
            key={index}
            {...elem}
            setPackage={setServicePackages}
          />
        ))}
      </div>
      {servicePackages.packages ? (
        <PackagesList
          title={servicePackages.title}
          packages={servicePackages.packages}
          setPackage={setServicePackages}
        />
      ) : (
        <></>
      )}
    </section>
  );
};

export default OurServices;
