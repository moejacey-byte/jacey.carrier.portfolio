const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "Jacey.Portfolio API" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Name, email, and message are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || "moejacey@gmail.com",
      replyTo: email,
      subject: `Jacey.Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    });

    return res.json({ ok: true, message: "Message sent." });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Unable to send message right now." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Jacey.Portfolio API listening on ${PORT}`));
