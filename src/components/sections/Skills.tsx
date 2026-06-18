"use client";

import { skills } from "@/data/portfolio";

export function Skills() {
    return (
        <section
            id="skills"
            className="container mx-auto px-6 py-24 border-b border-border scroll-mt-16"
        >
            <div className="max-w-4xl grid gap-8 md:grid-cols-[200px_1fr]">
                <div>
                    <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest sticky top-24">
                        Skills
                    </h2>
                </div>
                <div className="grid gap-10 sm:grid-cols-2">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="space-y-3">
                            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                                {category.replace("_", " & ")}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-block rounded border border-border bg-card/50 px-2.5 py-1 text-xs font-mono text-foreground hover:border-foreground/20 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
