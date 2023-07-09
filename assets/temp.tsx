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
import Link from "next/link";

import bruttoNettoData from "./../assets/brutto-gehalt-de.json";

// const secondVictoryBarDataKey = Object.keys(secondVictoryBarData);

// this is the UI for the basic-charts URL
export default function Page() {
    return (
        <div>
            <h1>Einkommen von Arbeitnehmer:innen in Deutschland</h1>

            <article>
                <h2>Entwicklung von Brutto- und Nettoeinkommen</h2>
                <h3>Durchschnittliches Brutto- und Netto seit 2008</h3>

                <div>
                    <VictoryChart
                        // specify the title to be applied to the SVG to assist with accessibility for screen readers
                        title="Brutto- und Nettoeinkommen in Deutschland"
                        // adding the material theme provided with Victory, alternative would be grayscale
                        theme={VictoryTheme.material}
                        // prevent the bars from overlapping the axis
                        domainPadding={20}
                        // setting the height of the chart
                        height={300}
                        width={600}
                        // set padding so the complete content is visible
                        padding={{ top: 40, bottom: 50, left: 80, right: 40 }}
                    >
                        <VictoryGroup>
                            <VictoryAxis
                                tickValues={[
                                    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
                                    2022
                                ]}
                                tickFormat={["'08", "'09", "'10", "'11", "'12", "'13", "'14", "'15", "'16", "'17", "'18", "'19", "'20, ""'21",
                                    "'22"]}
                                label="Jahr"
                                style={{ axisLabel: { padding: 35 } }}
                            />

                            <VictoryAxis
                                dependentAxis
                                // tickFormat specifies how ticks should be displayed
                                tickFormat={(x: any) => `${x} €`}
                                label="Monatliches Einkommen"
                                style={{ axisLabel: { padding: 50 } }}
                            />

                            <VictoryBar
                                // adding the data to the chart
                                data={bruttoNettoData}
                                // data accessor for x values
                                x="year"
                                // data accessor for y values
                                y="brutto"
                                // adding rounded corners at the top of the bars
                                cornerRadius={{ topLeft: 2, topRight: 2 }}
                                // styling bar ratio
                                barRatio={0.5}
                                // adding tooltips with labels to the bars
                                labels={({ datum }) => `$ ${datum.brutto}`}
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
                        </VictoryGroup>
                    </VictoryChart>
                </div>
                {/* <div className="victory-label-center-div">
                    <VictoryLegend
                        // setting width of the legend component
                        height={50}
                        // setting a title for the legend
                        title="Legend"
                        // center the legend title
                        centerTitle
                        // set orientation to horizontal or vertical (default value is vertical)
                        orientation="horizontal"
                        // setting an absolute value for horizontal alignment of the legend, relative value not possible
                        x={100}
                        // setting distance between legend data points
                        gutter={25}
                        style={{
                            border: { stroke: "none" },
                            title: { fontSize: 14, display: "none" },
                            labels: { fontSize: 12 },
                        }}
                        data={[
                            { name: secondVictoryBarDataKey[0], symbol: { fill: "jungle" } },
                            {
                                name: secondVictoryBarDataKey[1],
                                symbol: { fill: "rgb(69, 178, 157)", type: "star" },
                            },
                            {
                                name: secondVictoryBarDataKey[2],
                                symbol: { fill: "rgb(239, 201, 76)", type: "diamond" },
                            },
                            {
                                name: secondVictoryBarDataKey[3],
                                symbol: { fill: "rgb(226, 122, 63)", type: "plus" },
                            },
                        ]}
                    />
                </div> */}
            </article>
        </div>
    );
}
