import React from "react";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div>
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
            </div>
        </nav>
    );
};
export default Navbar;
