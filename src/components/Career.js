import React, { useEffect } from 'react';

const Career = () => {
    useEffect(() => {
        if (window.innerWidth >= 1024) { // Only run this for desktop
            const observer = new IntersectionObserver((entries) => {
                let intersectingEntryId = null;
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        intersectingEntryId = entry.target.id;
                    }
                });

                if (intersectingEntryId) {
                    const experienceImageElements = document.querySelectorAll('.experience-image');
                    experienceImageElements.forEach(img => {
                        const correspondingTextId = 'exp-' + img.id.substring(4);
                        if (correspondingTextId === intersectingEntryId) {
                            img.style.opacity = '1';
                        } else {
                            img.style.opacity = '0';
                        }
                    });
                }
            }, {
                root: null,
                threshold: 0.5,
            });

            const experienceTextElements = document.querySelectorAll('.experience-text');
            const firstImage = document.getElementById('img-jucr');
            if (firstImage) {
                firstImage.style.opacity = '1';
            }
            
            experienceTextElements.forEach(el => {
                observer.observe(el);
            });

            // Cleanup observer on component unmount
            return () => experienceTextElements.forEach(el => observer.unobserve(el));
        }
    }, []);

    return (
        <section id="career" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h2 className="text-4xl font-bold text-center mb-12">Career</h2>
            <h3 className="text-5xl font-bold mb-10 text-center lg:text-left">Let's dive in</h3>
            
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="space-y-48"> 
                    <div id="exp-jucr" className="experience-text">
                        <h4 className="text-3xl font-bold">JUCR</h4>
                        <p className="text-xl text-gray-400">Senior Backend Engineer</p>
                        <p className="text-md text-gray-500 mb-6">Dec 2022 - Now</p>
                        <ul className="list-disc list-inside space-y-3 text-gray-300">
                            <li>Worked on payment, wallet, and banking systems.</li>
                            <li>Worked on an e-mobility charging service providing access to over 200k EVSEs across Europe.</li>
                            <li>Developed systems using event-driven, domain-driven, and hexagonal architectures.</li>
                            <li>Developed systems using TypeScript, Node.js, MongoDB, Kafka, GraphQL, and other technologies.</li>
                        </ul>
                    </div>
                    <div id="exp-tech-solutions" className="experience-text">
                        <h4 className="text-3xl font-bold">Tech Solutions Inc.</h4>
                        <p className="text-xl text-gray-400">Mid-Level Software Engineer</p>
                        <p className="text-md text-gray-500 mb-6">Jan 2020 - Nov 2022</p>
                        <ul className="list-disc list-inside space-y-3 text-gray-300">
                            <li>Contributed to a large-scale SaaS platform for enterprise clients.</li>
                            <li>Collaborated with cross-functional teams to design and implement new features using React and Python.</li>
                            <li>Improved application performance by 15% through code refactoring and database query optimization.</li>
                            <li>Participated in code reviews and mentored junior developers.</li>
                        </ul>
                    </div>
                    <div id="exp-innovatech" className="experience-text">
                        <h4 className="text-3xl font-bold">Innovatech</h4>
                        <p className="text-xl text-gray-400">Junior Frontend Developer</p>
                        <p className="text-md text-gray-500 mb-6">Jun 2018 - Dec 2019</p>
                        <ul className="list-disc list-inside space-y-3 text-gray-300">
                            <li>Developed and maintained user-facing features for a variety of client websites.</li>
                            <li>Built responsive and mobile-first web pages from design mockups.</li>
                            <li>Worked with RESTful APIs to integrate dynamic content into web applications.</li>
                            <li>Assisted the senior development team in debugging and resolving production issues.</li>
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <div className="lg:sticky top-1/4">
                        <div className="relative h-96">
                            <div id="img-jucr" className="experience-image">
                                 <div className="bg-pink-200 p-6 rounded-lg shadow-2xl w-full max-w-md relative">
                                    <p className="text-gray-800 text-4xl font-bold text-center mb-6">Open our Charging stations for the world</p>
                                    <div className="flex justify-center items-end">
                                        <img src="https://images.unsplash.com/photo-1614065673842-0057050091e2?q=80&w=2070&auto=format&fit=crop" alt="EV Charger" className="z-10 -mr-12 mb-4 h-48 rounded" />
                                        <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop" alt="App Screenshot" className="rounded-3xl shadow-lg h-80" />
                                    </div>
                                 </div>
                            </div>
                            <div id="img-tech-solutions" className="experience-image">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Tech Solutions Project" className="rounded-lg shadow-2xl max-h-full" />
                            </div>
                            <div id="img-innovatech" className="experience-image">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Innovatech Project" className="rounded-lg shadow-2xl max-h-full" />
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 mt-8">
                            <a href="https://github.com/shaanzeeeee" target="_blank" rel="noopener noreferrer" className="career-button inline-block bg-gray-800 border border-gray-600 text-gray-200 font-semibold px-6 py-2 rounded-lg">Github Repo</a>
                            <a href="#" className="career-button inline-block bg-gray-800 border border-gray-600 text-gray-200 font-semibold px-6 py-2 rounded-lg">Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Career;