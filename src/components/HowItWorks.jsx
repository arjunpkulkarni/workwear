import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HowItWorksSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
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

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StepCard = styled(motion.div)`
  text-align: center;
  padding: 2rem 1rem;
  position: relative;
  
  &:not(:last-child)::after {
    content: '→';
    position: absolute;
    right: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2rem;
    color: #ff6b35;
    font-weight: bold;
    
    @media (max-width: 768px) {
      content: '↓';
      right: 50%;
      transform: translateX(50%);
      top: auto;
      bottom: -1rem;
    }
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  max-width: 280px;
  margin: 0 auto;
`;

const PhoneNumber = styled.span`
  color: #ff6b35;
  font-weight: 600;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const steps = [
  {
    number: 1,
    title: "Send your idea or design",
    description: (
      <>
        Text or send artwork to <PhoneNumber>914-393-2422</PhoneNumber>. Logos, sketches, or reference photos all work.
      </>
    )
  },
  {
    number: 2,
    title: "We send a mockup and quote",
    description: "You'll receive a visual proof with clear pricing."
  },
  {
    number: 3,
    title: "You approve. We print.",
    description: "Once approved, we move straight into production."
  }
];

const HowItWorks = () => {
  return (
    <HowItWorksSection>
      <SectionTitle>How It Works</SectionTitle>
      <StepsContainer>
        {steps.map((step, index) => (
          <StepCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <StepNumber>{step.number}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </StepCard>
        ))}
      </StepsContainer>
    </HowItWorksSection>
  );
};

export default HowItWorks;