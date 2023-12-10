import nodemailer from "nodemailer";

export default async function handler(req, res) {
  /* Create reusable transporter object using the default SMTP transport */

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
      pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD,
    },
  });

  /* Email object */

  const message = {
    from: process.env.NEXT_PUBLIC_GMAIL_EMAIL_ADDRESS,
    to: "mahalaalmas@gmail.com",
    subject: "New diamond requirement !",
    text: "New diamond requirement !",
    html: `  
    <html>
      <head>
        <meta charset="utf-8">
        <title>Mahala Almas Diamonds</title>
          <style>
            .container {
              padding: 20px;
            }
            .email-header {
              padding: 20px;
              text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h3 class="email-header">New diamond requirement !</h3>
          <p>Name: ${req.body.name}</p>
          <p>Email: ${req.body.email}</p>
          <p>Phone: ${req.body.phone}</p>
          <p>Location: ${req.body.location}</p>
          <p>Diamond Type: ${req.body.diamond_type}</p>
          <p>Diamond Shapes: ${req.body.diamond_shapes}</p>
          <p>Diamond Carat Range: ${req.body.diamond_carat_min} - ${req.body.diamond_carat_max}</p>
          <p>Diamond Color Range: ${req.body.diamond_color_min} - ${req.body.diamond_color_max}</p>
          <p>Diamond Clarity: ${req.body.diamond_clarity}</p>
          <p>Diamond Cut Range: ${req.body.diamond_cut_min} - ${req.body.diamond_cut_max}</p>
          <p>Diamond Fluorescence Range: ${req.body.diamond_fluorescence_min} - ${req.body.diamond_fluorescence_max}</p>
          <p>Diamond Certifications: ${req.body.diamondCertifications}</p>
          <p>Additonal Requests: ${req.body.additionalNotes}</p>
        </div>
      </body>
    </html>`,
  };

  /* Sending email */

  try {
    await transporter.sendMail(message);
    return res.status(200).json({ message: "Success: Email was sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
