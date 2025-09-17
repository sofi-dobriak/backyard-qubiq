import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from './Logo';
import BurgerButton from './BurgerButton';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import ConnectButton from './ConnectButton';

const Header = () => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  const handleOpenMobile = () => {
    setMobileIsOpen(true);
  };

  const handleCloseMobile = () => {
    setMobileIsOpen(false);
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1279 });

  return (
    <header className='flex items-center justify-between xl:justify-normal fixed top-[24px] left-[50%] translate-x-[-50%] w-full max-w-[320px] md:max-w-[696px] xl:max-w-[1100px] z-1000'>
      <Logo />

      {isMobile && (
        <div className='relative'>
          <BurgerButton
            mobileIsOpen={mobileIsOpen}
            closeMobile={handleCloseMobile}
            openMobile={handleOpenMobile}
          />
          {mobileIsOpen && <MobileMenu closeMobile={handleCloseMobile} />}
        </div>
      )}

      {!isMobile && (
        <>
          <Navigation />
          {isTablet && <ConnectButton />}
        </>
      )}
    </header>
  );
};

export default Header;
