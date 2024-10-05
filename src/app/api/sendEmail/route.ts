import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests are allowed' });
  }

  const { name, email, message } = req.body;

  // Check if any field is missing
  if (!name || !email || !message) {
    return res.status(400).send({ message: 'All fields are required' });
  }

  // Create a Nodemailer transporter using your email credentials
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use 'gmail' or another service provider
    auth: {
      user: process.env.EMAIL_USER, // Replace with your email
      pass: process.env.EMAIL_PASS,  // Replace with your email password
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: email, // sender address
      to: 'maciejmarchel16@gmail.com', // Your email
      subject: `New message from ${name}`, // Subject line
      text: message, // plain text body
      html: `<p>You have a new contact form submission</p><br>
             <p><strong>Name: </strong> ${name} </p><br>
             <p><strong>Email: </strong> ${email} </p><br>
             <p><strong>Message: </strong> ${message} </p>`, // html body
    });

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error); // Log the error
    return res.status(500).json({ message: 'Failed to send message' });
  }
}
