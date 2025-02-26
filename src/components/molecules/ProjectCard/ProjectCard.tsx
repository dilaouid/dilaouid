import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

import { Github, ExternalLink, Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { type ProjectCardProps } from "./ProjectCard.props";
import { Button } from "@/components/atoms/Button/Button";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, className }) => {
  const [isHovered, setIsHovered] = useState(false);

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
        {/* Thumbnail en haut de la carte */}
        <div className="w-full h-40 mb-5 overflow-hidden rounded-lg bg-secondary/20 -mx-1">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
          {project.stars !== undefined && (
            <div className="flex items-center text-yellow-500">
              <Star size={16} className="mr-1" />
              <span className="text-sm">{project.stars}</span>
            </div>
          )}
        </div>

        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

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
            <Link to={`/projects/${project.id}`} className="flex-grow">
              <Button variant="neon" className="w-full text-primary-foreground hover:text-primary-foreground">
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
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />
    </motion.div>
  );
};

export { ProjectCard };
