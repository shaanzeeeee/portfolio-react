import React from 'react';
import { FiGrid } from 'react-icons/fi';
import { LuWrench, LuGraduationCap } from 'react-icons/lu';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
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
                </div>
            </nav>
        </header>
    );
};

export default Header;