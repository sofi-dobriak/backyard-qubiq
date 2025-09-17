import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

const HeroButtons = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <ul className='flex items-center flex-wrap gap-[8px] md:gap-[20px]'>
      <li>
        <button
          type='button'
          aria-label='Button for join whitelist'
          className={clsx(
            'font-semibold leading-[1.4] tracking-wide text-[#f7f7f7] bg-[#2d2d2d] rounded-[38px] w-full min-w-[164px] h-[58px] md:min-w-[330px] cursor-pointer hover:text-[#d1d1d2] hover:bg-[#3b3b3b] focus:text-[#595959] focus:bg-[#2d2d2d]'
          )}
          style={{
            filter: 'contrast(1.1) brightness(0.95)',
            backgroundImage: `url('../images/noise-dark.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
          }}
        >
          Join Whitelist
        </button>
      </li>

      <li>
        <button
          type='button'
          aria-label='Button for learn more'
          className={clsx(
            'flex items-center justify-center gap-[6px] font-semibold leading-[1.4] tracking-wide bg-[#e6e8ec] rounded-[38px] w-full min-w-[144px] h-[58px] md:min-w-[208px] cursor-pointer hover:text-[rgba(46,46,46,0.75)] hover:bg-[#f8fbff] focus:text-[#2e2e2e] focus:bg-[#abacaf]'
          )}
          style={{
            filter: 'contrast(1.1) brightness(0.95)',
            backgroundImage: `url('../images/noise-light.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
          }}
        >
          {isMobile ? 'Learn more' : 'Read Docs'}
          {isMobile && (
            <svg width={12} height={12} className='stroke-[#2e2e2e]'>
              <use href='../icons.svg#icon-arrow'></use>
            </svg>
          )}
        </button>
      </li>
    </ul>
  );
};

export default HeroButtons;
