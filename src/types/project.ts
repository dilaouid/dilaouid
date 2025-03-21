export type TProjectType = "website" | "library" | "tool" | "app" | "game";

export interface IProject {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    thumbnail: string;
    technologies: string[];
    github?: string;
    website?: string;
    stars?: number;
    featured: boolean;
    createdAt: string;
    content?: string;

    status?: 'maintained' | 'deprecated' | 'archived';
    projectType?: TProjectType;
    
    // Liens de téléchargement (exécutables, etc.)
    downloads?: {
      name: string;
      description: string;
      url: string;
    }[];
    
    // Démos et POC
    demos?: {
      name: string;
      description: string;
      url: string;
    }[];
  }
  