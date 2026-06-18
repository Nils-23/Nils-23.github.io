"use client";

import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

export function About() {
    return (
        <section
            id="about"
            className="container mx-auto px-6 py-24 border-b border-border"
        >
            <div className="max-w-4xl grid gap-8 md:grid-cols-[200px_1fr]">
                <div>
                    <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest sticky top-24">
                        About
                    </h2>
                </div>
                <div className="space-y-8">
                    {/* Intro statement (Large editorial typography) */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl sm:text-3xl font-light text-foreground leading-relaxed text-balance"
                    >
                        {about.intro}
                    </motion.p>

                    {/* Substantive paragraphs / philosophy */}
                    <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                        {about.philosophy.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    {/* Bio Placeholder as requested */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: about.philosophy.length * 0.1 }}
                        className="rounded-lg border border-dashed border-border p-6 bg-card/30"
                    >
                        <h3 className="text-sm font-medium text-foreground mb-2">Looking Ahead</h3>
                        <p className="text-sm text-muted-foreground">
                            One project and one coffee at a time, I am commited to creating solutions and making the world an easier and better place to live.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
