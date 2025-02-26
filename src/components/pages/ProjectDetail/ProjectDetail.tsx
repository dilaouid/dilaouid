import React, { useState, useEffect } from "react";
import { useParams, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  Globe,
  Calendar,
  Star,
  Download,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/atoms/Button/Button";
import { formatDate } from "@/lib/format";

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams({ from: "/projects/$projectId" });
  const [project, setProject] = useState(
    projectsData.find((p) => p.id === projectId)
  );

  // Si le projet n'est pas trouvé, on retourne à la liste des projets
  useEffect(() => {
    if (!project) {
      // Redirection logique vers la page des projets si le projet n'existe pas
      window.location.href = "/projects";
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        {/* Bouton de retour */}
        <div className="mb-8">
          <Link to="/projects">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={16} />
              Tous les projets
            </Button>
          </Link>
        </div>

        {/* En-tête du projet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-4 items-center mb-6">
            <div className="flex items-center text-muted-foreground">
              <Calendar size={16} className="mr-2" />
              <span>{formatDate(project.createdAt)}</span>
            </div>

            {project.stars !== undefined && (
              <div className="flex items-center text-yellow-500">
                <Star size={16} className="mr-2" />
                <span>{project.stars} stars</span>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Github size={18} />
                  Voir sur GitHub
                </Button>
              </a>
            )}

            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="gradient" className="gap-2">
                  <Globe size={18} />
                  Visiter le site
                </Button>
              </a>
            )}
          </div>
        </motion.div>

        {/* Image du projet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="rounded-xl overflow-hidden border border-border shadow-xl">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Description détaillée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">À propos du projet</h2>
          <p className="text-lg leading-relaxed mb-6">
            {project.longDescription || project.description}
          </p>

          {/* Contenu supplémentaire du projet (à mettre à jour si disponible) */}
          {project.content && (
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
          )}
        </motion.div>

        {/* Section téléchargements et démos */}
        {((project.downloads && project.downloads.length > 0) || (project.demos && project.demos.length > 0)) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-border pt-8 mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Téléchargements */}
              {project.downloads && project.downloads?.length > 0 && (
                <div className="bg-card/50 rounded-xl p-6 border border-border hover:border-primary/30 transition-colors shadow-md">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Download size={22} className="text-primary mr-3" />
                    Téléchargement
                  </h2>
                  <div className="space-y-4">
                    {project.downloads.map((download, index) => (
                      <a
                        key={index}
                        href={download.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300 group"
                      >
                        <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 transition-colors">
                          <Download size={24} />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            {download.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {download.description}
                          </p>
                        </div>
                        <ArrowRight
                          size={18}
                          className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-1 transition-all"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Démos et POC */}
              {project.demos && project.demos?.length > 0 && (
                <div className="bg-card/50 rounded-xl p-6 border border-border hover:border-primary/30 transition-colors shadow-md">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <ExternalLink size={22} className="text-primary mr-3" />
                    Démo / POC
                  </h2>
                  <div className="space-y-4">
                    {project.demos.map((demo, index) => (
                      <a
                        key={index}
                        href={demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300 group"
                      >
                        <div className="p-3 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary/20 transition-colors">
                          <Globe size={24} />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            {demo.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {demo.description}
                          </p>
                        </div>
                        <ExternalLink
                          size={18}
                          className="text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Projets similaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-border pt-8"
        >
          <h2 className="text-2xl font-bold mb-6">Projets similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData
              .filter(
                (p) =>
                  p.id !== project.id &&
                  p.technologies.some((tech) =>
                    project.technologies.includes(tech)
                  )
              )
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  to="/projects/$projectId"
                  params={{ projectId: relatedProject.id }}
                  className="block"
                  onClick={() => {
                  setProject(projectsData.find(p => p.id === relatedProject.id));
                  window.scrollTo(0, 0);
                  }}
                >
                  <div className="h-full p-4 rounded-lg border border-border hover:border-primary/50 transition-colors bg-card hover:bg-card/80">
                    <div className="mb-3 w-full h-32 rounded-md overflow-hidden bg-secondary/20">
                      <img
                        src={relatedProject.thumbnail}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <h3 className="text-lg font-medium mb-2 hover:text-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {relatedProject.technologies.slice(0, 3).map((tech) => (
                        <div
                          key={tech}
                          className="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground"
                        >
                          {tech}
                        </div>
                      ))}
                      {relatedProject.technologies.length > 3 && (
                        <div className="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground">
                          +{relatedProject.technologies.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
