import React from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";
import { formatDate } from "@/lib/format";
import { type BlogPreviewProps } from "./BlogPreview.props";
import { blogPosts } from "@/data";

export const BlogPreview: React.FC<BlogPreviewProps> = ({ limit = 3 }) => {
  // Limiter le nombre d'articles affichés
  const displayedPosts = blogPosts.slice(0, limit);

  // Vérifier s'il n'y a pas d'articles
  if (blogPosts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center p-12 text-center space-y-4"
      >
        <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center">
          <Tag size={32} className="text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold">Aucun article pour le moment</h2>
        <p className="text-muted-foreground max-w-md">
          Les articles sont en cours de rédaction. Revenez bientôt pour découvrir du nouveau contenu !
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col h-full rounded-lg bg-card border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link
              to="/blog/$postSlug"
              params={{ postSlug: post.slug }}
              className="p-6 flex flex-col h-full"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </span>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock size={14} className="mr-1" />
                  <span>{post.readingTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 flex-grow">
                {post.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </div>
                  ))}
                </div>

                <span className="text-primary inline-flex items-center text-sm font-medium">
                  Lire l'article
                  <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* Bouton "Voir tous les articles" si limité */}
      {limit < blogPosts.length && (
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/blog">
            <Button variant="gradient" className="gap-2">
              Voir tous les articles
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};
