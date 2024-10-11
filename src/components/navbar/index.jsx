import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background: #642b938b;
  opacity: 1;
  position: fixed;
  z-index: 3;
  width: 100%;
  display:flex;
  align-items:center;
  left: 0;
  top: 0;
  height:9vh;
  justify-content: space-evenly;
 
  @media (max-width: 768px) {
    display:block
  }

`;

const Container = styled.div`
  max-width: 800px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    height:9vh;

  }
`;

const Logo = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #000;
  line-height: 55px;
  padding: 10px 0;
  color: #ffffff;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    display: ${({ open }) => (open ? 'block' : 'none')};
    padding: 0;
    margin: 0;

    width: 100%;  /* Full width for mobile */
  }

  ul li {
    padding: 10px 0;


  }

  ul li a {
    text-decoration: none;
    padding: 0.7em 1em;
    color: #ffffff;
    display: block;
    width: 100%;
  }
  @media (max-width: 468px) {
    background-color: #642b938b;

}
  @media (min-width: 768px) {
    ul {
      display: flex;
      justify-content: flex-end;

    }

    ul li {
      margin: 0;

    }
  }
`;

const NavToggle = styled.button`
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: #f7f7f7;
  display: block;

  @media (min-width: 768px) {
    display: none;

  }
  
`;

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <Header>
      <Container>
        <Logo href="#home">Voxis Communication</Logo>
        <NavToggle onClick={handleNavToggle}>
          {navOpen ? '\u00d7' : '\u2630'}
        </NavToggle>
      </Container>
      <Nav open={navOpen}>
        <ul>
          <li className="menu-item active"><a href="#home">Home</a></li>
          <li className="menu-item"><a href="#about">About</a></li>
          <li className="menu-item"><a href="#projects">Tech</a></li>
          <li className="menu-item"><a href="#blog">Blog</a></li>
        </ul>
      </Nav>
    </Header>
  );
};

export default Navbar;
