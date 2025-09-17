import { useMediaQuery } from 'react-responsive';
import HeroImages from './HeroImages';
import HeroButtons from './HeroButtons';

const HeroContent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-[58px] md:text-[48px] xl:text-[72px] leading-[1.1] mb-[14px] md:mb-[16px] md:max-w-[506px] xl:max-w-[740px]'>
          The yield-backed stablecoin protocol boosting {!isMobile && 'DeFi'}
          {isMobile && (
            <span className='flex gap-[16px] md:block md:gap-0'>
              DeFi <HeroImages isMobile={true} />
            </span>
          )}
          liquidity
        </h1>

        {!isMobile && <HeroImages />}
      </div>

      <p className='text-[rgba(38,38,38,0.55)] mb-[38px] md:mb-[33px] xl:mb-[70px]text-[20px] md:text-[16px] xl:text-[20px]'>
        Keep your yield working for you — we keep your liquidity accessible
      </p>

      <HeroButtons />
    </>
  );
};

export default HeroContent;
