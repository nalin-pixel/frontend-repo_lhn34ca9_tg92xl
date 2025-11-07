export default function About() {
  const items = [
    {
      title: 'Arsitektur Layanan',
      desc:
        'Merancang sistem modular dengan pendekatan microservices/monolith yang terukur sesuai kebutuhan bisnis.',
    },
    {
      title: 'Desain API',
      desc:
        'Membangun API REST dan GraphQL yang konsisten, terdokumentasi, dan mudah diintegrasikan.',
    },
    {
      title: 'Keandalan & Observabilitas',
      desc:
        'Menerapkan praktik logging, tracing, dan metrics agar issue di produksi cepat terdeteksi.',
    },
    {
      title: 'Keamanan',
      desc:
        'Autentikasi, otorisasi, rate limiting, dan best-practices untuk melindungi data dan layanan.',
    },
  ];

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Tentang Saya</h2>
        <p className="mt-2 max-w-2xl text-zinc-300">
          Backend engineer dengan pengalaman membangun sistem dari nol hingga skala produksi. Terbiasa
          berkolaborasi dengan tim lintas fungsi untuk menghadirkan produk yang solid dan dapat diandalkan.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
            <h3 className="text-sm font-semibold text-white">{it.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
