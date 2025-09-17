import { useMediaQuery } from 'react-responsive';
import Container from '../Container';
import data from '../../data.json';
import ListItem from './ListItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './CustomPagination.css';

const About = () => {
  const isTablet = useMediaQuery({ maxWidth: 1279 });

  return (
    <section className='mb-[65px] md:mb-[126px] xl:mb-[146px] 2xl:mb-[131px]' id='about'>
      <Container>
        <h2 className='font-bold text-[28px] md:text-[42px] 2xl:text-[48px] leading-[1.1] mb-[40px] md:mb-[36px] xl:mb-[20px]'>
          What is Backyard?
        </h2>

        {isTablet ? (
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            spaceBetween={20}
            slidesPerView={1}
            className='mb-[20px] md:mb-[27px] xl:mb-0'
          >
            {data.map(item => (
              <SwiperSlide key={item.id}>
                <ListItem {...item} />
              </SwiperSlide>
            ))}
            <div className='custom-pagination'></div>
          </Swiper>
        ) : (
          <ul className='mb-[20px] md:mb-[27px] xl:mb-0 xl:flex xl:items-center xl:justify-between'>
            {data.map(item => (
              <ListItem key={item.id} {...item} />
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default About;
