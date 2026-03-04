import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
    title: {
        default: "Snap Lessons | Digital Marketing Agency Hyderabad",
        template: "%s | Snap Lessons",
    },
    description:
        "Snap Lessons is a top digital marketing agency in Hyderabad offering SEO, Google Ads, Social Media, Web Development, and Digital Marketing Courses. Grow your business with India's fastest digital partner.",
    keywords: [
        "digital marketing agency hyderabad",
        "SEO company hyderabad",
        "google ads management india",
        "social media marketing hyderabad",
        "web development agency",
        "digital marketing courses",
        "snap lessons",
    ],
    authors: [{ name: "Snap Lessons", url: "https://snaplessons.in" }],
    creator: "Snap Lessons",
    metadataBase: new URL("https://snaplessons.in"),
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://snaplessons.in",
        title: "Snap Lessons | Digital Marketing Agency Hyderabad",
        description:
            "Top digital marketing agency in Hyderabad. SEO, Ads, Social Media, Web Dev & Courses.",
        siteName: "Snap Lessons",
    },
    twitter: {
        card: "summary_large_image",
        title: "Snap Lessons | Digital Marketing Agency",
        description: "Grow your business with Hyderabad's top digital marketing agency.",
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = {
    themeColor: "#1E3A8A",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </head>
            <body className="bg-dark text-white antialiased">
                <Navbar />
                <main>{children}</main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
