import Container from '../Container';
import HeroContent from './HeroContent';

const HeroSection = () => {
  return (
    <section
      id='home'
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
        <HeroContent />
      </Container>
    </section>
  );
};

export default HeroSection;
