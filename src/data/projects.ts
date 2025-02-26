import { type IProject } from '@/types/project'

export const projectsData: IProject[] = [
  {
    id: 'steam-wgp',
    title: 'SteamWGP',
    description: 'Plateforme permettant aux joueurs Steam de décider collectivement à quel jeu jouer ensemble en utilisant un système de swipe.',
    longDescription: `SteamWGP est une plateforme innovante conçue pour améliorer l'expérience de jeu des utilisateurs Steam en leur permettant d'organiser et de rejoindre des sessions de jeu facilement. Ce service exploite la puissance du gaming social pour aider les joueurs à trouver des partenaires de jeu compatibles et à décider collectivement à quel jeu jouer pendant leurs sessions.`,
    thumbnail: '/images/projects/steamwgp.jpg',
    technologies: ['React', 'TypeScript', 'Zustand', 'Tanstack', 'API', 'Bootstrap', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'Storybook', 'Websockets', 'Tailwind'],
    github: 'https://github.com/dilaouid/steam-wgp',
    website: 'https://steamwgp.fr',
    stars: 74,
    featured: true,
    createdAt: '2024-04-15',
  },
  {
    id: 'fandomscraper',
    title: 'FandomScraper',
    description: 'Bibliothèque pour récupérer facilement des données structurées depuis les wikis Fandom.',
    longDescription: `FandomScraper est une bibliothèque puissante qui permet de récupérer facilement des données structurées depuis les wikis Fandom. Grâce à cette bibliothèque, vous pouvez extraire des informations de personnages comme l'âge, les images, et tout types d'informations, le tout de manière programmatique et récursive.`,
    thumbnail: '/images/projects/fandomscraper.jpg',
    technologies: ['Node', 'API', 'Web Scraping'],
    github: 'https://github.com/dilaouid/FandomScraper',
    website: 'https://fandomscraper.dilaouid.fr/',
    stars: 34,
    featured: true,
    createdAt: '2023-07-25',
    demos: [
      {
        name: 'FandomScraper Web App',
        description: 'Application web de démonstration pour tester FandomScraper',
        url: 'https://fandomscraper.dilaouid.fr'
      }
    ]
  },
  {
    id: 'memorio',
    title: 'Memorio',
    description: 'Jeu de mémoire dynamique qui vous défie de mémoriser et reproduire un chemin montré pendant une phase de démonstration.',
    longDescription: `Memorio est un jeu de mémoire dynamique qui vous met au défi de vous souvenir et de reproduire un chemin montré pendant une phase de démonstration, en utilisant les touches fléchées directionnelles de votre clavier. Après avoir observé une séquence de flèches s'allumer sur une grille, c'est à votre tour de vous lever et de tracer le chemin de mémoire. Cela semble simple ? Détrompez-vous ! Au fur et à mesure que vous progressez, les chemins deviennent plus complexes et la pression augmente.`,
    thumbnail: '/images/projects/memorio.jpg',
    technologies: ['React', 'TypeScript', 'Vite', 'XState'],
    github: 'https://github.com/dilaouid/memorio',
    website: 'https://memorio.dilaouid.fr',
    stars: 21,
    featured: true,
    createdAt: '2024-02-10',
  },
  {
    id: 'vaporwaver',
    title: 'Vaporwaver',
    description: 'Outil Python et TypeScript pour créer des images vaporwave à partir d\'images importées et y appliquer des effets de glitch et des filtres de gradient.',
    longDescription: `Vaporwaver est un outil disponible en Python et TypeScript qui permet de créer des images vaporwave à partir d'images importées. Il offre une large gamme d'options de personnalisation, comme des effets de glitch, des filtres de gradient, des rotations, et plus encore.`,
    thumbnail: '/images/projects/vaporwaver.jpg',
    technologies: ['Python', 'TypeScript', 'Pillow', 'OpenCV', 'TKinter', 'Node.js', 'Next.js'],
    github: 'https://github.com/dilaouid/vaporwaver',
    website: 'https://vaporwaver.dilaouid.fr/',
    stars: 18,
    featured: false,
    createdAt: '2023-02-18',
    downloads: [
      {
        name: 'Vaporwaver Executable',
        description: 'Version Windows exécutable de Vaporwaver',
        url: 'https://github.com/dilaouid/vaporwaver/releases/download/1.1.83/vaporwaver.exe'
      }
    ],
    demos: [
      {
        name: 'Vaporwaver Web App',
        description: 'Application web de démonstration pour tester Vaporwaver',
        url: 'https://vaporwaver.dilaouid.fr'
      }
    ]
  },
  {
    id: 'alzheimapp',
    title: 'AlzheimApp',
    description: 'Application mobile pour améliorer le suivi des personnes atteintes de la maladie d\'Alzheimer.',
    longDescription: `AlzheimApp est une application mobile libre et opensource pour améliorer le suivi des personnes atteintes de la maladie d'Alzheimer. Elle ne nécessite aucune connexion en ligne, et donc ne récolte aucune données. Elle propose plusieurs fonctionnalités comme la création de profils, des jeux de mémoire et un journal vocal.`,
    thumbnail: '/images/projects/alzheimapp.jpg',
    technologies: ['React Native', 'Expo', 'JavaScript'],
    github: 'https://github.com/dilaouid/AlzheimApp',
    stars: 15,
    featured: false,
    createdAt: '2022-05-12',
  },
  {
    id: 'mk4',
    title: 'MK4',
    description: 'Outil Python pour convertir des vidéos MKV en MP4 et intégrer des sous-titres.',
    longDescription: `MK4 est un outil Python permettant de convertir facilement des vidéos MKV en format MP4, tout en offrant la possibilité d'intégrer les sous-titres directement dans la vidéo. L'outil permet de choisir la police et la taille des sous-titres, et de sélectionner les pistes audio et de sous-titres souhaitées.`,
    thumbnail: '/images/projects/mk4.jpg',
    technologies: ['Python', 'FFmpeg', 'PyQt5'],
    github: 'https://github.com/dilaouid/mk4',
    stars: 3,
    featured: false,
    createdAt: '2023-01-20',
    downloads: [
      {
        name: 'MK4 GUI Executable',
        description: 'Version Windows avec interface graphique de MK4',
        url: 'https://github.com/dilaouid/mk4/releases/download/v1.1/mk4_gui.exe'
      }
    ]
  },
  {
    id: 'dilacrypt',
    title: 'dilacrypt',
    description: 'Un encrypteur de fichiers en PHP, inspiré de la méthode Vigenere.',
    longDescription: `dilacrypt est un encrypteur de fichiers développé en PHP, inspiré de la méthode Vigenere. Contrairement à la méthode Vigenere qui somme les positions alphabétiques, dilacrypt somme les positions ASCII de chaque caractère du fichier en base64 avec ceux de la clé, rendant l'encryption beaucoup plus sécurisée. Cependant, ça reste bien entendu à usage purement ludique, ça ne remplace pas l'AES !`,
    thumbnail: '/images/projects/dilacrypt.jpg',
    technologies: ['PHP', 'Cryptographie'],
    github: 'https://github.com/dilaouid/dilacrypt',
    stars: 1,
    featured: false,
    createdAt: '2020-11-28',
  },
  {
    id: 'useless-finder',
    title: 'Useless Finder',
    description: 'Script PHP pour trouver les dépendances JavaScript inutilisées dans un projet.',
    longDescription: `Useless-finder est un script PHP qui permet de trouver les dépendances JavaScript non utilisées dans un projet en analysant le code source et en le comparant avec le fichier package.json. Cela permet d'optimiser les projets en supprimant les dépendances superflues.`,
    thumbnail: '/images/projects/useless-finder.jpg',
    technologies: ['PHP', 'JavaScript', 'Node.js'],
    github: 'https://github.com/dilaouid/useless-finder',
    stars: 0,
    featured: false,
    createdAt: '2022-08-23',
  }
]