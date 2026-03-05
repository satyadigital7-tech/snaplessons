import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // ---------------------------------------------------------
        // IMPORTANT: Replace this Google Apps Script Web App URL
        // with your deployed script URL. (See the integration guide artifact)
        // ---------------------------------------------------------
        const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "YOUR_APPS_SCRIPT_WEB_APP_URL";

        // Convert JSON body to URL encoded form data (required by Apps Script by default)
        const formData = new URLSearchParams();
        Object.keys(body).forEach((key) => {
            formData.append(key, body[key]);
        });

        if (GOOGLE_SCRIPT_URL !== "YOUR_APPS_SCRIPT_WEB_APP_URL") {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: formData,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to submit to Google Sheet");
            }
        } else {
            // Simulate successful form submission if no URL is provided yet
            console.log("Form data received (Simulation only - SCRIPT URL not set):", body);
        }

        return NextResponse.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error("Error submitting form:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send message" },
            { status: 500 }
        );
    }
}
