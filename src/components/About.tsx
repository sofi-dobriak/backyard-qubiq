import { useMediaQuery } from 'react-responsive';
import Container from './Container';
import clsx from 'clsx';

const About = () => {
  const isTablet = useMediaQuery({ maxWidth: 1279 });

  return (
    <section className='mb-[65px] md:mb-[126px] xl:mb-[146px] 2xl:mb-[131px]' id='about'>
      <Container>
        <h2 className='font-bold text-[28px] md:text-[42px] 2xl:text-[48px] leading-[1.1] mb-[40px] md:mb-[36px] xl:mb-[20px]'>
          What is Backyard?
        </h2>

        <ul className='mb-[20px] md:mb-[27px] xl:mb-0 xl:flex xl:items-center xl:justify-between'>
          <li className='md:flex flex-row-reverse items-center justify-between xl:block'>
            <picture>
              <source
                srcSet='../images/what-is-backyard/aggregator-big.webp 1x, ../images/what-is-backyard/aggregator-big@2x.webp 2x'
                type='image/webp'
                media='(min-width:768)'
              />
              <source
                srcSet='../images/what-is-backyard/aggregator-big.png 1x, ../images/what-is-backyard/aggregator-big@2x.png 2x'
                type='image/png'
                media='(min-width:768)'
              />

              <source
                srcSet='../images/what-is-backyard/aggregator-small.webp 1x, ../images/what-is-backyard/aggregator-small@2x.webp 2x'
                type='image/webp'
                media='(max-width:767)'
              />
              <source
                srcSet='../images/what-is-backyard/aggregator-small.png 1x, ../images/what-is-backyard/aggregator-small@2x.png 2x'
                type='image/png'
                media='(max-width:767)'
              />
              <img
                src='../images/what-is-backyard/aggregator-small.png'
                alt='An image for item about aggregator'
                className='h-auto w-full max-w-[179px] md:max-w-[245px] xl:max-w-[179px] m-auto relative z-[-1]'
              />
            </picture>

            <div className='mt-[-24px] md:mt-0 xl:mt-[-20px]'>
              <div className='flex items-center gap-[34px] md:gap-[72px] xl:gap-[34px] 2xl:gap-[59px] mb-[15px] p-[12px] bg-[#f4f6f7] rounded-[45px] w-full max-w-[310px] md:max-w-[388px] xl:max-w-[320px] 2xl:max-w-[340px]'>
                <p
                  className={clsx(
                    'archivo',
                    'font-bold text-[15px] leading-[1.4] text-[#fbfbfc] bg-[#2d322f] rounded-full w-[33px] h-[33px] flex items-center justify-center'
                  )}
                >
                  1
                </p>
                <h3 className='text-[20px]'>Yield Aggregator</h3>
              </div>

              <div className='rounded-[31px] bg-[#f4f6f7] px-[32px] py-[30px] w-full max-w-[310px] md:max-w-[388px] xl:max-w-[320px] 2xl:max-w-[340px]'>
                <p
                  className={clsx(
                    'archivo',
                    'font-extrabold text-[18px] 2xl:text-[20px] text-[#2d322f] mb-[12px]'
                  )}
                >
                  One-click yield aggregation
                </p>
                <p className='text-[14px] text-[#787878] leading-[1.3]'>
                  Choose multiple stablecoin strategies, diversify in seconds, and optimize your
                  yield without complexity
                </p>
              </div>
            </div>
          </li>

          {!isTablet && (
            <>
              <li>
                <picture>
                  <source
                    srcSet='../images/what-is-backyard/stablecoin-big.webp 1x, ../images/what-is-backyard/stablecoin-big@2x.webp 2x'
                    type='image/webp'
                    media='(min-width:768)'
                  />
                  <source
                    srcSet='../images/what-is-backyard/stablecoin-big.png 1x, ../images/what-is-backyard/stablecoin-big@2x.png 2x'
                    type='image/png'
                    media='(min-width:768)'
                  />

                  <source
                    srcSet='../images/what-is-backyard/stablecoin-small.webp 1x, ../images/what-is-backyard/stablecoin-small@2x.webp 2x'
                    type='image/webp'
                    media='(max-width:767)'
                  />
                  <source
                    srcSet='../images/what-is-backyard/stablecoin-small.png 1x, ../images/what-is-backyard/stablecoin-small@2x.png 2x'
                    type='image/png'
                    media='(max-width:767)'
                  />
                  <img
                    src='../images/what-is-backyard/stablecoin-small.png'
                    alt='An image for item about stablecoin'
                    className='h-auto w-full max-w-[179px] md:max-w-[245px] xl:max-w-[179px] m-auto relative z-[-1]'
                  />
                </picture>

                <div className='mt-[-24px] md:mt-0 xl:mt-[-20px]'>
                  <div className='flex items-center gap-[34px] md:gap-[72px] xl:gap-[34px] 2xl:gap-[59px] mb-[15px] p-[12px] bg-[#f4f6f7] rounded-[45px] w-full max-w-[310px] md:max-w-[388px] xl:max-w-[320px] 2xl:max-w-[340px]'>
                    <p
                      className={clsx(
                        'archivo',
                        'font-bold text-[15px] leading-[1.4] text-[#fbfbfc] bg-[#2d322f] rounded-full w-[33px] h-[33px] flex items-center justify-center'
                      )}
                    >
                      3
                    </p>
                    <h3 className='text-[20px]'>Boost DeFi Liquidity</h3>
                  </div>

                  <div className='rounded-[31px] bg-[#f4f6f7] px-[32px] py-[30px] w-full max-w-[310px] md:max-w-[388px] xl:max-w-[320px] 2xl:max-w-[340px]'>
                    <p
                      className={clsx(
                        'archivo',
                        'font-extrabold text-[18px] 2xl:text-[20px] text-[#2d322f] mb-[12px]'
                      )}
                    >
                      Boost protocols, earn more
                    </p>
                    <p className='text-[14px] text-[#787878] leading-[1.3]'>
                      Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your
                      rewards.
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <picture>
                  <source
                    srcSet='../images/what-is-backyard/liquidity-big.webp 1x, ../images/what-is-backyard/liquidity-big@2x.webp 2x'
                    type='image/webp'
                    media='(min-width:768)'
                  />
                  <source
                    srcSet='../images/what-is-backyard/liquidity-big.png 1x, ../images/what-is-backyard/liquidity-big@2x.png 2x'
                    type='image/png'
                    media='(min-width:768)'
                  />

                  <source
                    srcSet='../images/what-is-backyard/liquidity-small.webp 1x, ../images/what-is-backyard/liquidity-small@2x.webp 2x'
                    type='image/webp'
                    media='(max-width:767)'
                  />
                  <source
                    srcSet='../images/what-is-backyard/liquidity-small.png 1x, ../images/what-is-backyard/liquidity-small@2x.png 2x'
                    type='image/png'
                    media='(max-width:767)'
                  />
                  <img
                    src='../images/what-is-backyard/liquidity-small.png'
                    alt='An image for item about liquidity'
                    className='h-auto w-full max-w-[179px] md:max-w-[245px] xl:max-w-[179px] m-auto relative z-[-1]'
                  />
                </picture>

                <div className='mt-[-24px] md:mt-0 xl:mt-[-20px]'>
                  <div className='flex items-center gap-[34px] md:gap-[72px] xl:gap-[34px] 2xl:gap-[59px] mb-[15px] p-[12px] bg-[#f4f6f7] rounded-[45px] w-full max-w-[310px] md:max-w-[388px] xl:max-w-[320px] 2xl:max-w-[340px]'>
                    <p
                      className={clsx(
                        'archivo',
                        'font-bold text-[15px] leading-[1.4] text-[#fbfbfc] bg-[#2d322f] rounded-full w-[33px] h-[33px] flex items-center justify-center'
                      )}
                    >
                      1
                    </p>
                    <h3 className='text-[20px]'>Yield Aggregator</h3>
                  </div>

                  <div className='rounded-[31px] bg-[#f4f6f7] px-[32px] py-[30px] w-full max-w-[310px] md:max-w-[388px] xl:max-w-[320px] 2xl:max-w-[340px]'>
                    <p
                      className={clsx(
                        'archivo',
                        'font-extrabold text-[18px] 2xl:text-[20px] text-[#2d322f] mb-[12px]'
                      )}
                    >
                      One-click yield aggregation
                    </p>
                    <p className='text-[14px] text-[#787878] leading-[1.3]'>
                      Choose multiple stablecoin strategies, diversify in seconds, and optimize your
                      yield without complexity
                    </p>
                  </div>
                </div>
              </li>
            </>
          )}
        </ul>

        {isTablet && (
          <ul className='flex items-center gap-[6px]'>
            <li>
              <svg width={28} height={4} className='fill-[#5d625f]'>
                <use href='../icons.svg#icon-pagination'></use>
              </svg>
            </li>
            <li>
              <svg width={28} height={4} className='fill-[#979797] opacity-[0.19]'>
                <use href='../icons.svg#icon-pagination'></use>
              </svg>
            </li>
            <li>
              <svg width={28} height={4} className='fill-[#979797] opacity-[0.19]'>
                <use href='../icons.svg#icon-pagination'></use>
              </svg>
            </li>
          </ul>
        )}
      </Container>
    </section>
  );
};

export default About;
