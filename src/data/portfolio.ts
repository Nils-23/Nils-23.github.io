export const profile = {
    name: "AKONKWA LWAMBWA NILS",
    title: "Software Engineer",
    tagline: "Building resilient systems at the intersection of automation, ML, and product.",
    description: "Software Engineer with hands-on experience building real-world systems across automation, applied ML, and product engineering. I prioritize discipline, long-term thinking, and calm confidence.",
    social: {
        email: "nilsako8@gmail.com",
        github: "https://github.com/Nils-23",
        linkedin: "https://linkedin.com/in/[linkedin-username]",
        resume: "/resume.pdf", // Path to the resume PDF
    },
};

export const about = {
    intro: "I approach software with a builder's mindset—focusing on systems, clarity, and long-term solutions.",
    philosophy: [
        "I believe in building systems that last. My work isn't just about writing code; it's about understanding the problem space deeply and designing solutions that are robust and scalable.",
        "Experience across automation, machine learning, and product engineering has taught me that the best solutions often come from the intersection of disciplines. I enjoy the challenge of learning new domains and shipping value.",
        "I value a calm, disciplined approach to engineering. No hype, no fluff—just consistent, high-quality execution.",
    ],
};

export const projects = [
    {
        slug: "telegram-loan-system",
        title: "Human-in-the-Loop Telegram Loan System",
        description: "Workflow-based automation with human decision checkpoints for risk control.",
        status: "In Progress",
        tech: ["n8n", "Telegram API", "Node.js"],
        liveUrl: "[Live Demo URL]",
        sourceUrl: "[GitHub URL]",
        image: "/images/projects/telegram-loan.png", // Optional screenshot placeholder
        details: {
            problem: "Managing micro-loans requires automated processing but high-stakes decisions need human oversight.",
            approach: "Designed a hybrid system using n8n workflows that orchestrate the loan process. Routine tasks are automated, while critical risk assessments trigger a Telegram bot to request human approval.",
            outcome: "Streamlined loan processing while maintaining strict risk controls. The system allows for rapid scaling of loan volume without losing the safety of manual review.",
            learnings: "Orchestrating async human-machine interaction requires robust state management and timeout handling.",
        },
    },
    {
        slug: "swahili-conversational-ai",
        title: "Swahili Conversational AI Bot",
        description: "Local LLaMA & Distil models focused on language accessibility and performance.",
        status: "Completed",
        tech: ["PyTorch", "Hugging Face", "FastAPI", "Docker"],
        liveUrl: "[Live Demo URL]",
        sourceUrl: "[GitHub URL]",
        image: "/images/projects/swahili-ai.png", // Optional screenshot placeholder
        details: {
            problem: "Most LLMs lack high-quality support for African languages like Swahili, limiting accessibility.",
            approach: "Fine-tuned quantized LLaMA and Distil models on high-quality Swahili datasets. Optimized for offline/low-resource deployment to ensure cost-effectiveness.",
            outcome: "Achieved fluent conversational capabilities with significant reduction in inference costs compared to commercial APIs.",
            learnings: "Data quality is paramount for low-resource language fine-tuning. Quantization is essential for edge deployment.",
        },
    },
    {
        slug: "hairstyle-try-on",
        title: "Hairstyle Try-On App",
        description: "Dataset creation and model improvement for better representation of black men.",
        status: "Completed",
        tech: ["Stable Diffusion", "Python", "React Native"],
        liveUrl: "[Live Demo URL]",
        sourceUrl: "[GitHub URL]",
        image: "/images/projects/hairstyle-tryon.png", // Optional screenshot placeholder
        details: {
            problem: "Existing virtual try-on solutions perform poorly on black hair textures and styles due to dataset bias.",
            approach: "Curated a dataset specifically for black men's hairstyles. Fine-tuned generative models to accurately render texture and fit.",
            outcome: "A tailored mobile experience that allows users to visualize styles accurately, improving user confidence.",
            learnings: "Representation in ML datasets directly impacts product viability for diverse user bases.",
        },
    },
    {
        slug: "cmrs-mining-cooperative",
        title: "Investor-Facing Mining Cooperative Website",
        description: "Professional, credibility-driven website for CMRS.",
        status: "Live",
        tech: ["React", "Next.js", "Tailwind CSS"],
        liveUrl: "[Live Demo URL]",
        sourceUrl: "[GitHub URL]",
        image: "/images/projects/cmrs.png", // Optional screenshot placeholder
        details: {
            problem: "CMRS needed a digital presence that communicated trust, scale, and professionalism to international investors.",
            approach: "Built a high-performance, accessible site with clear messaging focused on business value and technical execution.",
            outcome: "Established a strong digital footprint that serves as a key asset in investor relations.",
            learnings: "For B2B/Investor sites, clarity and performance outweigh flashy design.",
        },
    },
    {
        slug: "myevents-nairobi",
        title: "MyEvents Nairobi",
        description: "Map-based event discovery with social heatmaps.",
        status: "Live",
        tech: ["Flutter", "Firebase", "Google Maps API"],
        liveUrl: "[Live Demo URL]",
        sourceUrl: "[GitHub URL]",
        image: "/images/projects/myevents.png", // Optional screenshot placeholder
        details: {
            problem: "Discovering events in Nairobi was fragmented; users wanted to know 'where the crowd is'.",
            approach: "Implemented a map-based interface with Snapchat-inspired heatmaps based on user activity/social signals.",
            outcome: "Simplified event discovery for Nairobi's high-density social scene.",
            learnings: "Social density signals are a powerful heuristic for 'relevance' in event discovery.",
        },
    },
];

export const skills = {
    languages: ["TypeScript", "Python", "SQL", "HTML/CSS"],
    frameworks: ["React", "Next.js", "Node.js", "FastAPI", "Flutter"],
    ml_data: ["PyTorch", "Hugging Face", "LLMs", "Stable Diffusion"],
    automation: ["n8n", "Docker", "Git", "CI/CD"],
    infrastructure: ["Netlify", "Firebase", "AWS (Basic)"],
};
