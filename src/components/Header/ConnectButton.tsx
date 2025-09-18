import clsx from 'clsx';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const ConnectButton = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isConnectLinkOpen, setIsConnectLinkOpen] = useState(false);
  const [isConnectButtonVisible, setIsConnectButtonVisible] = useState(true);
  const [isConnectLinkCopy, setIsConnectLinkCopy] = useState(false);

  const handleOpenConnectLink = () => {
    setIsConnectLinkOpen(true);
    setIsConnectButtonVisible(false);
  };

  const handleCopyConnectLink = () => setIsConnectLinkCopy(true);

  return (
    <>
      {isConnectButtonVisible && (
        <button
          onClick={handleOpenConnectLink}
          type='button'
          aria-label='Button for open link for the connection'
          className={clsx(
            'konnect',
            'font-medium text-[13px] text-center text-[#e8e9ed] border border-[#ebebed] rounded-full w-full  bg-[#303030] cursor-pointer hover:text-[#d1d1d2] hover:bg-[#3b3b3b] focus:text-[#595959] focus:bg-[#2d2d2d]',
            isMobile ? 'max-w-[148px] h-[40px]' : 'max-w-[75px]  h-[31px]'
          )}
        >
          Connect
        </button>
      )}

      {isConnectLinkOpen && (
        <div
          className={clsx(
            'border border-[#ebebed] bg-[#fbfbfc] flex items-center gap-[18px] justify-end w-full px-[3px] rounded-full',
            isMobile ? ' max-w-[157px] h-[40px]' : 'max-w-[136px] h-[40px]'
          )}
        >
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
            className={clsx(
              'konnect',
              'group bg-[rgba(196,196,196,0.21)] rounded-full p-[8px] cursor-pointer hover:bg-[rgba(145,145,145,0.21)] focus:bg-[rgba(145,145,145,0.36)]'
            )}
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
    </>
  );
};

export default ConnectButton;
