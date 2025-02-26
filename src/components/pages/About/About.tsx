import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  Book,
  GraduationCap,
  Code,
  Database,
  Server,
  Globe,
} from "lucide-react";
/* import { Link } from "@tanstack/react-router";
import { Button } from "@/components/atoms/Button/Button"; */
import { education, experiences, interests, personalInfo, skills } from "@/data";

export const About: React.FC = () => {

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        {/* En-tête de la page */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            À <span className="text-primary">propos</span> de moi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Développeur Fullstack de 5 ans d'expérience en TypeScript, Node et
            React, j'ai une solide expérience dans la conception et le
            développement d'applications web performantes. Polyvalent et
            rigoureux, je m'engage à créer des solutions efficaces répondant aux
            besoins utilisateurs, tout en optimisant la qualité et la
            maintenabilité du code.
          </p>
        </div>

        {/* Section Profil et Informations Personnelles */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-xl glow">
              <img
                src="/images/avatar.jpg"
                alt="Diyaeddine LAOUID"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <User className="text-primary" size={28} />
              Informations personnelles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-secondary/50 text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Atouts</h3>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-medium mb-2">Adaptabilité</h4>
                  <p className="text-muted-foreground">
                    Capacité à m'adapter rapidement à de nouvelles technologies
                    et à résoudre des problèmes complexes dans des
                    environnements dynamiques.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-medium mb-2">
                    Capacité à travailler en équipe
                  </h4>
                  <p className="text-muted-foreground">
                    Excellente communication et aptitude à travailler en équipe
                    pour atteindre les objectifs communs et favoriser une
                    atmosphère productive.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section Expérience */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Briefcase className="text-primary" size={28} />
            Expérience professionnelle
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">{exp.period}</span>
                    <span className="px-2 py-1 rounded-full bg-secondary text-xs font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <div className="mb-3 text-lg flex items-center gap-2">
                  <span className="text-primary">{exp.company}</span>
                  <span className="text-muted-foreground text-sm">
                    • {exp.location}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Formation */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <GraduationCap className="text-primary" size={28} />
            Formation
          </motion.h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">{edu.title}</h3>
                  <div className="text-sm text-muted-foreground">
                    {edu.period}
                  </div>
                </div>
                <div className="mb-3 text-lg flex items-center gap-2">
                  <span className="text-primary">{edu.institution}</span>
                  <span className="text-muted-foreground text-sm">
                    • {edu.location}
                  </span>
                </div>
                <p className="text-muted-foreground">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Compétences */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Code className="text-primary" size={28} />
            Compétences techniques
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 border border-border rounded-lg bg-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <Server size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary/60 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 border border-border rounded-lg bg-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary/60 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 border border-border rounded-lg bg-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <Database size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Bases de données</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary/60 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 border border-border rounded-lg bg-card md:col-span-2 lg:col-span-3"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code size={24} className="text-primary" />
                <h3 className="text-xl font-bold">Concepts & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary/60 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section Centres d'intérêt */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Book className="text-primary" size={28} />
            Centres d'intérêt
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-4"
          >
            {interests.map((interest, index) => (
              <div
                key={index}
                className="py-3 px-6 rounded-full bg-card border border-border"
              >
                {interest}
              </div>
            ))}
          </motion.div>
        </section>

        {/* Section Contact CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-6">
            Vous souhaitez me contacter ?
          </h2>
          <Link to="/contact">
            <Button variant="gradient" size="lg">
              Contactez-moi
            </Button>
          </Link>
        </motion.div> */}
      </motion.div>
    </div>
  );
};
