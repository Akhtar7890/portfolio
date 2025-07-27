import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #222; /* Dark background */
  color: #fff; /* White text */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;
      display: ${({ isOpen }) =>
        isOpen ? "flex" : "none"}; /* Hide/show nav */
    }
  }

  li {
    margin-left: 20px;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      &:hover {
        color: #007bff;
      }
    }

    @media (max-width: 768px) {
      margin: 10px 0;
    }
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  display: none; /* Hidden by default */

  @media (max-width: 768px) {
    display: block; /* Show on smaller screens */
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const name = styled.div`
  //   font-weight: 800;
  // `;
  return (
    <HeaderContainer>
      <div
        style={{
          fontWeight: "700",
        }}
      >
        Mohammad Akhtar Babu
      </div>

      <HamburgerButton onClick={toggleMenu}>☰</HamburgerButton>
      <Nav isOpen={isOpen}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
