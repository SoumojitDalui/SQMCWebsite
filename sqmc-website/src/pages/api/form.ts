import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer');

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const value = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const message = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `${value.service} - ${value.selectedTags.join(', ')}`,
        html: `
        <p><strong>Service Type:</strong> ${value.service}</p>
        <p><strong>Name:</strong> ${value.name}</p>
        <p><strong>Email:</strong> ${value.email}</p>
        <p><strong>Phone Number:</strong> ${value.phoneno}</p>
        <p><strong>Organization Name:</strong> ${value.orgname}</p>
        <p><strong>Type of Certification:</strong> ${value.selectedTags.join(', ')}</p>
        <p><strong>Number of employees:</strong> ${value.numemp}</p>
        // <p><strong>Additional Comments:</strong> ${value.additionalComments}</p>
      `,
    };

    try {
        await transporter.sendMail(message);
        res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending email." });
    }
}