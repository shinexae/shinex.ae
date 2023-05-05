import Image from "next/image";

const SocialLink = ({ name, image, url }: LinkProps) => (
  <a
    href={url}
    target='_blank'
    aria-label={name}
    className='relative w-[60px] h-[60px] rounded-full overflow-hidden shadow-lg hover:scale-[1.05]'>
    <Image fill src={image} alt={name} />
  </a>
);

export default SocialLink;
