import "./globals.css";
import { Metadata } from "next";
import "@picocss/pico/css/pico.classless.css";
import "./globals.css";
import Navbar from "./navigation";

export const metadata: Metadata = {
    title: "Charts with Victory",
    description: "Example charts with Victory Library in Next.js",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="light">
            <body className="container">
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
