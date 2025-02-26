import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectsShowcase } from "@/components/organisms/ProjectShowcase/ProjectsShowcase";
import { ContactCTA } from "@/components/organisms/ContactCTA/ContactCTA";
import { Hero } from "@/components/organisms/Hero/Hero";
import { Skills } from "@/components/organisms/Skills/Skills";
import { BlogPreview } from "@/components/organisms/BlogPreview/BlogPreview";
import { SEO } from "@/components/SEO";
import { PersonStructuredData } from "@/components/StructuredData";

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  // Configuration des animations au scroll
  useEffect(() => {
    // Animation pour les sections qui apparaissent au scroll
    const sections = document.querySelectorAll(".scroll-section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      // Nettoyage des ScrollTriggers lors du démontage du composant
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <SEO
        title="Diyaeddine LAOUID - Développeur Fullstack"
        description="Développeur Fullstack avec 5 ans d'expérience. Spécialiste React, TypeScript et Node.js disponible pour vos projets web."
        path=""
      />
      <PersonStructuredData
        name="Diyaeddine LAOUID"
        jobTitle="Développeur Fullstack"
        description="Développeur Fullstack avec 5 ans d'expérience en TypeScript, Node et React, j'ai une solide expérience dans la conception et le développement d'applications web performantes."
        url="https://dilaouid.fr"
        image="https://dilaouid.fr/images/avatar.jpg"
        sameAs={[
          "https://github.com/dilaouid",
          "https://linkedin.com/in/diyaeddine-laouid",
        ]}
      />
      <div className="flex flex-col">
        {/* Section Hero */}
        <Hero />

        {/* Section Projets */}
        <section className="py-20 scroll-section">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
              Mes projets <span className="text-primary">populaires</span>
            </h2>
            <ProjectsShowcase limit={3} featured={true} />
          </div>
        </section>

        {/* Section Compétences */}
        <section className="py-20 bg-secondary/30 border-y border-border scroll-section">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
              Mes <span className="text-primary">compétences</span>
            </h2>
            <Skills />
          </div>
        </section>

        {/* Section Blog */}
        <section className="py-20 scroll-section">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
              Derniers <span className="text-primary">articles</span>
            </h2>
            <BlogPreview limit={3} />
          </div>
        </section>

        {/* Section CTA Contact */}
        <section className="py-20 scroll-section">
          <ContactCTA />
        </section>
      </div>
    </>
  );
};
