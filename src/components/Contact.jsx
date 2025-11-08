import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Let's Connect</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">Have a project in mind or just want to say hi? Drop a message.</p>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="w-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input required type="email" name="email" placeholder="Email" className="w-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <input name="subject" placeholder="Subject" className="mt-4 w-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea required name="message" placeholder="Your message" rows={5} className="mt-4 w-full rounded-lg border border-neutral-200 dark:border-neutral-700 bg-transparent px-4 py-3 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

          <div className="mt-6 flex items-center justify-between">
            <a href="mailto:hello@yourdomain.dev" className="inline-flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white">
              <Mail className="h-5 w-5" /> hello@yourdomain.dev
            </a>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-white font-semibold shadow hover:bg-indigo-500 transition">
              <Send className="h-4 w-4" /> Send Message
            </button>
          </div>

          {status && (
            <p className="mt-4 text-sm text-green-600 dark:text-green-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
