import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Career from './components/Career';
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
        <Career />
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