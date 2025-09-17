import clsx from 'clsx';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface MobileMenuProps {
  closeMobile: () => void;
}

const MobileMenu = ({ closeMobile }: MobileMenuProps) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeMobile();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobile();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeMobile]);

  return createPortal(
    <div onClick={handleBackdropClick} className='fixed inset-0  bg-[rgba(0,0,0,0.2)]'>
      <div className='absolute top-[70px] right-[20px] bg-[#e8e9ed] border border-[#e4e4e9] rounded-[19px] p-[14px] z-1001 min-w-[176px]'>
        <nav className='mb-[12px]'>
          <ul className='flex flex-col gap-[8px]'>
            <li>
              <a
                onClick={closeMobile}
                href='../../index.html'
                className={clsx('konnect', 'font-medium text-[14px] text-[#303030]')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={closeMobile}
                href='#about'
                className={clsx('konnect', 'font-medium text-[14px] text-[#7a7a7a]')}
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={closeMobile}
                href='#how-it-works'
                className={clsx('konnect', 'font-medium text-[14px] text-[#7a7a7a]')}
              >
                How it works
              </a>
            </li>
            <li>
              <a
                onClick={closeMobile}
                href='#token-design'
                className={clsx('konnect', 'font-medium text-[14px] text-[#7a7a7a]')}
              >
                Token design
              </a>
            </li>
            <li>
              <a
                onClick={closeMobile}
                href='#yard-flywheel'
                className={clsx('konnect', 'font-medium text-[14px] text-[#7a7a7a]')}
              >
                YARD flywheel
              </a>
            </li>
          </ul>
        </nav>
        <button
          type='button'
          aria-label='Button for open link for the connection'
          className={clsx(
            'konnect',
            'font-medium text-[13px] text-center text-[#e8e9ed] border border-[#ebebed] rounded-full w-full max-w-[148px] h-[40px] bg-[#303030]'
          )}
        >
          Connect
        </button>
      </div>
    </div>,
    document.body
  );
};

export default MobileMenu;
