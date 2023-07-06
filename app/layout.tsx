import "./globals.css";
import { Metadata } from "next";
import "@picocss/pico/css/pico.css";
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

// function switchTheme() {
//     document.getElementById("theme-switcher")?.addEventListener("click", function () {
//         if (document.getElementById("theme-switcher")?.classList.contains("token"))
//         document.getElementById("theme-switcher")?.data-theme.;
//     });
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme="light">
            <body className="container">
                <header>
                    <Navbar />
                </header>
                <main>{children}</main>
                <footer>
                    <button className="contrast theme-switcher" aria-label="Turn off dark mode">
                        Switch Theme
                    </button>
                </footer>
            </body>
        </html>
    );
}
