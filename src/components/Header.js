import React from 'react';
import { FiGrid, FiSun, FiMoon } from 'react-icons/fi';
import { LuWrench, LuGraduationCap } from 'react-icons/lu';

const Header = ({ theme = 'dark', onToggleTheme }) => {
    const headerTone = theme === 'light'
        ? 'bg-slate-100/90 text-slate-900 shadow-sm'
        : 'bg-gray-900/80';

    const isLight = theme === 'light';

    return (
        <header className={`sticky top-0 z-50 backdrop-blur-sm transition-colors duration-300 ${headerTone}`}>
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div>
                    <a href="#home" className="text-xl font-bold">Mahinuzzaman Shaan.</a>
                </div>
                <div className="flex items-center space-x-3">
                    <a
                        href="#projects"
                        className="nav-icon"
                        data-tooltip="Projects"
                        aria-label="Projects"
                    >
                        <FiGrid />
                    </a>
                    <a
                        href="#skills"
                        className="nav-icon"
                        data-tooltip="Skills"
                        aria-label="Skills"
                    >
                        <LuWrench />
                    </a>
                    <a
                        href="#education"
                        className="nav-icon"
                        data-tooltip="Education"
                        aria-label="Education"
                    >
                        <LuGraduationCap />
                    </a>
                    <button
                        type="button"
                        className="theme-toggle-btn"
                        onClick={onToggleTheme}
                        aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
                    >
                        {isLight ? <FiMoon /> : <FiSun />}
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;