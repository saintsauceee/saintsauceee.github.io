export const EXPERIENCES: Experience[] = [
    {
        company: "Mila – Quebec AI Institute",
        role: "Research Intern",
        period: "Jan. 2026 – Aug. 2026",
        technologies: [
            "PyTorch", "vLLM", "Kubernetes", "SLURM", "HuggingFace"
        ],
        bullets: [
            "Conducting research on cross-modal representation sharing in unified Vision-Language Models, extracting and steering residual stream directions to test influence of text-derived concepts on image generation and enable fine-grained image editing.",
            "Engineered reproducible PyTorch pipelines for multi-GPU SLURM clusters and orchestrated horizontally-scaled vLLM inference with Kubernetes to parallelize LLM evaluation jobs, reducing end-to-end runtime by 30%.",
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
            "Built and deployed a GenAI-driven tool using hybrid RAG (vector search + structured queries) over the company's knowledge base, reducing average customer support resolution time by 20%, using Electron, Express, LangChain and pgvector.",
            "Engineered a scalable data ingestion pipeline processing 10,000+ internal documents monthly, integrating LLM-based chunking and batched embeddings, with automated deployments on Compute Engine via CI/CD with Docker and GitHub Actions.",
            "Optimized semantic search latency with HNSW indexing and relevance-based reranking to achieve sub-100ms latency.",
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
            "Developed an AI-powered video production tool including captioning and multimodal LLM pipelines for highlight segmentation, demoed at the Vancouver Web Summit (15k+ attendees), reducing manual review time from hours to minutes.",
            "Built a Claude Sonnet powered microservice using AWS Bedrock for AI content generation serving 5K+ user requests daily, implementing tool use, prompt templates, response streaming, and error handling with rate limiting and retry logic.",
            "Designed, implemented and documented 20+ production REST endpoints with Express + TypeScript (payments, auth, video/image generation), and set up secure NGINX SSL and AWS EC2 deployment pipelines.",
        ]
    }
]

export const PROJECTS: Project[] = [
    {
        title: "LLM Math Reasoning with GRPO",
        description: "",
        tech: "LLM Post-Training · Reinforcement Learning · HuggingFace Transformers · PyTorch",
        bullets: [
            "Built an end-to-end post-training pipeline with SFT + RL (GRPO) and LoRA adapters for Qwen2.5-0.5B, implementing a custom GRPO trainer and a BERT-based verifier reward model to score CoT traces with richer RL feedback.",
            "Improved GSM8K accuracy from 4% to 27% (6.75x improvement) with 40% faster convergence than PPO baseline.",
        ]
    },
    {
        title: "Visual CoT for Spatial Planning",
        description: "",
        tech: "GenAI · HuggingFace Transformers · PyTorch",
        bullets: [
            "Engineered a distributed evaluation framework for LLM spatial reasoning using the Rush Hour puzzle with parallel inference and fault-tolerant scheduling, reducing evaluation time from 8 hours to 20 minutes (24x speedup).",
            "Developed an augmented prompting and in-context state simulation approach, combining deterministic execution checks and LLM-as-a-judge analysis to identify illegal moves, state-tracking errors, and qualitative reasoning failures.",
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
            "Python", "TypeScript", "Javascript", "Java", "C", "C++", "SQL", "Bash"
        ]
    },
    {
        name: "Frameworks",
        elements: [
            "Next.js", "React", "Node", "Express", "FastAPI", "WebSockets", "NumPy", "NLTK"
        ]
    },
    {
        name: "Cloud",
        elements: [
            "Google Cloud (Run, Compute Engine, Storage, Vertex AI)", "AWS (EC2, S3)"
        ]
    },
    {
        name: "Developer Tools",
        elements: [
            "Git", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Linux", "Unix"
        ]
    },
]
