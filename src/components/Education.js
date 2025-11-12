import React from 'react';

const Education = () => {
    const timelineData = [
        {
            title: "Master of Science in Software Engineering",
            institution: "Stanford University",
            duration: "Sep 2022 - Jun 2024 (2 yrs)",
            align: "right"
        },
        {
            title: "Bachelor of Science in Computer Science",
            institution: "Massachusetts Institute of Technology (MIT)",
            duration: "Sep 2018 - Jun 2022 (4 yrs)",
            align: "left"
        },
        {
            title: "High School Diploma",
            institution: "Phillips Exeter Academy",
            duration: "Sep 2014 - Jun 2018 (4 yrs)",
            align: "right"
        }
    ];

    return (
        <section id="education" className="animated-bg py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-20">Education</h2>
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
                                                <div className="glass-card rounded-lg p-6">
                                                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                                    <p className="text-gray-400">{item.institution}</p>
                                                    <p className="text-sm text-gray-500 mt-2">{item.duration}</p>
                                                </div>
                                            </div>
                                            <div className="hidden lg:block"></div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="hidden lg:block"></div>
                                            <div className="lg:pl-16">
                                                <div className="glass-card rounded-lg p-6">
                                                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                                                    <p className="text-gray-400">{item.institution}</p>
                                                    <p className="text-sm text-gray-500 mt-2">{item.duration}</p>
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