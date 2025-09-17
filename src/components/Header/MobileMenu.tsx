import clsx from 'clsx';
import { useEffect } from 'react';
import ConnectButton from './ConnectButton';

interface MobileMenuProps {
  closeMobile: () => void;
}

const MobileMenu = ({ closeMobile }: MobileMenuProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobile();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeMobile]);

  return (
    <div className='absolute top-[46px] right-[0] bg-[#e8e9ed] border border-[#e4e4e9] rounded-[19px] p-[14px] z-999 min-w-[176px]'>
      <nav className='mb-[12px]'>
        <ul className='flex flex-col gap-[8px]'>
          <li>
            <a
              onClick={closeMobile}
              href='../../index.html'
              className={clsx(
                'konnect',
                'font-medium text-[14px] text-[#303030] hover:text-[#303030] focus:text-[#303030]'
              )}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={closeMobile}
              href='#about'
              className={clsx(
                'konnect',
                'font-medium text-[14px] text-[#7a7a7a] hover:text-[#303030] focus:text-[#303030]'
              )}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={closeMobile}
              href='#how-it-works'
              className={clsx(
                'konnect',
                'font-medium text-[14px] text-[#7a7a7a] hover:text-[#303030] focus:text-[#303030]'
              )}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              onClick={closeMobile}
              href='#token-design'
              className={clsx(
                'konnect',
                'font-medium text-[14px] text-[#7a7a7a] hover:text-[#303030] focus:text-[#303030]'
              )}
            >
              Token design
            </a>
          </li>
          <li>
            <a
              onClick={closeMobile}
              href='#yard-flywheel'
              className={clsx(
                'konnect',
                'font-medium text-[14px] text-[#7a7a7a] hover:text-[#303030] focus:text-[#303030]'
              )}
            >
              YARD flywheel
            </a>
          </li>
        </ul>
      </nav>

      <ConnectButton />
    </div>
  );
};

export default MobileMenu;
