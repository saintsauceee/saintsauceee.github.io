'use client'

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ArrowUpRight } from 'lucide-react';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    style?: React.CSSProperties;
}

interface Project {
    title: string;
    description: string;
    tech: string[];
    highlights: string[];
    gradient: string;
}

interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    achievements: string[];
    color: string;
}

const Portfolio: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [activeSection, setActiveSection] = useState<string>('home');
    const [scrollY, setScrollY] = useState<number>(0);
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent): void => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = (): void => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            const sections: string[] = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
            const scrollPos = currentScrollY + 100;
            const newVisibleSections = new Set<string>();

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    const elementTop = offsetTop;
                    const elementBottom = offsetTop + offsetHeight;
                    const windowBottom = currentScrollY + window.innerHeight;

                    // Check if section is visible (even partially)
                    if (windowBottom > elementTop + 100 && currentScrollY < elementBottom) {
                        newVisibleSections.add(section);
                    }

                    // Check for active section
                    if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }

            setVisibleSections(prev => {
                const updated = new Set([...prev, ...newVisibleSections]);
                return updated;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", hover = true, style }) => (
        <div className={`
      relative backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl
      shadow-[0_8px_32px_rgba(0,212,255,0.1)]
      ${hover ? 'hover:bg-white/[0.06] hover:border-cyan-400/20 hover:shadow-[0_8px_32px_rgba(0,212,255,0.2)] transition-all duration-500' : ''}
      ${className}
    `} style={style}>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/[0.03] via-transparent to-fuchsia-400/[0.03]" />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );

    const projects: Project[] = [
        {
            title: "Reddit Deep Research",
            description: "Multi-agent LangGraph system with orchestrator, search/reader/writer agents. Real-time WebSocket streams for live research generation.",
            tech: ["Python", "LangGraph", "MCP", "Next.js", "Express", "WebSockets"],
            highlights: ["Multi-agent orchestration", "OAuth Reddit integration", "Real-time streaming", "Citation-backed research"],
            gradient: "from-cyan-400 to-blue-500"
        },
        {
            title: "LLM Math RL",
            description: "End-to-end reinforcement learning system achieving 22% accuracy boost on GSM8K with 30% faster training than PPO baseline.",
            tech: ["Python", "PyTorch", "HuggingFace", "Reinforcement Learning", "GRPO"],
            highlights: ["22% accuracy improvement", "30% training speedup", "BERT-based verifier", "CoT reasoning evaluation"],
            gradient: "from-purple-400 to-fuchsia-500"
        },
        {
            title: "Biomedical Imaging Classification",
            description: "Deep learning pipeline achieving 92% accuracy through custom CNN architectures and ResNet50 fine-tuning with interpretability features.",
            tech: ["Python", "PyTorch", "NumPy", "Computer Vision", "CNN"],
            highlights: ["92% classification accuracy", "Custom CNN architecture", "Class Activation Mapping", "Medical image analysis"],
            gradient: "from-blue-400 to-purple-500"
        }
    ];

    const experiences: Experience[] = [
        {
            company: "Digitech Payments",
            role: "Software Developer Intern",
            period: "July 2025 – Aug. 2025",
            location: "Montreal, Canada",
            achievements: [
                "Architected ReAct LLM agent system for internal knowledge base and CRM operations using LangChain",
                "Built automated PDF ingestion pipeline with text/image extraction, LLM chunking, and vector embeddings",
                "Optimized pgvector similarity search with HNSW indexing and implemented LLM reranking for better retrieval",
                "Engineered production-ready CI/CD pipeline with GitHub Actions and Docker containerization"
            ],
            color: "cyan"
        },
        {
            company: "Group Imi",
            role: "Software Developer Intern",
            period: "July 2024 – May 2025",
            location: "Montreal, Canada",
            achievements: [
                "Developed web-based video editor with LLM copilot, demonstrated live to 15,000+ attendees at major tech conference",
                "Designed and implemented 10+ table PostgreSQL schema with Row Level Security for multi-tenant access control",
                "Built and deployed scalable FFmpeg video processing microservice on Google Cloud Run with auto-scaling",
                "Integrated Stripe payment system with webhook handling for subscription management and billing automation"
            ],
            color: "purple"
        }
    ];

    const skillCategories: Array<{ category: string; skills: string[]; color: string }> = [
        { category: "Programming Languages", skills: ["Python", "Java", "Typescript", "JavaScript", "C", "C++"], color: "cyan" },
        { category: "Frontend", skills: ["Next.js", "React", "HTML", "CSS", "Tailwind CSS", "Axios", "Vercel"], color: "yellow" },
        { category: "Backend", skills: ["Node.js", "Express", "REST APIs", "Websockets", "SQL (PostgreSQL)"], color: "red" },
        { category: "AI/ML", skills: ["PyTorch", "HuggingFace Transformers", "NumPy", "Pandas", "Scikit-Learn", "NLTK", "Matplotlib", "Seaborn"], color: "purple" },
        { category: "Cloud", skills: ["Google Cloud Platform (Cloud Run, Storage, IAM)", "AWS (EC2, S3)"], color: "fuchsia" },
        { category: "Developer Tools", skills: ["Linux/Unix", "Git", "Github Actions", "Docker", "Pytest"], color: "green" }
    ];

    const navigationItems: string[] = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Enhanced Abstract Background with Particles */}
            <div className="fixed inset-0 z-0">
                {/* Clean base */}
                <div className="absolute inset-0 bg-black" />

                {/* Animated gradient blobs */}
                <div className="absolute top-1/4 right-1/3 w-[600px] h-[400px] opacity-[0.12] blur-3xl animate-pulse"
                    style={{
                        background: 'linear-gradient(135deg, #0EA5E9 0%, #8B5CF6 100%)',
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                        transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`
                    }} />

                <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[300px] opacity-[0.08] blur-2xl"
                    style={{
                        background: 'linear-gradient(45deg, #8B5CF6 0%, #EC4899 100%)',
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        transform: `translateY(${-scrollY * 0.2}px) rotate(${-scrollY * 0.05}deg)`
                    }} />

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${i % 3 === 0 ? 'from-cyan-400 to-blue-500' :
                                i % 3 === 1 ? 'from-purple-400 to-fuchsia-500' :
                                    'from-blue-400 to-cyan-400'
                                } rounded-full opacity-60`}
                            style={{
                                left: `${(i * 73) % 100}%`,
                                top: `${(i * 47) % 100}%`,
                                animation: `float ${8 + (i % 4) * 2}s ease-in-out infinite`,
                                animationDelay: `${i * 0.5}s`,
                                transform: `translateY(${scrollY * (0.1 + i * 0.02)}px)`
                            }}
                        />
                    ))}
                </div>

                {/* Mesh gradient overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `
                        radial-gradient(circle at 25% 25%, #0EA5E9 0%, transparent 50%),
                        radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 50%),
                        radial-gradient(circle at 75% 25%, #EC4899 0%, transparent 50%),
                        radial-gradient(circle at 25% 75%, #0EA5E9 0%, transparent 50%)
                    `
                }} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
                <GlassCard className="px-8 py-4">
                    <div className="flex space-x-8">
                        {navigationItems.map((item: string) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className={`text-sm font-medium transition-all duration-300 ${activeSection === item
                                    ? 'text-cyan-400'
                                    : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                    </div>
                </GlassCard>
            </nav>

            <div className="relative z-10">
                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center justify-center px-6">
                    <div className="text-center max-w-5xl">
                        <div className="mb-8">
                            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
                                <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                                    Donghao
                                </span>
                            </h1>
                            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                    Zeng
                                </span>
                            </h1>
                        </div>

                        <p className="text-2xl md:text-3xl mb-6 text-gray-300 font-light animate-fadeInUp" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                            I love doing matrix multiplications.
                        </p>

                        <p className="text-lg text-gray-400 mb-0 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                            Computer Science student at McGill University crafting intelligent systems
                        </p>
                        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                            with LLMs, RL, and web technologies!
                        </p>

                        <div className="flex justify-center space-x-8 mb-16 animate-fadeInUp" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
                            <a href="mailto:t.donghao.zeng@gmail.com"
                                className="group flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                                <span>Email</span>
                            </a>
                            <a href="https://linkedin.com/in/donghao-zeng"
                                className="group flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/saintsauceee"
                                className="group flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-110">
                                <Github size={20} className="group-hover:scale-110 transition-transform" />
                                <span>GitHub</span>
                            </a>
                        </div>

                        <div className="flex justify-center animate-fadeInUp" style={{ animationDelay: '1.1s', animationFillMode: 'both' }}>
                            <button onClick={() => scrollToSection('about')} className="group">
                                <GlassCard className="px-8 py-4 inline-block hover:scale-105 transition-all duration-300">
                                    <span className="flex items-center space-x-2 text-cyan-400 group-hover:text-white transition-colors">
                                        <span>Explore My Work</span>
                                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </GlassCard>
                            </button>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-32 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className={`text-5xl font-bold mb-20 text-center transition-all duration-1000 ${visibleSections.has('about')
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                            }`}>
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                About Me
                            </span>
                        </h2>

                        <div className="grid lg:grid-cols-2 gap-12">
                            <GlassCard className={`p-8 transition-all duration-1000 delay-200 ${visibleSections.has('about')
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-8'
                                }`}>
                                <div className="flex items-center mb-6">
                                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4"></div>
                                    <h3 className="text-2xl font-semibold text-cyan-400">Education</h3>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xl font-medium text-white">McGill University</h4>
                                    <p className="text-gray-300">Bachelor of Science in Computer Science (Honours)</p>
                                    <p className="text-gray-400">Expected Graduation: May 2027</p>
                                    <p className="text-gray-400">Montreal, Quebec, Canada</p>
                                </div>
                            </GlassCard>

                            <GlassCard className={`p-8 transition-all duration-1000 delay-400 ${visibleSections.has('about')
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-8'
                                }`}>
                                <div className="flex items-center mb-6">
                                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-full mr-4"></div>
                                    <h3 className="text-2xl font-semibold text-purple-400">Specializations</h3>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-cyan-300 mb-3">Artificial Intelligence</h4>
                                        <p className="text-sm text-gray-300 leading-relaxed">
                                            Large Language Models, Reinforcement Learning, Computer Vision,
                                            Multi-Agent Systems, Vector Databases
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-purple-300 mb-3">Software Engineering</h4>
                                        <p className="text-sm text-gray-300 leading-relaxed">
                                            Full-Stack Development, Cloud Architecture, DevOps,
                                            Distributed Systems, API Design
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-32 px-6 bg-gradient-to-b from-transparent via-slate-950/20 to-transparent">
                    <div className="max-w-6xl mx-auto">
                        <h2 className={`text-5xl font-bold mb-20 text-center transition-all duration-1000 ${visibleSections.has('experience')
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                            }`}>
                            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Experience
                            </span>
                        </h2>

                        <div className="space-y-12">
                            {experiences.map((exp: Experience, index: number) => (
                                <GlassCard key={index} className={`p-8 transition-all duration-1000 ${visibleSections.has('experience')
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                    }`} style={{ transitionDelay: `${(index + 1) * 200}ms` }}>
                                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                                        <div className="flex items-center mb-4 lg:mb-0">
                                            <div className={`w-3 h-3 rounded-full mr-4 ${exp.color === 'cyan' ? 'bg-gradient-to-r from-cyan-400 to-cyan-600' :
                                                'bg-gradient-to-r from-purple-400 to-purple-600'
                                                }`}></div>
                                            <div>
                                                <h3 className={`text-2xl font-semibold ${exp.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                                                    }`}>{exp.company}</h3>
                                                <p className="text-xl text-gray-300">{exp.role}</p>
                                                <p className="text-gray-400">{exp.location}</p>
                                            </div>
                                        </div>
                                        <div className={`px-4 py-2 rounded-full ${exp.color === 'cyan' ? 'bg-cyan-400/10 border border-cyan-400/20' :
                                            'bg-purple-400/10 border border-purple-400/20'
                                            }`}>
                                            <p className={`font-medium text-sm ${exp.color === 'cyan' ? 'text-cyan-300' : 'text-purple-300'
                                                }`}>{exp.period}</p>
                                        </div>
                                    </div>

                                    <div className="grid gap-4">
                                        {exp.achievements.map((achievement: string, i: number) => (
                                            <div key={i} className="flex items-start space-x-3 group">
                                                <div className={`w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform ${exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-purple-400'
                                                    }`}></div>
                                                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">{achievement}</p>
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-32 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className={`text-5xl font-bold mb-20 text-center transition-all duration-1000 ${visibleSections.has('projects')
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                            }`}>
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Featured Projects
                            </span>
                        </h2>

                        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {projects.map((project: Project, index: number) => (
                                <GlassCard key={index} className={`p-8 group cursor-pointer h-full flex flex-col hover:scale-105 transition-all duration-500 ${visibleSections.has('projects')
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                    }`} style={{ transitionDelay: `${(index + 1) * 200}ms` }}>
                                    <div className="flex items-center mb-4">
                                        <div className={`w-3 h-3 bg-gradient-to-r ${project.gradient} rounded-full mr-4`}></div>
                                        <h3 className={`text-xl font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{project.description}</p>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-cyan-300 mb-3">Key Highlights</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {project.highlights.map((highlight: string, i: number) => (
                                                <div key={i} className="text-xs text-gray-400 flex items-center">
                                                    <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                                                    {highlight}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech: string, i: number) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills Section - Compact */}
                <section id="skills" className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className={`text-3xl font-bold mb-12 text-center transition-all duration-1000 ${visibleSections.has('skills')
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-8'
                            }`}>
                            <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                                Technical Skills
                            </span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 mb-24">
                            {skillCategories.map((skillGroup, index: number) => (
                                <GlassCard key={index} className={`p-6 group hover:scale-105 transition-all duration-700 ${visibleSections.has('skills')
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                    }`} style={{ transitionDelay: `${(index + 1) * 200}ms` }}>
                                    <h3 className={`text-lg font-semibold mb-4 ${skillGroup.color === 'cyan' ? 'text-cyan-400' :
                                        skillGroup.color === 'yellow' ? 'text-yellow-400' :
                                            skillGroup.color === 'red' ? 'text-red-400' :
                                                skillGroup.color === 'purple' ? 'text-purple-400' :
                                                    skillGroup.color === 'fuchsia' ? 'text-fuchsia-400' :
                                                        skillGroup.color === 'green' ? 'text-green-400' :
                                                            'text-fuchsia-400'
                                        }`}>{skillGroup.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.skills.map((skill: string, i: number) => (
                                            <span key={i} className={`px-3 py-1 rounded-full text-sm text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 cursor-default ${skillGroup.color === 'cyan' ? 'bg-cyan-400/10 border border-cyan-400/20 hover:bg-cyan-400/20' :
                                                skillGroup.color === 'yellow' ? 'bg-yellow-400/10 border border-yellow-400/20 hover:bg-yellow-400/20' :
                                                    skillGroup.color === 'red' ? 'bg-red-400/10 border border-red-400/20 hover:bg-red-400/20' :
                                                        skillGroup.color === 'purple' ? 'bg-purple-400/10 border border-purple-400/20 hover:bg-purple-400/20' :
                                                            skillGroup.color === 'fuchsia' ? 'bg-fuchsia-400/10 border border-fuchsia-400/20 hover:bg-fuchsia-400/20' :
                                                                skillGroup.color === 'green' ? 'bg-green-400/10 border border-green-400/20 hover:bg-green-400/20' :
                                                                    'bg-fuchsia-400/10 border border-fuchsia-400/20 hover:bg-fuchsia-400/20'
                                                }`}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Portfolio;