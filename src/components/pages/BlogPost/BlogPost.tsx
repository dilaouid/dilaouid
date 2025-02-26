// src/pages/BlogPost/BlogPost.tsx
import React from 'react'
import { useParams, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag, Twitter, Linkedin, Facebook } from 'lucide-react'
import { Button } from '@/components/atoms/Button/Button'
import { blogPosts } from '@/data/blogs'
import { formatDate } from '@/lib/format'

export const BlogPost: React.FC = () => {
  const { postSlug } = useParams({ from: '/blog/$postSlug' })
  const post = blogPosts.find(p => p.slug === postSlug)

  if (!post) {
    return (
      <div className="py-20">
        <div className="container text-center">
          <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
          <p className="text-muted-foreground mb-6">L'article que vous recherchez n'existe pas ou a été déplacé.</p>
          <Link to="/blog">
            <Button variant="primary">Retour au blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  // Articles connexes (basés sur les tags communs)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3)

  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        {/* Bouton de retour */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={16} />
              Tous les articles
            </Button>
          </Link>
        </div>

        {/* En-tête de l'article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="font-medium">{post.author.name}</span>
                <div className="text-sm text-muted-foreground">Développeur Web</div>
              </div>
            </div>
            
            <div className="h-6 w-px bg-border hidden sm:block"></div>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{post.readingTime} de lecture</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
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
        </motion.div>

        {/* Contenu de l'article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Partage sur les réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-8 mb-16"
        >
          <div className="text-lg font-medium">Partager cet article</div>
          <div className="flex gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/70 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Partager sur Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/70 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Partager sur LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/70 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Partager sur Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </motion.div>

        {/* Articles connexes */}
        {relatedPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-t border-border pt-10"
          >
            <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="block"
                >
                  <div className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors bg-card hover:bg-card/80">
                    <div className="text-sm text-muted-foreground mb-2 flex items-center">
                      <Clock size={12} className="mr-1" />
                      <span>{relatedPost.readingTime} de lecture</span>
                    </div>
                    <h3 className="text-base font-medium mb-2 line-clamp-2 hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {relatedPost.tags.slice(0, 2).map((tag) => (
                        <div
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground"
                        >
                          {tag}
                        </div>
                      ))}
                      {relatedPost.tags.length > 2 && (
                        <div className="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground">
                          +{relatedPost.tags.length - 2}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Commentaires (placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-border pt-10"
        >
          <h2 className="text-2xl font-bold mb-6">Commentaires</h2>
          <div className="bg-card/50 p-6 rounded-lg border border-border text-center">
            <p className="text-muted-foreground mb-4">
              La section commentaires sera bientôt disponible. En attendant, n'hésitez pas à me contacter directement pour partager vos réflexions !
            </p>
            {/* <Link to="/contact">
              <Button variant="outline">Me contacter</Button>
            </Link> */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}