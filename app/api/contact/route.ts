import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Email recipients — update these
const TO_EMAIL   = process.env.CONTACT_EMAIL ?? "info@tbm-machines.in";
const FROM_EMAIL = process.env.FROM_EMAIL    ?? "onboarding@resend.dev"; // use your verified domain

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, subject, message } = await req.json();

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Dev fallback — log and return success
      console.log("=== CONTACT FORM (no RESEND_API_KEY) ===", { name, email, company, subject, message });
      return NextResponse.json({ success: true, message: "Logged (no API key)" });
    }

    const resend = new Resend(apiKey);

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "name, email and message are required" },
        { status: 400 }
      );
    }

    const emailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to:   [TO_EMAIL],
      replyTo: email,
      subject: `[TBM Machines Enquiry] ${subject || "General"} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background:#CC0000; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color:white; margin:0; font-size:20px;">
              New Enquiry — TBM Machines &amp; Manufacturing Services
            </h1>
          </div>
          <div style="background:#f9f9f9; padding: 24px; border: 1px solid #eee; border-top: none;">
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <tr>
                <td style="padding:8px 0; color:#666; width:130px;"><strong>Name</strong></td>
                <td style="padding:8px 0; color:#111;">${name}</td>
              </tr>
              <tr>
                <td style="padding:8px 0; color:#666;"><strong>Email</strong></td>
                <td style="padding:8px 0;"><a href="mailto:${email}" style="color:#CC0000;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding:8px 0; color:#666;"><strong>Company</strong></td>
                <td style="padding:8px 0; color:#111;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding:8px 0; color:#666;"><strong>Enquiry Type</strong></td>
                <td style="padding:8px 0; color:#111;">${subject || "Not specified"}</td>
              </tr>
            </table>
            <hr style="margin:16px 0; border:none; border-top:1px solid #eee;" />
            <h3 style="color:#333; font-size:14px; margin-bottom:8px;">Message</h3>
            <p style="color:#555; line-height:1.6; white-space:pre-wrap;">${message}</p>
          </div>
          <div style="background:#111; padding: 14px 24px; border-radius: 0 0 8px 8px; text-align:center;">
            <p style="color:#666; font-size:12px; margin:0;">
              TBM Machines and Manufacturing Services · PAN: AAZFT3431B · Dandumalkapur, Telangana
            </p>
          </div>
        </div>
      `,
    });

    // Also send an auto-reply to the sender
    await resend.emails.send({
      from:    FROM_EMAIL,
      to:      [email],
      subject: "We received your enquiry — TBM Machines and Manufacturing Services",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background:#CC0000; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color:white; margin:0; font-size:18px;">Thank you, ${name}!</h1>
          </div>
          <div style="background:#f9f9f9; padding: 24px; border: 1px solid #eee; border-top: none;">
            <p style="color:#333; line-height:1.7;">
              We have received your enquiry and our team will get back to you within <strong>24 hours</strong>.
            </p>
            <p style="color:#333; line-height:1.7;">
              If your requirement is urgent, please call us directly.
            </p>
            <hr style="margin:16px 0; border:none; border-top:1px solid #eee;" />
            <p style="color:#666; font-size:13px;">
              <strong>TBM Machines and Manufacturing Services</strong><br />
              Plot No. 43, Dandumalkapur Industrial Park, Phase-II,<br />
              Vikarabad District, Telangana – 501 503<br />
              PAN: AAZFT3431B | UDYAM: UDYAM-TS-02-0291161
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, id: emailResult.data?.id });

  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
