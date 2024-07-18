export const LINKS = {
  website: "https://JoaoAMarinho.github.io/",
  github: "https://github.com/JoaoAMarinho",
  linkedin: "https://www.linkedin.com/in/joaoamarinho/",
  email: "mailto:joao.andre.marinho@gmail.com",
};

export const loaderAnimation = [
  ".loader",
  { opacity: [1, 0], pointerEvents: "none" },
  { easing: "ease-out" },
];

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "João Marinho",
  url: LINKS.website,
  sameAs: [LINKS.github, LINKS.linkedin],
  image: "/share-image.jpg",
  jobTitle: "",
  nationality: {
    "@type": "Country",
    name: "Portugal",
  },
};

export const PROJECT_SCHEMA = (project: {
  title: string | undefined;
  description: string | undefined;
}): object => ({
  "@context": "https://schema.org",
  "@type": "Project",
  funder: PERSON_SCHEMA,
  name: project.title,
  description: project.description,
});
