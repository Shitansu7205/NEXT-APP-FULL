import dotenv from 'dotenv';
dotenv.config();
import { NextResponse } from 'next/server';
import connect from "@/dbConfig/dbcofig";
import User from "@/models/userModels";
import bcrypt from "bcrypt";


connect()

export async function POST(req) {
    const { mail, password, confirmPassword } = await req.json();

    try {
        if (password !== confirmPassword) {
            return NextResponse.json({ message: "Password and Confirm Password do not match" }, { status: 400 });
        } else if (password.length < 5) {
            return NextResponse.json({ message: "Password must be at least 5 characters long" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.findOne({ mail });
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        user.password = hashedPassword;
        await user.save();
        return NextResponse.json({ message: "Password changed successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }


}

