"use client";

import "@picocss/pico/css/pico.css";
import "./../globals.css";

export default function Page() {
    return (
        <div>
            <h1>Voraussetzungen für die Einbindung von Victory</h1>
            <article>
                <h2>React.js im Frontend</h2>
                <p>
                    <a href="https://react.dev/">React</a> ist eine Javascript-Bibliothek mit Typescript-Support zur
                    Erstellung von User-Interfaces. React-Projekte nutzen wiedervenderbare <code>Components</code>, die
                    beispielsweise Header, Footer, Navigationsleisten etc. enthalten. Klassischerweise ist React die
                    Grundlage vieler Single-Page-Applikationen: Einzelne Komponenten können performant client-seitig
                    geladen werden und die aktuell ausgegebene Webseite ändern. Mithilfe von Node.js kann React jedoch
                    auch serverseitig vorgerendert werden und eignet sich auch für umfangreiche Webseiten mit vielen
                    Unterseiten.
                </p>
            </article>
        </div>
    );
}
