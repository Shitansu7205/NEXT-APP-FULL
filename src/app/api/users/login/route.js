import dotenv from 'dotenv';
dotenv.config();
import { connect } from "mongoose";
import User from "@/models/userModels";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


connect(); // Ensure the database connection
// Function for POST Request 


export async function POST(req) {


    try {
        const UserData = await req.json();
        console.log("Received UserData:", UserData);

        // Check if the user exists by email
        const userExists = await User.findOne({ mail: UserData.mail });

        if (userExists) {
            // Compare the provided password with the stored hashed password
            const isPasswordValid = await bcrypt.compare(UserData.password, userExists.password);

            if (isPasswordValid) {
                console.log("Login successful for user:", userExists.mail);


            // Token Cretaion 
                const token = jwt.sign(
                    {
                        id: userExists._id,
                        mail: userExists.mail,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '1h'
                    }
                )
                console.log(token)

                // Send response 
                return NextResponse.json({ message: "Login successful" ,token});
            }
            else {
                console.log("Invalid password");
                return NextResponse.json({ message: "Invalid Credentials" }, { status: 401 });
            }
        } else {
            console.log("User does not exist");
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
    } catch (err) {
        console.error("Error in POST handler:", err);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}

// Function for GET Request 
export function GET(req) {
    console.log('GET FUNCTION PRINTED');
    return NextResponse.json([
        { name: "shitansu", roll: 21 },
        { name: "shitansu", roll: 21 },
        { name: "shitansu", roll: 21 },
        { name: "shitansu", roll: 21 }
    ]);
}
