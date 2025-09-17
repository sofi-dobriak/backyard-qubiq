import clsx from 'clsx';

interface Image {
  small: {
    webp: string;
    png: string;
  };
  big: {
    webp: string;
    png: string;
  };
}

interface ListItemProps {
  id: number;
  title: string;
  description_title: string;
  description: string;
  image: Image;
}

const ListItem = ({ id, title, description_title, description, image }: ListItemProps) => {
  return (
    <li className='md:flex flex-row-reverse items-center justify-between xl:block'>
      <picture>
        <source
          srcSet={`${image.big.webp} 1x, ${image.big.webp}@2x 2x`}
          type='image/webp'
          media='(min-width:768)'
        />
        <source
          srcSet={`${image.big.png} 1x, ${image.big.png}@2x 2x`}
          type='image/png'
          media='(min-width:768)'
        />

        <source
          srcSet={`${image.small.webp} 1x, ${image.small.webp}@2x 2x`}
          type='image/webp'
          media='(max-width:767)'
        />
        <source
          srcSet={`${image.small.png} 1x, ${image.small.png}@2x 2x`}
          type='image/png'
          media='(max-width:767)'
        />
        <img
          src={image.small.png}
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
            {id}
          </p>
          <h3 className='text-[20px]'>{title}</h3>
        </div>

        <div className='rounded-[31px] bg-[#f4f6f7] px-[32px] py-[30px] w-full max-w-[310px] md:max-w-[388px] xl:max-w-[320px] 2xl:max-w-[340px]'>
          <p
            className={clsx(
              'archivo',
              'font-extrabold text-[18px] 2xl:text-[20px] text-[#2d322f] mb-[12px]'
            )}
          >
            {description_title}
          </p>
          <p className='text-[14px] text-[#787878] leading-[1.3]'>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
