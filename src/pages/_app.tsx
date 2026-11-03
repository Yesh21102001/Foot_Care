import Head from "next/head";
import type { AppProps } from "next/app";
import "../app/template.css";
import "../styles/site.css";
import { stylesheets } from "../app/template-stylesheets";

// The shared footer is the converted theme footer, so the theme stylesheets load on every page.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {stylesheets.map((sheet) => (
          <link key={sheet.href} rel="stylesheet" href={sheet.href} media={sheet.media} />
        ))}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
