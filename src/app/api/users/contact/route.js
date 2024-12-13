
import dotenv from 'dotenv';
import { NextResponse } from 'next/server';
dotenv.config();
import nodemailer from "nodemailer";



export async function POST(req) {

    const Data = await req.json()
    const transpoter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // e.g., smtp.gmail.com
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    })

    try {
        transpoter.sendMail({
            from: `${Data.name} <${Data.email}>`, // Sender's name and email
            to: process.env.EMAIL, // Your email address
            subject: `Contact Form Submission `,
            html: `<p>
                Name : ${Data.name}  <br>
                Email : ${Data.mail}  <br>
               Message : ${Data.message}
               </p>`,
        })

        return NextResponse.json({ message: "mail send" })
    } catch (error) {
        return NextResponse.json({ message: "error " })
    }

}
