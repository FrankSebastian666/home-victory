"use client";

import {
    Flyout,
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryLegend,
    VictoryTheme,
    VictoryTooltip,
} from "victory";
import secondVictoryBarData from "./second-victorybar-data.json" assert { type: "json" };

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
            <h1>Advanced Charts with Victory</h1>

            <article>
                <h2>Säulendiagramm</h2>
                <code>
                    Victory-Component:{" "}
                    <Link href="https://formidable.com/open-source/victory/docs/victory-bar" target="blank">
                        VictoryBar
                    </Link>
                </code>

                <div className="basic-victory-bar">
                    <VictoryChart
                        // specify the title to be applied to the SVG to assist with accessibility for screen readers
                        title="First Advanced Bar Chart"
                        // adding the material theme provided with Victory, alternative would be grayscale
                        theme={VictoryTheme.material}
                        // prevent the bars from overlapping the axis
                        domainPadding={20}
                        // setting the height of the chart
                        height={200}
                        // set padding so the complete content is visible
                        padding={{ top: 40, bottom: 50, left: 80, right: 40 }}
                    >
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4]}
                            tickFormat={["Q1", "Q2", "Q3", "Q4"]}
                            label="Quartal"
                            style={{ axisLabel: { padding: 30 } }}
                        />

                        <VictoryAxis
                            dependentAxis
                            // tickFormat specifies how ticks should be displayed
                            tickFormat={(x: any) => `$${x / 1000}k`}
                            label="Earnings"
                            style={{ axisLabel: { padding: 50 } }}
                        />

                        <VictoryBar
                            // adding the data to the chart
                            data={firstVictoryBarData}
                            // data accessor for x values
                            x="quarter"
                            // data accessor for y values
                            y="earnings"
                            // adding rounded corners at the top of the bars
                            cornerRadius={{ topLeft: 2, topRight: 2 }}
                            // styling bar ratio
                            barRatio={0.5}
                            // adding tooltips with labels to the bars
                            labels={({ datum }) => `$ ${datum.earnings}`}
                            labelComponent={
                                <VictoryTooltip
                                    // adding a custom flyout to the tooltip
                                    pointerLength={20}
                                    pointerWidth={5}
                                    style={{ fill: "white" }}
                                    flyoutStyle={{ stroke: "none", fill: "jungle" }}
                                />
                            }
                            // adding an event to the bars
                            events={[
                                {
                                    target: "data",
                                    eventHandlers: {
                                        onClick: () => {
                                            return [
                                                {
                                                    target: "data",
                                                    mutation: (props) => {
                                                        const fill = props.style && props.style.fill;
                                                        return fill === "red" ? null : { style: { fill: "red" } };
                                                    },
                                                },
                                            ];
                                        },
                                    },
                                },
                            ]}
                        />
                    </VictoryChart>
                </div>
            </article>
            <article>
                <h3>Gestapeltes Säulendiagramm mit Legende</h3>
                <code>
                    Victory-Component:{" "}
                    <Link href="https://formidable.com/open-source/victory/docs/victory-group" target="blank">
                        VictoryGroup
                    </Link>
                </code>
                <div>
                    <VictoryChart
                        // set all children to be displayed horizontal (default is vertical)
                        horizontal
                        title="Gruped Bar Chart"
                        theme={VictoryTheme.material}
                        domainPadding={20}
                        height={300}
                        padding={{ top: 40, bottom: 50, left: 60, right: 40 }}
                    >
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4]}
                            tickFormat={["Q1", "Q2", "Q3", "Q4"]}
                            label="Quartal"
                            style={{ axisLabel: { padding: 35 } }}
                        />

                        <VictoryAxis
                            dependentAxis
                            // tickFormat specifies how ticks should be displayed
                            tickFormat={(x: any) => `$${x / 1000}k`}
                            label="Earnings"
                            style={{ axisLabel: { padding: 35 } }}
                        />

                        <VictoryGroup offset={8} colorScale={"qualitative"}>
                            <VictoryBar
                                x="quarter"
                                y="earnings"
                                // adding specific data to the chart
                                data={secondVictoryBarData[2019]}
                                labels={({ datum }) => `$ ${datum.earnings}`}
                                labelComponent={
                                    <VictoryTooltip
                                        // adding a custom flyout to the tooltip
                                        pointerLength={10}
                                        pointerWidth={5}
                                        style={{ fill: "white", fontSize: 10 }}
                                        flyoutStyle={{ stroke: "none", fill: "jungle" }}
                                    />
                                }
                            />
                            <VictoryBar
                                x="quarter"
                                y="earnings"
                                // adding specific data to the chart
                                data={secondVictoryBarData[2020]}
                                labels={({ datum }) => `$ ${datum.earnings}`}
                                labelComponent={
                                    <VictoryTooltip
                                        // adding a custom flyout to the tooltip
                                        pointerLength={10}
                                        pointerWidth={5}
                                        style={{ fill: "white", fontSize: 10 }}
                                        flyoutStyle={{ stroke: "none", fill: "rgb(69, 178, 157)" }}
                                    />
                                }
                            />
                            <VictoryBar
                                x="quarter"
                                y="earnings"
                                // adding specific data to the chart
                                data={secondVictoryBarData[2021]}
                                labels={({ datum }) => `$ ${datum.earnings}`}
                                labelComponent={
                                    <VictoryTooltip
                                        // adding a custom flyout to the tooltip
                                        pointerLength={10}
                                        pointerWidth={5}
                                        style={{ fill: "white", fontSize: 10 }}
                                        flyoutStyle={{ stroke: "none", fill: "rgb(239, 201, 76)" }}
                                    />
                                }
                            />
                            <VictoryBar
                                x="quarter"
                                y="earnings"
                                // adding specific data to the chart
                                data={secondVictoryBarData[2022]}
                                labels={({ datum }) => `$ ${datum.earnings}`}
                                labelComponent={
                                    <VictoryTooltip
                                        // adding a custom flyout to the tooltip
                                        pointerLength={10}
                                        pointerWidth={5}
                                        style={{ fill: "white", fontSize: 10 }}
                                        flyoutStyle={{ stroke: "none", fill: "rgb(226, 122, 63)" }}
                                    />
                                }
                            />
                        </VictoryGroup>
                    </VictoryChart>
                    <VictoryLegend
                        // x={125}
                        // y={10}
                        title="Legend"
                        centerTitle
                        orientation="horizontal"
                        gutter={10}
                        style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                        data={[{ name: "One" }, { name: "Two" }, { name: "Three" }]}
                    />
                </div>
            </article>
        </div>
    );
}
