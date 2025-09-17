import { useMediaQuery } from 'react-responsive';
import Container from './Container';

const HeroSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section
      className='
    pt-[84px] md:pt-[126px] xl:pt-[128px]
    pb-[68px] md:pb-[120px] xl:pb-[170px]
    bg-[linear-gradient(rgba(255,255,255,0.9),rgba(239,239,242,1)),url("../images/hero/mob-hero-bg.png")]
    md:bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)),url("../images/hero/tab-hero-bg.png")]
    xl:bg-[linear-gradient(rgba(255,255,255,0.99),rgba(239,239,242,0.5)),url("../images/hero/desk-hero-bg.png")]
    2xl:bg-[linear-gradient(rgba(255,255,255,0.9),rgba(239,239,242,1)),url("../images/hero/large-hero-bg.png")]
    bg-cover bg-center'
    >
      <Container>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold text-[58px] md:text-[48px] xl:text-[72px] leading-[1.1] mb-[14px] md:mb-[16px] md:max-w-[506px] xl:max-w-[740px]'>
            The yield-backed stablecoin protocol boosting {!isMobile && 'DeFi'}
            {isMobile && (
              <span className='flex gap-[16px] md:block md:gap-0'>
                DeFi
                <picture>
                  <source
                    srcSet='../images/hero/mob-hero.webp 1x, ../images/hero/mob-hero@2x.webp 2x'
                    type='image/webp'
                  />
                  <source
                    srcSet='../images/hero/mob-hero.png 1x, ../images/hero/mob-hero@2x.png 2x'
                    type='image/png'
                  />
                  <img
                    src='../images/hero/mob-hero.png'
                    alt='A mobile hero image'
                    width={59}
                    height={59}
                  />
                </picture>
              </span>
            )}
            liquidity
          </h1>

          {!isMobile && (
            <picture>
              <source
                srcSet='../images/hero/large-hero.webp 1x, ../images/hero/large-hero@2x.webp 2x'
                type='image/webp'
                media='(min-width:1920px)'
              />
              <source
                srcSet='../images/hero/large-hero.png 1x, ../images/hero/large-hero@2x.png 2x'
                media='(min-width:1920px)'
                type='image/png'
              />

              <source
                srcSet='../images/hero/desk-hero.webp 1x, ../images/hero/desk-hero@2x.webp 2x'
                type='image/webp'
                media='(min-width:1280px)'
              />
              <source
                srcSet='../images/hero/desk-hero.png 1x, ../images/hero/desk-hero@2x.png 2x'
                media='(min-width:1280px)'
                type='image/png'
              />

              <source
                srcSet='../images/hero/tab-hero.webp 1x, ../images/hero/tab-hero@2x.webp 2x'
                type='image/webp'
                media='(min-width:768px)'
              />
              <source
                srcSet='../images/hero/tab-hero.png 1x, ../images/hero/tab-hero@2x.png 2x'
                media='(min-width:768px)'
                type='image/png'
              />
              <img
                src='../images/hero/tab-hero.png'
                alt='A hero image'
                className='h-auto w-full md:max-w-[152px] xl:max-w-[212px] 2xl:max-w-[276px]'
              />
            </picture>
          )}
        </div>

        <p className='text-[rgba(38,38,38,0.55)] mb-[38px] md:mb-[33px] xl:mb-[70px]text-[20px] md:text-[16px] xl:text-[20px]'>
          Keep your yield working for you — we keep your liquidity accessible
        </p>

        <ul className='flex items-center flex-wrap gap-[8px] md:gap-[20px]'>
          <li>
            <button
              type='button'
              aria-label='Button for join whitelist'
              className='font-semibold leading-[1.4] tracking-wide text-[#f7f7f7] bg-[#2d2d2d] rounded-[38px] w-full min-w-[164px] h-[58px] md:min-w-[330px]'
            >
              Join Whitelist
            </button>
          </li>

          <li>
            <button
              type='button'
              aria-label='Button for learn more'
              className='flex items-center justify-center gap-[6px] font-semibold  leading-[1.4] tracking-wide bg-[#e6e8ec] rounded-[38px] w-full min-w-[144px] h-[58px] md:min-w-[208px]'
            >
              {isMobile && 'Learn more'}

              {isMobile && (
                <svg width={12} height={12} className='stroke-[#2e2e2e]'>
                  <use href='../icons.svg#icon-arrow'></use>
                </svg>
              )}

              {!isMobile && 'Read Docs'}
            </button>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default HeroSection;
