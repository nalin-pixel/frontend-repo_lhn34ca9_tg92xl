import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Order Service',
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    desc:
      'Layanan pemrosesan pesanan dengan event-driven architecture, idempotent handler, dan retry mechanism.',
    link: 'https://example.com',
  },
  {
    name: 'Realtime Analytics',
    stack: ['Node.js', 'WebSocket', 'ClickHouse'],
    desc:
      'Streaming data pipeline untuk dashboard real-time dengan latensi rendah dan agregasi efisien.',
    link: 'https://example.com',
  },
  {
    name: 'Auth Platform',
    stack: ['Go', 'OAuth2', 'OpenID Connect', 'Kubernetes'],
    desc:
      'Platform autentikasi terpusat dengan SSO dan dukungan multi-tenant.',
    link: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Projek Terpilih</h2>
        <p className="mt-2 max-w-2xl text-zinc-300">
          Beberapa pekerjaan yang menonjol terkait kinerja, skalabilitas, dan daya tahan di lingkungan produksi.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:bg-zinc-900/60"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-300">{p.desc}</p>
              </div>
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-800 text-zinc-300 transition hover:bg-zinc-800"
                href={p.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Buka ${p.name}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-md bg-zinc-800/60 px-2 py-1 text-xs text-zinc-300 ring-1 ring-zinc-700">
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
