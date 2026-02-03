import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer`
  padding: 40px 20px;
  background-color: #1f2933; /* dark professional background */
  color: #d1d5db; /* slightly lighter text */
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: #d1d5db;
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: #0d6efd; /* matches primary button color */
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <Container>
        <FooterText>
          &copy; {new Date().getFullYear()} Mohammad Akhtar Babu. All rights
          reserved.
        </FooterText>

        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/akhtarbabu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
          </SocialLink>

          <SocialLink
            href="https://github.com/Akhtar7890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
          </SocialLink>

          <SocialLink
            href="https://leetcode.com/akhtarbabu_11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-code" />
          </SocialLink>
        </SocialLinks>
      </Container>
    </FooterSection>
  );
}
