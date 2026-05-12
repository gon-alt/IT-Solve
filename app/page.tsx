'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  const [enviando, setEnviando] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => { data[key] = value.toString(); });

    try {
      const response = await fetch("/api/trello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        router.push('/gracias');
      } else {
        setErrorMsg("Error al enviar. Intentá de nuevo.");
        setEnviando(false);
      }
    } catch {
      setErrorMsg("Error de conexión.");
      setEnviando(false);
    }
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans relative">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-slate-800 p-1.5 rounded-lg border border-slate-700">
              <code className="text-blue-400 font-bold">{`>_`}</code>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">IT_solve</span>
          </div>
          <a href="#contacto" className=" font-medium bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full transition-all">
            Diagnóstico Gratis
          </a>
        </div>
      </nav>

      {/* BOTÓN FLOTANTE WHATSAPP */}
    {/* BOTÓN FLOTANTE WHATSAPP CON LOGO */}
<a
  href="https://wa.me/5491176682185?text=hola"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    backgroundColor: "#25D366",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="white"
  >
    <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2 7.8L.4 31.6l8-2.1c2.3 1.2 4.9 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.6c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C4 20.8 3.4 18.5 3.4 16 3.4 9 9 3.4 16 3.4S28.6 9 28.6 16 23 29 16 29zm7.2-9.4c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.3-.4.5-.7.2-.3.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5s-1.3 1.2-1.3 2.9 1.3 3.4 1.5 3.6c.2.2 2.6 4 6.4 5.6.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z"/>
  </svg>
</a> 

      {/* HERO */}
      <header className="pt-40 pb-24 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6  font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
          Consultoría IT para PyMEs
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Tu oficina siempre online. <br /> Tus ventas en automático.
        </h1>
        <p className="mt-8 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Diseño infraestructuras robustas y bots de WhatsApp que trabajan 24/7.
          Especialista en negocios que necesitan soluciones reales sin complicaciones.
        </p>
        <a href="#contacto" className="inline-block mt-10 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-500/20 transition-all">
          Quiero mi diagnóstico gratis →
        </a>
      </header>

      {/* TARJETAS DE BENEFICIOS */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
            <svg className="text-blue-500 w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M8.111 16.404a5.5 5.5 0 117.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.257-3.905 14.162 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Redes Imbatibles</h3>
          <p className="text-slate-400">Configuración de Wi-Fi profesional y cableado para que tu sistema nunca se detenga.</p>
        </div>
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-colors">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
            <svg className="text-emerald-500 w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Seguridad Total</h3>
          <p className="text-slate-400">Backups automáticos en la nube y protección de datos para tu tranquilidad.</p>
        </div>
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-colors">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
            <svg className="text-purple-500 w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">WhatsApp 24/7</h3>
          <p className="text-slate-400">Automatizo respuestas y turnos para que no pierdas ni un solo cliente, incluso fuera de hora.</p>
        </div>
      </section>

{/* SECCIÓN DE PLANES */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-white mb-4">Planes para tu negocio</h2>
    <p className="text-slate-400">Sin letra chica. Sin sorpresas.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {/* BÁSICO */}
    <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col">
      <h3 className="text-xl font-bold mb-1">Básico</h3>
      <p className="text-slate-400 text-slate-400 mb-3">Para el que quiere dejar de apagar incendios</p>
      <div className="text-4xl font-extrabold text-white mb-8">
        $100.000<span className="text-lg text-slate-400 font-normal">/mes</span>
      </div>
      <div className="space-y-4 flex-1">
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">Soporte remoto</p>
            <p className="text-slate-500 text-xs mt-0.5">Cuando algo falla, te atendemos</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">Backup en la nube</p>
            <p className="text-slate-500 text-xs mt-0.5">Configuración inicial</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">
              <a href="/blog/windows-defender" className="underline underline-offset-2 hover:text-blue-400 transition-colors">
                Antivirus gestionado
              </a>
            </p>
            <p className="text-slate-500 text-xs mt-0.5">Windows Defender configurado</p>
          </div>
        </div>
        <div className="flex items-start gap-3 opacity-35">
          <span className="text-slate-600 mt-0.5">✕</span>
          <div>
            <p className="text-slate-400  font-medium line-through">Resumen mensual</p>
          </div>
          
        </div>
        <div className="flex items-start gap-3 opacity-35">
          <span className="text-slate-600 mt-0.5">✕</span>
          <div>
            <p className="text-slate-400  font-medium line-through">Monitoreo de red</p>
          </div>
        </div>
        <div className="flex items-start gap-3 opacity-35">
          <span className="text-slate-600 mt-0.5">✕</span>
          <div>
            <p className="text-slate-400  font-medium line-through">Reclamamos a tu proveedor de internet</p>
          </div>
        </div>
      </div>
      <a href="#contacto" className="mt-8 text-center border border-slate-600 hover:border-blue-500 hover:text-blue-400 py-3 rounded-xl transition-all  font-semibold">
        Empezar →
      </a>
    </div>

    {/* PRO */}
    <div className="p-8 bg-slate-900 border-2 border-blue-500 rounded-2xl flex flex-col relative">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
        MÁS ELEGIDO
      </div>
      <h3 className="text-xl font-bold mb-1">Pro</h3>
      <p className="text-slate-400 text-slate-400 mb-3">Para el que no puede permitirse que algo falle</p>
      <div className="text-4xl font-extrabold text-white mb-8">
        $200.000<span className="text-lg text-slate-400 font-normal">/mes</span>
      </div>
      <div className="space-y-4 flex-1">
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">Soporte remoto</p>
            <p className="text-slate-500 text-xs mt-0.5">Cuando algo falla, te atendemos</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">Backup en la nube</p>
            <p className="text-slate-500 text-xs mt-0.5">Monitoreo mensual</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">
              <a href="/blog/windows-defender" className="underline underline-offset-2 hover:text-blue-400 transition-colors">
                Antivirus gestionado
              </a>
            </p>
            <p className="text-slate-500 text-xs mt-0.5">Microsoft Defender for Business</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">Resumen mensual</p>
            <p className="text-slate-500 text-xs mt-0.5">De tu infraestructura</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">Monitoreo de red</p>
            <p className="text-slate-500 text-xs mt-0.5">En tiempo real</p>
          </div>
        </div>
        <div className="flex items-start gap-3 opacity-35">
          <span className="text-slate-600 mt-0.5">✕</span>
          <div>
            <p className="text-slate-400  font-medium line-through">Reclamamos a tu proveedor de internet</p>
          </div>
        </div>
      </div>
      <a href="#contacto" className="mt-8 text-center bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl transition-all  font-semibold shadow-lg shadow-blue-500/20">
        Empezar →
      </a>
    </div>

    {/* PREMIUM */}
    <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col">
      <h3 className="text-xl font-bold mb-1">Premium</h3>
      <p className="text-slate-400 mb-3">Para el que quiere olvidarse de la tecnología para siempre</p>
      <div className="text-4xl font-extrabold text-white mb-8">
        $250.000<span className="text-lg text-slate-400 font-normal">/mes</span>
      </div>
      <div className="space-y-4 flex-1">
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200 font-medium">Soporte remoto</p>
            <p className="text-slate-500 text-xs mt-0.5">Cuando algo falla, te atendemos</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">Backup en la nube</p>
            <p className="text-slate-500 text-xs mt-0.5">Monitoreo + alertas automáticas</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">
              <a href="/blog/windows-defender" className="underline underline-offset-2 hover:text-blue-400 transition-colors">
                Antivirus gestionado
              </a>
            </p>
            <p className="text-slate-500 text-xs mt-0.5">Solución profesional con panel XDR</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">Resumen mensual</p>
            <p className="text-slate-500 text-xs mt-0.5">Detallado con métricas</p>
          </div>
          
        </div>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">Monitoreo de red</p>
            <p className="text-slate-500 text-xs mt-0.5">Con informe mensual detallado</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-emerald-400 mt-0.5">✅</span>
          <div>
            <p className="text-slate-200  font-medium">Reclamamos a tu proveedor de internet</p>
            <p className="text-slate-500 text-xs mt-0.5">Gestionamos el reclamo por vos</p>
          </div>
        </div>
      </div>
      <a href="#contacto" className="mt-8 text-center border border-slate-600 hover:border-emerald-500 hover:text-emerald-400 py-3 rounded-xl transition-all  font-semibold">
        Empezar →
      </a>
    </div>

  </div>
</section>

{/* BOT WHATSAPP */}
<section className="py-16 px-6 max-w-6xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    <div>
      <div className="inline-block px-4 py-1.5 mb-4  font-medium text-purple-400 bg-purple-400/10 border border-purple-400/20 rounded-full">
        Servicio adicional
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">
        Tu negocio responde solo, aunque vos no estés
      </h2>
      <p className="text-slate-400 mb-6 leading-relaxed">
        Configuramos un bot de WhatsApp personalizado para tu empresa. 
        Atiende consultas, toma datos y filtra clientes las 24 horas, 
        los 7 días de la semana — sin que tengas que estar pendiente del teléfono.
      </p>
      <ul className="space-y-3 text-slate-300  mb-8">
        <li>✅ Menú interactivo adaptado a tu negocio</li>
        <li>✅ Respuestas automáticas fuera de horario</li>
        <li>✅ Captación de datos de clientes potenciales</li>
        <li>✅ Derivación a persona real cuando hace falta</li>
        <li>✅ Sin aplicaciones extra — funciona en tu WhatsApp actual</li>
      </ul>
      
      <a
        href="#contacto"
        className="inline-block bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-lg shadow-purple-500/20"
      >
        Quiero saber más →
      </a>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
      <div className="flex items-start gap-3">
        <div className="bg-slate-800 rounded-xl p-3 text-2xl">👋</div>
        <div className="bg-slate-800 rounded-xl px-4 py-3  text-slate-300 max-w-xs">
          ¡Hola! Bienvenido a <strong>Tu Empresa</strong>. ¿En qué podemos ayudarte?
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="bg-slate-800 rounded-xl p-3 text-2xl">📋</div>
        <div className="bg-slate-800 rounded-xl px-4 py-3  text-slate-300 max-w-xs">
          <p className="font-semibold mb-1">Elegí una opción:</p>
          <p>1 · Consultar precios</p>
          <p>2 · Hacer un pedido</p>
          <p>3 · Hablar con alguien</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="bg-blue-600 rounded-xl px-4 py-3  text-white max-w-xs">
          1
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="bg-slate-800 rounded-xl p-3 text-2xl">💬</div>
        <div className="bg-slate-800 rounded-xl px-4 py-3  text-slate-300 max-w-xs">
          Claro! Acá tenés nuestra lista de precios actualizada 👇
        </div>
      </div>
      <p className="text-center text-xs text-slate-600 pt-2">
        Demo ilustrativa — adaptamos el bot a tu negocio
      </p>
    </div>

  </div>
</section>



      {/* FORMULARIO CORTO */}
      <section id="contacto" className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Pedí tu diagnóstico gratis</h2>
            <p className="text-slate-400">Contame tu situación y te contacto en menos de 24hs.</p>
          </div>

          {errorMsg && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center">
              <p className="text-red-400">{errorMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block  mb-2 text-slate-300">Nombre</label>
                <input
                  name="nombre_negocio"
                  type="text"
                  required
                  placeholder="Tu nombre o el del negocio"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block  mb-2 text-slate-300">Rubro</label>
                <input
                  name="rubro"
                  type="text"
                  required
                  placeholder="Ej: ferretería, clínica..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block  mb-2 text-slate-300">WhatsApp o Email</label>
              <input
                name="contacto_cliente"
                type="text"
                required
                placeholder="Para coordinar el diagnóstico"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block  mb-2 text-slate-300">¿Cuál es tu mayor problema tecnológico hoy?</label>
              <textarea
                name="dolor"
                rows={4}
                required
                placeholder="Ej: el WiFi se corta, no tengo backup, pierdo clientes por WhatsApp..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={enviando}
              className={`w-full py-4 rounded-xl font-bold text-white transition-all text-lg ${
                enviando ? "bg-slate-700 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-500/20"
              }`}
            >
              {enviando ? "Enviando..." : "Quiero mi diagnóstico gratis →"}
            </button>

            <p className="text-center text-xs text-slate-500">
              Sin compromiso. Te respondo en menos de 24hs.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-800 text-center bg-[#050505]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6">
      
      {/* Branding */}
      <div className="flex items-center space-x-2">
        <code className="text-blue-400 font-bold">{`>_`}</code>
        <span className="font-bold text-white text-xl">ITsolve</span>
      </div>

      {/* Links de Recursos (El Blog "oculto") */}
      <nav className="flex space-x-6  font-medium text-slate-400">
        <a href="/blog/soporte-redes-infraestructura" className="hover:text-blue-400 transition-colors">
          Infraestructura
        </a>
        <a href="/blog/automatizacion-bots-whatsapp" className="hover:text-blue-400 transition-colors">
          Automatización
        </a>
        <a href="/blog" className="hover:text-blue-400 transition-colors">
          Recursos
        </a>
      </nav>

      {/* Contacto rápido */}
      
    </div>

    {/* Línea final de Copyright */}
    <div className="pt-8 border-t border-slate-800/50">
      <p className="text-xs text-slate-600 uppercase tracking-widest">
        © 2026 | Soluciones IT para PyMEs | ITsolve.ar
      </p>
    </div>
  </div>
</footer>

    </div>
  );
}