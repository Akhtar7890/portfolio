import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  font-family: sans-serif;
  width: 100%;
  margin: 0 auto;
  // Add more global styles here if needed
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
