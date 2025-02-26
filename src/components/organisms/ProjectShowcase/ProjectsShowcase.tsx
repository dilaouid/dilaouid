import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Link } from "@tanstack/react-router";

import { type ProjectsShowcaseProps } from "./ProjectsShowcase.props";
import { ProjectCard } from "@/components/molecules/ProjectCard/ProjectCard";
import { Button } from "@/components/atoms/Button/Button";
import { projectsData } from "@/data";

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  limit,
  featured = false,
}) => {
  // Filtrer les projets selon les paramètres
  let filteredProjects = [...projectsData];

  if (featured) {
    filteredProjects = filteredProjects.filter((project) => project.featured);
  }

  if (limit) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Bouton "Voir tous les projets" affiché uniquement si limit est spécifié */}
      {limit && filteredProjects.length < projectsData.length && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/" search={{ path: "projects" }}>
            <Button variant="gradient" className="gap-2">
              Voir tous les projets
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};
