"use client";

import { VictoryBar, VictoryChart } from "victory";
import "@picocss/pico/css/pico.classless.css";
import styles from "./page.module.css";
import "./../globals.css";

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
        <main>
            <div>
                <h1>Basic Charts with Victory</h1>
            </div>

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
        </main>
    );
}
