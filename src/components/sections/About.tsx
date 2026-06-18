"use client";

import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

export function About() {
    return (
        <section
            id="about"
            className="container mx-auto px-6 py-24 border-b border-border scroll-mt-16"
        >
            <div className="max-w-4xl grid gap-8 md:grid-cols-[200px_1fr]">
                <div>
                    <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest sticky top-24">
                        About
                    </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-[1fr_260px] items-start">
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

                        {/* Bio / Looking Ahead */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: about.philosophy.length * 0.1 }}
                            className="rounded-lg border border-dashed border-border p-6 bg-card/30"
                        >
                            <h3 className="text-sm font-medium text-foreground mb-2">Looking Ahead</h3>
                            <p className="text-sm text-muted-foreground">
                                One project and one coffee at a time, I am committed to creating solutions and making the world an easier and better place to live.
                            </p>
                        </motion.div>
                    </div>

                    {/* Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full max-w-[260px] mx-auto md:mx-0 group pt-2"
                    >
                        <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-border bg-card shadow-md">
                            <img
                                src="/images/profile.jpg"
                                alt="Akonkwa Lwambwa Nils"
                                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
