import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Clock, Tag, Search, Filter, Calendar } from "lucide-react";
import { formatDate } from "@/lib/format";
import { blogPosts } from "@/data";

export const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort();

  const filteredPosts = [...blogPosts].filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

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
            Blog <span className="text-primary">technique</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Découvrez mes articles sur le développement web, des conseils
            techniques, et mes retours d'expérience sur divers projets et
            technologies.
          </p>

          {/* Recherche et filtres */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 py-2 pr-4 rounded-lg bg-secondary text-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            <div className="relative w-full sm:w-auto sm:min-w-[200px]">
              <Filter
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <select
                value={selectedTag || ""}
                onChange={(e) => setSelectedTag(e.target.value || null)}
                className="w-full pl-10 py-2 pr-4 appearance-none rounded-lg bg-secondary text-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              >
                <option value="">Tous les sujets</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Liste des articles */}
        {filteredPosts.length > 0 ? (
          <div className="max-w-4xl mx-auto space-y-10">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <Link to="/blog/$postSlug" params={{ postSlug: post.slug }} className="block">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readingTime} de lecture</span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground mb-4">
                        {post.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <div
                            key={tag}
                            className="flex items-center text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                          >
                            <Tag size={10} className="mr-1" />
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span>{post.author.name}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <h3 className="text-xl font-medium mb-2">
              Aucun article ne correspond à votre recherche
            </h3>
            <p className="text-muted-foreground">
              Essayez de modifier vos critères de recherche ou de réinitialiser
              les filtres.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};
