import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #ff6b35;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const Quote = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #555;
  font-style: italic;
  position: relative;
  padding: 1rem 1.5rem 1.5rem 1.5rem;
  
  &:before {
    content: '"';
    font-size: 3rem;
    color: #ff6b35;
    position: absolute;
    top: -5px;
    left: -5px;
    font-family: serif;
  }
  
  &:after {
    content: '"';
    font-size: 3rem;
    color: #ff6b35;
    position: absolute;
    bottom: -25px;
    right: 5px;
    font-family: serif;
  }
`;

const Author = styled.div`
  margin-top: 1rem;
`;

const AuthorName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.25rem 0;
`;

const AuthorTitle = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

const testimonials = [
  {
    quote: "We've ordered uniforms and shirts for our crew multiple times and it's been smooth every time. Pricing was better than the big vendors we used before, turnaround was fast, and communication was on point.",
    name: "John Klastow",
    title: "Klastow Landscaping"
  },
  {
    quote: "Workwear made the whole process easy for our fraternity. We sent over an idea, got a mockup quickly, and the final product came out exactly how we wanted. Quality was solid and the pricing worked for our budget. We'll definitely be ordering again.",
    name: "Miles Chiafulio",
    title: "Zeta Beta Tau SUNY Albany"
  },
  {
    quote: "As a clothing brand, quality and consistency matter a lot. Workwear delivered clean prints, good materials, and met our deadlines without issues. It's hard to find reliable production at this price point. This was a win for us.",
    name: "Chris Alvarez",
    title: "LifeAtWork Clothing"
  }
];

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <SectionTitle>What Our Clients Say</SectionTitle>
      <TestimonialsGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Quote>{testimonial.quote}</Quote>
            <Author>
              <AuthorName>{testimonial.name}</AuthorName>
              <AuthorTitle>{testimonial.title}</AuthorTitle>
            </Author>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsSection>
  );
};

export default Testimonials;