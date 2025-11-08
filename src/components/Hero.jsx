import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-24">
          <span className="inline-flex items-center rounded-full bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 ring-1 ring-black/5 dark:ring-white/10">Full‑Stack Developer</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Building delightful web apps with modern stacks
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
            I craft scalable APIs, rich user interfaces, and data-driven experiences. Explore my latest work and get in touch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-indigo-600 px-5 py-2.5 text-white font-semibold shadow hover:bg-indigo-500 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-5 py-2.5 text-neutral-900 dark:text-white font-semibold ring-1 ring-black/10 dark:ring-white/10 hover:bg-white/90 dark:hover:bg-neutral-800 transition">Contact Me</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white dark:from-neutral-950/70 dark:to-neutral-950" />
    </section>
  );
}
