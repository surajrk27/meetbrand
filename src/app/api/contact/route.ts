import { NextRequest, NextResponse } from "next/server";

/**
 * Contact endpoint. This is the seam for future backend work: right
 * now it validates + logs server-side and honors the honeypot; it does
 * NOT send email or write to a CRM, because no email provider or CRM
 * credentials exist yet. Wiring one in (Resend, SendGrid, HubSpot,
 * whatever gets chosen) means editing only this file — the form and
 * every client component are already decoupled from how submission
 * is actually handled.
 */

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  "company-website"?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot tripped → silently pretend success so bots don't learn.
  if (body["company-website"]) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }
  if (name.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Input too long." }, { status: 400 });
  }

  // TODO(backend): forward to email/CRM provider once chosen.
  console.log("[contact] lead received", { name, email, messageLength: message.length });

  return NextResponse.json({ ok: true });
}
