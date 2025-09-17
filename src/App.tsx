import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MobileMenu from './components/MobileMenu';
import WhatIsBackyardSection from './components/WhatIsBackyardSection';

function App() {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  const handleOpenMobile = () => {
    setMobileIsOpen(true);
  };

  const handleCloseMobile = () => {
    setMobileIsOpen(false);
  };

  return (
    <>
      <Header
        mobileIsOpen={mobileIsOpen}
        openMobile={handleOpenMobile}
        closeMobile={handleCloseMobile}
      />

      <main>
        <HeroSection />
        <WhatIsBackyardSection />
      </main>

      {mobileIsOpen && <MobileMenu closeMobile={handleCloseMobile} />}
    </>
  );
}

export default App;
