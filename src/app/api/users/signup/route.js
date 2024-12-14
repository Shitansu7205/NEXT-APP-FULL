dotenv.config();
import dotenv from "dotenv";
import connect from "@/dbConfig/dbcofig";
import User from "@/models/userModels";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
// import { POST as generateOtp } from '../generatOtp/route';
import nodemailer from "nodemailer";


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
            // Save the User to the database
            await newUser.save();


           
            return NextResponse.json({ message: "User created successfully" }, { status: 201 });
        }

    }

























    catch (err) {
        console.log(err)

        // Return success response
        return NextResponse.json({ message: "Failed to create user" }, { status: 500 });
    }
}