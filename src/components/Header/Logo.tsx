import { useMediaQuery } from 'react-responsive';

const Logo = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <a
      href='../../index.html'
      className='flex gap-[8px] items-center text-base text-[rgba(51,51,51,0.95)] xl:mr-[230px]'
    >
      <img
        src={isMobile ? '../images/mob-logo.png' : '../images/tab-logo.png'}
        width={isMobile ? 21 : 26}
        height={isMobile ? 21 : 26}
        alt='Logo'
      />
      Backyard
    </a>
  );
};

export default Logo;
