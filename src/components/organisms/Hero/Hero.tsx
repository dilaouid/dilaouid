import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button/Button";
import { ArrowRight, Github, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";

const Hero: React.FC = () => {
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  // Création d'effet de particules
  useEffect(() => {
    if (!particlesContainerRef.current) return;

    const container = particlesContainerRef.current;
    const particles: HTMLDivElement[] = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");

      particle.className = "absolute rounded-full pointer-events-none";

      const colors = ["bg-primary/40", "bg-purple-400/40", "bg-pink-400/40"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      particle.classList.add(randomColor);

      const size = Math.random() * 9 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      particle.style.opacity = `${Math.random() * 0.6 + 0.2}`;

      const animDuration = Math.random() * 15 + 8;
      const animDelay = Math.random() * 5;

      particle.style.animation = `float ${animDuration}s ease-in-out ${animDelay}s infinite`;

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] w-full flex flex-col justify-center overflow-hidden">
      {/* Conteneur de particules */}
      <div
        ref={particlesContainerRef}
        className="absolute inset-0 -z-5 pointer-events-none"
      />

      {/* Effet de lueur */}
      <div className="absolute -top-[40%] left-[30%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute -bottom-[30%] right-[20%] w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-[100px] -z-10 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Section photo de profil */}
          <motion.div
            className="md:w-1/3 mt-20 sm:mt-8 md:mt-0 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-xl glow">
                <img
                  src="/images/avatar.jpg"
                  alt="Diyaeddine LAOUID"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card rounded-lg py-2 px-4 shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
                  <span className="text-sm font-medium">
                    Disponible pour CDI / missions
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col text-center md:text-left md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-16 md:mt-0"
            >
              <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-secondary text-secondary-foreground mb-6">
                Développeur Fullstack avec 5 ans d'expérience
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tighter mb-6 text-gradient leading-tight py-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Diyaeddine LAOUID
            </motion.h1>

            <motion.p
              className="max-w-[700px] text-lg md:text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Je crée des applications et services web innovants, en utilisant
              les technologies modernes pour transformer des idées en
              expériences numériques exceptionnelles.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start relative z-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="https://github.com/dilaouid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="gap-2 relative" variant="gradient">
                  <Github size={18} />
                  GitHub
                </Button>
              </a>
              <Link to="/projects" className="inline-block">
                <Button variant="neon" className="gap-2 relative">
                  Voir mes projets
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outline" className="gap-2 relative">
                  <FileText size={18} />
                  Voir mon CV
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
