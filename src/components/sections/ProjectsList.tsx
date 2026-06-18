"use client";

import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsList() {
    return (
        <section id="work" className="container mx-auto px-6 py-24 border-b border-border scroll-mt-16">
            <div className="max-w-4xl grid gap-8 md:grid-cols-[200px_1fr] mb-16">
                <div>
                    <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest sticky top-24">
                        Selected Work
                    </h2>
                </div>
                <div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A curated selection of systems, custom integrations, and developer tooling built with a focus on automation, machine learning, and clean product architectures.
                    </p>
                </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto md:ml-[200px]">
                {projects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
