import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const PricingSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const PricingContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PricingItem = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ItemName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const ItemPrice = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #ff6b35;
`;

const SpecialItem = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-bottom: 2rem;
  border: 2px solid #ff6b35;
`;

const SpecialItemText = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin: 0;
  font-weight: 500;
`;

const DisclaimerText = styled(motion.p)`
  font-size: 1.1rem;
  text-align: center;
  color: #ff6b35;
  font-weight: 600;
  margin: 0;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const pricingItems = [
  {
    name: "T-Shirts",
    price: "$15 to $22 each"
  },
  {
    name: "Hoodies",
    price: "$28 to $40 each"
  },
  {
    name: "Crewnecks",
    price: "$26 to $38 each"
  },
  {
    name: "Hats",
    price: "$12 to $20 each"
  }
];

const PricingGuide = () => {
  return (
    <PricingSection>
      <PricingContainer>
        <SectionTitle>Pricing Guide</SectionTitle>
        
        <IntroText>
          Pricing depends on quantity, print method, and design. Most orders fall in these ranges:
        </IntroText>

        <PricingGrid>
          {pricingItems.map((item, index) => (
            <PricingItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ItemName>{item.name}:</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
            </PricingItem>
          ))}
        </PricingGrid>

        <SpecialItem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SpecialItemText>
            Workwear, polos, and jackets: quoted per order
          </SpecialItemText>
        </SpecialItem>

        <DisclaimerText
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          You'll always see pricing before anything goes to print.
        </DisclaimerText>
      </PricingContainer>
    </PricingSection>
  );
};

export default PricingGuide;