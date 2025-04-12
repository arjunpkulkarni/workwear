import React from 'react';
import styled from '@emotion/styled';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import QuotePage from './pages/quotePage';
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
      <QuotePage />
      <UniformPage />
      <Footer />      
    </MainContainer>
  );
}

export default App;
