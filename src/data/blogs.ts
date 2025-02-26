import { type IBlogPost } from "@/types/blog";

export const blogPosts: IBlogPost[] = [
    /* {
        id: '1',
        title: 'Comment j\'ai créé SteamWGP : Architecture et défis techniques',
        slug: 'creation-steamwgp-architecture-defis-techniques',
        description: 'Dans cet article, je partage mon expérience sur la création de SteamWGP, les choix d\'architecture et les défis techniques rencontrés.',
        date: '2024-01-15',
        tags: ['React', 'TypeScript', 'PostgreSQL', 'Architecture'],
        author: {
            name: 'Diyaeddine LAOUID',
            avatar: '/images/avatar.jpg',
        },
        readingTime: '8 min',
        content: `
        <h2>L'idée derrière SteamWGP</h2>
        <p>Tout a commencé lorsque mes amis et moi avions du mal à décider à quel jeu jouer ensemble sur Steam. Nous passions souvent plus de temps à débattre du choix du jeu qu'à jouer réellement. C'est ainsi qu'est née l'idée de SteamWGP (What are we Going to Play) - une plateforme permettant de décider collectivement et rapidement quel jeu jouer.</p>
        
        <h2>Choix technologiques</h2>
        <p>Pour le frontend, j'ai opté pour React avec TypeScript pour bénéficier du typage statique et d'une meilleure maintenabilité du code. Pour la gestion d'état, j'ai choisi Zustand pour sa simplicité et son approche minimaliste par rapport à Redux.</p>
        <p>Côté backend, j'ai utilisé Fastify avec TypeScript pour sa performance et sa faible empreinte mémoire. Pour la base de données, PostgreSQL semblait le choix idéal compte tenu de la nature relationnelle des données à stocker.</p>
        
        <h2>Défis techniques rencontrés</h2>
        <p>L'un des principaux défis était l'intégration avec l'API Steam. La documentation n'est pas toujours claire et complète, ce qui a nécessité beaucoup de tests et d'ajustements.</p>
        <p>La synchronisation en temps réel des décisions de jeu entre les utilisateurs était également un défi. J'ai implémenté une solution basée sur WebSockets pour assurer une expérience fluide et réactive.</p>
        
        <h2>Architecture du projet</h2>
        <p>J'ai structuré le projet comme un monorepo avec pnpm workspaces, ce qui a facilité le partage de code entre le frontend et le backend tout en maintenant une séparation claire des responsabilités.</p>
        <p>Pour le déploiement, j'ai choisi Netlify pour le frontend et Railway pour le backend, ce qui a permis une mise en place rapide et efficace de l'infrastructure.</p>
        
        <h2>Leçons apprises</h2>
        <p>Ce projet m'a appris l'importance de bien planifier l'architecture dès le début, surtout pour les fonctionnalités temps réel. J'ai également compris la valeur de la mise en place précoce des tests automatisés pour éviter les régressions lors des itérations rapides.</p>
        
        <h2>Perspectives d'évolution</h2>
        <p>À l'avenir, j'envisage d'ajouter des fonctionnalités comme l'intégration avec d'autres plateformes de jeux (Epic Games, GOG, etc.), un système de recommandation basé sur les préférences des joueurs, et une application mobile pour faciliter l'accès à la plateforme.</p>
      `,
    } */
]