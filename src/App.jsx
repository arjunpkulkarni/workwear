import React from 'react';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

const MainContainer = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Hero />
      <Services />
      <Footer />      
    </MainContainer>
  );
}

export default App;
