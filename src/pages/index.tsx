import Image from 'next/image';
import Layout from '../components/layout';
import { repoLink } from '../constants';
import { FaGithub } from 'react-icons/fa';

const Home = () => {
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

  return (
    <Layout description='A free and open-source mobile Twitch client for iOS and Android.'>
      <header className='mb-20 flex flex-row items-center gap-4 drop-shadow-xl'>
        <div className='relative h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40'>
          <Image
            alt='Logo'
            src={`/logo.svg`}
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div>
          <h1 className='text-7xl font-bold sm:text-8xl md:text-9xl'>Frosty</h1>
          <h5 className='relative left-1 font-light sm:left-1.5 sm:text-lg md:left-2 md:text-xl'>
            for Twitch
          </h5>
        </div>
      </header>

      <div className='mb-16 text-center text-xl font-medium drop-shadow-md md:text-2xl'>
        <h3>A free and open-source mobile Twitch client.</h3>
        <br />
        <h3>Browse, watch, and chat with BTTV, FFZ, and 7TV emotes.</h3>
      </div>

      <div className='mb-10 flex flex-col items-center gap-4 sm:flex-row'>
        <a
          className='drop-shadow-lg transition hover:drop-shadow-none'
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
          className='drop-shadow-lg transition hover:drop-shadow-none'
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

      <a
        className='mb-20 rounded-lg bg-gray-800 p-4 shadow-lg transition hover:bg-gray-900 hover:shadow-none'
        href={repoLink}
        target='_blank'
        rel='noreferrer'
      >
        <h3 className='text-lg'>
          <FaGithub size={30} className='mr-2 inline' />
          View source on GitHub
        </h3>
      </a>

      <div className='mb-12 flex max-w-screen-2xl flex-col sm:grid md:grid-cols-2 lg:grid-cols-3'>
        {images.map((imageName, index) => (
          <figure
            key={imageName}
            className='my-12 mx-6 flex flex-col items-center'
          >
            <Image
              key={imageName}
              alt={titles[index]}
              title={titles[index]}
              src={`/screenshots/${imageName}.png`}
              height='1202'
              width='596'
            />
            <figcaption className='text-center font-light drop-shadow-sm'>
              {captions[index]}
            </figcaption>
          </figure>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
