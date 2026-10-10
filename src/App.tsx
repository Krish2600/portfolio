import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import EngineeringFocus from './components/EngineeringFocus';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <EngineeringFocus />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
