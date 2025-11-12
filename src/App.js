import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dark">
      <Header />
      <main>
        <Hero />
        <hr className="border-gray-700" />
  <Projects />
        <hr className="border-gray-700" />
        <Skills />
        <hr className="border-gray-700" />
        <Education />
        <hr className="border-gray-700" />
      </main>
      <Footer />
    </div>
  );
}

export default App;