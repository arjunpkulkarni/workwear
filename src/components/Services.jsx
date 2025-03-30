import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 8px;
  
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    z-index: 1;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ServiceContent = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  z-index: 2;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    opacity: 0.9;
  }
`;

const services = [
  {
    title: "Staff Uniforms",
    description: "Clothing customized with your logo and artwork.",
    image: "/service-uniforms.jpg"
  },
  {
    title: "Merchandising",
    description: "Curated gifts with your company's brand",
    image: "/service-merch.jpg"
  },
  {
    title: "Artwork Design",
    description: "On-brand artwork designed to stand out on print.",
    image: "/service-design.jpg"
  }
];

const Services = () => {
  return (
    <ServicesSection>
      <SectionTitle>Our Services</SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceContent>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services; 