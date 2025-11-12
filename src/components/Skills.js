import React from 'react';

const skillsData = {
    backend: [
        { name: "TypeScript", icon: <svg className="text-[#3178c6]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M1.5 0 h21 l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z m18.434 4.156H5.066 l.612 6.888h12.132 l-.612 6.888L12 19.438l-4.2-1.125-.27-3.047h2.2l.135 1.518L12 17.2l2.673-.72.27-3.047H7.2l-.613-6.888h12.133l-.26 2.91z"/></svg> },
        { name: "JavaScript", icon: <svg className="text-black bg-yellow-400 p-0.5 rounded" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21.16 12.86c0-1.25-.2-2.45-.58-3.56l-1.45 1.84c.38 1.11.58 2.31.58 3.56 0 3.37-1.46 6.31-3.92 8.19l1.09 1.94C19.78 21.3 21.16 17.39 21.16 12.86zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.77 0 3.44-.45 4.95-1.24l-1.09-1.94C14.82 19.45 13.45 20 12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8c2.03 0 3.9.78 5.28 2.05L15.2 8H9v2h8v-1.6l-2.07-2.07C18.4 4.54 15.4 3 12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c2.39 0 4.56-.94 6.16-2.48l1.45 1.83C17.65 20.94 14.98 22 12 22c-5.52 0-10-4.48-10-10S6.48 2 12 2z"/></svg> },
        { name: "Go", icon: <svg className="text-[#00add8]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12.433.001H0v12.432h11.567V8.12H8.12V4.303h7.62v8.12h-3.448v4.304h6.896V.001h-6.755z"/></svg> },
        { name: "PostgreSQL", icon: <svg className="text-[#4169e1]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM8.4 17.2V6.8h2.8v4.8h2.4V6.8h2.8v10.4h-2.8v-4.8h-2.4v4.8H8.4z"/></svg> },
        { name: "MongoDB", icon: <svg className="text-[#47a248]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.08V7.91c0-.49.39-.89.88-.89h.24c.49 0 .88.4.88.89v8.17c0 .49-.39.89-.88.89h-.24c-.49 0-.88-.4-.88-.89zm-3.5-3.08V9.92c0-.49.39-.89.88-.89h.24c.49 0 .88.4.88.89v4.16c0 .49-.39.89-.88.89h-.24c-.49 0-.88-.4-.88-.89z"/></svg> },
        { name: "Kafka", icon: <svg className="text-white" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M8.2 3.1L3.5 6l4.2 3.3.4-.6-3.2-2.5 3-2.6zm6.3 0l-3.2 10.1 1.2.4 3.2-10.1zM18 6.4l-4.7 3.9.7.8 5.2-4.2-.6-.9zm-1.8 7.3l-2 1.6.7.8 2-1.6z"/></svg> },
        { name: "GraphQL", icon: <svg className="text-[#e10098]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM6 12l6-6 6 6-6 6-6-6zm1.2 0l4.8-4.8 4.8 4.8-4.8 4.8-4.8-4.8z"/></svg> },
        { name: "GitHub", icon: <svg className="text-white" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.958-.266 1.983-.399 3.003-.404 1.02.005 2.045.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.795 24 17.303 24 12c0-6.627-5.373-12-12-12z"/></svg> }
    ],
    frontend: [
        { name: "Vue.js", icon: <svg className="text-[#4fc08d]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg> },
        { name: "React", icon: <svg className="text-[#61dafb]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" /></svg> },
        { name: "Next.js", icon: <svg className="text-white" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12.98 4.99a.998.998 0 00-1.022.998v9.043c0 .55.456.998 1.01.998.56 0 1.022-.447 1.022-.998V5.988c0-.55-.46-.998-1.01-.998zm-2.032.01L6.99 18.006h2.012l1.95-6.04-.467-1.928-1.514 8.006h2.025l3.027-13.018H10.95z"/></svg> },
        { name: "Tailwind CSS", icon: <svg className="text-[#06b6d4]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12.91,2.58C13.25,2,13.13,1.38,12.63,1C12,0.5,11.13,0.63,10.88,1.25L4.09,16.58C3.75,17.25,4.38,18,5,18H10.5C10.91,18,11.25,17.66,11.25,17.25C11.25,16.84,10.91,16.5,10.5,16.5H6.83L12.91,2.58M19.91,2.58C20.25,2,20.13,1.38,19.63,1C19,0.5,18.13,0.63,17.88,1.25L11.09,16.58C10.75,17.25,11.38,18,12,18H17.5C17.91,18,18.25,17.66,18.25,17.25C18.25,16.84,17.91,16.5,17.5,16.5H13.83L19.91,2.58Z"/></svg> },
        { name: "Figma", icon: <svg className="text-[#f24e1e]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M15.5,7A1.5,1.5 0 0,0 14,8.5A1.5,1.5 0 0,0 15.5,10A1.5,1.5 0 0,0 17,8.5A1.5,1.5 0 0,0 15.5,7M8.5,7A1.5,1.5 0 0,0 7,8.5A1.5,1.5 0 0,0 8.5,10A1.5,1.5 0 0,0 10,8.5A1.5,1.5 0 0,0 8.5,7M8.5,14A1.5,1.5 0 0,0 7,15.5A1.5,1.5 0 0,0 8.5,17A1.5,1.5 0 0,0 10,15.5A1.5,1.5 0 0,0 8.5,14M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg> }
    ],
    cloud: [
        { name: "Amazon AWS", icon: <svg className="text-[#ff9900]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12.96 11.23c-1.3-1.12-2.03-2.73-2.03-4.43 0-1.89 1-3.6 2.58-4.66l.2-.14-.2.14C12.12 1.1 10.1 0 7.82 0 3.49 0 0 3.49 0 7.82c0 4.19 3.29 7.62 7.42 7.8l.2.01.2-.01c.2 0 .4-.01.6-.02l.19-.02c.18-.02.37-.04.55-.07.01 0 .01 0 .02 0l-2.04-1.75c-.53-.45-1.22-.6-1.92-.38-.91.29-1.58 1.1-1.58 2.08 0 1.2.98 2.18 2.18 2.18s2.18-.98 2.18-2.18c0-.02 0-.04 0-.06L12.96 11.23zM8.02 18.25c.34 0 .67.04 1 .1.35.07.68.16 1.01.28l.1.04.1.04c.18.08.35.17.52.27l.15.09.15.1c.14.1.28.2.4.32l.02.02.01.01c2.19 1.83 5.09 2.8 8.16 2.8 4.33 0 7.82-3.49 7.82-7.82S20.5 3.49 16.17 3.49c-2.3 0-4.34 1-5.81 2.58l-.2.22.2-.22c-1.4 1.25-2.27 3-2.27 4.95 0 1.7.53 3.28 1.45 4.58l2.03 1.74c.54.46 1.24.61 1.95.4.92-.28 1.6-1.1 1.6-2.09 0-1.2-.98-2.18-2.18-2.18s-2.18.98-2.18 2.18c0 .02 0 .03 0 .05l-.01.3z"/></svg> },
        { name: "Docker", icon: <svg className="text-[#2496ed]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M23.36 6.84c-1.39-2.03-3.56-3.52-6.08-4.25l-2.73 2.87c.6.14 1.18.35 1.73.6l1.35-1.4c1.1.48 2.07 1.15 2.88 1.96l-1.35 1.4c-.81-.81-1.78-1.48-2.88-1.96l-1.35 1.4c.55.25 1.13.46 1.73.6l-2.73 2.87c-2.52-.73-4.69-2.22-6.08-4.25L.64 12l5.04 5.16c2.52.73 4.69 2.22 6.08 4.25l2.73-2.87c-.6-.14-1.18-.35-1.73-.6l-1.35 1.4c-1.1-.48-2.07-1.15-2.88-1.96l1.35-1.4c.81.81 1.78 1.48 2.88 1.96l1.35-1.4c-.55-.25-1.13-.46-1.73-.6l2.73-2.87c2.52.73 4.69 2.22 6.08 4.25L23.36 12 18.32 6.84z"/></svg> },
        { name: "Kubernetes", icon: <svg className="text-[#326ce5]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M9,9V15H15V9H9M11,11H13V13H11V11Z"/></svg> },
        { name: "Vercel", icon: <svg className="text-white" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12 0L24 21.6H0L12 0z"/></svg> },
        { name: "Terraform", icon: <svg className="text-[#7b42bc]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M4.8 0v7.2h7.2V0H4.8zM12 2.4v4.8H7.2V2.4H12zm0 7.2v7.2h7.2V9.6H12zm4.8 4.8H12v-4.8h4.8v4.8z"/></svg> },
        { name: "Datadog", icon: <svg className="text-[#632ca6]" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12,2C10.89,2 10,2.89 10,4H14A2,2 0 0,0 12,2M18,6H6V18H18V6M4,4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.11,4 20,4H16A4,4 0 0,1 12,0A4,4 0 0,1 8,4H4Z"/></svg> }
    ],
    management: ["Agile", "Scrum", "Jira", "Office"]
};

const SkillCard = ({ title, description, skills, isIcon = false }) => (
    <div className="glass-card rounded-2xl p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <div className="flex flex-wrap gap-4 items-center">
            {isIcon ? (
                skills.map(skill => (
                    <div key={skill.name} className="skill-icon-wrapper" data-tooltip={skill.name}>
                        {skill.icon}
                    </div>
                ))
            ) : (
                skills.map(skill => (
                    <span key={skill} className="bg-emerald-900/50 text-emerald-300 px-4 py-2 rounded-lg font-semibold">
                        {skill}
                    </span>
                ))
            )}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="animated-bg py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <SkillCard title="Backend" description="I love problem-solving and building complex systems. I strive to create scalable, reliable, and secure solutions." skills={skillsData.backend} isIcon={true} />
                    <SkillCard title="Frontend & Design" description="I'm passionate about design, animation, and interactions, always aiming to build fun websites with great user experiences." skills={skillsData.frontend} isIcon={true} />
                    <SkillCard title="Cloud & DevOps" description="I have deployed and managed various applications using tools such as AWS, GCP, and other cloud services." skills={skillsData.cloud} isIcon={true} />
                    <SkillCard title="Management" description="I have worked with multiple clients and stakeholders to define projects that suit their needs and have led these projects." skills={skillsData.management} />
                </div>
            </div>
        </section>
    );
};

export default Skills;