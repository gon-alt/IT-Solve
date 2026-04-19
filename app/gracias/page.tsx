import React from 'react';
import Link from 'next/link';

export default function Gracias() {
  return (
    <div className="bg-slate-950 text-white min-h-screen flex items-center justify-center p-6 text-center">
      <div className="max-w-md">
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="text-emerald-500 w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">¡Diagnóstico Recibido!</h1>
        <p className="text-slate-400 text-lg mb-8">
          Gracias por confiar en nosotros. Analizaremos tu información técnica y **te enviaremos el presupuesto detallado en las próximas 48 horas**.
        </p>
        <Link href="/" className="text-blue-400 hover:underline font-medium">
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
