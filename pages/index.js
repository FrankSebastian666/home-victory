import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getData } from "../data/fetchdata";

export async function getStaticProps() {
    const sampleData = getData();
    return {
        props: {
            sampleData,
        },
    };
}

export default function Home({ sampleData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    (This is a sample Victoy Project - find out how to build a project like this{" "}
                    <a href="https://formidable.com/open-source/victory/">on your one</a>.)
                </p>
            </section>
        </Layout>
    );
}
