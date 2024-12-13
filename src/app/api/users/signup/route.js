dotenv.config();
import dotenv from "dotenv";
import connect from "@/dbConfig/dbcofig";
import User from "@/models/userModels";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
// import { POST as generateOtp } from '../generatOtp/route';



connect()


export async function POST(req) {
    try {
        const userData = await req.json()
        console.log(userData)

        const existingUser = await User.findOne({ mail: userData.mail });

        if (existingUser) {
            return NextResponse.json({ message: "user Exits " }, { status: 400 })
        }
        else {
            // hash the password with th 10 rounds
            const hashedPassword = await bcrypt.hash(userData.password, 10)
            const newUser = await new User({
                name: userData.name,
                mail: userData.mail,
                password: hashedPassword,
            })
            await newUser.save();

            try {
                // Generate OTP
                const otp = otpGenerator.generate(5, { upperCase: false, specialChars: true });

                // Create transporter for sending emails
                const transporter = nodemailer.createTransport({
                    service: 'gmail', // Use your email service (e.g., 'gmail', 'yahoo', etc.)
                    auth: {
                        user: process.env.EMAIL, // Your email address
                        pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
                    },
                });

                // Send the welcome mail to the user
                const mailOptions = {
                    from: process.env.EMAIL, // Sender's name and email
                    to: userData.mail, // Recipient's email address
                    subject: 'Registration Successfully With Next App',
                    html: `
                        <p>
                            Registration Successfully With Next App. We are happy to see you.
                            If you have any questions or need assistance, please don't hesitate to contact us.
                        </p>
                        <br>
                        <p>OTP: ${otp}</p>
                    `,
                };

                // Await sending mail and handle response
                await transporter.sendMail(mailOptions);

                console.log(`OTP sent: ${otp}`);
                return NextResponse.json({ message: "Mail sent successfully" }, { status: 200 });

            } catch (error) {
                console.error("Error sending mail:", error);
                return NextResponse.json({ message: "Mail not sent", error: error.message }, { status: 400 });
            }


            // Save the User to the database

        }

        // Return success response
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });

    }
    catch (err) {
        console.log(err)

        // Return success response
        return NextResponse.json({ message: "Failed to create user" }, { status: 500 });
    }
}