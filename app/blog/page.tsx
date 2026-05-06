import Link from 'next/link';

export default function BlogIndex() {
  const posts = [
    {
      title: "Infraestructura Segura: La base de una oficina siempre online",
      description: "Por qué el diseño de redes y el soporte preventivo son el mejor seguro para tu empresa.",
      date: "Mayo 2024",
      slug: "soporte-redes-infraestructura",
      tag: "Redes e IT"
    },
    {
      title: "Bots de WhatsApp: Cómo automatizar tus ventas y atención 24/7",
      description: "Descubrí cómo la integración de agentes inteligentes puede escalar tu negocio sin aumentar costos operativos.",
      date: "Junio 2024",
      slug: "automatizacion-bots-whatsapp",
      tag: "Automatización"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent inline-block font-mono">
            {">_"} BLOG_RESOURCES
          </h1>
          <p className="text-gray-400 text-lg">
            Soluciones en soporte técnico, redes robustas y automatización con IA.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all border-b-4 hover:border-b-blue-500 flex flex-col justify-between"
            >
              <div>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-400/30 px-2 py-1 rounded">{post.tag}</span>
                <h2 className="text-2xl font-bold mt-6 mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">{post.description}</p>
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-4">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span className="text-blue-500 font-medium">Ver recurso →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
