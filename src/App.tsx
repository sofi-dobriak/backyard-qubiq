import Container from './components/Container';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MobileMenu from './components/MobileMenu';
import WhatIsBackyardSection from './components/WhatIsBackyardSection';

function App() {
  return (
    <>
      <Container>
        <Header />
        <HeroSection />
        <WhatIsBackyardSection />
      </Container>

      <MobileMenu />
    </>
  );
}

export default App;
