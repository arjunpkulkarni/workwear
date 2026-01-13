import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const WhyChooseUsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BenefitCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
`;

const BenefitContent = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
  line-height: 1.3;
`;

const benefits = [
  {
    icon: "💰",
    title: "Better pricing than big-name vendors"
  },
  {
    icon: "⚡",
    title: "Fast turnaround, usually 3 to 7 business days"
  },
  {
    icon: "💬",
    title: "Direct communication with the owner"
  },
  {
    icon: "✨",
    title: "Simple and transparent process"
  }
];

const WhyChooseUs = () => {
  return (
    <WhyChooseUsSection>
      <SectionTitle>Why People Choose Us</SectionTitle>
      <BenefitsGrid>
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <IconContainer>
              {benefit.icon}
            </IconContainer>
            <BenefitContent>
              <BenefitTitle>{benefit.title}</BenefitTitle>
            </BenefitContent>
          </BenefitCard>
        ))}
      </BenefitsGrid>
    </WhyChooseUsSection>
  );
};

export default WhyChooseUs;