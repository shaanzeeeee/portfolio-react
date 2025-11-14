import React, { useEffect, useMemo, useState } from 'react';

const Education = () => {
    const glyphSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZあいうえおカキクケコ';

    const baseMatrixColumns = useMemo(() => {
        const totalColumns = 32;
        const columns = [];

        for (let i = 0; i < totalColumns; i += 1) {
            const length = 24 + Math.floor(Math.random() * 18);
            columns.push({
                id: `matrix-${i}`,
                length,
                content: Array.from({ length }, () => glyphSet[Math.floor(Math.random() * glyphSet.length)]).join(''),
                left: 2 + Math.random() * 96,
                duration: 12 + Math.random() * 10,
                delay: -Math.random() * 24,
                fontSize: 16 + Math.random() * 12,
                opacity: 0.45 + Math.random() * 0.4,
                hue: 115 + Math.random() * 35,
                blur: 0.5 + Math.random() * 0.7,
            });
        }

        return columns;
    }, [glyphSet]);

    const [matrixColumns, setMatrixColumns] = useState(baseMatrixColumns);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setMatrixColumns(prevColumns => prevColumns.map(column => {
                const chars = column.content.split('');
                const mutations = Math.max(1, Math.floor(chars.length * 0.3));

                for (let i = 0; i < mutations; i += 1) {
                    const index = Math.floor(Math.random() * chars.length);
                    chars[index] = glyphSet[Math.floor(Math.random() * glyphSet.length)];
                }

                // Only update the column content here. Avoid mutating the hue on every
                // interval because frequent inline style updates (CSS variables)
                // can trigger animation restarts in some browsers.
                return {
                    ...column,
                    content: chars.join(''),
                };
            }));
        }, 220);

        return () => window.clearInterval(interval);
    }, [glyphSet]);

    const timelineData = [
        {
            title: "Bachelor of Science in Computer Science",
            institution: "BRAC University",
            grade: "CGPA: 3.56/4.00",
            align: "right"
        },
        {
            title: "Higher Secondary Certificate (HSC)",
            institution: "Dr. Mahbubur Rahman Mollah College",
            grade: "GPA: 5.00/5.00",
            align: "left"
        },
        {
            title: "Secopndary School Certificate (SSC)",
            institution: "Ideal School and College",
            grade: "GPA: 5.00/5.00",
            align: "right"
        }
    ];

    return (
    <section id="education" className="animated-bg py-20 scroll-reveal section-anchor" style={{ '--reveal-delay': '160ms' }}>
            <div className="matrix-backdrop" aria-hidden="true">
                {matrixColumns.map((column) => (
                    <span
                        key={column.id}
                        className="matrix-column"
                        style={{
                            left: `${column.left}%`,
                            animationDuration: `${column.duration}s`,
                            animationDelay: `${column.delay}s`,
                            fontSize: `${column.fontSize}px`,
                            '--matrix-opacity': column.opacity,
                            '--matrix-hue': `${column.hue}`,
                            '--matrix-blur': column.blur,
                        }}
                    >
                        {column.content}
                    </span>
                ))}
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mb-20">
                    <h2 className="section-title">Education</h2>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute top-0 h-full w-0.5 left-4 lg:left-1/2 lg:-translate-x-px timeline-line"></div>
                    
                    <div className="space-y-20">
                        {timelineData.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="timeline-diamond absolute top-1/2 -translate-y-1/2 left-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-900 border-2 border-emerald-500 rotate-45"></div>
                                <div className="pl-16 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-16">
                                    {item.align === 'right' ? (
                                        <>
                                            <div className="lg:text-right lg:pr-16">
                                                <div className="glass-card rounded-lg p-6 scroll-reveal" style={{ '--reveal-delay': `${index * 150}ms` }}>
                                                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                                    <p className="text-gray-400">{item.institution}</p>
                                                    <p className="text-sm text-gray-500 mt-2 font-bold">{item.grade}</p>
                                                </div>
                                            </div>
                                            <div className="hidden lg:block"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="hidden lg:block"></div>
                                            <div className="lg:pl-16">
                                                <div className="glass-card rounded-lg p-6 scroll-reveal" style={{ '--reveal-delay': `${index * 150}ms` }}>
                                                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                                    <p className="text-gray-400">{item.institution}</p>
                                                    <p className="text-sm text-gray-500 mt-2 font-bold">{item.grade}</p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;