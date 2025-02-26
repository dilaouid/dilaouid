

interface ISkillHomepage {
    name: string
    category: 'frontend' | 'backend' | 'other'
    icon: string
    color?: string
}

export const homepageSkills: ISkillHomepage[] = [
    // Frontend
    { name: 'React', category: 'frontend', icon: '⚛️', color: '#61DAFB' },
    { name: 'TypeScript', category: 'frontend', icon: '🔷', color: '#3178C6' },
    { name: 'JavaScript', category: 'frontend', icon: '🟨', color: '#F7DF1E' },
    { name: 'HTML/CSS', category: 'frontend', icon: '🌐', color: '#E34F26' },
    { name: 'Tailwind CSS', category: 'frontend', icon: '🎨', color: '#06B6D4' },
    { name: 'Next.js', category: 'frontend', icon: '▲', color: '#000000' },
    { name: 'Vue.js', category: 'frontend', icon: '🟩', color: '#4FC08D' },

    // Backend
    { name: 'Node.js', category: 'backend', icon: '🟢', color: '#339933' },
    { name: 'PHP', category: 'backend', icon: '🐘', color: '#777BB4' },
    { name: 'Python', category: 'backend', icon: '🐍', color: '#3776AB' },
    { name: 'PostgreSQL', category: 'backend', icon: '🐘', color: '#4169E1' },
    { name: 'MySQL', category: 'backend', icon: '🐬', color: '#4479A1' },
    { name: 'MongoDB', category: 'backend', icon: '🍃', color: '#47A248' },
    { name: 'Firebase', category: 'backend', icon: '🔥', color: '#FFCA28' },

    // Autres
    { name: 'Git', category: 'other', icon: '📊', color: '#F05032' },
    { name: 'Docker', category: 'other', icon: '🐳', color: '#2496ED' },
    { name: 'Agile/Scrum', category: 'other', icon: '🔄', color: '#6DB33F' },
    { name: 'CI/CD', category: 'other', icon: '🔄', color: '#4285F4' },
]