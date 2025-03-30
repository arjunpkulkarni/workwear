import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';


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
  white-space: nowrap;
  line-height: 1.2;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 4rem;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 0 2rem;
  }
    
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  aspect-ratio: 3/4;
  width: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const heroImages = [
  image1,
  image2,
  image3,  
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