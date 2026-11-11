// Vercel serverless function: POST /api/contact
// Emails booking/contact requests to the business via Resend (https://resend.com).
//
// Set these in Vercel → Project → Settings → Environment Variables:
//   RESEND_API_KEY      your Resend API key
//   CONTACT_TO_EMAIL    where requests go (the business inbox)
//   CONTACT_FROM_EMAIL  optional, a verified sender, e.g. "Jamaica Jerk Spot <bookings@yourdomain.com>"
//                       (defaults to Resend's onboarding@resend.dev for testing)
//
// If the variables are missing the endpoint returns 503 and the site
// automatically offers the visitor a pre-filled text message instead.

const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const clip = (s, n = 2000) => String(s ?? "").trim().slice(0, n);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  body = body || {};

  // Honeypot: bots fill the hidden "company" field
  if (body.company) return res.status(200).json({ ok: true });

  const data = {
    inquiry: clip(body.inquiry, 60) || "Website inquiry",
    name: clip(body.name, 120),
    phone: clip(body.phone, 40),
    email: clip(body.email, 160),
    date: clip(body.date, 20),
    eventType: clip(body.eventType, 60),
    guests: clip(body.guests, 10),
    location: clip(body.location, 200),
    dishes: clip(body.dishes, 300),
    message: clip(body.message, 3000),
  };

  if (!data.name || !data.phone || !data.message) {
    return res.status(400).json({ error: "Name, phone and message are required." });
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return res.status(400).json({ error: "Invalid email." });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) return res.status(503).json({ error: "Email not configured" });

  const rows = [
    ["Request", data.inquiry], ["Name", data.name], ["Phone", data.phone], ["Email", data.email],
    ["Event date", data.date], ["Event type", data.eventType], ["Guests", data.guests],
    ["Location", data.location], ["Dishes", data.dishes],
  ].filter(([, v]) => v);

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px">
      <div style="background:#0b3d1f;color:#fed100;padding:18px 22px;border-radius:12px 12px 0 0">
        <h2 style="margin:0">New ${esc(data.inquiry)} 🇯🇲</h2>
        <p style="margin:4px 0 0;color:#fff">From the Jamaica Jerk Spot website</p>
      </div>
      <table style="width:100%;border-collapse:collapse;border:1px solid #eee">
        ${rows.map(([k, v]) => `<tr><td style="padding:10px 14px;background:#fff8e3;font-weight:bold;width:140px">${esc(k)}</td><td style="padding:10px 14px">${esc(v)}</td></tr>`).join("")}
      </table>
      <p style="white-space:pre-wrap;padding:14px;background:#f7f7f7;border-radius:0 0 12px 12px;margin:0">${esc(data.message)}</p>
      <p><a href="tel:${esc(data.phone)}">Call ${esc(data.name)}</a>${data.email ? ` · <a href="mailto:${esc(data.email)}">Email</a>` : ""}</p>
    </div>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Jamaica Jerk Spot <onboarding@resend.dev>",
        to: to.split(",").map((s) => s.trim()),
        reply_to: data.email || undefined,
        subject: `${data.inquiry}: ${data.name}${data.date ? ` · ${data.date}` : ""}`,
        html,
      }),
    });
    if (!r.ok) {
      console.error("Resend error", r.status, await r.text());
      return res.status(502).json({ error: "Email failed" });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
