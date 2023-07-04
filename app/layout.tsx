import "./globals.css";
import { Metadata } from "next";
import "@picocss/pico/css/pico.classless.css";
import "./globals.css";

export const metadata: Metadata = {
    title: "Charts with Victory",
    description: "Overview of charts with Victory Library in Next.js",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
