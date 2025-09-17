interface HeroImageProps {
  isMobile?: boolean;
}

const HeroImages = ({ isMobile }: HeroImageProps) => {
  if (isMobile) {
    return (
      <picture>
        <source
          srcSet='../images/hero/mob-hero.webp 1x, ../images/hero/mob-hero@2x.webp 2x'
          type='image/webp'
        />
        <source
          srcSet='../images/hero/mob-hero.png 1x, ../images/hero/mob-hero@2x.png 2x'
          type='image/png'
        />
        <img src='../images/hero/mob-hero.png' alt='A mobile hero image' width={59} height={59} />
      </picture>
    );
  }

  return (
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
  );
};

export default HeroImages;
