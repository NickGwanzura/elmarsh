import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const form = await request.formData();
  const required = ["fullName", "email", "phone", "collection", "destination", "cargoType", "quantity", "consent"];
  const missing = required.filter(field => !form.get(field));
  if (missing.length) return NextResponse.json({ error: "Missing required fields", fields: missing }, { status: 400 });

  // Production integration point: validate uploaded files, then deliver this
  // enquiry through the chosen provider (for example Resend, SMTP or a CRM).
  // Keep service credentials in server-only environment variables in Dokploy.
  console.info("Quote enquiry received", { cargoType: form.get("cargoType"), quantity: form.get("quantity") });
  return NextResponse.json({ ok: true });
}
