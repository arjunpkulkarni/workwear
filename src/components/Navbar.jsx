import React from 'react';
import styled from '@emotion/styled';
import logo from '../assets/logo.png';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.div`
  img {
    height: 100px;
    width: 160px;
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
    </NavContainer>
  );
};

export default Navbar;
