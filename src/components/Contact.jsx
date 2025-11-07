import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Terima kasih! Pesan kamu sudah terkirim.');
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Kontak</h2>
        <p className="mt-2 max-w-2xl text-zinc-300">Siap berdiskusi tentang proyek atau kolaborasi berikutnya.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-zinc-800">
              <Mail className="h-5 w-5 text-zinc-200" />
            </span>
            <div>
              <p className="text-sm text-zinc-400">Email</p>
              <a href="mailto:you@example.com" className="text-white">you@example.com</a>
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-300">Balasan cepat dalam 1-2 hari kerja.</p>
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-zinc-300">Nama</label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white placeholder-zinc-600 focus:border-zinc-700 focus:outline-none"
                placeholder="Nama kamu"
              />
            </div>
            <div>
              <label className="text-sm text-zinc-300">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white placeholder-zinc-600 focus:border-zinc-700 focus:outline-none"
                placeholder="email@domain.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-zinc-300">Pesan</label>
              <textarea
                required
                rows="4"
                className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-white placeholder-zinc-600 focus:border-zinc-700 focus:outline-none"
                placeholder="Ceritakan kebutuhanmu"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200"
            >
              <Send className="mr-2 h-4 w-4" /> Kirim Pesan
            </button>
            {status && <p className="text-sm text-emerald-400">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
