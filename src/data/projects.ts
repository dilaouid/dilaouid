import { type IProject } from '@/types/project'

export const projectsData: IProject[] = [
  {
    id: 'steam-wgp',
    title: 'SteamWGP',
    status: 'maintained',
    projectType: 'website',
    description: 'Plateforme permettant aux joueurs Steam de décider collectivement à quel jeu jouer ensemble en utilisant un système de swipe.',
    longDescription: `SteamWGP est une plateforme innovante conçue pour améliorer l'expérience de jeu des utilisateurs Steam en leur permettant d'organiser et de rejoindre des sessions de jeu facilement. Ce service exploite la puissance du gaming social pour aider les joueurs à trouver des partenaires de jeu compatibles et à décider collectivement à quel jeu jouer pendant leurs sessions.`,
    thumbnail: '/images/projects/steamwgp.jpg',
    technologies: ['React', 'TypeScript', 'Vite', 'Zustand', 'Tanstack', 'API', 'Bootstrap', 'Fastify', 'PostgreSQL', 'Drizzle ORM', 'Storybook', 'Websockets', 'Tailwind'],
    github: 'https://github.com/dilaouid/steam-wgp',
    website: 'https://steamwgp.fr',
    stars: 74,
    featured: true,
    createdAt: '2024-04-15',
  },
  {
    id: 'fandomscraper',
    title: 'FandomScraper',
    status: 'maintained',
    projectType: 'library',
    description: 'Bibliothèque pour récupérer facilement des données structurées depuis les wikis Fandom.',
    longDescription: `FandomScraper est une bibliothèque puissante qui permet de récupérer facilement des données structurées depuis les wikis Fandom. Grâce à cette bibliothèque, vous pouvez extraire des informations de personnages comme l'âge, les images, et tout types d'informations, le tout de manière programmatique et récursive.`,
    thumbnail: '/images/projects/fandomscraper.jpg',
    technologies: ['Node', 'API', 'Web Scraping', 'Vue.js', 'Vite', 'Tailwind', 'Hono'],
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
    status: 'maintained',
    projectType: 'game',
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
    status: 'maintained',
    projectType: 'tool',
    description: 'Outil Python et TypeScript pour créer des images vaporwave à partir d\'images importées et y appliquer des effets de glitch et des filtres de gradient.',
    longDescription: `Vaporwaver est un outil disponible en Python et TypeScript qui permet de créer des images vaporwave à partir d'images importées. Il offre une large gamme d'options de personnalisation, comme des effets de glitch, des filtres de gradient, des rotations, et plus encore.`,
    thumbnail: '/images/projects/vaporwaver.jpg',
    technologies: ['Python', 'TypeScript', 'Pillow', 'OpenCV', 'TKinter', 'Node.js', 'Next.js', 'Vite'],
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
    status: 'deprecated',
    projectType: 'app',
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
    status: 'maintained',
    projectType: 'tool',
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
    id: 'vaporwaver-php',
    title: 'Vaporwaver PHP',
    status: 'archived',
    projectType: 'website',
    description: 'Version PHP de Vaporwaver permettant de créer des images vaporwave sans dépendances externes.',
    longDescription: `Version PHP originale de Vaporwaver qui permet de créer des images vaporwave à partir de photos de profil. Ce script fonctionne sans framework ni bibliothèque tierce. Il applique des effets de glitch, superpose des images, ajoute des bruits et convertit automatiquement du texte latin en hiragana/katakana.`,
    thumbnail: '/images/projects/vaporwaver-php.jpg',
    technologies: ['PHP', 'GD Library', 'Image Processing'],
    github: 'https://github.com/dilaouid/vaporwaver-php',
    stars: 4,
    featured: false,
    createdAt: '2020-12-02'
  },
  {
    id: 'p2nya',
    title: 'p2nya',
    status: 'deprecated',
    projectType: 'website',
    description: 'Messagerie décentralisée sans stockage de messages en base de données avec support d\'émojis personnalisés.',
    longDescription: `p2nya est une application de messagerie où les utilisateurs peuvent créer des salons et s'inviter entre eux pour discuter. Aucun message n'est stocké en base de données, offrant ainsi une meilleure confidentialité. L'application prend en charge le BBCode, la personnalisation de profil sans inscription/connexion, l'ajout d'émojis personnalisés décentralisés, et le partage de messages et de fichiers. Première implémentation de WebRTC.`,
    thumbnail: '/images/projects/p2nya.jpg',
    technologies: ['Angular', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'WebRTC', 'WebSockets'],
    github: 'https://github.com/dilaouid/p2nya',
    stars: 3,
    featured: false,
    createdAt: '2022-07-27'
  },
  {
    id: 'hypeertube',
    title: 'Hypeertube',
    status: 'deprecated',
    projectType: 'website',
    description: 'Application web de streaming vidéo utilisant le protocole BitTorrent pour le téléchargement et la diffusion en temps réel.',
    longDescription: `Hypertube est une application web permettant aux utilisateurs de rechercher et visionner des vidéos. Le lecteur est directement intégré au site, et les vidéos sont téléchargées via le protocole BitTorrent. Le moteur de recherche interroge plusieurs sources externes. Une fois un élément sélectionné, il est téléchargé sur le serveur et diffusé sur le player web en même temps, permettant ainsi de streamer directement le flux sans attendre que le téléchargement soit terminé.`,
    thumbnail: '/images/projects/hypeertube.jpg',
    technologies: ['Node.js', 'Express', 'React', 'FFmpeg', 'Web Scraping', 'WebSockets', 'BitTorrent'],
    github: 'https://github.com/dilaouid/Hypertube',
    stars: 0,
    featured: false,
    createdAt: '2020-04-28'
  },
  {
    id: 'dilacrypt',
    title: 'dilacrypt',
    status: 'archived',
    projectType: 'tool',
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
    id: 'santoryu',
    title: 'santoryu.py',
    status: 'archived',
    projectType: 'tool',
    description: 'Outil Python pour découper des spritesheets en sprites individuels.',
    longDescription: `Santoryu.py est un outil permettant de découper une ou plusieurs spritesheets en sprites individuels. Il suffit de spécifier le nombre de lignes et de colonnes pour chaque spritesheet, et le script génère automatiquement les fichiers séparés dans un dossier dédié.`,
    thumbnail: '/images/projects/santoryupy.jpg',
    technologies: ['Python', 'Pillow', 'Image Processing'],
    github: 'https://github.com/dilaouid/santoryu.py',
    stars: 0,
    featured: false,
    createdAt: '2022-08-24'
  },
  {
    id: 'useless-finder',
    title: 'Useless Finder',
    status: 'archived',
    projectType: 'tool',
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