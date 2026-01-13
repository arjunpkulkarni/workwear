import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  color: black;
  font-family: 'Poppins', sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactItem = styled(motion.div)`
  background: #f8f9fa;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35, #ff8c42);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
`;

const ContactLabel = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const ContactLink = styled.a`
  font-size: 1rem;
  color: #ff6b35;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #e55a2b;
    text-decoration: underline;
  }
`;

const ContactText = styled.span`
  font-size: 1rem;
  color: #555;
  font-weight: 500;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactUs = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <SectionTitle>Contact Us</SectionTitle>
        
        <IntroText>
          Ready to start an order or have a question? Reach out directly.
        </IntroText>

        <ContactGrid>
          <ContactItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ContactIcon>📞</ContactIcon>
            <ContactLabel>Phone</ContactLabel>
            <ContactLink href="tel:914-393-2422">914-393-2422</ContactLink>
          </ContactItem>

          <ContactItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactIcon>✉️</ContactIcon>
            <ContactLabel>Email</ContactLabel>
            <ContactLink href="mailto:workwearllc@gmail.com">workwearllc@gmail.com</ContactLink>
          </ContactItem>
        </ContactGrid>

        <SocialGrid>
          <ContactItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ContactIcon>📷</ContactIcon>
            <ContactLabel>Instagram</ContactLabel>
            <ContactLink href="https://instagram.com/gi7nni" target="_blank" rel="noopener noreferrer">
              @gi7nni
            </ContactLink>
          </ContactItem>

          <ContactItem
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactIcon>💼</ContactIcon>
            <ContactLabel>LinkedIn</ContactLabel>
            <ContactLink 
              href="https://www.linkedin.com/in/gianni-ramirez-downes-325aa82b3" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Gianni Ramirez Downes
            </ContactLink>
          </ContactItem>
        </SocialGrid>
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactUs;