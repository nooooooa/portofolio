import Image from "next/image";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors hover:border-blue-400/40">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#161B22]">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-blue-400">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </p>

        <h3 className="text-xl font-semibold tracking-tight text-[#F0F6FC]">
          {project.title}
        </h3>

        <p className="text-sm leading-7 text-[#AAB4C0]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-[#C9D1D9]"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="flex gap-5 pt-1 text-sm">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              GitHub ↗
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
