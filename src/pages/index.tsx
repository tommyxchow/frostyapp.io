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
      icon: <MdEmojiPeople />,
      user: 'Newcomers',
      description:
        "Discover the vast commmunity of Twitch's most popular channels and categories, no login required.",
    },
    {
      icon: <MdLiveTv />,
      user: 'Twitch regulars',
      description:
        'Enjoy an improved Twitch experience with several enhancements. Log in with your Twitch account to easily access followed streams and chat with others.',
    },
    {
      icon: <MdDeveloperMode />,
      user: 'Developers',
      description:
        'Frosty is a completely open-source project built with Flutter. Contributions are always welcome on the GitHub repo.',
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
      featureTitle: 'Explore top channels and categories',
      featureDescription:
        "Discover what's trending by exploring top streams and categories across Twitch.",
      image: {
        path: '/screenshots/categories-ios.png',
        alt: 'Android screenshot of the top categories tab, showing a 2-column grid of category box arts.',
      },
    },
    {
      icon: <MdSearch />,
      featureTitle: 'Search for channels and categories',
      featureDescription:
        'Looking for someone or something specific on Twitch? Just search!',
      image: {
        path: '/screenshots/search-ios.png',
        alt: 'iOS screenshot of the search tab, showing the channel and category results from a search query of "pokelaw".',
      },
    },
    {
      icon: <MdEmojiEmotions />,
      featureTitle: 'BTTV, FFZ, and 7TV support',
      featureDescription:
        'Enjoy full support for BTTV, FFZ, and 7TV emotes and badges in chat, including animated GIF emotes.',
      image: {
        path: '/screenshots/emote-ios.png',
        alt: "Android screenshot of the channel view with pokelawls's video stream and live chat and the emote menu expanded.",
      },
    },
    {
      icon: <MdSettings />,
      featureTitle: 'Customizable settings',
      featureDescription:
        'Tweak layouts, adjust font and emote sizes, change themes, and much more.',
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

  const storeBadges = (
    <div className='flex w-full max-w-lg flex-col items-center gap-4 lg:px-8'>
      <a
        className='flex w-full items-center justify-center rounded-full bg-blue-800 p-4 font-semibold shadow-lg transition hover:bg-blue-900 active:scale-95 active:shadow-none lg:text-lg xl:text-xl'
        href={appStoreLink}
        target='_blank'
        rel='noreferrer'
      >
        <SiAppstore className='mr-2 text-2xl xl:text-3xl' />
        Download on App Store
      </a>
      <a
        className='flex w-full items-center justify-center rounded-full bg-green-800 p-4 font-semibold shadow-lg transition hover:bg-green-900 active:scale-95 active:shadow-none lg:text-lg xl:text-xl'
        href={playStoreLink}
        target='_blank'
        rel='noreferrer'
      >
        <SiGoogleplay className='mr-2 text-2xl xl:text-3xl' />
        Download on Google Play
      </a>
      <a
        className='flex w-full items-center justify-center rounded-full bg-gray-800 p-4 font-semibold shadow-lg transition hover:bg-gray-900 active:scale-95 active:shadow-none lg:text-lg xl:text-xl'
        href={repoLink}
        target='_blank'
        rel='noreferrer'
      >
        <SiGithub className='mr-2 text-2xl xl:text-3xl' />
        View source on GitHub
      </a>
    </div>
  );

  const scrollingImage = (
    <Image
      alt={coreFeatures[featureIndex].featureDescription}
      src={coreFeatures[featureIndex].image.path}
      layout='fill'
      objectFit='contain'
      quality={100}
      priority
    />
  );

  return (
    <Layout
      title='Mobile Twitch app with BTTV, FFZ, and 7TV support'
      description='Frosty is a free and open-source mobile Twitch app for iOS and Android built from the ground up. It supports emotes and badges from BetterTTV (BTTV), FrankerFaceZ (FFZ), and 7TV — popular third-party extensions for Twitch used by millions.'
    >
      <div className='absolute inset-0 min-h-screen bg-gradient-to-b from-twitch-purple via-black' />

      <div className='relative m-auto grid max-w-screen-xl px-4 lg:grid-cols-2'>
        <section className='flex min-h-screen w-full flex-col items-center justify-center gap-8 py-32 lg:col-start-1 lg:items-start lg:pl-8'>
          <div className='relative h-[calc(100vh/2)] w-full lg:hidden'>
            {scrollingImage}
          </div>

          <h1 className='text-center text-2xl font-bold lg:text-left lg:text-4xl'>
            Mobile Twitch app.
            <br />
            Free and open-source.
            <br />
            BTTV, FFZ, and 7TV support.
          </h1>

          <div className='flex w-full justify-center lg:hidden'>
            {storeBadges}
          </div>

          <div className='hidden items-center gap-4 lg:flex'>
            <p className='text-xl font-medium text-neutral-300'>Available on</p>
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
        </section>

        <SectionContainer header='The better mobile Twitch experience'>
          <p className='px-4 text-center text-lg font-medium lg:p-8 lg:text-left lg:text-xl'>
            Frosty is a mobile app built from the ground up aimed at enhancing
            the mobile <ExternalLink text='Twitch.tv' href={twitchLink} /> chat
            experience.
            <br />
            <br />
            It brings quality-of-life features and, most importantly,
            third-party emotes from{' '}
            <ExternalLink text='BetterTTV (BTTV)' href={bttvLink} />,{' '}
            <ExternalLink text='FrankerFaceZ (FFZ)' href={ffzLink} />, and{' '}
            <ExternalLink text='7TV' href={sevenTvLink} /> — popular extensions
            for Twitch used by millions — to both iOS and Android.
            <br />
            <br />
            Gone are the days of seeing random and meaningless walls of text in
            chat. Now, you&apos;ll be able to chat with and see all your
            favorite channels&apos; emotes and GIFs!
          </p>
        </SectionContainer>

        <SectionContainer header='Made for'>
          <div className='flex flex-col gap-4'>
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
          {coreFeatures.map((feature, index) => (
            <FeatureCard
              icon={feature.icon}
              key={feature.featureTitle}
              featureTitle={feature.featureTitle}
              featureDescription={feature.featureDescription}
              alt={feature.image.alt}
              src={feature.image.path}
              selected={index === featureIndex}
              onClick={() => setFeatureIndex(index)}
            />
          ))}

          <div className='flex flex-col items-center gap-2 py-16 lg:items-start lg:px-8'>
            <h2 className='mb-4 text-lg font-semibold lg:text-xl'>
              And much more...
            </h2>
            <ul className='flex flex-col items-center bg-gradient-to-b from-neutral-200 bg-clip-text lg:items-start'>
              {otherFeatures.map((feature) => (
                <li className='mb-2 xl:mb-4' key={feature}>
                  <p className='text-center text-xl font-semibold leading-normal text-transparent lg:text-start lg:text-2xl'>
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </SectionContainer>

        <SectionContainer header='Like what you see?'>
          <p className='mb-4 px-8 text-center text-lg font-medium text-neutral-300'>
            Download Frosty now and get started!
          </p>
          {storeBadges}
        </SectionContainer>

        <div className='sticky inset-0 col-start-2 row-start-1 hidden min-h-screen flex-col justify-center py-32 lg:flex'>
          <div className='relative hidden h-[calc(100vh/1.8)] w-full lg:block'>
            {scrollingImage}
          </div>
        </div>
      </div>

      {/* <SectionContainer header='More'>FAQ</SectionContainer> */}
    </Layout>
  );
};

export default Home;
