import {NextRequest} from "next/server";

export async function GET(request:NextRequest) {
    const data = { message: "Hello" };
    return new Response(JSON.stringify(data), {
        status: 200, // Status code indicating success
        headers: {
            "Content-Type": "application/json" // Setting content type to JSON
        }
    });
}