import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 70px 20px;
  background-color: #f9fafb;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
`;

const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #1f2933;
  letter-spacing: 0.3px;
  // text-align: center;
  // font-size: 28px;
  // font-weight: 600;
  // margin-bottom: 30px;
  // color: #1f2933;
`;

const AboutContent = styled.div`
  font-size: 15px;
  line-height: 1.7;
  color: #4b5563;

  p {
    margin-bottom: 16px;
  }

  ul {
    margin: 20px 0;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

function About() {
  return (
    <AboutSection id="about">
      <Container>
        <Title>About Me</Title>

        <AboutContent>
          <p>
            I am a <strong>Software Engineering graduate (2025)</strong> with a
            strong interest in building
            <strong> reliable</strong>, <strong>scalable</strong>, and{" "}
            <strong>user-centric web applications</strong>. I enjoy transforming
            ideas into clean, maintainable code and solving real-world problems
            using modern technologies.
          </p>

          <ul>
            <li>
              <strong>Programming & Web Technologies:</strong> Java, JavaScript,
              Python, React
            </li>
            <li>
              <strong>Backend & Databases:</strong> Spring Boot, REST APIs,
              MySQL
            </li>
            <li>
              <strong>Core Concepts:</strong> Data Structures, Algorithms,
              Object-Oriented Programming
            </li>
          </ul>

          <p>
            I am a <strong>quick learner</strong> and a{" "}
            <strong>collaborative team player</strong> who values
            <strong> clean code</strong>,{" "}
            <strong>continuous improvement</strong>, and
            <strong> clear communication</strong>. I am eager to grow as a
            software engineer and contribute to{" "}
            <strong>impactful projects</strong> in a professional development
            environment.
          </p>
        </AboutContent>
      </Container>
    </AboutSection>
  );
}

export default About;
