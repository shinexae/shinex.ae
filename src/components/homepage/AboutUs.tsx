import { aboutSection } from "@/lib/homepage";
import Image from "next/image";

const AboutUs = () => {
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
        <h2>About Us</h2>
        {aboutSection.paragraphs.map((par, i) => (
          <p key={i} className='pp'>
            {par}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
