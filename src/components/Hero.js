import React, { useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
    useEffect(() => {
        const orbContainer = document.getElementById('orb-container');
        if (orbContainer && orbContainer.childElementCount === 0) { // Only run if orbs haven't been created
            const numOrbs = 10;
            for (let i = 0; i < numOrbs; i++) {
                const orb = document.createElement('div');
                orb.classList.add('orb');
                const size = Math.random() * 200 + 50;
                orb.style.width = `${size}px`;
                orb.style.height = `${size}px`;
                orb.style.top = `${Math.random() * 100}%`;
                orb.style.left = `${Math.random() * 100}%`;
                orb.style.animationDelay = `${Math.random() * -20}s`;
                orb.style.animationDuration = `${Math.random() * 10 + 15}s`;
                orbContainer.appendChild(orb);
            }
        }
    }, []);

    return (
        <section id="home" className="animated-bg">
            <div id="orb-container"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)] flex flex-col justify-center relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                    <div className="w-full lg:w-1/3">
                        <img src="https://scontent.fdac189-1.fna.fbcdn.net/v/t39.30808-6/486178649_2416716892016139_4484602831372546029_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UzvVlbDVMk0Q7kNvwEGqJtk&_nc_oc=AdmFKc83sZ2nFx5-WR9TszhYxLBEc4UnkOCIEhRLYlnY4Sck_vhkVST43wxfODaJJ84&_nc_zt=23&_nc_ht=scontent.fdac189-1.fna&_nc_gid=j-MtWpZZiN9R6eJAXgWwQw&oh=00_AfhiEiYAolyUKU81osD7FsePpEStIOZGgVToFd9u-kSiTw&oe=691AB1E5" alt="Mahinuzzaman Shaan" className="rounded-lg shadow-2xl w-full" />
                    </div>
                    <div className="w-full lg:w-2/3 text-center lg:text-left">
                        <p className="text-lg text-gray-400">I'm Mahinuzzaman Shaan, and I enjoy</p>
                        <h2 className="text-5xl md:text-6xl font-bold my-4">
                            Building pixel-perfect
                            <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500 text-transparent bg-clip-text"> Interactive
                            </span> apps <span role="img" aria-label="heart">💖</span>
                        </h2>
                        <p className="text-2xl text-gray-300">Full-Stack Developer</p>
                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mt-8">
                            <a href="https://www.linkedin.com/in/mahinuzzaman-shaan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg></a>
                            <a href="https://github.com/shaanzeeeee" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd"/></svg></a>
                            <a href="mailto:mahinuzzaman.shaan@gmail.com" className="text-gray-400 hover:text-white"><svg className="w-8 h-8" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></a>
                            <a href="/Mahinuzzaman-Shaan-CV.pdf" download className="hero-download" aria-label="Download CV">
                                <FiDownload className="hero-download__icon" aria-hidden="true" />
                                <span className="hero-download__label">Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;