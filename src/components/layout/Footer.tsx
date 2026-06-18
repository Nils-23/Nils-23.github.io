import { profile } from "@/data/portfolio";

export function Footer() {
    return (
        <footer className="border-t border-border/60 bg-background/30 py-8 transition-colors duration-300">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
                <p>
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>
                <p>
                    Built with Next.js, Tailwind v4 & Framer Motion.
                </p>
            </div>
        </footer>
    );
}
