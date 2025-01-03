import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Rostislav Křemeček",
  EMAIL: "rostislav.kremecek@protonmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to my personal blog, where I share things about me and my projects.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter",
    HREF: "https://x.com/rkremecek",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/rixcian"
  },
  { 
    NAME: "linkedin",
    HREF: "https://cz.linkedin.com/in/rostislav-k%C5%99eme%C4%8Dek-b7b930193",
  }
];
