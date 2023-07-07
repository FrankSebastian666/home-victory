"use client";

import {
    VictoryArea,
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryHistogram,
    VictoryLine,
    VictoryPie,
    VictoryTheme,
} from "victory";
import Link from "next/link";
import Image from "next/image";

// inside app/basic-charts/page.tsx
// here goes the sample data for the first basic bar chart
const firstVictoryBarData = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
];

// inside app/basic-charts/page.tsx
// here goes the sample data for the first basic pie chart
const firstVictoryPieData = [
    { quarter: 1, earnings: 13000, label: "Q1" },
    { quarter: 2, earnings: 16500, label: "Q2" },
    { quarter: 3, earnings: 14250, label: "Q3" },
    { quarter: 4, earnings: 19000, label: "Q4" },
];

// inside app/basic-charts/page.tsx
// here goes the sample data for the first basic histogram chart
const firstVictoryLineChartData = [
    { year: "2019", earnings: 5000 },
    { year: "2020", earnings: 12000 },
    { year: "2021", earnings: 13000 },
    { year: "2022", earnings: 15000 },
];

// this is the UI for the basic-charts URL
export default function Page() {
    return (
        <div>
            <h1>Basic Charts with Victory</h1>

            <article>
                <h3>Säulendiagramm</h3>
                <code>
                    Victory-Component:{" "}
                    <Link href="https://formidable.com/open-source/victory/docs/victory-bar" target="blank">
                        VictoryBar
                    </Link>
                </code>
                <div>
                    <div className="basic-charts-div">
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
                                // tickFormat specifies how ticks should be named
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
                    <div>
                        <Image
                            src="/../public/images/codesnap/basic-charts-bar.png"
                            width={1802}
                            height={1356}
                            alt="Code Snippet"
                        />
                    </div>
                </div>
            </article>

            <article>
                <h3>Kreisdiagramm</h3>
                <code>
                    Victory-Component:{" "}
                    <Link href="https://formidable.com/open-source/victory/docs/victory-pie" target="blank">
                        VictoryPie
                    </Link>
                </code>
                <div>
                    <div className="basic-charts-div">
                        <VictoryPie x="quarter" y="earnings" data={firstVictoryPieData} theme={VictoryTheme.material} />
                    </div>
                </div>
            </article>

            <article>
                <h3>Flächendiagramm</h3>
                <code>
                    Victory-Component:{" "}
                    <Link href="https://formidable.com/open-source/victory/docs/victory-pie/" target="blank">
                        VictoryPie
                    </Link>
                </code>
                <div>
                    <div className="basic-charts-div">
                        <VictoryChart theme={VictoryTheme.material}>
                            <VictoryAxis tickValues={[1, 2, 3, 4]} tickFormat={["Q1", "Q2", "Q3", "Q4"]} />

                            <VictoryAxis
                                dependentAxis
                                // tickFormat specifies how ticks should be displayed
                                tickFormat={(x: any) => `$${x / 1000}k`}
                            />
                            <VictoryArea data={firstVictoryBarData} x="quarter" y="earnings" />
                        </VictoryChart>
                    </div>
                </div>
            </article>

            <article>
                <h3>Liniendiagramm</h3>
                <code>
                    Victory-Component:{" "}
                    <Link href="https://formidable.com/open-source/victory/docs/victory-line" target="blank">
                        VictoryLine
                    </Link>
                </code>
                <div>
                    <div className="basic-charts-div">
                        <VictoryChart theme={VictoryTheme.material}>
                            <VictoryLine x="year" y="earnings" data={firstVictoryLineChartData} />
                        </VictoryChart>
                    </div>
                </div>
            </article>
        </div>
    );
}
