"use client";

import {
    Background,
    VictoryArea,
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryHistogram,
    VictoryLine,
    VictoryPie,
    VictoryStack,
    VictoryTheme,
} from "victory";
import Link from "next/link";
import Image from "next/image";

import basicChartsData1 from "./../../public/images/codesnap/basic-charts-Data1.png";
import basicChartsData2 from "./../../public/images/codesnap/basic-charts-Data2.png";
import advancedChartsDataJSONImport from "./../../public/images/codesnap/advanced-charts-JSON-import.png";
import advancedChartsDataJSON from "./../../public/images/codesnap/advanced-charts-JSON.png";
import basicChartsChart from "./../../public/images/codesnap/basic-charts-Chart.png";
import basicChartsAxis from "./../../public/images/codesnap/basic-charts-Axis.png";
import bascChartsStack from "./../../public/images/codesnap/basic-charts-Stack.png";
import basicChartsGroup from "./../../public/images/codesnap/basic-charts-Group.png";
import basicChartsBar from "./../../public/images/codesnap/basic-charts-Bar.png";
import basicChartsPie from "./../../public/images/codesnap/basic-charts-Pie.png";
import basicChartsArea from "./../../public/images/codesnap/basic-charts-Area.png";
import basicChartsLine from "./../../public/images/codesnap/basic-charts-Line.png";

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
            <section>
                <h2>Einfache Einbettung von Daten</h2>
                <article>
                    <h3>Innerhalb einer JavaScript/TypeScript-Datei</h3>
                    <ul>
                        <li>Die Daten können direkt im selben File wie die Victory-Charts definiert werden</li>
                        <li>Einfachste Variante: Im selben File wie die Victory-Komponenten</li>
                        <li>Der Variable wird ein Array zugwiesen, das die Daten enthält</li>
                        <li>Array enhtählt Objekte, die aus Key-Value-Pairs bestehen</li>
                        <li>
                            <kbd>Nachteile: </kbd>
                            <ul>
                                <li>Skript-Datei kann sehr groß und unübersichtlich werden</li>
                                <li>Bei mehreren Charts auf einer Seite steigt dieser Faktor weiter an</li>
                            </ul>
                        </li>
                    </ul>
                    <div className="grid">
                        <div className="image-container">
                            <Image src={basicChartsData1} width={2000} height={500} quality={100} alt="Code Snippet" />
                        </div>
                        <div className="image-container">
                            <Image src={basicChartsData2} width={2000} height={500} quality={100} alt="Code Snippet" />
                        </div>
                    </div>
                </article>

                <article>
                    <h3>Import von Daten aus einer JSON-Datei</h3>
                    <div className="grid">
                        <div>
                            <ul>
                                <li>Daten werden in entsprechende Skriptdatei importiert</li>
                                <li>Ähnlicher Aufbau wie bei JS-Konstante oben, aber mit JSON-Syntax</li>
                                <li>
                                    <kbd>Vorteile: </kbd>
                                    <ul>
                                        <li>Semantik: Trennung von Datenstruktur und ausgeführtem Code</li>
                                        <li>Oft erhält man Daten von Servern, die diese als JSON ablegen</li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="image-container">
                                <Image
                                    src={advancedChartsDataJSONImport}
                                    width={2000}
                                    height={500}
                                    quality={100}
                                    alt="Code Snippet"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="image-container">
                                <Image
                                    src={advancedChartsDataJSON}
                                    width={2000}
                                    height={500}
                                    quality={100}
                                    alt="Code Snippet"
                                />
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <section>
                <h2>Wichtige Victory-Components für sinnvolle Charts</h2>
                <article>
                    <h3>Universeller Wrapper: VictoryChart</h3>
                    <code>
                        Victory-Component:{" "}
                        <Link href="https://formidable.com/open-source/victory/docs/victory-chart/" target="blank">
                            VictoryChart
                        </Link>
                    </code>
                    <ul>
                        <li>Rendert ein Set von Victory Children Components und dient somit als Wrapper</li>
                        <li>
                            Kontrolliert das Layout der Victory Components, wie z.B. die Positionierung der Achsen oder
                            die Farbgebung
                        </li>
                        <li>Koordinert Animationen und Events zwischen den Victory Children Components</li>
                        <li>Sind keine Children verfügbar, werden leere Standard-Achsen gerendert</li>
                    </ul>
                    <div className="basic-charts-div">
                        <VictoryChart
                            height={300}
                            width={300}
                            domain={[-2, 2]}
                            style={{ background: { fill: "yellow" } }}
                            backgroundComponent={<Background y={50} height={100} />}
                        />
                    </div>
                    <div className="image-container">
                        <Image src={basicChartsChart} width={800} height={500} quality={100} alt="Code Snippet" />
                    </div>
                </article>
                <article>
                    <h3>Achsen: VictoryAxis</h3>
                    <code>
                        Victory-Component:{" "}
                        <Link href="https://formidable.com/open-source/victory/docs/victory-chart/" target="blank">
                            VictoryAxis
                        </Link>
                    </code>
                    <ul>
                        <li>Rendert eine einzige Achse</li>
                        <li>
                            Kann allein verwendet werden oder innerhalb VictoryChart mit anderen Achsen gruppiert werden
                        </li>
                    </ul>
                    <div className="basic-chart-container">
                        <VictoryChart height={400} width={400} theme={VictoryTheme.material}>
                            <VictoryAxis
                                // set crossAxis if two axes will cross each other, 0 tick will be removed
                                crossAxis
                                width={400}
                                height={400}
                                // domain defines the range of values your axis will include
                                domain={[-10, 10]}
                                // offset defines the offset of the axis from the edge of the chart
                                offsetY={200}
                            />
                            <VictoryAxis
                                dependentAxis
                                crossAxis
                                width={400}
                                height={400}
                                domain={[-10, 10]}
                                offsetX={200}
                            />
                        </VictoryChart>
                    </div>
                    <div className="image-container">
                        <Image src={basicChartsAxis} width={1000} height={500} quality={100} alt="Code Snippet" />
                    </div>
                </article>
                <article>
                    <h3>Stapeln: VictoryStack</h3>
                    <code>
                        Victory-Component:{" "}
                        <Link href="https://formidable.com/open-source/victory/docs/victory-chart/" target="blank">
                            VictoryStack
                        </Link>
                    </code>
                    <ul>
                        <li>Rendert Victory Children Komponenten in gesstapeltem Layout</li>
                        <li>Ähnlich wie Victorychart ein Wrapper-Component, der Layout an Children vererben kann</li>
                        <li>
                            Funktioniert mit VictoryArea, VictoryBar, VictoryCandlestick, VictoryErrorBar,
                            VictoryGroup,VictoryLine, VictoryScatter, VictoryHistogram
                        </li>
                        <li>VictoryHistogram kann nicht mit anderen Component-Arten gestapelt werden</li>
                    </ul>
                    <div className="basic-chart-container">
                        <VictoryStack height={200} width={300} theme={VictoryTheme.material}>
                            <VictoryArea
                                data={[
                                    { x: "a", y: 2 },
                                    { x: "b", y: 3 },
                                    { x: "c", y: 5 },
                                ]}
                            />
                            <VictoryArea
                                data={[
                                    { x: "a", y: 1 },
                                    { x: "b", y: 4 },
                                    { x: "c", y: 5 },
                                ]}
                            />
                            <VictoryArea
                                data={[
                                    { x: "a", y: 3 },
                                    { x: "b", y: 2 },
                                    { x: "c", y: 6 },
                                ]}
                            />
                        </VictoryStack>
                    </div>
                    <div className="image-container">
                        <Image src={bascChartsStack} width={800} height={500} quality={100} alt="Code Snippet" />
                    </div>
                </article>
                <article>
                    <h3>Gruppieren: VictoryGroup</h3>
                    <code>
                        Victory-Component:{" "}
                        <Link href="https://formidable.com/open-source/victory/docs/victory-group/" target="blank">
                            VictoryGroup
                        </Link>
                    </code>
                    <ul>
                        <li>Rendert ein Set von Victory Children Components und dient somit als Wrapper</li>
                        <li>
                            Kontrolliert das Layout der Victory Components, wie z.B. die Positionierung der Achsen oder
                            die Farbgebung
                        </li>
                        <li>Koordinert Animationen und Events zwischen den Victory Children Components</li>
                        <li>
                            Funktioniert mit VictoryArea, VictoryBar, VictoryBoxPlot, VictoryCandlestick,
                            VictoryErrorBar, VictoryLine, VictoryScatter, VictoryHistogram, VictoryStack und
                            VictoryVoronoi.
                        </li>
                        <li>
                            Innerhalb VictoryGroup sind keine Achsen erlaubt, diese sollten von VictoryChart umhüllt
                            sein
                        </li>
                    </ul>
                    <div className="basic-chart-container">
                        <VictoryChart width={300} height={250}>
                            <VictoryGroup
                                offset={12}
                                // colorScale kann auch explizit angegeben werden, ohne dass ein Theme verwendet wird
                                colorScale={"qualitative"}
                            >
                                <VictoryBar
                                    data={[
                                        { x: 1, y: 1 },
                                        { x: 2, y: 2 },
                                        { x: 3, y: 5 },
                                    ]}
                                />
                                <VictoryBar
                                    data={[
                                        { x: 1, y: 2 },
                                        { x: 2, y: 1 },
                                        { x: 3, y: 7 },
                                    ]}
                                />
                                <VictoryBar
                                    data={[
                                        { x: 1, y: 3 },
                                        { x: 2, y: 4 },
                                        { x: 3, y: 9 },
                                    ]}
                                />
                            </VictoryGroup>
                        </VictoryChart>
                    </div>
                    <div className="image-container">
                        <Image src={basicChartsGroup} width={1000} height={500} quality={100} alt="Code Snippet" />
                    </div>
                </article>
            </section>

            <section>
                <h2>Einfache Charts</h2>
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
                            <VictoryBar
                                data={firstVictoryBarData}
                                // data accessor for x values
                                x="quarter"
                                // data accessor for y values
                                y="earnings"
                                // select a premade Victory theme
                                theme={VictoryTheme.material}
                            />
                        </div>
                        <div className="image-container">
                            <Image src={basicChartsBar} width={2000} height={2000} quality={100} alt="Code Snippet" />
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
                            <VictoryPie
                                x="quarter"
                                y="earnings"
                                data={firstVictoryPieData}
                                theme={VictoryTheme.material}
                            />
                        </div>
                    </div>
                    <div className="image-container">
                        <Image src={basicChartsPie} width={2000} height={500} quality={100} alt="Code Snippet" />
                    </div>
                </article>

                <article>
                    <h3>Flächendiagramm</h3>
                    <code>
                        Victory-Component:{" "}
                        <Link href="https://formidable.com/open-source/victory/docs/victory-area/" target="blank">
                            VictoryArea
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
                    <div className="image-container">
                        <Image src={basicChartsArea} width={900} height={500} quality={100} alt="Code Snippet" />
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
                    <div className="image-container">
                        <Image src={basicChartsLine} width={900} height={500} quality={100} alt="Code Snippet" />
                    </div>
                </article>
            </section>
        </div>
    );
}
