import React from "react";
import Link from "next/link";
import "./globals.css";

const Navbar = () => {
    return (
        <nav className="container-fluid pico-navbar">
            <ul>
                <Link href="/">Home</Link>
            </ul>
            <ul>
                <li>
                    <Link href="/basic-charts">Basic Charts</Link>
                </li>
                <li>
                    <Link href="/advanced-charts">Advanced Charts</Link>
                </li>
                <li>
                    <Link href="/animated-charts">Animated Charts</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
