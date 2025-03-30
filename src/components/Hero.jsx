import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  min-height: 100vh;
  background-color: #fff;
  color: black;
  padding: 6rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  align-items: center;
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 4rem;
  max-width: 800px;
  line-height: 1.2;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  aspect-ratio: 3/4;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const heroImages = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg'
];

const Hero = () => {
  return (
    <HeroContainer>
      <HeroHeading
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        High-quality custom apparel
        <br />
        for the best in business.
      </HeroHeading>

      <ImageGrid>
        {heroImages.map((image, index) => (
          <ImageContainer
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={image} alt={`Custom apparel ${index + 1}`} />
          </ImageContainer>
        ))}
      </ImageGrid>
    </HeroContainer>
  );
};

export default Hero; 