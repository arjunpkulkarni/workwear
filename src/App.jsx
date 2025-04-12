import React from 'react';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import GetQuote from './components/GetQuote';
import PriceCalc from './components/PriceCalc';
import Contact from './components/Contact';
import UniformPage from './components/UniformPage';
const MainContainer = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Hero />
      <Services />
      <GetQuote />
      <PriceCalc />
      <Contact />
      <UniformPage />
      <Footer />      
    </MainContainer>
  );
}

export default App;
