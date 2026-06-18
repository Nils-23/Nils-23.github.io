"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { about } from "@/data/portfolio";

export function About() {
    return (
        <section
            id="about"
            className="container mx-auto px-6 py-24 border-b border-border"
        >
            {/* Section Label */}
            <div className="mb-12 md:mb-16">
                <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                    About
                </h2>
            </div>

            {/* Main Content: Photo + Text */}
            <div className="max-w-5xl grid gap-12 md:gap-16 lg:grid-cols-[320px_1fr] items-start">

                {/* Left Column: Portrait Photo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="relative group mx-auto lg:mx-0"
                >
                    {/* Accent offset frame */}
                    <div
                        className="absolute -bottom-3 -right-3 w-full h-full rounded-xl border-2 border-accent/30 transition-all duration-500 group-hover:border-accent/60 group-hover:-bottom-4 group-hover:-right-4"
                        aria-hidden="true"
                    />

                    {/* Photo container */}
                    <div className="relative w-[280px] h-[350px] sm:w-[300px] sm:h-[380px] rounded-xl overflow-hidden bg-muted">
                        <Image
                            src="/myphoto.png"
                            alt="Akonkwa Lwambwa Nils — Software Engineer"
                            fill
                            sizes="(max-width: 768px) 280px, 300px"
                            className="object-cover object-top transition-all duration-700 grayscale group-hover:grayscale-0"
                            priority
                        />
                        {/* Subtle gradient overlay at the bottom */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"
                            aria-hidden="true"
                        />
                    </div>

                    {/* Decorative accent dot pattern */}
                    <div
                        className="absolute -top-4 -left-4 w-8 h-8 grid grid-cols-3 gap-1"
                        aria-hidden="true"
                    >
                        {[...Array(9)].map((_, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                                className="w-1.5 h-1.5 rounded-full bg-accent/40"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Text Content */}
                <div className="space-y-8">
                    {/* Intro statement (Large editorial typography) */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
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
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    {/* Looking Ahead */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 + about.philosophy.length * 0.1 }}
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
