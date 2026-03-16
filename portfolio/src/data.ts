export const EXPERIENCES: Experience[] = [
    {
        company: "Mila – Quebec AI Institute",
        role: "AI Research Intern",
        period: "Jan. 2026 – Present",
        technologies: [
            "PyTorch", "Docker", "HuggingFace", "Multi-GPU", "LLM Evaluation"
        ],
        bullets: [
            "Conducting research on cross-modal representation sharing in unified Vision-Language Models, extracting and steering residual stream directions to study how text-derived concepts influence fine-grained image generation and editing.",
            "Engineered reproducible PyTorch experimentation pipelines on multi-GPU clusters with Docker, implementing activation steering and LLM-based evaluation pipelines. Applied GPU profiling to improve experiment throughput by 35%.",
            "Collaborated with senior researchers to iteratively design, evaluate, and refine experimental methodologies.",
        ]
    },
    {
        company: "Digitech Payments",
        role: "Software Developer Intern",
        period: "July 2025 – Aug. 2025",
        technologies: [
            "Electron.js", "Express", "LangChain", "pgvector", "Docker", "GCP", "Python", "TypeScript"
        ],
        bullets: [
            "Built and deployed a GenAI-driven tool using hybrid RAG (vector search + structured queries) over the company's knowledge base, reducing average customer support resolution time by 25% using Electron, Express, LangChain and pgvector.",
            "Engineered a document ingestion pipeline processing 10k+ internal documents per month using LLM chunking and batched embeddings, deployed on Google Compute Engine via CI/CD with Docker + GitHub Actions.",
        ]
    },
    {
        company: "Group Imi",
        role: "Software Developer Intern",
        period: "July 2024 – May 2025",
        technologies: [
            "Next.js", "Express", "TypeScript", "AWS Bedrock", "PostgreSQL", "AWS", "Python"
        ],
        bullets: [
            "Shipped a fullstack video production platform integrating video captioning and multimodal LLM pipelines for highlight segmentation, reducing manual footage review time by 85%. Demoed at the Vancouver Web Summit (15k+ attendees).",
            "Developed a Claude Sonnet-powered microservice using AWS Bedrock for AI content generation serving 5K+ user requests daily, implementing tool use, prompt templates, streaming responses, rate limiting, and fault-tolerant retries.",
            "Implemented 20+ production REST API endpoints with Express + TypeScript (payments, auth, image/video generation), deployed via automated pipelines to AWS EC2 with secure NGINX SSL termination.",
        ]
    }
]

export const PROJECTS: Project[] = [
    {
        title: "Thread Lens",
        description: "",
        tech: "Multi-Agent Systems · LLM APIs · Python",
        bullets: [
            "Built a multi-agent deep research system for Reddit, where a planner agent decomposes user prompts into research tasks executed by parallel worker agents that analyze discussion threads and synthesize findings into structured reports.",
        ]
    },
    {
        title: "C Compiler",
        description: "",
        tech: "Java · Compiler Design · MIPS Assembly",
        bullets: [
            "Built a mini C compiler in Java targeting MIPS assembly instructions, implementing a handwritten lexer, recursive-descent parser, semantic analyzer, code generator, and register allocator.",
        ]
    },
]

export const SKILLS: Skill[] = [
    {
        name: "AI/ML",
        elements: [
            "PyTorch", "Scikit-Learn", "HuggingFace", "LLM Post-Training (SFT, RL, PEFT)", "Embeddings", "RAG"
        ]
    },
    {
        name: "Programming Languages",
        elements: [
            "Python", "TypeScript", "JavaScript", "Java", "C/C++", "SQL", "Bash"
        ]
    },
    {
        name: "Frameworks",
        elements: [
            "Node.js", "Express", "FastAPI", "WebSockets", "React", "Next.js", "HTML", "CSS"
        ]
    },
    {
        name: "Cloud",
        elements: [
            "Google Cloud (Run, Compute Engine, Storage)", "AWS (EC2, S3)"
        ]
    },
    {
        name: "Developer Tools",
        elements: [
            "Git", "Docker", "Terraform", "GitHub Actions", "Unix/Linux"
        ]
    },
]
