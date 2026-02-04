import React, { useState } from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 60px 20px;
  background-color: #f9fafb; /* Clean white background */
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #0f172a; /* Deep charcoal */
  letter-spacing: -0.5px;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-content: center;
`;

const CategoryCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #0f172a;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #64748b; /* Professional slate gray */
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const LinksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  width: 100%;
`;

const ContactLink = styled.a`
  background-color: #0f172a; /* Solid Black/Deep Navy */
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 6px; /* Squarer corners look more professional than pills */
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  max-width: 100%;
  overflow-x: auto;
  border: 1px solid #0f172a;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    background-color: transparent;
    color: #0f172a;
    transform: translateY(-3px);
  }
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 0.85rem;
  margin-top: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;

  &:hover {
    color: #0f172a;
  }
`;

const Icon = styled.i`
  font-size: 1rem;
  flex-shrink: 0;
`;

export default function Contact() {
  const email = "akhtarbabu7459941478@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title>Get In Touch</Title>

        <Grid>
          <CategoryCard>
            <CategoryTitle>Direct Contact</CategoryTitle>
            <LinksList>
              <ContactLink href={`mailto:${email}`}>
                <Icon className="far fa-envelope" />
                {email}
              </ContactLink>
            </LinksList>
            <CopyButton onClick={handleCopy}>
              <Icon className={copied ? "fas fa-check" : "far fa-copy"} />
              {copied ? "Email copied to clipboard" : "Click to copy email"}
            </CopyButton>
          </CategoryCard>

          <CategoryCard>
            <CategoryTitle>Professional Networks</CategoryTitle>
            <LinksList>
              <ContactLink
                href="https://linkedin.com/in/akhtarbabu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="fab fa-linkedin-in" /> LinkedIn
              </ContactLink>
              <ContactLink
                href="https://github.com/Akhtar7890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="fab fa-github" /> GitHub
              </ContactLink>
              <ContactLink
                href="https://leetcode.com/akhtarbabu_11"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="fas fa-terminal" /> LeetCode
              </ContactLink>
            </LinksList>
          </CategoryCard>
        </Grid>
      </Container>
    </ContactSection>
  );
}
