"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
    slug: string;
    title: string;
    description: string;
    status: string;
    tech: string[];
    liveUrl: string;
    sourceUrl: string;
    image?: string;
    imageFit?: string;
    details?: {
        problem: string;
        approach: string;
        outcome: string;
        learnings: string;
    };
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const [imgError, setImgError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg dark:hover:shadow-black/50"
        >
            <div className="space-y-4">
                {/* Header (Title & Status) */}
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-foreground/95">
                        {project.title}
                    </h3>
                    <span className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono border transition-colors shrink-0",
                        project.status === "In Progress" ? "border-amber-500/20 text-amber-500 bg-amber-500/5" :
                            project.status === "Live" ? "border-emerald-500/20 text-emerald-500 bg-emerald-500/5" :
                                "border-border text-muted-foreground bg-muted/20"
                    )}>
                        {project.status === "Live" && (
                            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        )}
                        {project.status}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                </p>

                {/* Project Image / Mockup Block */}
                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-border bg-muted/40 flex items-center justify-center group-hover:border-foreground/10 transition-colors">
                    {project.image && !imgError ? (
                        <img
                            src={project.image}
                            alt={`${project.title} Screenshot`}
                            className={cn(
                                "w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out",
                                project.imageFit === "contain" ? "object-contain bg-black" : "object-cover"
                            )}
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="text-center p-4 select-none font-mono text-xs text-muted-foreground">
                            <p className="font-semibold text-foreground/80 mb-1">{project.title} Mockup</p>
                            <p className="text-[10px] text-muted-foreground">[{project.image || "No image defined"}]</p>
                        </div>
                    )}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, i) => (
                        <span
                            key={i}
                            className="rounded border border-border bg-muted/20 px-2 py-0.5 text-xs font-mono text-muted-foreground"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* Links Section (Live Demo & Source Code) */}
            <div className="flex items-center gap-4 pt-6 mt-auto border-t border-border/50">
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono font-medium text-foreground hover:text-foreground/85 transition-colors"
                >
                    Live Demo
                    <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </a>

                <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-mono font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                    <Github className="mr-1 h-3.5 w-3.5" />
                    Source Code
                </a>
            </div>
        </motion.div>
    );
}
