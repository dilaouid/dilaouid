import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { projectsData } from '@/data/projects'
import { ProjectsShowcase } from '@/components/organisms/ProjectShowcase/ProjectsShowcase'

export const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTech, setSelectedTech] = useState<string | null>(null)

  // Extraire toutes les technologies uniques de tous les projets
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap(project => project.technologies))
  ).sort()

  // Filtrer les projets en fonction de la recherche et du filtre de technologie
  const filteredProjects = [...projectsData].filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesTech = selectedTech ? project.technologies.includes(selectedTech) : true
    
    return matchesSearch && matchesTech
  })

  return (
    <div className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Mes <span className="text-primary">projets</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Découvrez les différents projets sur lesquels j'ai travaillé, des applications web 
            aux outils de développement, en passant par les bibliothèques et les sites vitrines.
          </p>
          
          {/* Recherche et filtres */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 py-2 pr-4 rounded-lg bg-secondary text-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            
            <div className="relative w-full sm:w-auto sm:min-w-[200px]">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <select
                value={selectedTech || ''}
                onChange={(e) => setSelectedTech(e.target.value || null)}
                className="w-full pl-10 py-2 pr-4 appearance-none rounded-lg bg-secondary text-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              >
                <option value="">Toutes technologies</option>
                {allTechnologies.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Résultats de la recherche */}
        {filteredProjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProjectsShowcase />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center py-16"
          >
            <h3 className="text-xl font-medium mb-2">Aucun projet ne correspond à votre recherche</h3>
            <p className="text-muted-foreground">
              Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}