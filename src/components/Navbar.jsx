import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/logo.png';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.div`
  img {
    height: 80px;
    width: 120px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    color: black;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #e0e0e0;
    }
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>
        <a href="/">
          <img src={logo} alt="Swiftees" />
        </a>
      </Logo>
      <NavLinks>
        <a href="/quote">Get a Quote</a>
        <a href="/calculator">Price Calculator</a>
        <a href="/work">Our Work</a>
        <a href="/contact">Contact Us</a>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar; 