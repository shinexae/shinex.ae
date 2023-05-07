import GoogleAnalytics from "@/components/GoogleAnalytics";
import Layout from "@/layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import Head from "next/head";
import { NextSeo } from "next-seo";
import site from "@/lib/companyInfo";
import { appWithTranslation } from "next-i18next";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <NextSeo
        title={site.url}
        description={site.description}
        canonical='https://www.canonical.ie/'
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: site.url,
          title: site.url,
          description: site.description,
          images: [
            {
              url: site.url + "/logo.jpeg",
              width: 1080,
              height: 1080,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
          siteName: site.name,
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <Head>
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <GoogleAnalytics />
    </>
  );
};

export default appWithTranslation(App);
