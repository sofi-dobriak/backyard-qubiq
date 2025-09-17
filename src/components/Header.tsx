import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1279 });

  return (
    <header className='flex items-center justify-between xl:justify-normal fixed top-[24px] left-[50%] translate-x-[-50%] w-full max-w-[320px] md:max-w-[696px] xl:max-w-[1100px] z-1000'>
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

      {isMobile && (
        <button
          type='button'
          aria-label='Button for open mobile menu'
          className='py-[14px] px-[12px] bg-[#f6f7f8] border border-[rgba(222,222,227,0.45)] rounded-xl'
        >
          <svg width={15} height={12}>
            <use href='../icons.svg#icon-burger' className='stroke-[#525352]'></use>
          </svg>
        </button>
      )}

      {!isMobile && (
        <>
          <nav className='flex items-center gap-[50px]'>
            <ul className='flex items-center gap-[8px] w-full max-w-[388px] bg-[#f2f3f5] rounded-full border border-[rgba(225,225,226,0.46)] px-[3px] h-[33px] xl:max-w-[459px]'>
              <li>
                <a
                  href='../../index.html'
                  className='text-[#fbfbfc] px-[10px] py-[8px] bg-[#303030] rounded-full'
                >
                  Home
                </a>
              </li>
              <li>
                <a href='#about' className='text-[#aeb0b1]'>
                  About
                </a>
              </li>
              <li>
                <a href='#how-it-works' className='text-[#aeb0b1]'>
                  How it works
                </a>
              </li>
              <li>
                <a href='#token-design' className='text-[#aeb0b1]'>
                  Token design
                </a>
              </li>
              <li>
                <a href='#yard-flywheel' className='text-[#aeb0b1]'>
                  YARD flywheel
                </a>
              </li>
            </ul>
          </nav>

          {isTablet && (
            <button
              type='button'
              aria-label='Button for connect'
              className='bg-[#303030] text-[#fbfbfc] rounded-full min-w-[75px] h-[30px] flex items-center justify-center'
            >
              Connect
            </button>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
