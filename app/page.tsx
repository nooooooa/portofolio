
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const skills = [
  {
    title: "Data Analytics",
    items: ["Python", "SQL", "Excel", "Power BI", "Data Visualization"],
  },
  {
    title: "Analytical Methods",
    items: [
      "Exploratory Data Analysis",
      "Statistics",
      "Data Interpretation",
      "Trend Analysis",
    ],
  },
  {
    title: "Software Development",
    items: ["TypeScript", "Next.js", "Git", "MySQL", "DBeaver", "Railway"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1117] text-[#F0F6FC]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0D1117]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="#home" className="shrink-0 font-semibold tracking-tight">
            Nicholas Ghonius<span className="text-blue-400">.</span>
          </Link>

          <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-xs text-[#C9D1D9] sm:gap-x-7 sm:text-sm">
            <Link href="#about" className="hover:text-blue-400">About</Link>
            <Link href="#projects" className="hover:text-blue-400">Projects</Link>
            <Link href="#skills" className="hover:text-blue-400">Skills</Link>
            <Link href="#education" className="hover:text-blue-400">Education</Link>
            <Link href="#contact" className="hover:text-blue-400">Contact</Link>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Hero */}
        <section id="home" className="scroll-mt-24 py-24 sm:py-36">
          <p className="mb-5 text-xs tracking-[0.2em] text-blue-400 sm:text-sm">
            ASPIRING DATA ANALYST · COMPUTER SCIENCE
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Turning data into meaningful insights.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#AAB4C0]">
            I&apos;m a Computer Science student interested in data analytics,
            exploratory data analysis, and data visualization. I enjoy
            discovering patterns in data and translating findings into
            meaningful insights. I also build web applications to bring
            technical ideas to life.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium transition-colors hover:bg-blue-500"
            >
              Explore Projects ↗
            </Link>

            <a
              href="/cv.pdf"
              download
              className="rounded-lg border border-white/15 px-5 py-3 text-sm transition-colors hover:border-white/30"
            >
              Download CV ↓
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#8B949E]">
            <span>Python</span>
            <span>/</span>
            <span>SQL</span>
            <span>/</span>
            <span>Statistics</span>
            <span>/</span>
            <span>Data Visualization</span>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20"
        >
          <p className="mb-4 text-xs tracking-[0.2em] text-blue-400">ABOUT</p>

          <h2 className="text-2xl font-semibold sm:text-3xl">
            A little about me.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-[#AAB4C0]">
            I&apos;m a Computer Science student building my skills in data
            analytics and problem-solving. I&apos;m interested in cleaning,
            exploring, and analyzing datasets to uncover patterns and answer
            meaningful questions. My goal is to grow as a Data Analyst by
            applying analytical thinking to practical projects. I also have
            an interest in software development, which helps me build
            applications around technical ideas.
          </p>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20"
        >
          <p className="mb-4 text-xs tracking-[0.2em] text-blue-400">
            PORTFOLIO
          </p>

          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Selected Projects
            </h2>

            <p className="text-sm text-[#8B949E]">
              Data Analytics first. Development second.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20"
        >
          <p className="mb-4 text-xs tracking-[0.2em] text-blue-400">
            CAPABILITIES
          </p>

          <h2 className="text-2xl font-semibold sm:text-3xl">
            Skills &amp; Tools
          </h2>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
              >
                <h3 className="font-medium">{group.title}</h3>

                <ul className="mt-4 space-y-3 text-sm text-[#AAB4C0]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="scroll-mt-24 border-t border-white/10 py-16 sm:py-20"
        >
          <p className="mb-4 text-xs tracking-[0.2em] text-blue-400">
            BACKGROUND
          </p>

          <h2 className="text-2xl font-semibold sm:text-3xl">
            Education
          </h2>

          <div className="mt-6 border-l border-blue-400/50 pl-5">
            <h3 className="font-medium">BINUS University</h3>

            <p className="mt-2 text-sm text-[#AAB4C0]">
              Computer Science
            </p>

            <p className="mt-1 text-sm text-[#8B949E]">
              Expected Graduation: 2028
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 border-t border-white/10 py-20 sm:py-28"
        >
          <p className="mb-4 text-xs tracking-[0.2em] text-blue-400">
            CONTACT
          </p>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            Let&apos;s connect.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-[#AAB4C0]">
            I&apos;m open to learning opportunities, internships, and
            collaborations involving data analytics and data-driven projects.
          </p>

          <div className="mt-7 flex flex-wrap gap-6 text-sm">
            <a
              className="text-blue-400 hover:text-blue-300"
              href="mailto:nicholasghoniussandy@gmail.com"
            >
              Email ↗
            </a>

            <a
              className="text-blue-400 hover:text-blue-300"
              href="https://linkedin.com/in/nicholas-ghonius"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              className="text-blue-400 hover:text-blue-300"
              href="https://github.com/nooooooa"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 py-6 text-xs text-[#8B949E]">
          © Nicholas Ghonius. Built with Next.js.
        </footer>
      </div>
    </main>
  );
}
