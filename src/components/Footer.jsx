import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #fff;
  color: black;
  padding: 4rem 2rem;
  font-family: 'Poppins', sans-serif;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 0.8rem;
  }
  
  a {
    color:rgb(90, 90, 90);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: white;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  color: #888;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/work">Our Work</a></li>
            <li><a href="/facility">The Facility</a></li>
          </ul>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Services</h3>
          <ul>
            <li><a href="/uniforms">Staff Uniforms</a></li>
            <li><a href="/merchandise">Merchandising</a></li>
            <li><a href="/design">Artwork Design</a></li>
          </ul>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Resources</h3>
          <ul>
            <li><a href="/help">Support</a></li>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </FooterColumn>
        
        <FooterColumn>
          <h3>Contact</h3>
          <ul>
            <li><a href="/quote">Get a Quote</a></li>
            <li><a href="/calculator">Price Calculator</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        © WorkWear {new Date().getFullYear()}
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 