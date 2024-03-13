import React from 'react';
import Header from "../components/header.js";
import NavigationBar from "../components/navbar.js";
import About from "../components/about.js";
import Experiences from "../components/experiences.js";
import Projects from "../components/projects.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <NavigationBar/>
      <Header/>
      <About />
      <Experiences />
      <Projects />
    </main>
  );
}
