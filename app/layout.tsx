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
                    <div className="grid">
                        <div>
                            <small>Hochschule Merseburg</small>
                            <br />
                            <small>Masterstudiengang IDMM</small>
                            <br />
                            <small>Modul Webentwicklung</small>
                            <br />
                            <small>Dozent: Dr. Thomas Meinike</small>
                        </div>
                        <div>
                            <small>Sommersemester 2023</small>
                            <br />
                            <small>Sebastian Frank</small>
                            <br />
                            <small>Matr.-Nr.: 27103</small>
                            <br />
                            <small>sebastian.frank2@stud.hs-merseburg.de</small>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
