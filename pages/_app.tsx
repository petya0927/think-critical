import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/assets/images/logo.png" />
        <meta charSet="utf-8" />
        <meta name="author" content="Unyi Péter Álmos (petya0927)" />
        <meta
          name="keywords"
          content="critical thinking, examining, evaluating, information, asking questions, analyzing, arguments, evidence, different perspectives, informed judgments, decisions, evidence and reasoning, accepting things at face value, think critical, social campaign, university project, conscious and purposeful use, young people, image of a campaign, website, more people, importance of critical thinking, fast-paced world, relevance, value, events, information, problems, solutions, daily lives, reader, questions, site design, hajdu boro, vajdics tamás, unyi péter álmos, media and design institute, eger (ekcu), 2023"
        />
        <meta property="og:title" content="#THINK CRITICAL" key="title" />
        <meta
          property="og:description"
          content="#THINK CRITICAL © is a social campaign created as part of a university project to raise awareness of the importance of objective decision-making and critical thinking. The design was made at Media and Design Institue, Eger, 2023 (EKKE MDI) by Hajdu Boro. Consultant was Vajdics Tamás. Web development by petya0927."
        />
        <meta property="og:image" content="/assets/images/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
