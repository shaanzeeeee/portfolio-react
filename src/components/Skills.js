import React from 'react';
import {
    SiTypescript,
    SiJavascript,
    SiGo,
    SiPostgresql,
    SiMongodb,
    SiApachekafka,
    SiGraphql,
    SiGithub,
    SiVuedotjs,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiFigma,
    SiAmazonwebservices,
    SiDocker,
    SiKubernetes,
    SiVercel,
    SiTerraform,
    SiDatadog
} from 'react-icons/si';

const skillsData = {
    backend: [
        { name: "TypeScript", glow: 'indigo', icon: <SiTypescript className="text-[#3178c6]" aria-hidden="true" /> },
        { name: "JavaScript", glow: 'amber', icon: <SiJavascript className="text-[#f7df1e]" aria-hidden="true" /> },
        { name: "Go", glow: 'aqua', icon: <SiGo className="text-[#00add8]" aria-hidden="true" /> },
        { name: "PostgreSQL", glow: 'indigo', icon: <SiPostgresql className="text-[#4169e1]" aria-hidden="true" /> },
        { name: "MongoDB", glow: 'emerald', icon: <SiMongodb className="text-[#47a248]" aria-hidden="true" /> },
        { name: "Apache Kafka", glow: 'magenta', icon: <SiApachekafka className="text-[#231f20]" aria-hidden="true" /> },
        { name: "GraphQL", glow: 'magenta', icon: <SiGraphql className="text-[#e10098]" aria-hidden="true" /> },
        { name: "GitHub", glow: 'indigo', icon: <SiGithub className="text-white" aria-hidden="true" /> }
    ],
    frontend: [
        { name: "Vue.js", glow: 'emerald', icon: <SiVuedotjs className="text-[#42b883]" aria-hidden="true" /> },
        { name: "React", glow: 'aqua', icon: <SiReact className="text-[#61dafb]" aria-hidden="true" /> },
        { name: "Next.js", glow: 'indigo', icon: <SiNextdotjs className="text-white" aria-hidden="true" /> },
        { name: "Tailwind CSS", glow: 'aqua', icon: <SiTailwindcss className="text-[#06b6d4]" aria-hidden="true" /> },
        { name: "Figma", glow: 'magenta', icon: <SiFigma className="text-[#f24e1e]" aria-hidden="true" /> }
    ],
    cloud: [
    { name: "Amazon Web Services", glow: 'amber', icon: <SiAmazonwebservices className="text-[#ff9900]" aria-hidden="true" /> },
        { name: "Docker", glow: 'aqua', icon: <SiDocker className="text-[#2496ed]" aria-hidden="true" /> },
        { name: "Kubernetes", glow: 'indigo', icon: <SiKubernetes className="text-[#326ce5]" aria-hidden="true" /> },
        { name: "Vercel", glow: 'indigo', icon: <SiVercel className="text-white" aria-hidden="true" /> },
        { name: "Terraform", glow: 'magenta', icon: <SiTerraform className="text-[#7b42bc]" aria-hidden="true" /> },
        { name: "Datadog", glow: 'magenta', icon: <SiDatadog className="text-[#632ca6]" aria-hidden="true" /> }
    ],
    management: ["Agile", "Scrum", "Jira", "Office", "Notion"]
};

const SkillCard = ({ title, description, skills, isIcon = false }) => (
    <div className="glass-card rounded-2xl p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <div className="flex flex-wrap gap-4 items-center">
            {isIcon ? (
                skills.map(skill => (
                    <div key={skill.name} className="skill-icon-wrapper" data-tooltip={skill.name} data-glow={skill.glow || 'emerald'}>
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
                    <div className="flex justify-center mb-12">
                        <h2 className="section-title">Skills</h2>
                    </div>
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