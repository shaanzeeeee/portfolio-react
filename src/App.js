import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

const getPreferredTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark';
  }
  const stored = window.localStorage.getItem('portfolio-theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

function App() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const body = document.body;
    body.classList.remove('theme-light', 'theme-dark');
    const nextClass = theme === 'light' ? 'theme-light' : 'theme-dark';
    body.classList.add(nextClass);
    window.localStorage.setItem('portfolio-theme', theme);

    return undefined;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

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
        rootMargin: '0px',
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
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