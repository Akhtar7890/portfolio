import React from "react";
import styled, { keyframes } from "styled-components";
import profileImage from "../assets/images/Picture.png";

// --- Animations ---
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
`;

// --- Styled Components ---

const HeroSection = styled.section`
  padding: 60px 20px;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 180px;
  height: 180px;
  margin: 0 auto 20px;
  border-radius: 50%;
  padding: 4px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  animation: ${fadeIn} 1.2s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 0%;
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 25px;
  animation: ${fadeInUp} 0.8s ease-out both;
`;

const PulseDot = styled.span`
  height: 8px;
  width: 8px;
  background-color: #22c55e;
  border-radius: 50%;
  display: inline-block;
  animation: ${pulse} 2s infinite;
`;

const StatusText = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #166534;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
  letter-spacing: -1.5px;
  animation: ${fadeInUp} 0.8s ease-out both;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const RoleText = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #64748b;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  span {
    color: #cbd5e1;
  } /* The separator pipe | */

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 5px;
    span {
      display: none;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 30px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInUp} 0.8s ease-out 0.4s both;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 40px;
  animation: ${fadeInUp} 0.8s ease-out 0.5s both;
`;

const SocialIconLink = styled.a`
  color: #94a3b8;
  font-size: 1.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #0f172a;
    transform: translateY(-4px);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  animation: ${fadeInUp} 0.8s ease-out 0.6s both;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
  }
`;

const BaseButton = styled.a`
  padding: 14px 32px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease;
  text-align: center;
  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 300px;
  }
`;

const PrimaryButton = styled(BaseButton)`
  background-color: #0f172a;
  color: #ffffff;
  border: 1px solid #0f172a;

  &:hover {
    background-color: transparent;
    color: #0f172a;
    transform: translateY(-3px);
  }
`;

const SecondaryButton = styled(BaseButton)`
  background-color: transparent;
  color: #0f172a;
  border: 1px solid #e2e8f0;

  &:hover {
    background-color: #f8fafc;
    border-color: #0f172a;
    transform: translateY(-3px);
  }
`;

const TertiaryButton = styled(BaseButton)`
  background-color: transparent;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;

  &:hover {
    background-color: #f8fafc;
    color: #0f172a;
    border-color: #cbd5e1;
    transform: translateY(-2px);
  }
`;

// --- Component ---

export default function Hero() {
  return (
    <HeroSection id="home">
      <Container>
        <ImageWrapper>
          <ProfileImage src={profileImage} alt="Mohammad Akhtar Babu" />
        </ImageWrapper>

        <StatusBadge>
          <PulseDot />
          <StatusText>Available for Hire</StatusText>
        </StatusBadge>

        <Title>Mohammad Akhtar Babu</Title>

        <RoleText>
          Aspiring Software Engineer <span>|</span> Java Ecosystem{" "}
          <span>|</span> React
        </RoleText>

        <Subtitle>
          Computer Science graduate (2025) specializing in scalable backend
          systems and modern web technologies. Focused on writing efficient,
          maintainable code.
        </Subtitle>

        <SocialRow>
          <SocialIconLink
            href="https://github.com/Akhtar7890"
            target="_blank"
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </SocialIconLink>
          <SocialIconLink
            href="https://linkedin.com/in/akhtarbabu/"
            target="_blank"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </SocialIconLink>
          <SocialIconLink
            href="https://leetcode.com/akhtarbabu_11"
            target="_blank"
            title="LeetCode"
          >
            <i className="fas fa-terminal"></i>
          </SocialIconLink>
        </SocialRow>

        <ButtonGroup>
          <PrimaryButton href="#contact">Get in Touch</PrimaryButton>
          <SecondaryButton href="#projects">View Projects</SecondaryButton>
          <TertiaryButton
            href="/portfolio/resume/Mohammad_Akhtar_Babu_CV.pdf"
            download
          >
            <i className="fas fa-file-download"></i>
            Download CV
          </TertiaryButton>
        </ButtonGroup>
      </Container>
    </HeroSection>
  );
}
