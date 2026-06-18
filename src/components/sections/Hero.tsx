"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-[80vh] flex-col justify-center px-6 py-12 md:py-24 container mx-auto border-b border-border"
        >
            <div className="max-w-4xl space-y-6 md:space-y-8">
                {/* Subtle visual indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-mono text-emerald-500 w-fit"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for senior roles
                </motion.div>

                {/* Name & Title */}
                <div className="space-y-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground"
                    >
                        {profile.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg font-mono text-muted-foreground uppercase tracking-widest"
                    >
                        {profile.title}
                    </motion.p>
                </div>

                {/* Sharp editorial positioning statement */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl text-foreground leading-snug tracking-tight max-w-3xl font-normal"
                >
                    {profile.tagline}
                </motion.p>

                {/* Primary Action Buttons & Links (Above the fold) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-3 pt-4"
                >
                    <a
                        href={`mailto:${profile.social.email}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                    >
                        <Mail className="h-4 w-4" />
                        <span>Email</span>
                    </a>
                    
                    <a
                        href={profile.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground hover:border-foreground/20 transition-all focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                    </a>

                    <a
                        href={profile.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground hover:border-foreground/20 transition-all focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href={profile.social.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground hover:border-foreground/20 transition-all focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        <FileText className="h-4 w-4" />
                        <span>Resume (PDF)</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
