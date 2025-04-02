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

  @media (max-width: 768px) {
    padding: 4rem 1rem 1rem;
  }
`;

const HeroHeading = styled(motion.h1)`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 4rem;
  max-width: 800px;
  line-height: 1.2;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
    margin-bottom: 3rem;
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    white-space: normal;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 4rem;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    gap: 2rem;
    padding: 0 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  aspect-ratio: 3/4;
  width: 100%;
  border-radius: 8px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    max-width: 400px;
    margin: 0 auto;
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
        Premium tailored apparel
        <br />
        crafted for professionals.
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