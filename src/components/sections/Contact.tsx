"use client";

import { profile } from "@/data/portfolio";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export function Contact() {
    return (
        <section
            id="contact"
            className="container mx-auto px-6 py-24 scroll-mt-16"
        >
            <div className="max-w-4xl grid gap-8 md:grid-cols-[200px_1fr]">
                <div>
                    <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest sticky top-24">
                        Contact
                    </h2>
                </div>
                <div className="space-y-8">
                    <p className="text-2xl sm:text-3xl font-light text-foreground leading-relaxed max-w-2xl">
                        I am open to discuss interesting contracts, full-time positions, or system design consulting.
                    </p>

                    <div className="flex flex-col gap-6 pt-4">
                        {/* Plain email address mailto link */}
                        <div className="space-y-1">
                            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider block">Email</span>
                            <a
                                href={`mailto:${profile.social.email}`}
                                className="text-lg sm:text-xl font-mono text-foreground hover:text-foreground/80 transition-colors inline-flex items-center gap-1.5"
                            >
                                {profile.social.email}
                                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-8 pt-4 border-t border-border/50">
                            <a
                                href={profile.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Github className="h-4 w-4" />
                                GitHub
                            </a>

                            <a
                                href={profile.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Linkedin className="h-4 w-4" />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
