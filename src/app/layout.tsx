import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Akonkwa Lwambwa Nils | Software Engineer",
    template: "%s | Akonkwa Lwambwa Nils",
  },
  description: "Software Engineer specializing in automation, applied ML, and product engineering. Building resilient systems with a focus on long-term thinking.",
  keywords: ["Software Engineer", "Machine Learning", "Automation", "React", "Next.js", "Applied ML", "System Design"],
  authors: [{ name: "Akonkwa Lwambwa Nils" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nilsakonkwa.com",
    title: "Akonkwa Lwambwa Nils | Software Engineer",
    description: "Building resilient systems at the intersection of automation, ML, and product.",
    siteName: "Akonkwa Lwambwa Nils",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akonkwa Lwambwa Nils | Software Engineer",
    description: "Building resilient systems at the intersection of automation, ML, and product.",
    creator: "@Nils-23",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-black/10 dark:selection:bg-white/20 relative overflow-x-hidden transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Subtle background texture for depth in both modes */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-background transition-colors duration-300 pointer-events-none" />

          <Navbar />
          <main className="min-h-screen pt-16 relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
