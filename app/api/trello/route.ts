import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { TRELLO_API_KEY, TRELLO_TOKEN, TRELLO_LIST_ID } = process.env;

  if (!TRELLO_API_KEY || !TRELLO_TOKEN || !TRELLO_LIST_ID) {
    return NextResponse.json({ error: "Faltan variables de entorno" }, { status: 500 });
  }

  const cardName = `🏢 ${data.nombre_negocio} — ${data.contacto_cliente}`;

  const cardDesc = `
## 📋 Relevamiento Técnico IT Solve

**Negocio:** ${data.nombre_negocio}
**Rubro:** ${data.rubro}
**Contacto:** ${data.contacto_cliente}

---

### 🌐 1. Conectividad y Red
- **Proveedor:** ${data.proveedor}
- **Dispositivos conectados:** ${data.dispositivos}
- **Estabilidad Wi-Fi:** ${data.wifi_estabilidad}/5
- **Usan cables de red:** ${data.cables ?? "No respondido"}

---

### 🔒 2. Seguridad y Respaldo
- **Backup:** ${data.backup ?? "No respondido"}
- **Sistema de gestión:** ${data.sistema || "No especificado"}
- **Antivirus:** ${data.antivirus}

---

### 💬 3. WhatsApp y Atención
- **Mensajes por día:** ${data.wa_vol ?? "No respondido"}
- **Responden fuera de hora:** ${data.wa_fuera ?? "No respondido"}

---

### ❗ 4. Problema Principal
${data.dolor}
  `.trim();

  const url = new URL("https://api.trello.com/1/cards");
  url.searchParams.set("idList", TRELLO_LIST_ID);
  url.searchParams.set("key", TRELLO_API_KEY);
  url.searchParams.set("token", TRELLO_TOKEN);
  url.searchParams.set("name", cardName);
  url.searchParams.set("desc", cardDesc);

  const trelloRes = await fetch(url.toString(), { method: "POST" });

  if (!trelloRes.ok) {
    const error = await trelloRes.text();
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}