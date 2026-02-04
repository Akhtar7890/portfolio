import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 60px 20px;
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
  font-weight: 700;
  margin-bottom: 40px;
  color: #0f172a; /* Deep charcoal */
  letter-spacing: -0.5px;
`;

const MainDescription = styled.div`
  max-width: 900px;
  margin: 0 auto 60px auto;
  text-align: center;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #475569;

  strong {
    color: #0f172a;
    font-weight: 700;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    background-color: #e2e8f0;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }

  @media (max-width: 768px) {
    &::after {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  left: ${(props) => (props.position === "left" ? "0" : "50%")};

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  right: ${(props) => (props.position === "left" ? "-8px" : "auto")};
  left: ${(props) => (props.position === "right" ? "-8px" : "auto")};
  background-color: #ffffff;
  border: 4px solid #0f172a;
  top: 15px;
  border-radius: 50%;
  z-index: 1;

  @media (max-width: 768px) {
    left: 23px;
    right: auto;
  }
`;

const TimelineContent = styled.div`
  padding: 24px;
  background-color: #f8fafc;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    border-color: #0f172a;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  }

  span {
    display: block;
    font-size: 12px;
    font-weight: 800;
    color: #64748b;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  h3 {
    font-size: 17px;
    color: #0f172a;
    margin-bottom: 4px;
    font-weight: 700;
  }

  h4 {
    font-size: 14px;
    color: #334155;
    margin-bottom: 8px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: #475569;
    font-weight: 700;
  }
`;

const ClosingText = styled.p`
  text-align: center;
  margin-top: 80px;
  font-size: 1.1rem;
  color: #64748b;
  font-style: italic;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`;

function About() {
  return (
    <AboutSection id="about">
      <Container>
        <Title>About Me</Title>

        <MainDescription>
          <p>
            Entry-level <strong>Java Backend Developer</strong> with hands-on
            experience in <strong>Spring Boot</strong>, RESTful APIs, Spring
            Security, and MySQL. Developed 3+ full-stack applications
            implementing authentication, role-based authorization, and CRUD
            operations. Strong foundation in
            <strong> OOP, Data Structures, and SDLC</strong>, seeking an
            entry-level Java Backend / Software Engineer role.
          </p>
        </MainDescription>

        <TimelineContainer>
          {/* B.Tech Timeline Item */}
          <TimelineItem position="left">
            <TimelineDot position="left" />
            <TimelineContent>
              <span>2021 - 2025</span>
              <h3>Bachelor of Technology (B.Tech)</h3>
              <h4>Computer Science and Engineering</h4>
              <h4>R.R. Group of Institutions (AKTU), Lucknow</h4>
              <p>CGPA: 8.3 / 10</p>
            </TimelineContent>
          </TimelineItem>

          {/* Intermediate Timeline Item */}
          <TimelineItem position="right">
            <TimelineDot position="right" />
            <TimelineContent>
              <span>2019 - 2020</span>
              <h3>Class XII (Intermediate)</h3>
              <h4>Lucknow Model Public Inter College</h4>
              <h4>UP Board</h4>
              <p>Percentage: 76.40%</p>
            </TimelineContent>
          </TimelineItem>

          {/* High School Timeline Item */}
          <TimelineItem position="left">
            <TimelineDot position="left" />
            <TimelineContent>
              <span>2017 - 2018</span>
              <h3>Class X (High School)</h3>
              <h4>Lucknow Model Public Inter College</h4>
              <h4>UP Board</h4>
              <p>Percentage: 89.50%</p>
            </TimelineContent>
          </TimelineItem>
        </TimelineContainer>

        <ClosingText>
          "I value clean code, clear communication, and continuous learning. My
          goal is to contribute to impactful projects while growing within a
          collaborative engineering team."
        </ClosingText>
      </Container>
    </AboutSection>
  );
}

export default About;
