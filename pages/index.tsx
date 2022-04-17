import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  const images = ["followed", "channel", "categories", "search", "settings"];

  const captions = [
    "View Followed Streams",
    "Chat With an Emote Menu",
    "Browse Top Streams and Categories",
    "Search for Channels and Categories",
    "Customizable Settings",
  ];

  return (
    <>
      <Head>
        <title>Frosty</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <div className="header">
          <Image alt="Logo" src={`/logo.svg`} height="150" width="150" />
          <div className="title">
            <h1>Frosty</h1>
            <div className="subtitle">for Twitch</div>
          </div>
        </div>

        <div className="description">
          <p>
            A free and open-source mobile Twitch client
            <br />
            <br />
            Browse, Watch, and Chat with BTTV, FFZ, and 7TV Emotes
          </p>
        </div>

        <div className="badges">
          <a
            href="https://apps.apple.com/us/app/frosty-for-twitch/id1603987585"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="Get on iOS"
              src={`/badges/apple_app_store_badge.svg`}
              height="67"
              width="200"
              layout="fixed"
              objectFit="contain"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.tommychow.frosty"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="Get on Android"
              src={`/badges/google_play_store_badge.svg`}
              height="67"
              width="225"
              layout="fixed"
              objectFit="contain"
            />
          </a>
        </div>

        <div className="images">
          {images.map((imageName, index) => (
            <div key={imageName} className="image">
              <Image
                key={imageName}
                alt={imageName}
                src={`/screenshots/${imageName}.png`}
                height="1202"
                width="596"
                objectFit="contain"
              />
              <p className="caption">{captions[index]}</p>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/tommyxchow/frosty"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.privacypolicies.com/live/095b4264-31b1-4280-837e-5843abde8b16"
        >
          Privacy Policy
        </a>
      </footer>
    </>
  );
}
