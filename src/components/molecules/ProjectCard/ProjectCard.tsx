import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

import {
  Github,
  ExternalLink,
  Star,
  Clock,
  CheckCircle,
  AlertTriangle,
  FlaskRound,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { type ProjectCardProps } from "./ProjectCard.props";
import { Button } from "@/components/atoms/Button/Button";
import { ProjectTypeIcon } from "@/components/atoms/ProjectTypeIcon/ProjectTypeIcon";

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusBadges = {
    maintained: {
      icon: <CheckCircle size={14} />,
      text: "Maintenu",
      classes: "bg-green-500/70 text-white",
    },
    deprecated: {
      icon: <AlertTriangle size={14} />,
      text: "Obsolète",
      classes: "bg-yellow-500/70 text-white",
    },
    archived: {
      icon: <Clock size={14} />,
      text: "Archivé",
      classes: "bg-gray-500/70 text-white",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 h-full",
        isHovered && "scale-[1.02]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="absolute top-2 right-2 flex flex-col gap-2 z-10">
          {/* Badge de statut du projet */}
          {project.status && (
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md shadow-lg backdrop-blur-sm text-sm font-medium ${
                statusBadges[project.status].classes
              }`}
            >
              {statusBadges[project.status].icon}
              <span>{statusBadges[project.status].text}</span>
            </div>
          )}

          {/* Badge de démonstration disponible */}
          {project.demos && project.demos.length > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md shadow-lg backdrop-blur-sm bg-purple-500/70 text-white font-medium text-sm">
              <FlaskRound size={14} />
              <span>Démo</span>
            </div>
          )}
        </div>

        {/* Thumbnail en haut de la carte */}
        <div className="w-full h-40 mb-5 overflow-hidden rounded-lg bg-secondary/20 -mx-1">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Icône du type de projet (style amélioré) */}
            {project.projectType && (
              <ProjectTypeIcon type={project.projectType} />
            )}
            <h3 className="text-xl font-bold tracking-tight">
              {project.title}
            </h3>
          </div>

          {project.stars !== undefined && (
            <div className="flex items-center bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded-lg shadow-inner">
              <Star size={16} className="mr-1" />
              <span className="text-sm font-bold">{project.stars}</span>
            </div>
          )}
        </div>

        <p className="text-muted-foreground mb-4 flex-grow">
          {project.description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech: string) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to={`/projects/$projectId`}
              params={{ projectId: project.id }}
              className="flex-grow"
            >
              <Button
                variant="neon"
                className="w-full text-primary-foreground hover:text-primary-foreground"
              >
                Voir le projet
              </Button>
            </Link>

            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-white transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export { ProjectCard };
