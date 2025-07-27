import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 50px 20px; /* Increased padding */
  background-color: #fff; /* White background */
  max-width: 100wh; /* Wider max-width */
  margin: 20px 10px; /* Center and add vertical spacing */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const AboutContent = styled.div`
  line-height: 1.6; /* Improved line height for readability */
  color: #555; /* Slightly darker text */
  padding: 20px; /* Padding for content */
  text-align: justify; /* Justify text for better alignment */
`;

const Title = styled.h2`
  margin-bottom: 20px;
  padding-left: 20px;
  margin-top: 5px; /* Remove top margin */
  color: #333;
`;

function About() {
  return (
    <AboutContainer id="about">
      <Title>About Me</Title>
      <AboutContent>
        <p>
          I am a highly motivated and enthusiastic recent graduate with a strong
          foundation in software engineering principles and a passion for
          creating innovative and impactful solutions. Eager to contribute my
          skills and learn from experienced professionals in a dynamic and
          challenging environment.
        </p>
        <p>
          During my academic career, I gained hands-on experience in various
          programming languages, including Java, JavaScript, and Python, and
          developed a solid understanding of data structures, algorithms, and
          database management systems. I am also proficient in front-end
          development using React and have experience with back-end development
          using Node.js.
        </p>
        <p>
          I am a quick learner, a team player, and possess excellent
          problem-solving skills. I am excited to embark on my career as a
          software engineer and contribute to the success of a forward-thinking
          organization.
        </p>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
