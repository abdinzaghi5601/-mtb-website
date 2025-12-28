import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      // In development, just log the email
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Company:", company || "N/A");
      console.log("Subject:", subject);
      console.log("Message:", message);
      console.log("===============================");
      
      return NextResponse.json(
        { 
          success: true,
          message: "Email service not configured. Check console for details."
        },
        { status: 200 }
      );
    }

    // Send email using Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev", // Use test domain for now, update with your verified domain later
        to: process.env.CONTACT_EMAIL || "yaseen_md99@yahoo.com",
        replyTo: email,
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small>This email was sent from the MTB Spares contact form.</small></p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Company: ${company || "Not provided"}
          Subject: ${subject}
          
          Message:
          ${message}
          
          ---
          This email was sent from the MTB Spares contact form.
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      console.error("Resend API Error:", errorData);
      
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    const data = await resendResponse.json();

    return NextResponse.json(
      { 
        success: true,
        message: "Thank you! Your message has been sent successfully." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

