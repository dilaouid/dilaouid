import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import React from 'react'

import { MainLayout } from "./components/templates/MainLayout/MainLayout";
import { withSuspense } from "./components/templates/withSuspense/withSuspense";
import { LoadingSpinner } from "./components/atoms/LoadingSpinner/LoadingSpinner";

const Home = React.lazy(() => import('./components/pages/Home/Home').then(module => ({ default: module.Home })))
const Projects = React.lazy(() => import('./components/pages/Projects/Projects').then(module => ({ default: module.Projects })))
const ProjectDetail = React.lazy(() => import('./components/pages/ProjectDetail/ProjectDetail').then(module => ({ default: module.ProjectDetail })))
const Blog = React.lazy(() => import('./components/pages/Blog/Blog').then(module => ({ default: module.Blog })))
const BlogPost = React.lazy(() => import('./components/pages/BlogPost/BlogPost').then(module => ({ default: module.BlogPost })))
const About = React.lazy(() => import('./components/pages/About/About').then(module => ({ default: module.About })))
const NotFound = React.lazy(() => import('./components/pages/NotFound/NotFound').then(module => ({ default: module.NotFound })))

// import { ContactCTA } from "./components/organisms/ContactCTA/ContactCTA";
// Définition des routes
const rootRoute = createRootRoute({
  component: MainLayout,
});

// Route Accueil
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: withSuspense(Home),
});

// Route Projets
const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: withSuspense(Projects),
});

// Route Détail Projet
const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects/$projectId",
  component: withSuspense(ProjectDetail),
});

// Route Blog
const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: withSuspense(Blog),
});

// Route Article de Blog
const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$postSlug",
  component: withSuspense(BlogPost),
});

// Route À Propos
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: withSuspense(About),
});

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: withSuspense(NotFound),
})

// Route Contact
/* const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactCTA,
}); */


// Création du routeur
const routeTree = rootRoute.addChildren([
  indexRoute,
  projectsRoute,
  projectDetailRoute,
  blogRoute,
  blogPostRoute,
  aboutRoute,
  notFoundRoute
  // contactRoute,
]);

export const router = createRouter({ routeTree, defaultPreload: 'intent', defaultPendingComponent: LoadingSpinner });

// Déclaration pour TypeScript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}