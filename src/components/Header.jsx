import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #222;
  color: #fff;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Logo = styled.div`
  font-weight: 800;
  font-size: 20px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #222;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    box-shadow: ${({ isOpen }) =>
      isOpen ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    width: 100%;
    padding: ${({ isOpen }) => (isOpen ? "15px 0" : "0")};
  }
`;

const NavItem = styled.li`
  a {
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s;
    cursor: pointer;

    &:hover {
      color: #007bff;
    }
  }

  @media (max-width: 768px) {
    a {
      display: block;
      padding: 12px 40px;

      &:hover {
        background-color: #333;
      }
    }
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  padding: 5px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <HeaderContainer>
      <Logo>Mohammad Akhtar Babu</Logo>

      <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? "✖" : "☰"}
      </HamburgerButton>

      <Nav isOpen={isOpen}>
        <NavList isOpen={isOpen}>
          <NavItem>
            <a onClick={() => handleScroll("#about")}>About</a>
          </NavItem>
          <NavItem>
            <a onClick={() => handleScroll("#skills")}>Skills</a>
          </NavItem>
          <NavItem>
            <a onClick={() => handleScroll("#projects")}>Projects</a>
          </NavItem>
          <NavItem>
            <a onClick={() => handleScroll("#contact")}>Contact</a>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
