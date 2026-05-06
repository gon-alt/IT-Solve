import React from 'react';

export default function BlogBots() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto pt-24 pb-20 px-6">
        
        {/* Badge de Categoría */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium uppercase tracking-widest">
            Automatización e IA
          </span>
        </div>

        {/* Título Impactante */}
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 leading-tight">
          Bots de WhatsApp: <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Ventas en Automático 24/7
          </span>
        </h1>

        <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          Descubrí cómo la integración de agentes inteligentes permite que tu negocio responda, 
          califique y venda sin necesidad de intervención humana constante.
        </p>

        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          
          <section className="border-l-2 border-blue-500/30 pl-6">
            <h2 className="text-2xl font-semibold text-white mb-4">¿Por qué automatizar con WhatsApp?</h2>
            <p>
              WhatsApp es la herramienta de comunicación más usada. En <strong>IT Solve</strong> desarrollamos 
              bots que no solo responden mensajes, sino que se integran con tu infraestructura para 
              gestionar turnos, pedidos y consultas técnicas de forma instantánea.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-cyan-500 mr-3">✓</span> Disponibilidad Total
            </h2>
            <p>
              Tu negocio nunca duerme. Un bot de WhatsApp bien configurado puede calificar a un prospecto 
              a las 3 AM y dejarlo listo para que tu equipo comercial cierre la venta a primera hora.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-cyan-500 mr-3">✓</span> Reducción de Tareas Repetitivas
            </h2>
            <p>
              Liberá a tu personal de las preguntas frecuentes (FAQs). Al automatizar las respuestas comunes, 
              tu equipo puede enfocarse en lo que realmente importa: resolver problemas complejos y escalar el negocio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <span className="text-cyan-500 mr-3">✓</span> Integración con Sistemas
            </h2>
            <p>
              No es solo un chat. Nuestros bots se conectan con bases de datos y CRMs, permitiendo que la 
              automatización sea real y basada en datos precisos de tus servicios o stock.
            </p>
          </section>

          {/* Caja de Cierre/Venta */}
          <div className="mt-20 p-10 rounded-3xl border border-blue-500/20 bg-blue-500/5 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">¿Listo para automatizar tu oficina?</h3>
            <p className="text-gray-400 mb-8">
              En IT Solve diseñamos infraestructuras robustas y agentes inteligentes que trabajan para vos.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg"
              >
                Solicitar Diagnóstico Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
