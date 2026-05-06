import React from 'react';

export default function BlogSeguridad() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      {/* Contenedor Principal */}
      <div className="max-w-4xl mx-auto pt-24 pb-20 px-6">
        
        {/* Etiqueta Superior */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium uppercase tracking-widest">
            Seguridad Informática
          </span>
        </div>

        {/* Título con Gradiente */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 leading-tight">
          Guía de Seguridad <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Integral para Empresas
          </span>
        </h1>

        <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          En IT Solve, no solo reparamos equipos; protegemos el motor de tu negocio. 
          Descubrí los 5 pilares para mantener tu oficina siempre segura.
        </p>

        {/* Contenido del Artículo */}
        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-blue-500 mr-3">01.</span> Higiene de Credenciales y MFA
            </h2>
            <p>
              Las contraseñas ya no son suficientes. Implementamos el <strong>Segundo Factor de Autenticación (MFA)</strong> 
              en todas las cuentas críticas para asegurar que, incluso si una contraseña se filtra, tus datos sigan protegidos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-blue-500 mr-3">02.</span> Mantenimiento y Actualizaciones
            </h2>
            <p>
              Un sistema desactualizado es una puerta abierta. Nos encargamos de que cada equipo en tu red tenga 
              los últimos parches de seguridad, eliminando vulnerabilidades que los hackers suelen explotar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-blue-500 mr-3">03.</span> Estrategia de Backups Inmunes
            </h2>
            <p>
              Seguimos la regla 3-2-1: tres copias, en dos formatos distintos y una fuera de la oficina. 
              Ante un ataque de Ransomware, un backup sólido es la única garantía de no perder años de trabajo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-blue-500 mr-3">04.</span> Capacitación del Personal
            </h2>
            <p>
              El eslabón más débil suele ser el humano. Capacitamos a tu equipo para identificar <strong>Phishing</strong>, 
              estafas por WhatsApp y técnicas de ingeniería social. Un empleado alerta es tu mejor firewall.
            </p>
          </section>

          {/* Call to Action (Estilo tu botón de Diagnóstico Gratis) */}
          <div className="mt-20 p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent text-center">
            <h3 className="text-2xl font-bold mb-4">¿Querés blindar tu infraestructura?</h3>
            <p className="text-gray-400 mb-8">
              Realizamos auditorías de seguridad y planes de mantenimiento preventivo a medida.
            </p>
            <a 
              href="https://wa.me/5491176682185?text=hola"
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
