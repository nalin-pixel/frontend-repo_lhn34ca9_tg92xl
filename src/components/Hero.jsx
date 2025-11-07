import { Server, Database, Cloud, Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-zinc-800/60 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-zinc-700">
              <Server className="h-3.5 w-3.5" /> Backend Engineer
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Membangun API yang cepat, aman, dan skalabel
            </h1>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              Saya fokus pada arsitektur layanan, desain API yang elegan, integrasi database, dan otomatisasi
              deployment. Mengubah ide menjadi layanan produksi yang andal.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
              >
                <Mail className="mr-2 h-4 w-4" /> Hubungi Saya
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-zinc-800 px-4 py-2 text-sm font-semibold text-white ring-1 ring-zinc-700 transition hover:bg-zinc-700"
              >
                <Github className="mr-2 h-4 w-4" /> Github
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { icon: Server, label: 'Node.js / Python' },
                { icon: Database, label: 'Postgres / MongoDB' },
                { icon: Cloud, label: 'Docker / CI-CD' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-md bg-zinc-800/60 px-3 py-1.5 text-xs text-zinc-300 ring-1 ring-zinc-700"
                >
                  <Icon className="h-3.5 w-3.5" /> {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-blue-500/10 to-cyan-400/10 blur-3xl" />
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-2xl backdrop-blur">
              <div className="grid grid-cols-2 gap-4">
                <Metric label="Uptime" value="99.98%" />
                <Metric label="Req/min" value=">150k" />
                <Metric label="Latency P95" value="85ms" />
                <Metric label="Deploy/mth" value="~40" />
              </div>
              <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-xs text-zinc-300">
                <code className="block whitespace-pre leading-relaxed">
{`$ curl -s https://api.example.com/health | jq
{
  "status": "ok",
  "uptime": 123456,
  "version": "v1.8.3"
}`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
      <p className="text-xs text-zinc-400">{label}</p>
      <p className="mt-1 text-xl font-bold text-white">{value}</p>
    </div>
  );
}
