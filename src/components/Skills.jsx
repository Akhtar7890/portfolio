import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.section`
  padding: 50px 20px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* 
  Subtle shadow */
  margin: 20px 10px; /* Center and add vertical spacing */
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the skills */
`;

const SkillItem = styled.li`
  background-color: #007bff; /* Blue background */
  color: #fff; /* White text */
  padding: 10px 15px;
  margin: 5px;
  border-radius: 20px; /* Rounded corners */
  font-size: 14px;
`;

function Skills() {
  const skills = [
    "Java",
    "React",
    "JavaScript",
    "Spring Boot",
    "Bootstrap",
    "Postman",
    "Python",
    "C",
    "Thymeleaf",
    "HTML",
    "CSS",
    "Git",
    "Github",
    "MySQL",
    "Linux",
  ]; // Add your skills
  return (
    <SkillsContainer id="skills">
      <h2>Skills</h2>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
}

export default Skills;
