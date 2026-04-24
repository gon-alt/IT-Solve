import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

async function appendToSheet(data: Record<string, string>) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Hoja 1!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        new Date().toLocaleString("es-AR"),
        data.nombre_negocio,
        data.rubro,
        data.contacto_cliente,
        data.dolor,
      ]],
    },
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { TRELLO_API_KEY, TRELLO_TOKEN, TRELLO_LIST_ID } = process.env;

  if (!TRELLO_API_KEY || !TRELLO_TOKEN || !TRELLO_LIST_ID) {
    return NextResponse.json({ error: "Faltan variables de entorno" }, { status: 500 });
  }

  // --- Trello ---
  const cardName = `🏢 ${data.nombre_negocio} — ${data.contacto_cliente}`;
  const cardDesc = `
## 🆕 Nuevo Lead — Diagnóstico Gratis

**Negocio/Nombre:** ${data.nombre_negocio}
**Rubro:** ${data.rubro}
**Contacto:** ${data.contacto_cliente}

---

### ❗ Problema principal
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

  // --- Google Sheets ---
  try {
    await appendToSheet(data);
  } catch (err) {
    // Si falla Sheets no cortamos el flujo, Trello ya se guardó
    console.error("Error Google Sheets:", err);
  }

  return NextResponse.json({ success: true });
}