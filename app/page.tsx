import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@picocss/pico/css/pico.css";
import "./globals.css";

export default function Home() {
    return (
        <main>
            <h1>Sample Project for Victory</h1>

            <article>
                <div>
                    <Link href="/basic-charts">Basic Charts</Link>
                </div>
                <code>insert react syntax highlighting here</code>
            </article>
        </main>
    );
}
