import React from "react";
import { Hero3D } from "../components/sections/Hero3D";
import { Services } from "../components/sections/Services";
import { Projects } from "../components/sections/Projects";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero3D />
      <Services />
      <Projects />
      <About />
      <Contact />
    </>
  );
};
