import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  padding: 50px 20px;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* 
  Subtle shadow */
  margin: 20px 10px; /* Center and add vertical spacing */
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.4;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio website built with React, showcasing skills, projects, and experience.",
      link: "#", // Replace with your project link
    },
    {
      title: "Smart Contact Manager",
      description:
        "Secure login and registration system using Spring Security Enabled users to perform CRUD (Create, Read, Update, Delete) operations on their contacts.",
      link: "https://github.com/Akhtar7890/Contact-Management-System", // Replace with your project link
    },
    {
      title: "React-TODO Application",
      description:
        "A simple todo list application built with React, allowing users to add, delete, and mark tasks as complete.",
      link: "https://github.com/Akhtar7890/Todo-App", // Replace with your project link
    },
    {
      title: "Books Management System",
      description:
        "Developed a web-based application using Java, Spring Boot, and MySQL.Integrated Spring Security with BCrypt password encryption for secure login and registration.",
      link: "http://github.com/Akhtar7890/Library-Management", // Replace with your project link
    },
  ];

  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
}

export default Projects;
