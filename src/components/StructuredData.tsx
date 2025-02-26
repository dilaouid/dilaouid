import React from "react";

interface PersonSchema {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image: string;
  sameAs: string[];
}

export const PersonStructuredData: React.FC<PersonSchema> = ({
  name,
  jobTitle,
  description,
  url,
  image,
  sameAs,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    url,
    image,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
