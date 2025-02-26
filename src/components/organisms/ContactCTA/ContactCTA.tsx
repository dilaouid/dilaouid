import React from "react";
/* import { Link } from "@tanstack/react-router"; */
import { motion } from "framer-motion";
import { Mail, /* MessageSquare */ } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";

export const ContactCTA: React.FC = () => {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto rounded-xl p-8 md:p-12 border border-border relative overflow-hidden glass-effect"
      >
        {/* Effets de lueur en arrière-plan */}
        <div className="absolute -top-[30%] right-[10%] w-[300px] h-[300px] rounded-full bg-primary/20 blur-[80px] -z-10" />
        <div className="absolute -bottom-[30%] left-[20%] w-[250px] h-[250px] rounded-full bg-purple-500/20 blur-[60px] -z-10" />

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Vous avez un <span className="text-primary">projet</span> en tête ?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Que ce soit pour un nouveau projet, une collaboration, ou simplement
            pour discuter de développement, je serais ravi d'échanger avec vous.
            N'hésitez pas à me contacter !
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:diyaeddine.laouid@gmail.com" className="group">
              <Button variant="gradient" className="w-full sm:w-auto gap-2">
                <Mail className="w-5 h-5 mr-1" />
                M'envoyer un email
              </Button>
            </a>
            {/* <Link to="/contact">
              <Button variant="neon" className="w-full sm:w-auto gap-2">
                <MessageSquare className="w-5 h-5 mr-1" />
                Me contacter
              </Button>
            </Link> */}
          </div>
        </div>

        {/* Décoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary" />
      </motion.div>
    </div>
  );
};
