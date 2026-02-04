import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  /* Explicit row and column gaps to prevent any overlapping */
  column-gap: 30px;
  row-gap: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
`;

const ProjectCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 30px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;

  /* Flexbox settings to keep everything contained */
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative; /* Prevents z-index issues during overlap */

  &:hover {
    transform: translateY(-8px);
    border-color: #0f172a;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #0f172a;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background-color: #f8fafc;
  color: #64748b;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  border: 1px solid #e2e8f0;
  text-transform: uppercase;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 30px;
  /* This ensures the card fills space correctly without pushing the button out of view */
  flex-grow: 1;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center; /* Centers text inside the button */
  width: 100%; /* Makes button fill the card width */
  box-sizing: border-box; /* Ensures padding doesn't cause overflow */
  padding: 12px 0;
  background-color: #0f172a;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    background-color: #334155;
  }
`;

function Projects() {
  const projects = [
    {
      title: "Smart Contact Manager",
      description:
        "Developed a Spring Boot MVC-based contact management system with authentication handling 100+ contacts. Integrated MySQL for real-time search and CRUD operations.",
      tech: ["Spring Boot", "MySQL", "REST API", "Thymeleaf"],
      link: "https://github.com/Akhtar7890/Contact-Management-System",
    },
    {
      title: "Library Management System",
      description:
        "Built a system managing 500+ books. Implemented librarian and member authentication using Spring Security with RESTful services.",
      tech: ["Spring Boot", "Spring Security", "MySQL", "JPA"],
      link: "https://github.com/Akhtar7890/Library-Management",
    },
    {
      title: "Notepad Editor",
      description:
        "Created a desktop text editor using Java Swing supporting file lifecycle operations. Implemented Java I/O streams for reliable processing.",
      tech: ["Java", "Swing", "I/O Streams"],
      link: "https://github.com/Akhtar7890/Notepad-Editor",
    },
    {
      title: "Personal Portfolio",
      description:
        "Responsive React application built with styled-components to showcase technical projects and experience.",
      tech: ["React", "JavaScript", "Styled Components"],
      link: "https://akhtar7890.github.io/portfolio/",
    },
    {
      title: "React Todo App",
      description:
        "Task management tool focused on efficient state handling and clean user interaction patterns.",
      tech: ["React", "JavaScript", "CSS3"],
      link: "https://github.com/Akhtar7890/Todo-App",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title>Technical Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <TechStack>
                {project.tech.map((tag, i) => (
                  <TechTag key={i}>{tag}</TechTag>
                ))}
              </TechStack>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code
              </ProjectLink>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}

export default Projects;
