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
  font-weight: 700;
  margin-bottom: 40px;
  color: #0f172a; /* Deep charcoal */
  letter-spacing: -0.5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    2,
    1fr
  ); /* Exactly 2 cards per row on desktop */
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 card per row on mobile */
  }
`;

const CategoryCard = styled.div`
  background: #f8fafc;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #0f172a;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #0f172a;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Skill = styled.li`
  color: #1e293b;
  background: #ffffff;
  padding: 8px 18px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid #e2e8f0;
  cursor: default;

  /* Your requested floating animation */
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  animation: float 3s ease-in-out infinite;
  /* Fixed: This now uses the --i variable passed from the map */
  animation-delay: calc(var(--i) * 0.15s);

  transition: all 0.3s ease;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  &:hover {
    transform: scale(1.08);
    background-color: #0f172a;
    color: #ffffff;
    box-shadow: 0 10px 20px rgba(220, 38, 38, 0.25); /* Your red shadow on hover */
    animation-play-state: paused;
  }
`;

function Skills() {
  const skillCategories = {
    "Backend & Frameworks": [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
    ],
    "Frontend & UI": [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Thymeleaf",
    ],
    "Databases & Tools": ["MySQL", "JDBC", "REST APIs", "Git", "Postman"],
    "Core CS Concepts": [
      "Data Structures",
      "Algorithms",
      "OOP",
      "OS",
      "SDLC",
      "Agile",
    ],
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <Title>Technical Expertise</Title>
        <Grid>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <CategoryCard key={category}>
              <CategoryTitle>{category}</CategoryTitle>
              <SkillsList>
                {skills.map((skill, index) => (
                  <Skill
                    key={skill}
                    style={{ "--i": index }} // This is the crucial fix for animation
                  >
                    {skill}
                  </Skill>
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
