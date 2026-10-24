import { useEffect } from "react";
import Hero from "@/components/features/Hero";
import About from "@/components/features/About";
import Services from "@/components/features/Services";
import Achievements from "@/components/features/Achievements";
import Certificates from "@/components/features/Certificates";
import Skills from "@/components/features/Skills";
import Courses from "@/components/features/Courses";
import Contact from "@/components/features/Contact";
import { useScrollAnimations } from "@/hooks/useIntersectionObserver";

export default function Home() {
  useScrollAnimations();

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Achievements />
      <Certificates />
      <Skills />
      <Courses />
      <Contact />
    </main>
  );
}
