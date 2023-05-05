import info from "@/lib/companyInfo";
import Image from "next/image";

const IconElement = ({
  icon,
  title,
  description,
  cta,
  hStyle,
  roundedIcon,
}: IconInterface) => (
  <div className='flex flex-col items-center gap-4 '>
    <Image
      src={icon}
      width={48}
      height={48}
      alt={`${title} icon`}
      className={
        roundedIcon
          ? "p-3 border-[1.5px] border-white rounded-full overflow-hidden"
          : ""
      }
    />
    <p className={`text-xl font-bold m-0 ${hStyle}`}>{title}</p>
    {description ? (
      <p className=' text-sm opacity-80 text-center'>{description}</p>
    ) : null}
    {cta ? (
      <a href={info.social.whatsapp} target='_blank' className='br uppercase'>
        Book Now
      </a>
    ) : null}
  </div>
);
export default IconElement;
