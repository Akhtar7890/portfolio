import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  padding: 50px 20px;
  background-color: #fff;
  text-align: center;
  margin: 10px 10px;
  max-width: 100wh;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactLink = styled.a`
  color: #007bff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #0056b3;
  }
`;

const Icon = styled.i`
  margin-right: 5px;
`;

function Contact() {
  return (
    <ContactContainer id="contact">
      <Title>Contact Me</Title>
      <ContactInfo>
        <ContactLink href="mailto:akhtarbabu7459941478.email@example.com">
          <Icon className="far fa-envelope"></Icon>
          akhtarbabu7459941478@gmail.com
        </ContactLink>
      </ContactInfo>
      <div>
        <ContactLink
          href="https://www.linkedin.com/in/akhtarbabu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="fab fa-linkedin"></Icon>
          LinkedIn
        </ContactLink>
        <ContactLink
          href="https://github.com/Akhtar7890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="fab fa-github"></Icon>
          GitHub
        </ContactLink>
        <ContactLink
          href="https://leetcode.com/akhtarbabu_11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="fas fa-code"></Icon>
          LeetCode
        </ContactLink>
        {/* Add more profile links as needed */}
      </div>
    </ContactContainer>
  );
}

export default Contact;
