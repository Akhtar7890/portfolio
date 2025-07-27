import React from "react";
import styled from "styled-components";
import profileImage from "../assets/images/Profile.jpeg"; // Import your image

const HeroContainer = styled.section`
  background: #f9f9f9;
  padding: 80px 20px;
  margin: 0px 10px;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #eee; /* Subtle bottom border */
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileImage = styled.img`
  width: 160px;
  height: 185px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const myName = styled.h1`
  color: "red";
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <ProfileImage src={profileImage} alt="Profile" />
        <Title>Hello, I'm Mohammad Akhtar Babu</Title>
        <Subtitle>
          A fresh graduate (2025) seeking a Software Engineering role.
        </Subtitle>
        <Button href="#contact">Contact Me</Button>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
