import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Link href='/#ourServices' className='default'>
      <header className='w-screen h-[70vw] md:h-screen relative max-h-[70vw] md:max-h-auto'>
        <Image priority src='/images/hero.webp' alt='Hero image' fill />
      </header>
    </Link>
  );
};

export default Header;
