import React, { useEffect, useState } from 'react';

const projectEntries = [
    {
        id: 'jucr',
        title: 'JUCR Charging Platform',
        role: 'Senior Backend Engineer',
        timeframe: 'Dec 2022 - Now',
        bullets: [
            'Led payment, wallet, and banking systems that power JUCR\'s EV charging marketplace.',
            'Shipped an e-mobility service connecting drivers to 200k+ charging stations across Europe.',
            'Implemented domain-driven, event-sourced services with TypeScript, Node.js, Kafka, and MongoDB.',
            'Partnered with product, data, and design teams to release new charging experiences twice per quarter.'
        ],
        media: {
            tagline: 'Scaling European EV charging at startup speed',
            layout: 'overlap',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop',
                    alt: 'JUCR mobile app interface',
                    className: 'rounded-3xl shadow-lg h-64 object-cover'
                }
            ]
        },
        ctas: [
            { label: 'Company Site', href: 'https://www.jucr.com/', variant: 'solid' },
            { label: 'Architecture Highlights', href: 'https://github.com/shaanzeeeee', variant: 'ghost' }
        ]
    },
    {
        id: 'tech-solutions',
        title: 'Tech Solutions Inc.',
        role: 'Mid-Level Software Engineer',
        timeframe: 'Jan 2020 - Nov 2022',
        bullets: [
            'Scaled a B2B SaaS analytics suite used daily by global enterprise teams.',
            'Delivered React + Python features that reduced onboarding time by 30%.',
            'Optimized MongoDB + PostgreSQL queries to cut dashboard latency by 15%.',
            'Mentored junior engineers through pairing, architecture reviews, and guild talks.'
        ],
        media: {
            tagline: 'Insightful dashboards for enterprise teams',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
                    alt: 'Analytics dashboard mockups',
                    className: 'rounded-xl shadow-2xl max-h-64 object-cover'
                }
            ]
        },
        ctas: [
            { label: 'SaaS Repo', href: 'https://github.com/shaanzeeeee?tab=repositories', variant: 'solid' },
            { label: 'Process Notes', href: 'https://www.linkedin.com/in/mahinuzzaman-shaan/', variant: 'ghost' }
        ]
    },
    {
        id: 'innovatech',
        title: 'Innovatech',
        role: 'Junior Frontend Developer',
        timeframe: 'Jun 2018 - Dec 2019',
        bullets: [
            'Crafted responsive marketing sites and dashboards from high-fidelity Figma files.',
            'Integrated REST APIs to deliver personalised content for enterprise customers.',
            'Built reusable UI patterns that accelerated delivery across five product teams.',
            'Supported production launches by partnering with QA to triage and resolve issues fast.'
        ],
        media: {
            tagline: 'Designing beautiful, modular marketing sites',
            images: [
                {
                    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
                    alt: 'Design and engineering sprint collaboration',
                    className: 'rounded-xl shadow-2xl max-h-64 object-cover'
                }
            ]
        },
        ctas: [
            { label: 'UI Kit Repo', href: 'https://github.com/shaanzeeeee?tab=stars', variant: 'solid' },
            { label: 'Live Preview', href: 'https://codesandbox.io/dashboard/recent', variant: 'ghost' }
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
