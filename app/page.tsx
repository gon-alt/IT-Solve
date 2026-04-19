import React from 'react';

export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans relative">
      
      {/* NAVBAR CON TU MARCA */}
      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* El icono de tu logo */}
            <div className="bg-slate-800 p-1.5 rounded-lg border border-slate-700">
              <code className="text-blue-400 font-bold">{`>_`}</code>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              IT_solve
            </span>
          </div>
          <a href="#diagnostico" className="text-sm font-medium bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-full transition-all">
            Presupuesto Gratis
          </a>
        </div>
      </nav>
      
      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a 
        href="https://wa.me." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center"
      >
        <svg xmlns="http://w3.org" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.089-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>

      {/* HERO SECTION */}
      <header className="py-24 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
          It solve Consultoría IT para PyMEs
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          Tu oficina siempre online. <br/> Tus ventas en automático.
        </h1>
        <p className="mt-8 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Diseño infraestructuras robustas y bots de WhatsApp que trabajan 24/7. 
          Especialista en negocios que necesitan soluciones reales sin complicaciones.
        </p>
      </header>

      {/* SECCIÓN DE TARJETAS DE BENEFICIOS */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition-colors">
          <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
            <svg className="text-blue-500 w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8.111 16.404a5.5 5.5 0 117.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.257-3.905 14.162 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Redes Imbatibles</h3>
          <p className="text-slate-400">Configuración de Wi-Fi profesional y cableado para que tu sistema nunca se detenga.</p>
        </div>

        <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-emerald-500/50 transition-colors">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6">
            <svg className="text-emerald-500 w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Seguridad Total</h3>
          <p className="text-slate-400">Backups automáticos en la nube y protección de datos para tu tranquilidad.</p>
        </div>

        <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-purple-500/50 transition-colors">
          <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
            <svg className="text-purple-500 w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h3 className="text-xl font-bold mb-3">WhatsApp 24/7</h3>
          <p className="text-slate-400">Automatizo respuestas y turnos para que no pierdas ni un solo cliente, incluso fuera de hora.</p>
        </div>
      </section>

      {/* FORMULARIO DE RELEVAMIENTO COMPLETO */}
      <section id="diagnostico" className="py-16 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Relevamiento Técnico Inicial</h2>
            <p className="text-slate-400">Por favor completá este diagnóstico. No te tomará más de 2 minutos.</p>
          </div>
          
          <form action="https://formspree.io/f/mlgadyek" method="POST" className="space-y-10">
            {/* INFORMACIÓN GENERAL CON CONTACTO */}
<div className="space-y-6">
  <h3 className="text-xl font-semibold text-blue-400 border-b border-slate-800 pb-2">Información del Negocio</h3>
  
  {/* CAMPO OCULTO PARA REDIRECCIÓN (Formspree lo reconoce automáticamente) */}
  <input type="hidden" name="_next" value="https://tu-dominio.com.ar" />
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label className="block text-sm mb-2 text-slate-300">Nombre del Negocio / Empresa</label>
      <input name="nombre_negocio" type="text" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500" />
    </div>
    <div>
      <label className="block text-sm mb-2 text-slate-300">A que se dedica tu empresa</label>
      <input name="rubro" type="text" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500" />
    </div>
    <div>
      <label className="block text-sm mb-2 text-slate-300">Email o WhatsApp de Contacto</label>
      <input name="contacto_cliente" type="text" required placeholder="ej: nombre@mail.com o 11..." className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500" />
    </div>
  </div>
</div>


            {/* BLOQUE 1: CONECTIVIDAD */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-emerald-400 border-b border-slate-800 pb-2">1. Conectividad y Red</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-300">Proveedor e Internet (Ej: Movistar 300mb)</label>
                  <input name="proveedor" type="text" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-slate-300">N° de dispositivos conectados</label>
                  <input name="dispositivos" type="number" required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2 text-slate-300">Estabilidad Wi-Fi (1 al 5)</label>
                <select name="wifi_estabilidad" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none">
                  <option value="1">1 - Se corta siempre</option>
                  <option value="2">2 - Inestable</option>
                  <option value="3">3 - Regular</option>
                  <option value="4">4 - Bueno</option>
                  <option value="5">5 - Perfecto</option>
                </select>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-sm text-slate-300">¿Usan cables de red?</span>
                <label className="flex items-center"><input type="radio" name="cables" value="si" className="mr-2" /> Sí</label>
                <label className="flex items-center"><input type="radio" name="cables" value="no" className="mr-2" /> No</label>
              </div>
            </div>

            {/* BLOQUE 2: SEGURIDAD */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-emerald-400 border-b border-slate-800 pb-2">2. Seguridad y Respaldo</h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-300">¿Hacen copias de seguridad de sus archivos?</p>
                <div className="space-y-2">
                  <label className="flex items-center"><input type="radio" name="backup" value="nube" className="mr-2" /> Sí, en la nube (Drive/OneDrive)</label>
                  <label className="flex items-center"><input type="radio" name="backup" value="fisico" className="mr-2" /> Sí, en disco externo/pendrive</label>
                  <label className="flex items-center"><input type="radio" name="backup" value="no" className="mr-2" /> No tengo / No estoy seguro</label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-slate-300">Sistema de gestión/facturación</label>
                  <input name="sistema" type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none" />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-slate-300">¿Tienen Antivirus actualizado?</label>
                  <select name="antivirus" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none">
                    <option value="si">Sí</option>
                    <option value="no">No / Solo Windows Defender</option>
                  </select>
                </div>
              </div>
            </div>

            {/* BLOQUE 3: OPERATIVIDAD */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-emerald-400 border-b border-slate-800 pb-2">3. WhatsApp y Atención</h3>
              <div className="space-y-4">
                <p className="text-sm text-slate-300">Mensajes por día aprox:</p>
                <div className="flex gap-4">
                  <label className="flex items-center"><input type="radio" name="wa_vol" value="bajo" className="mr-2" /> Menos de 20</label>
                  <label className="flex items-center"><input type="radio" name="wa_vol" value="medio" className="mr-2" /> 20 a 100</label>
                  <label className="flex items-center"><input type="radio" name="wa_vol" value="alto" className="mr-2" /> + de 100</label>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-sm text-slate-300">¿Responden fuera de hora?</span>
                <label className="flex items-center"><input type="radio" name="wa_fuera" value="si" className="mr-2" /> Sí</label>
                <label className="flex items-center"><input type="radio" name="wa_fuera" value="no" className="mr-2" /> No</label>
                <label className="flex items-center"><input type="radio" name="wa_fuera" value="a_veces" className="mr-2" /> A veces</label>
              </div>
            </div>

            {/* BLOQUE 4: DOLOR */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-emerald-400 border-b border-slate-800 pb-2">4. Problema principal</h3>
              <div>
                <label className="block text-sm mb-2 text-slate-300">¿Qué problema tecnológico te frustra más hoy?</label>
                <textarea name="dolor" rows={4} required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-blue-500" placeholder="Contame qué te hace perder tiempo..."></textarea>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-lg font-bold text-lg shadow-lg transition-all">
              Enviar Diagnóstico y Solicitar Presupuesto
            </button>
          </form>
        </div>
      </section>

 <footer className="py-12 border-t border-slate-800 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
           <code className="text-blue-400 font-bold">{`>_`}</code>
           <span className="font-bold text-white">ITsolve</span>
        </div>
        <p className="text-sm text-slate-500">© 2026 | Soluciones IT para PyMEs</p>
      </footer>
    </div>
  );
}
