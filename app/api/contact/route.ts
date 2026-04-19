import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  const response = await fetch("https://formspree.io", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
