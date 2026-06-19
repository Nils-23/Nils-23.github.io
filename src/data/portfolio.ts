export const profile = {
    name: "AKONKWA LWAMBWA NILS",
    title: "Software Engineer",
    tagline: "Building resilient systems at the intersection of automation, ML, and product.",
    description: "Software Engineer with hands-on experience building real-world systems across automation, applied ML, and product engineering. I prioritize discipline, long-term thinking, and calm confidence.",
    social: {
        email: "nilsako8@gmail.com",
        github: "https://github.com/Nils-23",
        linkedin: "https://www.linkedin.com/in/akonkwa-lwambwa-65188b34a/",
        resume: "/resume.pdf", // Path to the resume PDF
    },
};

export const about = {
    intro: "I approach software with a builder's mindset, focusing on systems, clarity, and long-term solutions.",
    philosophy: [
        "I believe in building systems that last. My work isn't just about writing code; it's about understanding the problem space deeply and designing solutions that are robust and scalable.",
        "Experience across automation, machine learning, and product engineering has taught me that the best solutions often come from the intersection of disciplines. I enjoy the challenge of learning new domains and shipping value.",
        "I value a calm, disciplined approach to engineering. No hype, just consistent, high-quality execution.",
    ],
};

export const projects = [
    {
        slug: "eventas-nairobi",
        title: "Eventas",
        description: "Location-based nightlife and event discovery platform with real-time social heatmaps.",
        status: "Live",
        tech: ["React Native", "Expo", "TypeScript", "Firebase", "Google Maps API"],
        liveUrl: "https://www.eventas.live/",
        sourceUrl: "https://github.com/Nils-23/Eventa",
        image: "/images/projects/eventas.png", // Optional screenshot placeholder
        imageFit: "contain",
        details: {
            problem: "Discovering nightlife events in Nairobi was fragmented; users wanted to know real-time event density and crowd levels.",
            approach: "Designed a mobile app with React Native/Expo, utilizing custom Google Maps components, Firebase Firestore, and Cloud Functions to calculate and render real-time crowd heatmaps based on active GPS presence.",
            outcome: "Streamlined event discovery by showing users active hotspots and live activity spikes.",
            learnings: "Orchestrating background location signals efficiently requires careful power-consumption optimization and reliable geofencing.",
        },
    },
    {
        slug: "cmrs-mining-cooperative",
        title: "Investor-Facing Mining Cooperative Website",
        description: "Professional, credibility-driven website for COMRS.",
        status: "Live",
        tech: ["React", "Next.js", "Tailwind CSS"],
        liveUrl: "https://www.risingstarminerals.com/",
        sourceUrl: "https://github.com/Nils-23/CMRS",
        image: "/images/projects/cmrs.png", // Optional screenshot placeholder
        details: {
            problem: "CMRS needed a digital presence that communicated trust, scale, and professionalism to international investors.",
            approach: "Built a high-performance, accessible site with clear messaging focused on business value and technical execution.",
            outcome: "Established a strong digital footprint that serves as a key asset in investor relations.",
            learnings: "For B2B/Investor sites, clarity and performance outweigh flashy design.",
        },
    },
    {
        slug: "focuslearn",
        title: "FocusLearn",
        description: "Adaptive learning companion app designed to support college students with ADHD through task management and study aids.",
        status: "Completed",
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
        sourceUrl: "https://github.com/Nils-23/FocusLearn",
        image: "/images/projects/focuslearn.png", // Optional screenshot placeholder
        imageFit: "contain",
        details: {
            problem: "College students with ADHD struggle to maintain focus, organize study workflows, and manage tasks within standard learning interfaces.",
            approach: "Designed and developed a personalized Next.js web application utilizing Firebase, incorporating custom study-timers, adaptive file parsing (PDF/DOCX to plain summaries), gamified task management, and focus-friendly reminders.",
            outcome: "Successfully built a complete, responsive learning platform that increases workflow retention and engagement for neurodivergent students.",
            learnings: "Tailoring UI/UX micro-interactions (like progress cues and clean visual layouts) is crucial when designing accessibility-driven products.",
        },
    },
    {
        slug: "swahili-conversational-ai",
        title: "Swahili Conversational AI Bot",
        description: "Local LLaMA & Distil models focused on language accessibility and performance.",
        status: "Completed",
        tech: ["PyTorch", "Hugging Face", "FastAPI", "Ollama3"],
        sourceUrl: "https://github.com/Nils-23/SWAHILI_BOT",
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
        sourceUrl: "https://github.com/Nils-23/AI-Powered-Hairstyle-Try-On-Application",
        image: "/images/projects/hairstyle-tryon.png", // Optional screenshot placeholder
        details: {
            problem: "Existing virtual try-on solutions perform poorly on black hair textures and styles due to dataset bias.",
            approach: "Curated a dataset specifically for black men's hairstyles. Fine-tuned generative models to accurately render texture and fit.",
            outcome: "A tailored mobile experience that allows users to visualize styles accurately, improving user confidence.",
            learnings: "Representation in ML datasets directly impacts product viability for diverse user bases.",
        },
    },
    {
        slug: "telegram-loan-system",
        title: "Human-in-the-Loop Telegram Loan System",
        description: "Workflow-based automation with human decision checkpoints for risk control.",
        status: "In Progress",
        tech: ["n8n", "Telegram API", "Node.js", "Docker"],
        sourceUrl: "https://github.com/Nils-23/CampusCash",
        image: "/images/projects/telegram-loan.png", // Optional screenshot placeholder
        details: {
            problem: "Managing micro-loans requires automated processing but high-stakes decisions need human oversight.",
            approach: "Designed a hybrid system using n8n workflows that orchestrate the loan process. Routine tasks are automated, while critical risk assessments trigger a Telegram bot to request human approval.",
            outcome: "Streamlined loan processing while maintaining strict risk controls. The system allows for rapid scaling of loan volume without losing the safety of manual review.",
            learnings: "Orchestrating async human-machine interaction requires robust state management and timeout handling.",
        },
    },
];

export const skills = {
    languages: ["TypeScript", "Python", "SQL", "HTML/CSS"],
    frameworks: ["React", "Next.js", "Node.js", "FastAPI", "React Native"],
    ml_data: ["PyTorch", "Hugging Face", "LLMs", "Stable Diffusion"],
    ai: [
        "OpenAI API",
        "Anthropic API",
        "LangChain",
        "Vector Databases",
        "AI-inclusive Development",
    ],
    automation: ["n8n", "Docker", "Git", "CI/CD"],
    databases_cloud: ["MongoDB", "Firebase", "AWS (Basic)", "Netlify"],
};
