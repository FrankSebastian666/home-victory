"use client";

import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from "victory";

import Link from "next/link";

// here goes the sample data for the first basic chart
const firstVictoryBarData = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
];

// this is the UI for the basic-charts URL
export default function Page() {
    return (
        <div>
            <h1>Basic Charts with Victory</h1>

            <article>
                <h2>Säulendiagramme</h2>
                <code>
                    Victory-Component:{" "}
                    <Link href="https://formidable.com/open-source/victory/docs/victory-bar" target="blank">
                        VictoryBar
                    </Link>
                </code>

                <div className="basic-victory-bar">
                    <VictoryChart
                        // specify the title to be applied to the SVG to assist with accessibility for screen readers
                        title="First Bar Chart"
                        // adding the material theme provided with Victory, alternative would be grayscale
                        theme={VictoryTheme.material}
                        // prevent the bars from overlapping the axis
                        domainPadding={20}
                    >
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4]}
                            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                        />

                        <VictoryAxis
                            dependentAxis
                            // tickFormat specifies how ticks should be displayed
                            tickFormat={(x: any) => `$${x / 1000}k`}
                        />

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
        </div>
    );
}
