import { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const demoProjects = [
  {
    title: 'Realtime Chat Platform',
    description: 'WebSockets powered chat with user presence, file sharing, and message search.',
    tags: ['React', 'FastAPI', 'WebSockets', 'Redis'],
    link: '#',
    repo: '#',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Headless commerce admin with analytics, orders, and product management.',
    tags: ['Next.js', 'MongoDB', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'AI Image Studio',
    description: 'Prompt-based image generation and editing workflow with history.',
    tags: ['FastAPI', 'Python', 'Replicate'],
    link: '#',
    repo: '#',
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          <a
            href={project.repo}
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            aria-label="Repository"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={project.link}
            className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            aria-label="Live demo"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="mt-2 text-neutral-700 dark:text-neutral-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState(demoProjects);

  useEffect(() => {
    // In a real app, fetch projects from API here
  }, []);

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Projects</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">A snapshot of things I loved building recently.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
