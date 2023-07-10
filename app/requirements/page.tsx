"use client";

import "@picocss/pico/css/pico.css";
import "./../globals.css";
import Link from "next/link";
import Image from "next/image";

import nodeLogo from "./../../public/images/Node.js_logo.svg.png";
import requirementsImport from "./../../public/images/codesnap/requirements-import.png";
import reactIcon from "./../../public/images/React-icon.svg.png";
import nextSetupImage from "./../../public/images/Screenshot-next-js-setup.png";

export default function Page() {
    return (
        <div>
            <h1>Voraussetzungen für die Einbindung von Victory</h1>
            <article>
                <div className="grid">
                    <h2>Node.js </h2>
                    <div></div>
                    <div></div>
                    <Image src={nodeLogo} alt="Node.js_logo.svg.png" width={150} height={150}></Image>
                </div>
                <kbd>Wichtige Laufzeit-Umgebung für JavaScript</kbd>
                <div>
                    <ul>
                        <li>
                            Node.js ist eine Laufzeitumgebung für JavaScript, die auf der V8-JavaScript-Engine aufbaut,
                            die urprünglich für den Chrome-Browser entwickelt wurde.
                        </li>
                        <li>
                            Mit Node.js kann beispielsweise ein Webserver aufgesetzt werden, der mit JavaScript
                            programmiert wird.
                        </li>
                        <li>Node.js läuft Plattform-unabhängig.</li>
                        <li>
                            Die Skriptsprache JavaScript gibt eine ereignisgesteuerte Architektur vor. Diese hat im
                            Server-Betrieb den Vorteil, pro bestehender Verbindung weniger Arbeitsspeicher zu benötigen
                            als bei vergleichbaren Anwendungen, die für jede geöffnete Verbindung einen eigenen Thread
                            starten.
                        </li>
                    </ul>
                </div>
                <kbd>Package-Manager: npm, Yarn, pnpm</kbd>
                <div>
                    <ul>
                        <li>
                            Eine Paketverwaltung (Englisch: package management software) ermöglicht die komfortable
                            Verwaltung von Software, die in Form von Programmpaketen vorliegt. Dazu gehören
                            Installieren, Aktualisieren und Deinstallieren.
                        </li>
                        <li>
                            <b>
                                <Link href="https://www.npmjs.com/">Npm</Link>
                            </b>{" "}
                            - der Klassiker: Hinter der Entwicklung und dem Betrieb von npm (seit 2010 verfügbar) steht
                            die Firma npm, Inc. mit Sitz in Oakland, Kalifornien, die seit 2020 GitHub gehört und somit
                            zum Microsoft-Konzern.
                        </li>
                        <li>
                            <b>
                                <Link href="https://yarnpkg.com/">Yarn</Link>
                            </b>{" "}
                            - der Konkurrent: 2016 entwickelt, um einige Schwächen von npm zu umgehen. Yarn wurde in
                            einer Kollaboration von Facebook, Google, Exponent und Tilde entwickelt.
                        </li>
                        <li>
                            <b>
                                <Link href="https://pnpm.io/">Pnpm</Link>
                            </b>{" "}
                            - der Performante: Von unabhängigen Entwicklern entwickelt, um npm redundant zu machen.
                            Größter Vorteil ist, dass Pakete nur einmal installiert werden müssen, auch wenn sie in
                            mehreren Projekten verwendet werden. Bei anderen Paket-Managern werden sie mehrfach
                            installiert und sorgen für riesige Datenmengen.
                        </li>
                    </ul>
                </div>
                <kbd>Integration von Victory in ein React-basiertes Projekt</kbd>
                <div>
                    <ul>
                        <li>
                            <b>npm: </b>
                            <code>npm install victory</code>
                        </li>
                        <li>
                            <b>Yarn: </b>
                            <code>yarn add victory</code>
                        </li>
                        <li>
                            <b>pnpm: </b>
                            <code>pnpm add victory</code>
                        </li>

                        <li>
                            <b>Import im jeweiligen Skript </b> (hängt vom verwendeten Framework ab):
                        </li>
                    </ul>
                    <Image src={requirementsImport} width={600} height={50} quality={100} alt="Code Snippet" />
                </div>
            </article>
            <article>
                <div className="grid">
                    <h2>React.js</h2>
                    <div></div>
                    <div></div>
                    <Image src={reactIcon} alt="React.js Logo" width={100} height={100}></Image>
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
                            <li>
                                Siehe <a href="https://nextjs.org/docs">Next.js Dokumentation</a>
                            </li>
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
                        <Image src={nextSetupImage} alt="Next.js Logo" width={192} height={689}></Image>
                    </div>
                </div>
            </article>
        </div>
    );
}
