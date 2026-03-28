export const EXPERIENCES: Experience[] = [
    {
        company: "Mila – Quebec AI Institute",
        role: "LLM Research Intern",
        period: "January 2026 – Present",
        technologies: [
            "PyTorch", "Docker", "HuggingFace", "Multi-GPU", "LLM Evaluation"
        ],
        bullets: [
            "Built a multi-gpu inference pipeline with PyTorch for activation steering experiments on unified multimodal LLMs, executing large-scale evaluation sweeps across concepts, prompts, and scaling parameters (180k+ samples).",
            "Engineered a 133x performance optimization (from 400+ hours to <3 hours) for autoregressive image generation by architecting a batched, data-parallel pipeline on a SLURM-managed HPC cluster, leveraging KV caching and preallocated attention masks.",
            "Implemented low-level activation steering via PyTorch forward hooks, injecting training-free steering vectors into transformer hidden states at inference time for fine-grained control of image generation attributes (e.g., age, emotion, color).",
        ]
    },
    {
        company: "Digitech Payments",
        role: "Software Developer Intern",
        period: "July 2025 – August 2025",
        technologies: [
            "Electron.js", "Express", "LangChain", "pgvector", "Docker", "GCP", "Python", "TypeScript"
        ],
        bullets: [
            "Shipped a GenAI + hybrid RAG-powered tool over the company's knowledge base to assist a 25+ member customer support team on live calls. Cut average resolution time by 20%. Built with LangChain, pgvector, Electron (React), and Express.",
            "Engineered a data ingestion pipeline processing 10k+ internal documents/month using LLM chunking, batched embeddings, and asynchronous processing. Deployed on Google Compute Engine with Terraform, Docker, and GitHub Actions.",
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
            "Led the development of a fullstack video production platform integrating video captioning and multimodal LLM pipelines for highlight segmentation, reducing manual footage review time by 85%. Demoed at Vancouver Web Summit (15k+ attendees).",
            "Developed a Claude Sonnet-powered microservice using AWS Bedrock for AI content generation serving 5K+ user requests daily, implementing tool use, prompt templates, streaming responses, fault-tolerant retries, and rate limiting.",
            "Implemented 20+ production REST APIs with Express + TypeScript supporting payments, auth, and image/video generation, deployed via CI/CD (Docker + GitHub Actions) to AWS EC2 with nginx and SSL termination.",
            "Owned production reliability, diagnosing and resolving issues through logging, monitoring, and systematic debugging.",
        ]
    }
]

export const PROJECTS: Project[] = [
    {
        title: "Thread Lens",
        description: "",
        tech: "LangGraph · MCP · Next.js · FastAPI · Redis · PostgreSQL",
        bullets: [
            "Developed a multi-agent deep research system that processes and analyzes large-scale Reddit discussion data, decomposing queries into research tasks executed by parallel worker agents and synthesizing findings into structured reports.",
        ]
    },
    {
        title: "C Compiler",
        description: "",
        tech: "Java · Compiler Design · MIPS Assembly",
        bullets: [
            "Built a mini C compiler in Java targeting MIPS assembly, implementing a handwritten lexer, recursive-descent parser, semantic analyzer, code generator, and register allocator. Validated against 450+ unit and integration tests across all compilation stages.",
        ]
    },
]

export const SKILLS: Skill[] = [
    {
        name: "AI/ML",
        elements: [
            "PyTorch", "Scikit-Learn", "Hugging Face", "LLM Post-Training (SFT, RL, PEFT)", "Embeddings", "RAG"
        ]
    },
    {
        name: "Programming Languages",
        elements: [
            "Python", "TypeScript", "JavaScript", "Java", "C/C++", "SQL (Postgres)", "Bash", "HTML/CSS"
        ]
    },
    {
        name: "Frameworks",
        elements: [
            "Node.js", "Express", "FastAPI", "React", "Next.js", "LangChain/LangGraph"
        ]
    },
    {
        name: "Tools",
        elements: [
            "Git", "GitHub Actions", "Docker", "Terraform", "AWS", "Google Cloud Platform", "Linux"
        ]
    },
]
