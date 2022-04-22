import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const images = [
    'followed',
    'categories',
    'search',
    'channel',
    'emote',
    'settings',
  ];

  const captions = [
    'View Followed Streams',
    'Browse Top Streams and Categories',
    'Search for Channels and Categories',
    'Watch Live Streams',
    'Chat With an Emote Menu',
    'Customizable Settings',
  ];

  const titles = [
    'Followed Streams',
    'Top Categories',
    'Search',
    'Channel',
    'Emote Menu',
    'Settings',
  ];

  const repoLink = 'https://github.com/tommyxchow/frosty';

  return (
    <>
      <Head>
        <title>Frosty</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          content='A free and open-source mobile Twitch client for iOS and Android.'
        />
        <link rel='icon' href='/logo.svg' />
      </Head>

      <main>
        <header className={styles.header}>
          <Image alt='Logo' src={`/logo.svg`} height='150' width='150' />
          <div className={styles.title}>
            <h1 className={styles.frosty}>Frosty</h1>
            <div className={styles.subtitle}>for Twitch</div>
          </div>
        </header>

        <div className={styles.description}>
          A free and{' '}
          <a
            className={styles.openSource}
            href={repoLink}
            target='_blank'
            rel='noreferrer'
          >
            open-source
          </a>{' '}
          mobile Twitch client.
          <br />
          <br />
          Browse, watch, and chat with BTTV, FFZ, and 7TV emotes.
        </div>

        <div className={styles.badges}>
          <a
            href='https://apps.apple.com/us/app/frosty-for-twitch/id1603987585'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              alt='Get on iOS badge'
              title='Get it on iOS!'
              src={`/badges/apple_app_store_badge.svg`}
              height='67'
              width='200'
              layout='fixed'
              objectFit='contain'
            />
          </a>
          <a
            href='https://play.google.com/store/apps/details?id=com.tommychow.frosty'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              alt='Get on Android badge'
              title='Get it on Android!'
              src={`/badges/google_play_store_badge.svg`}
              height='67'
              width='225'
              layout='fixed'
              objectFit='contain'
            />
          </a>
        </div>

        <div className={styles.images}>
          {images.map((imageName, index) => (
            <figure key={imageName} className={styles.image}>
              <Image
                key={imageName}
                alt={titles[index]}
                title={titles[index]}
                src={`/screenshots/${imageName}.png`}
                height='1202'
                width='596'
              />
              <figcaption className={styles.caption}>
                {captions[index]}
              </figcaption>
            </figure>
          ))}
        </div>
      </main>

      <footer>
        <a target='_blank' rel='noreferrer' href={repoLink}>
          GitHub
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.privacypolicies.com/live/095b4264-31b1-4280-837e-5843abde8b16'
        >
          Privacy Policy
        </a>
      </footer>
    </>
  );
};

export default Home;
