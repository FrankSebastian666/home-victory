"use client";

import { VictoryBar, VictoryChart } from "victory";
import "@picocss/pico/css/pico.classless.css";
import "./../globals.css";
import Link from "next/link";

// here goes the data for the charts
const firstVictoryBarData = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
];

// this is the UI for the basic-charts URL
export default function Page() {
    return (
        <article>
            <h1>Basic Charts with Victory</h1>

            <h2>Säulendiagramme</h2>
            <code>
                Victory-Component:{" "}
                <Link href="https://formidable.com/open-source/victory/docs/victory-bar" target="blank">
                    VictoryBar
                </Link>
            </code>

            <div className="basic-victory-bar">
                <VictoryChart>
                    <VictoryBar
                        data={firstVictoryBarData}
                        // data accessor for x values
                        x="quarter"
                        // data accessor for y values
                        y="earnings"
                    />
                </VictoryChart>
            </div>
        </article>
    );
}
