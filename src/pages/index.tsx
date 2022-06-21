import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaQuestionCircle, FaScroll } from 'react-icons/fa';
import Layout from '../components/layout';
import SectionContainer from '../components/section-container';
import { repoLink } from '../constants';

const Home = () => {
  const images = [
    'followed',
    'categories',
    'search',
    'channel',
    'emote',
    'settings',
  ];

  const titles = [
    'Followed Streams',
    'Top Categories',
    'Search',
    'Channel',
    'Emote Menu',
    'Settings',
  ];

  const features = [
    'Support for BetterTTV, FrankerFaceZ, and 7TV emotes/badges',
    'Browse followed streams, top streams, and top categories',
    'Light, dark, and black (OLED) themes',
    'Search for channels and categories',
    'Picture-in-picture mode (iOS only)',
    'Local chat user message history',
    'Emote menu and autocomplete',
    'Theater and full-screen mode',
    'Watch live streams with chat',
    'Block and report users',
    'Customizable settings',
    'Chatters list with filter',
    'Sleep timer',
    'And more...',
  ];

  const storeBadges = (
    <div className='flex w-fit flex-col items-center gap-4'>
      <div className='flex items-center gap-2'>
        <a
          className='relative h-11 w-32 drop-shadow-lg transition active:scale-95 active:drop-shadow-none '
          href='https://apps.apple.com/us/app/frosty-for-twitch/id1603987585'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            priority
            alt='Get on iOS badge'
            title='Get it on iOS!'
            src={`/badges/apple_app_store_badge.svg`}
            layout='fill'
            objectFit='contain'
          />
        </a>
        <a
          className='relative h-11 w-36 drop-shadow-lg transition active:scale-95 active:drop-shadow-none '
          href='https://play.google.com/store/apps/details?id=com.tommychow.frosty'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            priority
            alt='Get on Android badge'
            title='Get it on Android!'
            src={`/badges/google_play_store_badge.svg`}
            layout='fill'
            objectFit='contain'
          />
        </a>
      </div>
      <a
        className='flex w-full items-center justify-center rounded-xl bg-gray-800 p-4 text-sm font-semibold shadow-lg transition hover:bg-gray-900 active:scale-95 active:shadow-none lg:text-lg'
        href={repoLink}
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub className='mr-2 text-xl' />
        View source on GitHub
      </a>
    </div>
  );

  return (
    <Layout description='Free and open-source mobile Twitch client for iOS and Android with BTTV, FFZ, and 7TV support.'>
      <div className='bg-gradient-to-b from-twitch-purple to-neutral-900 py-20'>
        <div className='flex flex-col items-center lg:mr-20'>
          <div className='m-auto mb-8 flex w-full justify-center gap-4 overflow-hidden'>
            {['categories', 'channel', 'search'].map((image) => (
              <div key={image} className='relative h-96 w-48 shrink-0'>
                <Image
                  alt='Preview'
                  src={`/screenshots/${image}.png`}
                  layout='fill'
                  objectFit='contain'
                  quality={100}
                  priority
                />
              </div>
            ))}
          </div>

          <h1 className='mb-8 text-center text-2xl font-bold leading-tight lg:text-5xl'>
            Mobile Twitch client.
            <br />
            Free and open-source.
            <br />
            BTTV, FFZ, and 7TV support.
            <br />
          </h1>

          {storeBadges}
        </div>
      </div>

      <SectionContainer header='Featuring'>
        <div className='relative'>
          <ul className='flex flex-col items-center'>
            {features.map((feature) => (
              <li className='mb-4' key={feature}>
                <p className='text-center font-semibold leading-normal text-neutral-100 lg:text-4xl'>
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          <div className='absolute bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-neutral-900'></div>
        </div>
      </SectionContainer>

      <div className='m-auto flex w-full justify-center gap-4 overflow-hidden py-10'>
        {['emote', 'settings', 'followed'].map((image) => (
          <div key={image} className='relative h-96 w-48 shrink-0'>
            <Image
              alt='Preview'
              src={`/screenshots/${image}.png`}
              layout='fill'
              objectFit='contain'
              quality={100}
              priority
            />
          </div>
        ))}
      </div>

      <SectionContainer header='Check it out!'>{storeBadges}</SectionContainer>

      <SectionContainer header='Support the app ❤️'>
        <a
          className='drop-shadow-lg transition active:scale-95 active:drop-shadow-none'
          href='https://www.buymeacoffee.com/tommychow'
          target='_blank'
          rel='noreferrer'
        >
          <Image
            priority
            alt='Buy me a coffee badge'
            title='Support the App!'
            src={`/badges/bmc-button.svg`}
            height='67'
            width='225'
            layout='fixed'
            objectFit='contain'
          />
        </a>
      </SectionContainer>

      <SectionContainer header='More'>
        <div className='flex gap-4'>
          <Link href='/faq'>
            <a className='flex items-center gap-2 whitespace-nowrap rounded-xl bg-twitch-purple bg-opacity-30 px-6 py-4'>
              <FaQuestionCircle />
              FAQ
            </a>
          </Link>
          <Link href='/changelog'>
            <a className='flex items-center gap-2 whitespace-nowrap rounded-xl bg-twitch-purple bg-opacity-30 px-6 py-4'>
              <FaScroll />
              Changelog
            </a>
          </Link>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Home;
