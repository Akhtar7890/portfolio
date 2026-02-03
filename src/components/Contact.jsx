import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 70px 20px; /* same vertical padding as other sections */
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1100px; /* same as other sections */
  width: 100%;
  margin: 0 auto;
  padding: 40px 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #1f2933;
  letter-spacing: 0.3px;
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 8px 12px;
  padding: 10px 16px;
  font-size: 1rem;
  color: #0d6efd;
  background-color: #f0f4ff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0d6efd;
    color: #fff;
    transform: translateY(-2px);
  }
`;

const Icon = styled.i`
  font-size: 1.1rem;
`;

export default function Contact() {
  return (
    <ContactSection id="contact">
      <Container>
        <Title>Contact Me</Title>

        <ContactInfo>
          <ContactLink href="mailto:akhtarbabu7459941478.email@example.com">
            <Icon className="far fa-envelope" />
            akhtarbabu7459941478@gmail.com
          </ContactLink>
        </ContactInfo>

        <div>
          <ContactLink
            href="https://www.linkedin.com/in/akhtarbabu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="fab fa-linkedin" />
            LinkedIn
          </ContactLink>

          <ContactLink
            href="https://github.com/Akhtar7890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="fab fa-github" />
            GitHub
          </ContactLink>

          <ContactLink
            href="https://leetcode.com/akhtarbabu_11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="fas fa-code" />
            LeetCode
          </ContactLink>
        </div>
      </Container>
    </ContactSection>
  );
}
