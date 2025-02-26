// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { HelmetProvider } from 'react-helmet-async';
import { preloadCriticalResources } from '@/lib/preloadUtils';


import { router } from './router'
import './styles/globals.css'

preloadCriticalResources();

// Initialisation du routeur
router.load()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)