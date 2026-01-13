import React from 'react';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import OurShop from './components/OurShop';
import PricingGuide from './components/PricingGuide';
import ContactUs from './components/ContactUs';
import Testimonials from './components/Testimonials';

const MainContainer = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <OurShop />
      <PricingGuide />
      <ContactUs />
      <Testimonials />
    </MainContainer>
  );
}

export default App;
