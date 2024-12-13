import { NextResponse } from "next/server";

export async function POST() {
    try {
        const response = NextResponse.json({
            message: "Logout successfully",
            success: true
        });

        // Clear the cookie by setting its value to an empty string and expiration date to now
        response.cookies.set("jwttoken", "", {
            httpOnly: true,
            expires: new Date(0) // Expiring the cookie immediately
        });

        return response; // Return the response after setting the cookie
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
