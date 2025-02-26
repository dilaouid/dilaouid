import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, BookOpen, Smartphone, Gamepad2, Wrench } from "lucide-react";
import { type ProjectTypeIconProps } from "./ProjectTypeIcon.props";

const ProjectTypeIcon: React.FC<ProjectTypeIconProps> = ({
  type,
  className,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Map des icônes par type
  const icons = {
    website: <Globe size={16} />,
    library: <BookOpen size={16} />,
    tool: <Wrench size={16} />,
    app: <Smartphone size={16} />,
    game: <Gamepad2 size={16} />,
  };

  // Map des labels par type
  const typeLabels = {
    website: "Site Web",
    library: "Bibliothèque",
    tool: "Outil",
    app: "Application",
    game: "Jeu",
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Icône */}
      <div className="p-2 rounded-lg bg-primary/20 text-primary shadow-inner">
        {icons[type]}
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -top-10 -translate-x-1/2 z-50 px-3 py-1.5 rounded-md bg-background/90 backdrop-blur-md border border-border text-foreground text-sm font-medium shadow-lg min-w-max"
          >
            {typeLabels[type]}
            {/* Flèche pointant vers le bas */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-background/90 border-b border-r border-border rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { ProjectTypeIcon };
