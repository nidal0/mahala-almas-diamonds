const nodemailer = require("nodemailer");

export default function handler(req, res) {
  const message = {
    from: req.body.email,
    to: "mahalaalmas@gmail.com",
    subject: "New diamond requirement form submission",
    text: req.body.message,
    html: `<p>${req.body.message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
