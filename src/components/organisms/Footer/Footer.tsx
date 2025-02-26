import React from "react";
import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-background py-12">
      <div className="container flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo et description */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-xl font-bold tracking-tight">
              <span className="text-primary">D.</span>Laouid
            </Link>
            <p className="text-muted-foreground max-w-md">
              Développeur fullstack passionné par la création d'applications web
              modernes et performantes.
            </p>
          </div>

          {/* Liens utiles */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Liens</h3>
            <nav className="flex flex-col gap-2 text-muted-foreground">
              <Link to="/" className="hover:text-foreground">
                Accueil
              </Link>
              <Link to="/projects" className="hover:text-foreground">
                Projets
              </Link>
              <Link to="/blog" className="hover:text-foreground">
                Blog
              </Link>
              <Link to="/about" className="hover:text-foreground">
                À propos
              </Link>
              {/* <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link> */}
            </nav>
          </div>

          {/* Contact et réseaux sociaux */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-muted-foreground">
              Vous pouvez me contacter par email ou sur les réseaux sociaux.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/dilaouid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/diyaeddine-laouid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@dilaouid.fr"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px w-full bg-border" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© {currentYear} Diyaeddine LAOUID. Tous droits réservés.</div>
          <div className="flex items-center gap-1">
            Conçu avec <Heart className="h-4 w-4 text-red-500 animate-pulse" />{" "}
            en utilisant React, TypeScript et Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};
