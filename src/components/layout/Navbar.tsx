"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

const links = [
    { href: "#hero", label: "Home" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const sections = ["hero", "work", "about", "skills", "contact"];
        
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset for navbar height

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial run
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll handler
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 64, // Adjust for 16rem navbar height
                behavior: "smooth",
            });
        }
    };

    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/80 bg-background/60 backdrop-blur-xl transition-colors duration-300">
            <div className="container mx-auto flex h-16 items-center justify-between px-6">
                <a 
                    href="#hero" 
                    onClick={(e) => handleClick(e, "#hero")}
                    className="text-lg font-mono font-bold tracking-tight text-foreground"
                >
                    NILS.DEV
                </a>

                {/* Desktop Nav */}
                <nav className="hidden gap-6 md:flex items-center">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className={cn(
                                "relative text-sm font-medium transition-colors hover:text-foreground/90 py-1.5 px-0.5",
                                activeSection === link.href.replace("#", "")
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                            {activeSection === link.href.replace("#", "") && (
                                <motion.div
                                    layoutId="navbar-underline"
                                    className="absolute bottom-0 left-0 h-[2px] w-full bg-foreground"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                    <div className="h-4 w-[1px] bg-border/60 ml-2" />
                    <ThemeToggle className="ml-2" />
                </nav>

                {/* Mobile Menu & Theme Toggle Actions */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-b border-border bg-background md:hidden"
                    >
                        <nav className="flex flex-col gap-4 p-6">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-foreground py-2",
                                        activeSection === link.href.replace("#", "")
                                            ? "text-foreground font-semibold"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
