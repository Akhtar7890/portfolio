import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
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
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
`;

const ProjectCard = styled.div`
  background-color: #f8fafc;
  border-radius: 14px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #111827;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ProjectLink = styled.a`
  align-self: flex-start;
  padding: 8px 18px;
  background-color: #2563eb;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  border-radius: 999px;
  text-decoration: none;
  transition:
    background-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    background-color: green; /* Matches skill hover #dc2626*/
    transform: translateY(-2px);
    color: #ffffff;
  }
`;

const TechStack = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const Tech = styled.li`
  background-color: #eef2ff; /* Light blue background */
  color: #1e40af; /* Dark blue text */
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #c7d2fe;

  transition: all 0.2s ease;

  &:hover {
    // background-color: #2563eb;
    // color: #ffffff;
    transform: scale(1.05);
    cursor: default;
  }
`;

function Projects() {
  const projects = [
    {
      title: "Notepad Editor",
      description:
        "Desktop-based Notepad Editor built using Java Swing, supporting core file operations such as create, open, edit, and save.",
      tech: ["Java", "Swing", "I/O Streams"],
      link: "https://github.com/Akhtar7890/Notepad-Editor",
    },
    {
      title: "Smart Contact Manager",
      description:
        "Secure contact management system using Spring Boot and Spring Security with full CRUD functionality.",
      tech: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "Bootstrap",
        "Thymeleaf",
        "MySQL",
      ],
      link: "https://github.com/Akhtar7890/Contact-Management-System",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Personal portfolio website built with React to showcase projects, skills, and experience.",
      tech: ["React", "Styled Components"],
      link: "https://akhtar7890.github.io/portfolio/",
    },
    {
      title: "React Todo Application",
      description:
        "A React-based task management application allowing users to manage daily tasks efficiently.",
      tech: ["React", "JavaScript", "CSS"],
      link: "https://github.com/Akhtar7890/Todo-App",
    },
    {
      title: "Library Management System",
      description:
        "Library management system built with Spring Boot, MySQL, and Bootstrap for efficient data handling.",
      tech: ["Spring Boot", "MySQL", "Bootstrap"],
      link: "https://github.com/Akhtar7890/Library-Management",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title>Projects</Title>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.title}>
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                {/* ✅ Tech Stack */}
                <TechStack>
                  {project.tech.map((item) => (
                    <Tech key={item}>{item}</Tech>
                  ))}
                </TechStack>
              </div>

              <ProjectLink
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </ProjectLink>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}

export default Projects;
