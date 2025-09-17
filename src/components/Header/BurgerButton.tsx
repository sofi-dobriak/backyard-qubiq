import clsx from 'clsx';

interface BurgerButtonProps {
  mobileIsOpen: boolean;
  openMobile: () => void;
  closeMobile: () => void;
}

const BurgerButton = ({ mobileIsOpen, openMobile, closeMobile }: BurgerButtonProps) => {
  return (
    <button
      onClick={mobileIsOpen ? closeMobile : openMobile}
      type='button'
      aria-label='Button for open mobile menu'
      className={clsx(
        'py-[14px] px-[12px] bg-[#f6f7f8] border border-[rgba(222,222,227,0.45)] rounded-xl cursor-pointer hover:bg-[rgba(145,145,145,0.21)] focus:bg-[rgba(145,145,145,0.36)]',
        mobileIsOpen ? 'bg-[rgba(236,236,240,0.3)]' : 'bg-[#f6f7f8]'
      )}
    >
      {mobileIsOpen ? (
        <svg width={15} height={12}>
          <use href='../icons.svg#icon-close' className='stroke-[#525352]'></use>
        </svg>
      ) : (
        <svg width={15} height={12}>
          <use href='../icons.svg#icon-burger' className='stroke-[#525352]'></use>
        </svg>
      )}
    </button>
  );
};

export default BurgerButton;
