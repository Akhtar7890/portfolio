import React from "react";
import styled, { keyframes } from "styled-components";
import profileImage from "../assets/images/Picture.png";

// Animations
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Hero Section
const HeroSection = styled.section`
  padding: 70px 20px; /* same as About section */
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
`;

// Reuse same Container as About section
const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 30px; /* same as About section */
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

// Profile Image
const ImageWrapper = styled.div`
  width: 190px;
  height: 190px;
  margin: 0 auto 30px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #e5e7eb, /* light gray */ #d1d5db);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  animation: ${fadeIn} 1s ease-out;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top; /* keeps face visible */
  background-color: #fff;
`;

// Text
const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  color: #212529;
  margin-bottom: 12px;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
`;

const Role = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 25px;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px; /* ✅ CHANGE from 650px */
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInUp} 1s ease-out 0.6s both;
`;

// Buttons
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  padding: 12px 28px;
  background-color: #0d6efd;
  color: #fff;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: darkblue;
    border-color: red;
    transform: translateY(-2px);
    color: #fff;
  }
`;

const SecondaryButton = styled.a`
  padding: 12px 28px;
  background-color: transparent;
  color: #0d6efd;
  border: 2px solid #0d6efd;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: green;
    border-color: green;
    color: #fff;
    transform: translateY(-2px);
  }
`;
const OutlineButton = styled.a`
  padding: 12px 28px;
  background-color: #ffffff;
  color: #374151;
  border: 1.5px solid #d1d5db;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    // background-color: #f3f4f6;
    background-color: orange;
    color: #fff;
    border-color: #9ca3af;
    transform: translateY(-2px);
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <Container>
        <ImageWrapper>
          <ProfileImage src={profileImage} alt="Mohammad Akhtar Babu" />
        </ImageWrapper>

        <Title>Mohammad Akhtar Babu</Title>
        <Role>Aspiring Software Engineer | Java • Spring Boot • React</Role>

        <Subtitle>
          Fresh Computer Science graduate (2025) with strong fundamentals in
          backend development, REST APIs, and modern web technologies.
          Passionate about building scalable and clean software solutions.
        </Subtitle>

        <ButtonGroup>
          <PrimaryButton href="#contact">Contact Me</PrimaryButton>
          <SecondaryButton href="#projects">View Projects</SecondaryButton>
          <OutlineButton
            href="/portfolio/resume/Mohammad_Akhtar_Babu_CV.pdf"
            download
          >
            Download Resume
          </OutlineButton>
        </ButtonGroup>
      </Container>
    </HeroSection>
  );
}
