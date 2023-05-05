import Image from "next/image";

const Header = () => {
  return (
    <header className='w-screen h-[70vw] md:h-screen relative'>
      <Image priority src='/images/hero.webp' alt='Hero image' fill />
    </header>
  );
};

export default Header;
