import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Link href='/#ourServices' className='default'>
      <header
        className='w-screen relative md:max-h-auto'
        style={{
          height: "calc(100vw / 1.78)",
        }}>
        <Image priority src='/images/hero.webp' alt='Hero image' fill />
      </header>
    </Link>
  );
};

export default Header;
