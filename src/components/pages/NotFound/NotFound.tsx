import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/atoms/Button/Button";
import { Home, ArrowLeft, Code } from "lucide-react";
import { SEO } from "@/components/SEO";

export const NotFound: React.FC = () => {
  useEffect(() => {
    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  // Animation des chiffres 404
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Animation des particules
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.3,
    delay: Math.random() * 2,
  }));

  return (
    <>
      <SEO
        title="Page non trouvée - 404"
        description="La page que vous recherchez n'existe pas ou a été déplacée"
        path="404"
      />

      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        {/* Particules d'arrière-plan */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/20 pointer-events-none"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Conteneur principal */}
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center">
            {/* Animation 404 */}
            <motion.div
              className="flex justify-center mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                variants={itemVariants}
                className="text-9xl font-bold text-primary"
              >
                4
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-9xl font-bold text-primary"
              >
                0
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-9xl font-bold text-primary"
              >
                4
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Page non trouvée
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                La page que vous recherchez semble avoir été déplacée, supprimée
                ou n'a jamais existé. Oups ? :)
              </p>

              {/* Section console de développeur */}
              <div className="max-w-md mx-auto mb-8 rounded-lg overflow-hidden bg-card border border-border">
                <div className="bg-secondary p-2 flex items-center gap-2">
                  <Code size={16} />
                  <span className="text-sm font-mono">Console</span>
                </div>
                <div className="p-4 font-mono text-sm text-left">
                  <p className="mb-1 text-red-500">
                    Uncaught Error: Page not found
                  </p>
                  <p className="text-muted-foreground mb-2">
                    at <span className="text-green-400">Router.navigate</span>{" "}
                    (router.ts:42)
                  </p>
                  <p className="text-primary-foreground">
                    {">"} Status: <span className="text-yellow-400">404</span>
                  </p>
                  <p className="text-primary-foreground mt-2">
                    {">"} Suggested fix:{" "}
                    <span className="text-green-400">return home</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="gradient" className="gap-2 w-full">
                    <Home size={18} />
                    Retour à l'accueil
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft size={18} />
                  Page précédente
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
