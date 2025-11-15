import React, { useEffect, useState } from 'react';

const projectEntries = [
    {
        id: 'thik-achi',
        title: 'Thik Achi - Fitness Tracking App',
        role: 'Full-Stack Developer',
        timeframe: 'Personal Project',
        bullets: [
            'Developed a fitness webapp where users can track their day-to-day fitness goals and activity.',
            'Implemented user authentication and personalized dashboard for tracking workouts and progress.',
            'Built RESTful API with Express.js and MongoDB for seamless data management.',
            'Tools Used: JavaScript, React.js, MongoDB, Express.js, Node.js'
        ],
        media: {
            tagline: 'Track your fitness journey with ease',
            layout: 'standard',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
                    alt: 'Fitness tracking app interface',
                    className: 'rounded-3xl shadow-lg max-h-64 object-cover'
                }
            ]
        },
        ctas: [
            { label: 'GitHub Repo', href: 'https://github.com/shaanzeeeee/thik-achi', variant: 'solid' },
            { label: 'View Demo', href: 'https://github.com/shaanzeeeee', variant: 'ghost' }
        ]
    },
    {
        id: 'dhuye-dibo',
        title: 'Dhuye Dibo - Laundry Service Platform',
        role: 'Full-Stack Developer',
        timeframe: 'Personal Project',
        bullets: [
            'Developed a webapp for online laundry service with booking and order management.',
            'Created responsive UI using Bootstrap for seamless user experience across devices.',
            'Implemented backend with PHP and MySQL for handling customer orders and data.',
            'Tools Used: HTML, CSS, Bootstrap, PHP, MySQL'
        ],
        media: {
            tagline: 'Convenient laundry service at your doorstep',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop',
                    alt: 'Laundry service app interface',
                    className: 'rounded-xl shadow-2xl max-h-64 object-cover'
                }
            ]
        },
        ctas: [
            { label: 'GitHub Repo', href: 'https://github.com/shaanzeeeee/dhuye-dibo', variant: 'solid' },
            { label: 'Project Details', href: 'https://github.com/shaanzeeeee', variant: 'ghost' }
        ]
    },
    {
        id: 'bangla-mcq',
        title: 'Uttor Dao - Bangla MCQ Generator',
        role: 'ML Research & Development',
        timeframe: 'Thesis Project',
        bullets: [
            'Developed an MCQ generator based on Bangla language using T5 transformer model.',
            'Created a Bengali QnA dataset from scratch in SQUAD format for model training.',
            'Implemented a RAG-powered system to test and benchmark the MCQ Generator.',
            'Tools Used: Python, AdamW, PyTorch, Pandas, NumPy, Streamlit'
        ],
        media: {
            tagline: 'AI-powered Bengali question generation',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop',
                    alt: 'AI machine learning model visualization',
                    className: 'rounded-xl shadow-2xl max-h-64 object-cover'
                }
            ]
        },
        ctas: [
            { label: 'Test Live', href: 'https://uttordao.streamlit.app/', variant: 'solid' },
            { label: 'Research Paper', href: 'https://dspace.bracu.ac.bd:8443/xmlui/handle/10361/26645', variant: 'ghost' }
        ]
    }
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(projectEntries[0]?.id ?? '');

    useEffect(() => {
        if (typeof window === 'undefined' || window.innerWidth < 1024) {
            return undefined;
        }

        const experienceTextElements = document.querySelectorAll('.experience-text[data-image-id]');
        if (!experienceTextElements.length) {
            return undefined;
        }

        const observer = new IntersectionObserver((entries) => {
            const visibleEntries = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (!visibleEntries.length) {
                return;
            }

            const nextActive = visibleEntries[0].target.getAttribute('data-image-id');
            if (!nextActive) {
                return;
            }

            setActiveProject(prev => (prev === nextActive ? prev : nextActive));
        }, {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: [0, 0.3, 0.6, 0.9],
        });

        experienceTextElements.forEach(el => {
            observer.observe(el);
        });

        return () => {
            experienceTextElements.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    const handleActivate = (id) => {
        if (!id) {
            return;
        }
        setActiveProject(prev => (prev === id ? prev : id));
    };

    const handleKeyActivate = (event, id) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleActivate(id);
        }
    };

    const activeProjectData = projectEntries.find(project => project.id === activeProject) ?? projectEntries[0];

    return (
        <section
            id="projects"
            className="scroll-reveal section-anchor container mx-auto px-4 sm:px-6 lg:px-8 py-20"
            style={{ '--reveal-delay': '100ms' }}
        >
            <div className="flex justify-center mb-12">
                <h2 className="section-title">Projects</h2>
            </div>
            <h3 className="text-5xl font-bold mb-10 text-center lg:text-left">Let's dive in</h3>

            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="space-y-48">
                    {projectEntries.map((project, index) => (
                        <div
                            key={project.id}
                            id={`exp-${project.id}`}
                            className="experience-text scroll-reveal"
                            data-image-id={project.id}
                            style={{ '--reveal-delay': `${index * 140}ms` }}
                            onMouseEnter={() => handleActivate(project.id)}
                            onFocus={() => handleActivate(project.id)}
                            onTouchStart={() => handleActivate(project.id)}
                            onKeyDown={(event) => handleKeyActivate(event, project.id)}
                            role="button"
                            tabIndex={0}
                        >
                            <h4 className="text-3xl font-bold">{project.title}</h4>
                            <p className="text-xl text-gray-400">{project.role}</p>
                            <p className="text-md text-gray-500 mb-6">{project.timeframe}</p>
                            <ul className="list-disc list-inside space-y-3 text-gray-300">
                                {project.bullets.map((bullet, index) => (
                                    <li key={`${project.id}-bullet-${index}`}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="hidden lg:block scroll-reveal" style={{ '--reveal-delay': '220ms' }}>
                    <div className="lg:sticky top-1/4">
                        <div className="relative h-96">
                            {projectEntries.map(project => (
                                <div
                                    key={`img-${project.id}`}
                                    id={`img-${project.id}`}
                                    className="experience-image px-6"
                                    style={{ opacity: activeProject === project.id ? 1 : 0 }}
                                >
                                    <div>
                                        {project.media?.tagline && (
                                            <p className="text-emerald-100 text-2xl font-semibold text-center mb-6">
                                                {project.media.tagline}
                                            </p>
                                        )}
                                        <div className={`flex justify-center ${project.media?.layout === 'overlap' ? 'items-end' : 'items-center'} gap-6`}>
                                            {project.media?.images?.map(image => (
                                                <img
                                                    key={image.src}
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className={image.className}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-4 mt-8 flex-wrap scroll-reveal" style={{ '--reveal-delay': '280ms' }}>
                            {activeProjectData?.ctas?.filter(cta => Boolean(cta.href)).map(cta => (
                                <a
                                    key={`${activeProjectData.id}-${cta.label}`}
                                    href={cta.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`project-button ${cta.variant === 'ghost' ? 'project-button--ghost' : 'project-button--solid'}`}
                                >
                                    {cta.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
