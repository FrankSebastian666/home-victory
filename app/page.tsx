import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <main>
            <div>
                <h1 className={styles.title}>Sample Project for Victory</h1>
            </div>

            <div>
                <Link href="/basic-charts">Basic Charts</Link>
            </div>
        </main>
    );
}
