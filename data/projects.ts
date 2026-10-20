export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Cafe Sale Analytics",
    category: "Data Analytics",
    description:
      "Analyzing Cafe Sale data to identify sales trends, customer behavior, and transaction patterns..",
    image: "/images/projects/data-analysis.png",
    technologies: ["Python", "Pandas", "Data Visualization"],
    github: "https://github.com/nooooooa/cafe_sale_analytics",
  },
  {
    title: "Binus Peduli",
    category: "Web Development",
    description:
      "A web application built with Next.js, TypeScript, DBeaver, Railway, and MySQL.",
    image: "/images/projects/web-app.png",
    technologies: ["Next.js", "TypeScript", "DBeaver", "Railway", "MySQL"],
    github: "https://github.com/nooooooa/binus-peduli",
  },
];