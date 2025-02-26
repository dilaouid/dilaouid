import React from 'react'
import { motion } from 'framer-motion'
import { homepageSkills } from '@/data'

export const Skills: React.FC = () => {
  const frontendSkills = homepageSkills.filter(skill => skill.category === 'frontend')
  const backendSkills = homepageSkills.filter(skill => skill.category === 'backend')
  const otherSkills = homepageSkills.filter(skill => skill.category === 'other')

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Compétences Frontend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-lg bg-card border border-border"
      >
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <span className="text-2xl mr-2">🎨</span>
          Frontend
        </h3>
        <div className="flex flex-wrap gap-3">
          {frontendSkills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="inline-flex items-center px-3 py-2 rounded-lg bg-secondary/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300"
            >
              <span className="mr-2">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Compétences Backend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 rounded-lg bg-card border border-border"
      >
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <span className="text-2xl mr-2">⚙️</span>
          Backend
        </h3>
        <div className="flex flex-wrap gap-3">
          {backendSkills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="inline-flex items-center px-3 py-2 rounded-lg bg-secondary/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300"
            >
              <span className="mr-2">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Autres Compétences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-6 rounded-lg bg-card border border-border"
      >
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <span className="text-2xl mr-2">🛠️</span>
          Autres
        </h3>
        <div className="flex flex-wrap gap-3">
          {otherSkills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="inline-flex items-center px-3 py-2 rounded-lg bg-secondary/50 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300"
            >
              <span className="mr-2">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}