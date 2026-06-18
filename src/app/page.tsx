import { Hero } from "@/components/sections/Hero";
import { ProjectsList } from "@/components/sections/ProjectsList";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsList />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
