import Image from 'next/image';
import { useState } from 'react';
import {
  MdArrowUpward,
  MdDeveloperMode,
  MdEmojiEmotions,
  MdEmojiPeople,
  MdFavorite,
  MdLiveTv,
  MdSearch,
  MdSettings,
} from 'react-icons/md';
import { SiAppstore, SiGithub, SiGoogleplay } from 'react-icons/si';
import ExternalLink from '../components/ExternalLink';

import FeatureCard from '../components/FeatureCard';
import Layout from '../components/Layout';
import MadeForCard from '../components/MadeForCard';
import SectionContainer from '../components/SectionContainer';
import {
  appStoreLink,
  bttvLink,
  ffzLink,
  playStoreLink,
  repoLink,
  sevenTvLink,
  twitchLink,
} from '../constants';

const Home = () => {
  const [featureIndex, setFeatureIndex] = useState(0);

  const madeFor = [
    {
      icon: <MdEmojiPeople className='text-blue-500' />,
      user: 'New users',
      description:
        "Discover the vast community of Twitch's most popular streams and categories without ever logging in.",
    },
    {
      icon: <MdLiveTv className='text-twitch-purple' />,
      user: 'Twitch regulars',
      description:
        'Log in with your Twitch account to utilize features such as sending chat messages and blocking users.',
    },
    {
      icon: <MdDeveloperMode className='text-green-500' />,
      user: 'Developers',
      description:
        'Explore the free and open-source code on GitHub. Contributions and issues are always welcome!',
    },
  ];

  const coreFeatures = [
    {
      icon: <MdFavorite />,
      featureTitle: 'Browse followed streams',
      featureDescription:
        'Instantly access your followed streams when you launch Frosty.',
      image: {
        path: '/screenshots/followed-ios.png',
        alt: 'iOS screenshot of the followed streams tab, showing a list of live channels with thumbnails and stream details.',
      },
    },
    {
      icon: <MdArrowUpward />,
      featureTitle: 'Explore top streams and categories',
      featureDescription: "Discover what's currently trending across Twitch.",
      image: {
        path: '/screenshots/categories-ios.png',
        alt: 'Android screenshot of the top categories tab, showing a 2-column grid of category box arts.',
      },
    },
    {
      icon: <MdSearch />,
      featureTitle: 'Search for channels and categories',
      featureDescription: 'Join offline channels or find new categories.',
      image: {
        path: '/screenshots/search-ios.png',
        alt: 'iOS screenshot of the search tab, showing the channel and category results from a search query of "pokelaw".',
      },
    },
    {
      icon: <MdEmojiEmotions />,
      featureTitle: 'Watch streams with chat',
      featureDescription:
        'See and chat with all your favorite BTTV, FFZ, and 7TV emotes.',
      image: {
        path: '/screenshots/emote-ios.png',
        alt: "Android screenshot of the channel view with pokelawls' video stream and live chat and the emote menu expanded.",
      },
    },
    {
      icon: <MdSettings />,
      featureTitle: 'Customizable settings',
      featureDescription:
        'Tweak layouts, adjust emote sizing, change themes, and more.',
      image: {
        path: '/screenshots/settings-ios.png',
        alt: 'Android screenshot of the settings section with the chat options expanded.',
      },
    },
  ];

  const otherFeatures = [
    'Autocomplete emotes and user mentions',
    'Light, dark, and black (OLED) themes',
    'See and filter chatters in a channel',
    'Local chat user message history',
    'Theater and fullscreen mode',
    'Picture-in-picture mode',
    'Block and report users',
    'Sleep timer',
  ];

  const badges = [
    {
      icon: <SiAppstore className='mr-2 text-2xl xl:text-3xl' />,
      text: 'Download on App Store',
      link: appStoreLink,
      color: 'bg-blue-800',
    },
    {
      icon: <SiGoogleplay className='mr-2 text-2xl xl:text-3xl' />,
      text: 'Download on Google Play',
      link: playStoreLink,
      color: 'bg-green-800',
    },
    {
      icon: <SiGithub className='mr-2 text-2xl xl:text-3xl' />,
      text: 'View source on GitHub',
      link: repoLink,
      color: 'bg-gray-800',
    },
  ];

  const storeBadges = (
    <div className='m-auto flex w-full max-w-lg flex-col items-center gap-4 lg:px-8'>
      {badges.map((badge) => (
        <a
          key={badge.text}
          className={`flex w-full items-center justify-center rounded-full p-4 font-semibold shadow-lg transition hover:opacity-50 active:scale-95 active:shadow-none lg:text-lg ${badge.color}`}
          href={badge.link}
          target='_blank'
          rel='noreferrer'
        >
          {badge.icon}
          {badge.text}
        </a>
      ))}
    </div>
  );

  const scrollingImage = (
    <Image
      alt={coreFeatures[featureIndex].featureDescription}
      src={coreFeatures[featureIndex].image.path}
      layout='fill'
      objectFit='contain'
      quality={100}
    />
  );

  return (
    <Layout
      title='Mobile Twitch app with BTTV, FFZ, and 7TV support'
      description='Frosty is a free and open-source mobile Twitch app for iOS and Android built from the ground up. It supports emotes and badges from BetterTTV (BTTV), FrankerFaceZ (FFZ), and 7TV — popular third-party extensions for Twitch used by millions.'
    >
      <div className='absolute inset-0 -z-10 min-h-screen bg-gradient-to-b from-twitch-purple via-black' />

      <section className='grid min-h-screen w-full max-w-screen-xl place-items-center gap-8 px-4 pt-32 pb-16 lg:grid-cols-2 lg:gap-0'>
        <div className='relative h-[calc(100vh/1.8)] max-h-[700px] w-full'>
          <Image
            alt="Screenshot of xQc's video stream and live chat."
            src='/screenshots/channel-ios.png'
            layout='fill'
            objectFit='contain'
            quality={100}
            priority
          />
        </div>

        <div className='flex flex-col gap-4 lg:col-start-1 lg:row-start-1 lg:gap-8 lg:justify-self-start lg:pl-8'>
          <h1 className='text-center text-2xl font-bold lg:text-left lg:text-4xl'>
            The better mobile <br /> Twitch chat experience.
          </h1>

          <p className='mb-4 max-w-lg text-center text-white text-opacity-60 lg:mb-8 lg:text-left lg:text-lg'>
            Frosty brings quality-of-life features and, most importantly,
            third-party emotes from{' '}
            <ExternalLink text='BetterTTV (BTTV)' href={bttvLink} />,{' '}
            <ExternalLink text='FrankerFaceZ (FFZ)' href={ffzLink} />, and{' '}
            <ExternalLink text='7TV' href={sevenTvLink} /> — popular extensions
            for <ExternalLink text='Twitch' href={twitchLink} /> used by
            millions — to both iOS and Android.
          </p>

          <div className='hidden items-center gap-4 lg:flex'>
            <p className='text-xl font-medium text-neutral-300'>
              Available for free on
            </p>
            <div className='flex items-center gap-4 text-3xl'>
              <a
                className='transition hover:scale-110 active:scale-90'
                href={appStoreLink}
                target='_blank'
                rel='noreferrer'
              >
                <SiAppstore className='text-blue-500' />
              </a>
              <a
                className='transition hover:scale-110 active:scale-90'
                href={playStoreLink}
                target='_blank'
                rel='noreferrer'
              >
                <SiGoogleplay className='text-green-500' />
              </a>

              <a
                className='transition hover:scale-110 active:scale-90'
                href={repoLink}
                target='_blank'
                rel='noreferrer'
              >
                <SiGithub />
              </a>
            </div>
          </div>
        </div>

        <div className='flex w-full justify-center lg:hidden'>
          {storeBadges}
        </div>
      </section>

      <SectionContainer header='Made for everyone'>
        <div className='flex flex-col gap-4 md:flex-row'>
          {madeFor.map((madeForItem) => (
            <MadeForCard
              key={madeForItem.user}
              icon={madeForItem.icon}
              user={madeForItem.user}
              description={madeForItem.description}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer header='Features'>
        <div className='grid lg:grid-cols-2'>
          <div className='flex flex-col gap-4'>
            <ul className='flex flex-col gap-4'>
              {coreFeatures.map((feature, index) => (
                <li key={feature.featureTitle}>
                  <FeatureCard
                    icon={feature.icon}
                    featureTitle={feature.featureTitle}
                    featureDescription={feature.featureDescription}
                    alt={feature.image.alt}
                    src={feature.image.path}
                    selected={index === featureIndex}
                    onClick={() => setFeatureIndex(index)}
                  />
                </li>
              ))}
            </ul>

            <div className='flex flex-col items-center gap-2 pt-8 lg:items-start lg:px-8'>
              <h2 className='mb-4 font-semibold lg:text-xl'>
                And much more...
              </h2>
              <ul className='flex flex-col items-center bg-gradient-to-b from-neutral-200 bg-clip-text lg:items-start'>
                {otherFeatures.map((feature) => (
                  <li className='mb-2 xl:mb-4' key={feature}>
                    <p className='text-center text-lg font-semibold leading-normal text-transparent lg:text-start lg:text-2xl'>
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='sticky top-[calc(100vh/4)] hidden h-fit flex-col items-center lg:flex'>
            <div className='relative hidden h-[calc(100vh/1.8)] max-h-[700px] w-full lg:block'>
              {scrollingImage}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer header='Get started' centerHeader>
        {storeBadges}
      </SectionContainer>
    </Layout>
  );
};

export default Home;
