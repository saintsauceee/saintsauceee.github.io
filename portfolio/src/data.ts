export const EXPERIENCES: Experience[] = [
    {
        company: "Digitech Payments",
        role: "Software Developer Intern",
        period: "July 2025 - Aug. 2025",
        technologies: [
            "Electron.js", "Express", "Pgvector", "LangChain", "GCP", "Python", "Typescript"
        ],
        bullets: [
            "Developed a desktop tool integrating an AI agent with a hybrid RAG system combining vector search and structured queries, using Electron, Express, LangChain, and pgvector, which led to a 20% reduction in customer support resolution time.",
            "Automated the ingestion of hundreds of internal documents per month, using LLM-based chunking, batched embeddings, and optimized pgvector upserts, deployed on Google Compute Engine for high availability and scalability.",
            "Achieved low-latency semantic search via HNSW indexing with reranking strategies for high-relevance responses."
        ]
    },
    {
        company: "Group Imi",
        role: "Software Developer Intern",
        period: "July 2024 - May 2025",
        technologies: [
            "Next.js", "Express", "PostgreSQL", "AWS", "Python", "Typescript"
        ],
        bullets: [
            "Built a web-based AI video editor, showcased at the Vancouver Web Summit (15k+ attendees), combining scene detection, captioning, and planning pipelines to extract key moments from user prompts, saving creators hours of manual review",
            "Deployed FFmpeg services on Google Cloud Run with Pub/Sub orchestration, and designed a Postgres schema (10+ tables) with Row-Level Security and WebSocket synchronization, enabling real-time, and permission-aware video collaboration."
        ]
    }
]

export const PROJECTS: Project[] = [
    {
        title: "Reddit Deep Research",
        description: "Hi",
        tech: "LangGraph, MCP, Next.js, Express, Websockets",
        bullets: [
            "Architected a LangGraph multi-agent deep research system with orchestrator, search, and citation agents.",
            "Built an MCP server for LLM agents to autonomously query and process Reddit data via OAuth integration.",
            "Built a Next.js + Flask interface for real-time agent streams and automated research document generation."
        ]
    },
    {
        title: "LLM Math Reasoning",
        description: "Hi",
        tech: "Reinforcement Learning, Pytorch, HuggingFace Transformers",
        bullets: [
            "Built an end-to-end fine-tuning system with SFT + RL (GRPO) to achieve math reasoning in small LLMs (350M).",
            "Improved GSM8K benchmark accuracy by 22% outperforming standard method (PPO) in convergence speed and stability.",
            "Created a BERT-based verifier reward model to evaluate CoT reasoning for denser and more informative RL feedback."
        ]
    },
    {
        title: "GoEmotions NLP Classifier",
        description: "Hi",
        tech: "PyTorch, HuggingFace Transformers, Scikit-Learn",
        bullets: [
            "Benchmarked traditional ML models (SR, RF, XGB, NB) against finetuned BERT-family LLMs on the GoEmotions dataset (58K Reddit comments over 28 classes), reaching 62% accuracy and 0.50 f1 (8% higher than the original paper’s results).",
            "Built a Naive Bayes classifier from scratch and ran 1.2K grid-search trials on preprocessing, and hyperparameters.",
            "Analyzed compute efficiency vs. accuracy tradeoffs, finding traditional models 10x cheaper with only 5% lower accuracy.",
            "Mapped token-level attention patterns to uncover how LLMs encode emotional context."
        ]
    },
]

export const SKILLS: Skill[] = [
    {
        name: "Programming Languages",
        elements: [
            "Python", "Java", "Typescript", "JavaScript", "C++", "C"
        ]
    },
    {
        name: "Frontend",
        elements: [
            "Next.js", "React", "HTML", "CSS", "Tailwind", "Axios"
        ]
    },
    {
        name: "Backend",
        elements: [
            "Node.js", "Express", "REST APIs", "Websockets", "SQL (PostgreSQL)"
        ]
    },
    {
        name: "AI/ML",
        elements: [
            "PyTorch", "HuggingFace Transformers", "NumPy", "Scikit-Learn", "Matplotlib"
        ]
    },
    {
        name: "Cloud",
        elements: [
            "Google Cloud Platform (Cloud Run, Compute Engine, IAM, Storage)", "AWS (EC2, S3)"
        ]
    },
    {
        name: "Developer Tools",
        elements: [
            "Linux/Unix", "Docker", "Git", "Github Actions"
        ]
    },
]