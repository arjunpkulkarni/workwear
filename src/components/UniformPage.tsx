import React from 'react';
import styled from '@emotion/styled';

import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
import pic7 from '../assets/pic7.png'
import pic8 from '../assets/pic8.png'
import pic9 from '../assets/pic9.png'

const Section = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

const UniformsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const UniformCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const UniformImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const UniformInfo = styled.div`
  padding: 1.5rem;
`;

const UniformTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
`;

const UniformDescription = styled.p`
  color: black;
  font-size: 1rem;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
`;

const UniformPage = () => {
  const uniforms = [
    {
      id: 1,
      title: 'Polo Shirts',
      description: 'Professional polo shirts available in various colors and sizes. Perfect for corporate environments.',
      image: pic1,
    },
    {
      id: 2,
      title: 'Hi-Vis Vests',
      description: 'High-visibility safety vests for construction and outdoor work. Available in multiple sizes.',
      image: pic2,
    },
    {
      id: 3,
      title: 'Button-Up Shirts',
      description: 'Classic button-up shirts for a professional look. Available in multiple colors and patterns.',
      image: pic3,
    },
    {
      id: 4,
      title: 'Branded Hats',
      description: 'Custom branded hats to complete your uniform. Available in various styles and colors.',
      image: pic4,
    },
    {
      id: 5,
      title: 'Work Jackets',
      description: 'Durable work jackets for all weather conditions. Available in multiple sizes and colors.',
      image: pic5,
    },
    {
      id: 6,
      title: 'Safety Boots',
      description: 'High-quality safety boots for maximum protection and comfort.',
      image: pic6,
    },
    {
      id: 7,
      title: 'Work Pants',
      description: 'Durable work pants designed for comfort and functionality.',
      image: pic7,
    },
    {
      id: 8,
      title: 'Safety Gloves',
      description: 'Protective gloves for various work environments.',
      image: pic8,
    },
    {
      id: 9,
      title: 'Safety Glasses',
      description: 'Protective eyewear for workplace safety.',
      image: pic9,
    },
  ];

  return (
    <Section>
      <Title>Staff Uniforms</Title>
      <UniformsGrid>
        {uniforms.map((uniform) => (
          <UniformCard key={uniform.id}>
            <UniformImage src={uniform.image} alt={uniform.title} />
            <UniformInfo>
              <UniformTitle>{uniform.title}</UniformTitle>
              <UniformDescription>{uniform.description}</UniformDescription>
            </UniformInfo>
          </UniformCard>
        ))}
      </UniformsGrid>
    </Section>
  );
};

export default UniformPage;
