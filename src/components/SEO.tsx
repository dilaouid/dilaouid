import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  path?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Diyaeddine LAOUID - Développeur Fullstack',
  description = 'Développeur Fullstack avec 5 ans d\'expérience en TypeScript, Node et React. Créez des applications web innovantes et performantes.',
  keywords = 'développeur fullstack, react, typescript, node.js, javascript, développeur web, Paris',
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  path = '',
}) => {
  const siteURL = 'https://dilaouid.fr'; // Remplacez par votre URL réelle
  const canonicalURL = path ? `${siteURL}/${path}` : siteURL;
  const fullTitle = title.includes('Diyaeddine') ? title : `${title} | Diyaeddine LAOUID`;

  return (
    <Helmet>
      {/* Balises meta de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalURL} />
      <meta name="author" content="Diyaeddine LAOUID" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteURL}${ogImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@LaouidD" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteURL}${ogImage}`} />
      
      {/* Balises supplémentaires */}
      <meta name="theme-color" content="#9333EA" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <html lang="fr" />
    </Helmet>
  );
};
