import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import shopInterior from '../assets/shop-interior.png';

const OurShopSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ShopImageContainer = styled(motion.div)`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
`;

const ShopImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: cover;
  display: block;
`;

const LocationInfo = styled(motion.div)`
  text-align: center;
  margin-top: 2rem;
`;

const LocationText = styled.p`
  font-size: 1.3rem;
  color: #555;
  margin: 0;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const OurShop = () => {
  return (
    <OurShopSection>
      <ShopContainer>
        <SectionTitle>Our Shop:</SectionTitle>
        
        <ShopImageContainer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ShopImage 
            src={shopInterior} 
            alt="Our shop interior showing printing equipment and workspace" 
          />
          
         
        </ShopImageContainer>

        <LocationInfo
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <LocationText>
            Located 168 Irving Ave Suite 204-E, Port Chester, NY 10573
          </LocationText>
        </LocationInfo>
      </ShopContainer>
    </OurShopSection>
  );
};

export default OurShop;