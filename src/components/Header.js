import React from 'react';

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
            <nav className="flex justify-center items-center max-w-7xl mx-auto px-8 py-4">
                <div className="absolute left-8">
                    <a href="#home" className="text-xl font-bold">Mahinuzzaman Shaan.</a>
                </div>
                <div className="flex items-center space-x-2">
                    <a href="#career" className="px-4 py-2 text-gray-300 rounded-md hover:bg-emerald-900/50 hover:text-emerald-400 transition-colors">Career</a>
                    <a href="#skills" className="px-4 py-2 text-gray-300 rounded-md hover:bg-emerald-900/50 hover:text-emerald-400 transition-colors">Skills</a>
                    <a href="#education" className="px-4 py-2 text-gray-300 rounded-md hover:bg-emerald-900/50 hover:text-emerald-400 transition-colors">Education</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;