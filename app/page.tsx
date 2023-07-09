"use client";

import {
    Flyout,
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryGroup,
    VictoryLegend,
    VictoryLine,
    VictoryPie,
    VictoryTheme,
    VictoryTooltip,
    VictoryVoronoiContainer,
} from "victory";
import Link from "next/link";

import bruttoNettoData from "./../assets/brutto-gehalt-de.json";
import bruttoGruppen from "./../assets/brutto-gehaltsgrupen.json";

// const secondVictoryBarDataKey = Object.keys(secondVictoryBarData);

// this is the UI for the basic-charts URL
export default function Page() {
    return (
        <div>
            <h1>Einkommen von Arbeitnehmer:innen in Deutschland</h1>

            <article>
                <h2>Entwicklung von Brutto- und Nettoeinkommen</h2>
                <section>
                    <h3>Durchschnittliches Brutto- und Nettoeinkommen seit 2008</h3>
                    <code>
                        Quelle:{" "}
                        <Link href="https://www.destatis.de/DE/Themen/Wirtschaft/Volkswirtschaftliche-Gesamtrechnungen-Inlandsprodukt/Publikationen/Downloads-Inlandsprodukt/inlandsprodukt-vierteljahr-pdf-2180120.pdf?__blob=publicationFile">
                            Destatis
                        </Link>
                    </code>
                    <p>
                        Im Jahr 2022 betrug der Durchschnitt der monatlichen Bruttolöhne/ Bruttogehälter je Arbeitnehmer
                        in Deutschland 3.332 Euro. Abzüglich der Steuern und Sozialabgaben betrug der durchschnittliche
                        monatliche Nettoverdienst je Arbeitnehmer in Deutschland 2.245 Euro. Der durchschnittliche
                        Bruttomonatsverdienst eines vollzeitbeschäftigten Arbeitnehmers betrug im Jahr 2021 rund 4.100
                        Euro.
                    </p>
                    <div>
                        <VictoryChart
                            title="Brutto- und Nettoeinkommen in Deutschland"
                            domainPadding={20}
                            padding={{ top: 20, bottom: 60, left: 80, right: 40 }}
                            height={350}
                            width={600}
                        >
                            <VictoryAxis
                                tickValues={[
                                    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
                                    2022,
                                ]}
                                tickFormat={[
                                    "'08",
                                    "'09",
                                    "'10",
                                    "'11",
                                    "'12",
                                    "'13",
                                    "'14",
                                    "'15",
                                    "'16",
                                    "'17",
                                    "'18",
                                    "'19",
                                    "'20",
                                    "'21",
                                    "'22",
                                ]}
                                label="Jahr"
                                style={{ axisLabel: { padding: 45, fontWeight: "bold" } }}
                            />

                            <VictoryAxis
                                dependentAxis
                                tickValues={[500, 1000, 1500, 2000, 2500, 3000, 3500]}
                                // tickFormat specifies how ticks should be displayed
                                tickFormat={(x: any) => `${x}`}
                                label="Monatliches Einkommen in €"
                                style={{
                                    axisLabel: { padding: 65, fontWeight: "bold" },
                                    grid: { stroke: "grey", size: 2, "stroke-dasharray": "5px, 5px" },
                                }}
                            />
                            <VictoryGroup offset={9} colorScale={"qualitative"}>
                                <VictoryBar
                                    data={bruttoNettoData}
                                    x="year"
                                    y="brutto"
                                    cornerRadius={{ topLeft: 2, topRight: 2 }}
                                    labels={({ datum }) => `${datum.brutto} €`}
                                    labelComponent={
                                        <VictoryTooltip
                                            // adding a custom flyout to the tooltip
                                            pointerLength={20}
                                            pointerWidth={5}
                                            style={{ fill: "white" }}
                                            flyoutStyle={{ stroke: "none", fill: "jungle" }}
                                        />
                                    }
                                    animate={{
                                        onLoad: { duration: 3000 },
                                    }}
                                />
                                <VictoryBar
                                    data={bruttoNettoData}
                                    x="year"
                                    y="netto"
                                    cornerRadius={{ topLeft: 2, topRight: 2 }}
                                    labels={({ datum }) => `${datum.netto} €`}
                                    labelComponent={
                                        <VictoryTooltip
                                            // adding a custom flyout to the tooltip
                                            pointerLength={20}
                                            pointerWidth={5}
                                            style={{ fill: "white" }}
                                            flyoutStyle={{ stroke: "none", fill: "rgb(69, 178, 157)" }}
                                        />
                                    }
                                    animate={{
                                        onLoad: { duration: 4000 },
                                        easing: "bounceOut",
                                    }}
                                />
                            </VictoryGroup>
                        </VictoryChart>
                    </div>
                    <div className="victory-label-center-div">
                        <VictoryLegend
                            height={50}
                            title="Legend"
                            centerTitle
                            orientation="horizontal"
                            x={175}
                            gutter={25}
                            style={{
                                border: { stroke: "none" },
                                title: { fontSize: 0, display: "none" },
                                labels: { fontSize: 10 },
                            }}
                            data={[
                                { name: "Brutto", symbol: { fill: "jungle" } },
                                {
                                    name: "Netto",
                                    symbol: { fill: "rgb(69, 178, 157)" },
                                },
                            ]}
                        />
                    </div>
                </section>
                <section>
                    <h3>Entwicklung von Brutto und Netto im Vergleich zum Vorjahr</h3>
                    <code>
                        Quelle:{" "}
                        <Link href="https://www.destatis.de/DE/Themen/Wirtschaft/Volkswirtschaftliche-Gesamtrechnungen-Inlandsprodukt/Publikationen/Downloads-Inlandsprodukt/inlandsprodukt-vierteljahr-pdf-2180120.pdf?__blob=publicationFile">
                            Destatis
                        </Link>
                    </code>
                    <p>
                        Die Statistik zeigt die prozentuale Entwicklung der Brutto- und Nettoeinkommen in Deutschland im
                        Vergleich zum jeweiligen Vorjahreswert. Dabei ist zu erkennen, dass die Werte sich meist nicht
                        stark unterscheiden. In den Jahren 2010 und 2011 ist ersichtlich, dass das Nettoeinkommen pro
                        Kopf stärker gestiegen ist als das Bruttoeinkommen, was auf Steuererleichterungen hindeutet. In
                        Zeiten der aktuellen Inflation aufgrund des russischen Angriffskrieges gegen die Ukraine sind
                        solche Erleichterungen für Bürger:innen noch nicht finanziell messbar.
                    </p>
                    <div>
                        <VictoryChart
                            title="Brutto- und Nettoeinkommen in Deutschland"
                            domainPadding={20}
                            padding={{ top: 20, bottom: 60, left: 80, right: 40 }}
                            height={350}
                            width={600}
                            containerComponent={
                                <VictoryVoronoiContainer
                                    // voronoiDimension="y"
                                    labels={({ datum }) =>
                                        `${datum.year}: Brutto: ${datum.bruttoZuVorjahr} %, Netto: ${datum.nettoZuVorjahr} %`
                                    }
                                    labelComponent={
                                        <VictoryTooltip
                                            dy={-20}
                                            constrainToVisibleArea
                                            pointerLength={20}
                                            pointerWidth={5}
                                            style={{ fill: "white" }}
                                            flyoutStyle={{ stroke: "none", fill: "jungle" }}
                                        />
                                    }
                                />
                            }
                        >
                            <VictoryAxis
                                tickValues={[
                                    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
                                    2022,
                                ]}
                                tickFormat={[
                                    "'08",
                                    "'09",
                                    "'10",
                                    "'11",
                                    "'12",
                                    "'13",
                                    "'14",
                                    "'15",
                                    "'16",
                                    "'17",
                                    "'18",
                                    "'19",
                                    "'20",
                                    "'21",
                                    "'22",
                                ]}
                                label="Jahr"
                                style={{ axisLabel: { padding: 45, fontWeight: "bold" }, tickLabels: { padding: 70 } }}
                            />

                            <VictoryAxis
                                dependentAxis
                                tickValues={[-1.0, -0.5, 0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5]}
                                // tickFormat specifies how ticks should be displayed
                                tickFormat={[
                                    "-1,0",
                                    "",
                                    " 0",
                                    "",
                                    " 1,0",
                                    "",
                                    " 2,0",
                                    "",
                                    " 3,0",
                                    "",
                                    " 4,0",
                                    "",
                                    " 5,0",
                                    "",
                                ]}
                                label="Veränderung im Vergleich zum Vorjahr in %"
                                style={{
                                    axisLabel: { padding: 65, fontWeight: "bold" },
                                    grid: {
                                        stroke: "rgba(7, 48, 74, 0.3)",
                                        size: 2,
                                        "stroke-dasharray": "5px, 5px",
                                    },
                                }}
                            />
                            <VictoryGroup colorScale={"qualitative"} domain={{ y: [-1, 5] }}>
                                <VictoryLine data={bruttoNettoData} x="year" y="bruttoZuVorjahr" />
                                <VictoryLine data={bruttoNettoData} x="year" y="nettoZuVorjahr" />
                            </VictoryGroup>
                        </VictoryChart>
                    </div>
                    <div className="victory-label-center-div">
                        <VictoryLegend
                            height={50}
                            title="Legend"
                            centerTitle
                            orientation="horizontal"
                            x={175}
                            gutter={25}
                            style={{
                                border: { stroke: "none" },
                                title: { fontSize: 0, display: "none" },
                                labels: { fontSize: 10 },
                            }}
                            data={[
                                { name: "Brutto", symbol: { fill: "jungle" } },
                                {
                                    name: "Netto",
                                    symbol: { fill: "rgb(69, 178, 157)" },
                                },
                            ]}
                        />
                    </div>
                </section>
            </article>
            <article>
                <h2>
                    Verteilung der sozialversicherungspflichtigen Vollzeitbeschäftigten in Deutschland nach
                    Einkommensgruppen (Bruttoeinkommen pro Monat) von 2012 bis 2021
                </h2>
                <code>
                    Quelle:{" "}
                    <Link href="https://de.statista.com/statistik/daten/studie/577307/umfrage/verteilung-der-beschaeftigten-in-deutschland-nach-einkommensgruppen/">
                        Statista / Bundesagentur für Arbeit
                    </Link>
                </code>
                <p>
                    Die Statistik zeigt die Verteilung der sozialversicherungspflichtigen Vollzeitbeschäftigten in
                    Deutschland nach Einkommensgruppen (Bruttoeinkommen pro Monat). Im Jahr 2021 verdienten ein Prozent
                    der sozialversicherungspflichtigen Vollzeitbeschäftigten in Deutschland nicht einmal 1.000 Euro im
                    Monat. Über ein Drittel hingegen verdienten mehr als 4000 Euro brutto im Monat.
                </p>
                <div>
                    <VictoryPie
                        theme={VictoryTheme.material}
                        padding={{ top: 20, bottom: 0, left: 80, right: 80 }}
                        data={bruttoGruppen}
                        x="gruppe"
                        y="anteil"
                        style={{ data: { stroke: "white", strokeWidth: 1 } }}
                        labels={({ datum }) => `${datum.gruppe}: ${datum.anteil} %`}
                        innerRadius={10}
                        labelComponent={
                            <VictoryTooltip
                                // adding a custom flyout to the tooltip
                                pointerLength={30}
                                pointerWidth={5}
                                style={{ fill: "white", fontSize: 12 }}
                                flyoutStyle={{ stroke: "none", fill: "grey" }}
                            />
                        }
                    />
                </div>
                <div className="victory-label-center-div">
                    <VictoryLegend
                        height={70}
                        title="Legend"
                        centerTitle
                        orientation="horizontal"
                        x={10}
                        itemsPerRow={3}
                        gutter={25}
                        style={{
                            border: { stroke: "none" },
                            title: { fontSize: 0, display: "none" },
                            labels: { fontSize: 11 },
                        }}
                        data={[
                            { name: "bis 1000 €", symbol: { fill: "rgb(244, 81, 30)" } },
                            { name: "über 1000 bis 2000 €", symbol: { fill: "rgb(255, 245, 157)" } },
                            { name: "über 2000 bis 3000 €", symbol: { fill: "rgb(220, 231, 117)" } },
                            { name: "über 3000 bis 4000 €", symbol: { fill: "#8BC34A" } },
                            { name: "über 4000 bis 5000 €", symbol: { fill: "#00796B" } },
                            { name: "über 5000 €", symbol: { fill: "#006064" } },
                        ]}
                    />
                </div>
            </article>
        </div>
    );
}
