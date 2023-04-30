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
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const subjectData = () => {
        if(value.pageName === 'costing-quote') {
            return `${value.selectedservicestags.join(', ')} - ${value.selectedcertificatetags.join(', ')}`
        } else if(value.pageName === 'contact') {
            return `Contact - ${value.email} ${value.phoneno}`
        } else {
            return `${value.service} - ${value.selectedtags.join(', ')}`
        }
    }

    const messageData = () => {
        if(value.pageName === 'costing-quote') {
            return `
            <p><strong>Name:</strong> ${value.name}</p>
            <p><strong>Email:</strong> ${value.email}</p>
            <p><strong>Phone Number:</strong> ${value.phoneno}</p>
            <p><strong>Organization Name:</strong> ${value.orgname}</p>
            <p><strong>Number of employees:</strong> ${value.numemp}</p>
            <p><strong>Service Types:</strong> ${value.selectedservicestags.join(', ')}</p>
            <p><strong>Type of Certification:</strong> ${value.selectedcertificatetags.join(', ')}</p>
            <p><strong>Additional Comments:</strong> ${value.additionalComments}</p>
          `
        } else if(value.pageName === 'contact') {
            return `
            <p><strong>Name:</strong> ${value.name}</p>
            <p><strong>Email:</strong> ${value.email}</p>
            <p><strong>Phone Number:</strong> ${value.phoneno}</p>
            <p><strong>Organization Name:</strong> ${value.orgname}</p>
            <p><strong>Additional Comments:</strong> ${value.additionalComments}</p>
          `
        } else {
            return `
            <p><strong>Service Type:</strong> ${value.service}</p>
            <p><strong>Name:</strong> ${value.name}</p>
            <p><strong>Email:</strong> ${value.email}</p>
            <p><strong>Phone Number:</strong> ${value.phoneno}</p>
            <p><strong>Organization Name:</strong> ${value.orgname}</p>
            <p><strong>Type of Certification:</strong> ${value.selectedtags.join(', ')}</p>
            <p><strong>Number of employees:</strong> ${value.numemp}</p>
            <p><strong>Additional Comments:</strong> ${value.additionalComments}</p>
          `
        }
    }

    const message = {
        from: process.env.EMAIL_ID,
        to: [process.env.EMAIL_ID, 'infosqmc@gmail.com'],
        subject: subjectData(),
        html: messageData(),
    };

    try {
        await transporter.sendMail(message);
        res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending email." });
    }
    // console.log(value)
    // res.status(200).json({ message: "Email sent successfully." });
}

