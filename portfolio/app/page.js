import React from 'react';
import About from "../components/about.js";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import Projects from "../components/projects.js";
import NavigationBar from "../components/navbar.js";
import Experiences from "../components/experiences.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-800">
    <NavigationBar/>
      <Header/>
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </main>
  );
}
