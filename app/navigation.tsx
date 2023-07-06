"use client";

import React from "react";
import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const getCurrentRoute = usePathname();

    return (
        <nav className="container-fluid pico-navbar">
            <ul>
                <Link
                    href="/"
                    className={getCurrentRoute === "/" ? "active-nav-link" : "secondary outline"}
                    role="button"
                >
                    Home
                </Link>
            </ul>
            <ul>
                <li>
                    <Link
                        href="/basic-charts"
                        className={getCurrentRoute === "/basic-charts" ? "active-nav-link" : "secondary outline"}
                        role="button"
                    >
                        Basic Charts
                    </Link>
                </li>
                <li>
                    <Link
                        href="/advanced-charts"
                        className={getCurrentRoute === "/advanced-charts" ? "active-nav-link" : "secondary outline"}
                        role="button"
                    >
                        Advanced Charts
                    </Link>
                </li>
                <li>
                    <Link
                        href="/animated-charts"
                        className={getCurrentRoute === "/animated-charts" ? "active-nav-link" : "secondary outline"}
                        role="button"
                    >
                        Animated Charts
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
