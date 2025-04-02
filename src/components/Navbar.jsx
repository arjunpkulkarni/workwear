import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import logo from '../assets/logo.png';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(5px)' : 'none'};
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled.div`
  img {
    height: 100px;
    width: 160px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    img {
      height: 60px;
      width: 96px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 50px;
      width: 80px;
    }
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavContainer scrolled={scrolled}>
      <Logo>
        <a href="/">
          <img src={logo} alt="WorkWear" />
        </a>
      </Logo>
    </NavContainer>
  );
};

export default Navbar;
