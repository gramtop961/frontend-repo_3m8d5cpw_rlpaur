export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-black/5 dark:border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {year} Full‑Stack Developer. All rights reserved.
          </p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#projects" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Projects</a>
            <a href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
