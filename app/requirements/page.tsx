"use client";

import "@picocss/pico/css/pico.css";
import "./../globals.css";
import Image from "next/image";

export default function Page() {
    return (
        <div>
            <h1>Voraussetzungen für die Einbindung von Victory</h1>
            <article>
                <div className="grid">
                    <h2>React.js</h2>
                    <div></div>
                    <div></div>
                    <Image
                        src="/../public/images/React-icon.svg.png"
                        alt="React.js Logo"
                        width={100}
                        height={100}
                    ></Image>
                </div>
                <kbd>Beliebtes Framework für Single-Page-Apps</kbd>
                <div>
                    <ul>
                        <li>
                            React ist eine Javascript-Bibliothek mit Typescript-Support zur Erstellung von
                            User-Interfaces.
                        </li>
                        <li>
                            React-Projekte nutzen wiedervenderbare Components, die beispielsweise Header, Footer,
                            Navigationsleisten etc. enthalten.
                        </li>
                        <li>
                            React-Komponenten können überall in der Webseite wiederverwendet werden und erleichtern
                            somit die Entwicklung und Wartbarkeit.
                        </li>
                        <li>
                            Dank Komponenten müssen nur Teilbereiche des Views neu gerendert werden, das komplette
                            Neuladen von Seiten fällt weg.
                        </li>
                    </ul>
                </div>
                <kbd>Multi-Page-Anwendungen</kbd>
                <div>
                    <ul>
                        <li>
                            Mithilfe eines Routers können auch verschiedene Pages mit unterschiedlichen URLs erstellt
                            werden
                        </li>
                        <li>
                            Mithilfe von Node.js kann React jedoch auch serverseitig vorgerendert werden und eignet sich
                            auch für umfangreiche Webseiten mit vielen Unterseiten.
                        </li>
                    </ul>
                </div>
                <kbd>Grundlegende Merkmale von React.js</kbd>
                <div>
                    <ul>
                        <li>
                            <b>.jsx/.tsx: </b> Syntaxerweiterung für ES6 JavaScript/TypeScript, die
                            Vanilla-Javascript-Syntax und Markup kombiniert
                        </li>
                        <li>
                            <b>Virtuelles DOM: </b>Kopie des DOM-Objekts, die bei Änderungen auf Pages den aktuellen
                            Zustand mit dem ursprünglichen DOM vergleicht, schnelle asynchrone Änderüngen durchzuführen.
                        </li>
                        <li>
                            <b>Entwicklungsgeschwindigkeit: </b>Wiederverwertbarkeit durch geteilte Komponenten und
                            Layouts
                        </li>
                        <li>
                            <b>Modularisierung: </b>Verschachtelung und Splitten von Code im Bakckend vereinfacht
                            Debugging
                        </li>
                    </ul>
                </div>
                <kbd>Beliebte React.js-Frameworks</kbd>
                <div>
                    <ul>
                        <li>
                            <b>
                                <a href="https://reactnative.dev/">React Native: </a>
                            </b>
                            Cross-Plattform-Entwicklung für die native Entwicklung von iOS- und Anroid-Apps
                        </li>
                        <li>
                            <b>
                                <a href="https://nextjs.org/">Next.js: </a>
                            </b>
                            Erleichtert serverseitiges Rendern von React-Projekten und bietet viele Vorteile im
                            SEO-Bereich (v.a. Webcrawling)
                        </li>
                        <li>
                            <b>
                                <a href="https://www.gatsbyjs.com/">Gatsby: </a>
                            </b>
                            Schnell ladende statische Webseiten mit Einbezug externer Daten-Quellen
                        </li>
                    </ul>
                </div>
            </article>
            <article>
                <div className="grid">
                    <div>
                        <h2>Beispielprojekt mit Next.js</h2>
                        <ul>
                            <li>App Directory mit globalem CSS-File, Layout-File, Navigation-File und Index-Seite</li>
                            <li>Subfolder in App Directory mit untergeordnetem Layout und Pages</li>
                            <li>Namen der Subfolder in App Directory landen in URL-Segment</li>
                            <li>Navigationsbar wird global festgelegt und an Unterseiten vererbt</li>
                            <li>Layout wird hierarchisch an Sub-Layouts und Pages vererbt</li>
                            <li>
                                Public Folder ist als einziger nach dem Entwickeln sichtbar, alles andere ist eine reine
                                Backend-Struktur
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src="/../public/images/Screenshot-next-js-setup.png"
                            alt="Next.js Logo"
                            width={192}
                            height={689}
                        ></Image>
                    </div>
                </div>
            </article>
        </div>
    );
}
