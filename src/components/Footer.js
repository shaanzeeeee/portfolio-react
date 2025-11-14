import React from 'react';

const Footer = () => {
    return (
    <footer className="footer-surface py-12 scroll-reveal" style={{ '--reveal-delay': '200ms' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center footer-content">
                <div className="flex justify-center items-center space-x-6 mb-8 relative z-10">
                    <a href="https://www.linkedin.com/in/mahinuzzaman-shaan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300" aria-label="LinkedIn profile"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg></a>
                    <a href="https://github.com/shaanzeeeee" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300" aria-label="GitHub profile"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.958-.266 1.983-.399 3.003-.404 1.02.005 2.045.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z"/></svg></a>
                    <a href="mailto:mahinuzzaman.shaan@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300" aria-label="Send email"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2zm0 2v.01L12 13l8-6V7H4zm0 10h16V9l-8 6-8-6v8z" /></svg></a>
                </div>
                
                <p className="text-gray-400 relative z-10">
                    Crafted with <span role="img" aria-label="heart" className="text-red-500">💖</span> by Mahinuzzaman Shaan
                </p>
            </div>
        </footer>
    );
};

export default Footer;