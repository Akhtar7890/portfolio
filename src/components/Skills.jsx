import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
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
  font-weight: 600;
  margin-bottom: 30px;
  color: #1f2933;
  letter-spacing: 0.3px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const CategoryCard = styled.div`
  background: #f8fafc;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
`;

const CategoryTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #111827;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Skill = styled.li`
  background-color: #2563eb; /* Blue */
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 500;
  cursor: default;

  /* Default visible style */
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.35);

  /* Floating animation */
  animation: float 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.15s);

  transition:
    background-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    // background-color: #dc2626; /* Red on hover */
    transform: scale(1.08);
    cursor: default;
    box-shadow: 0 10px 20px rgba(220, 38, 38, 0.35);
    animation-play-state: paused; /* Stops floating on hover */
  }
`;

function Skills() {
  const skillCategories = {
    Frontend: ["React", "Bootstrap", "JavaScript (ES6+)", "HTML5", "CSS3"],
    Backend: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Thymeleaf",
      "Hibernate (JPA)",
    ],
    Database: ["MySQL", "JDBC"],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Linux",
      "Postman",
      "IntelliJ IDEA",
      "VS Code",
    ],
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <Title>Technical Skills</Title>

        <Grid>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <CategoryCard key={category}>
              <CategoryTitle>{category}</CategoryTitle>
              <SkillsList>
                {skills.map((skill) => (
                  <Skill key={skill}>{skill}</Skill>
                ))}
              </SkillsList>
            </CategoryCard>
          ))}
        </Grid>
      </Container>
    </SkillsSection>
  );
}

export default Skills;
