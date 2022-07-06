import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Frosty for Twitch: Free and open-source Twitch app with BTTV, FFZ, and
          7TV support
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#9146ff'
        />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#9146ff' />
        <meta
          name='msapplication-config'
          content='/favicons/browserconfig.xml'
        />
        <meta name='theme-color' content='#9146FF' />

        <meta property='og:url' content='https://www.frostyapp.io/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Frosty for Twitch' />
        <meta
          property='og:description'
          content='Frosty is a free and open-source mobile Twitch app for iOS and Android built from the ground up. It supports emotes and badges from BetterTTV (BTTV), FrankerFaceZ (FFZ), and 7TV — popular third-party extensions for Twitch used by millions.'
        />
        <meta
          property='og:image'
          content='https://www.frostyapp.io/ogimage.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='frostyapp.io' />
        <meta property='twitter:url' content='https://www.frostyapp.io/' />
        <meta name='twitter:title' content='Frosty for Twitch' />
        <meta
          name='twitter:description'
          content='Frosty is a free and open-source mobile Twitch app for iOS and Android built from the ground up. It supports emotes and badges from BetterTTV (BTTV), FrankerFaceZ (FFZ), and 7TV — popular third-party extensions for Twitch used by millions.'
        />
        <meta
          name='twitter:image'
          content='https://www.frostyapp.io/ogimage.png'
        />

        <meta name='apple-itunes-app' content='app-id=1603987585' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
