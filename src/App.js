import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const revealElements = document.querySelectorAll('.scroll-reveal');

    if (!revealElements.length) {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (mediaQuery.matches) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10%',
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

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