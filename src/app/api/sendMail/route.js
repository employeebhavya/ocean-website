import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "employeebhavya@gmail.com", // Replace with your email
        pass: "BWT@2024EMAILPASS", // Replace with your app-specific password
      },
    });

    // Set up mail options
    const mailOptions = {
      from: email,
      to: "riturajsingh3001@gmail.com", // Your email to receive form submissions
      subject: `Contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info); // Log the info for debugging

    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error); // Log the error for debugging
    return new Response(
      JSON.stringify({ message: "Failed to send email", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
