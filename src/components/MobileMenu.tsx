import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface MobileMenuProps {
  closeMobile: () => void;
}

const MobileMenu = ({ closeMobile }: MobileMenuProps) => {
  const [isConnectLinkOpen, setIsConnectLinkOpen] = useState(false);
  const [isConnectButtonVisible, setIsConnectButtonVisible] = useState(true);
  const [isConnectLinkCopy, setIsConnectLinkCopy] = useState(false);

  const handleOpenConnectLink = () => {
    setIsConnectLinkOpen(true);
    setIsConnectButtonVisible(false);
  };

  const handleCopyConnectLink = () => setIsConnectLinkCopy(true);

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
        {isConnectButtonVisible && (
          <button
            onClick={handleOpenConnectLink}
            type='button'
            aria-label='Button for open link for the connection'
            className={clsx(
              'konnect',
              'font-medium text-[13px] text-center text-[#e8e9ed] border border-[#ebebed] rounded-full w-full max-w-[148px] h-[40px] bg-[#303030] cursor-pointer'
            )}
          >
            Connect
          </button>
        )}

        {isConnectLinkOpen && (
          <div className='border border-[#ebebed] bg-[#fbfbfc] flex items-center gap-[18px] justify-end w-full max-w-[157px] h-[40px] px-[3px] rounded-full'>
            <p
              className={clsx(
                'konnect',
                'font-medium text-[13px]',
                isConnectLinkCopy ? 'text-[#acacad]' : 'text-[#303030]'
              )}
            >
              0x233...ger
            </p>
            <button
              onClick={handleCopyConnectLink}
              className='group bg-[rgba(196,196,196,0.21)] rounded-full p-[8px] cursor-pointer hover:bg-[rgba(145,145,145,0.21)] focus:bg-[rgba(145,145,145,0.36)]'
            >
              <svg
                width={17}
                height={17}
                className='fill-[rgba(131,131,131,0.58)] group-hover:fill-[#303030] group-focus:fill-[#303030]'
              >
                <use href='../icons.svg#icon-trigger'></use>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default MobileMenu;
