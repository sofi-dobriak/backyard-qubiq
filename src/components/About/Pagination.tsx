const Pagination = () => {
  return (
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
  );
};

export default Pagination;
