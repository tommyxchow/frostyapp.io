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
        "Discover the vast community of Twitch's most popular streams and categories, no login required.",
    },
    {
      icon: <MdLiveTv className='text-purple-500' />,
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
        path: '/screenshots/followed-ios.webp',
        alt: 'Screenshot of the followed streams tab, showing a list of live channels with thumbnails and stream details.',
      },
    },
    {
      icon: <MdArrowUpward />,
      featureTitle: 'Explore top streams and categories',
      featureDescription: "Discover what's currently trending across Twitch.",
      image: {
        path: '/screenshots/categories-ios.webp',
        alt: 'Screenshot of the top categories tab, showing a 2-column grid of category box arts.',
      },
    },
    {
      icon: <MdSearch />,
      featureTitle: 'Search for channels and categories',
      featureDescription: 'Join offline channels or find new categories.',
      image: {
        path: '/screenshots/search-ios.webp',
        alt: 'Screenshot of the search tab, showing the channel and category results from a search query of "pokelaw".',
      },
    },
    {
      icon: <MdEmojiEmotions />,
      featureTitle: 'Watch streams with chat',
      featureDescription:
        'See and chat with all your favorite BTTV, FFZ, and 7TV emotes.',
      image: {
        path: '/screenshots/emote-ios.webp',
        alt: "Screenshot of the channel view with pokelawls' video stream and live chat and the emote menu expanded.",
      },
    },
    {
      icon: <MdSettings />,
      featureTitle: 'Customizable settings',
      featureDescription:
        'Tweak layouts, adjust emote sizing, change themes, and more.',
      image: {
        path: '/screenshots/settings-ios.webp',
        alt: 'Screenshot of the settings section with the chat options expanded.',
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

  const badgeData = [
    {
      icon: <SiAppstore className='text-2xl text-blue-500 lg:text-3xl' />,
      text: 'Download on App Store',
      link: appStoreLink,
      color: 'bg-blue-800',
    },
    {
      icon: <SiGoogleplay className='text-2xl text-green-500 lg:text-3xl' />,
      text: 'Download on Google Play',
      link: playStoreLink,
      color: 'bg-green-800',
    },
    {
      icon: <SiGithub className='text-2xl lg:text-3xl' />,
      text: 'View source on GitHub',
      link: repoLink,
      color: 'bg-gray-800',
    },
  ];

  const badges = (
    <ul className='m-auto flex w-full max-w-lg flex-col items-center gap-4 lg:px-8'>
      {badgeData.map((badge) => (
        <li className='w-full' key={badge.text}>
          <a
            className={`flex items-center justify-center gap-2 rounded-full p-4 font-semibold shadow-md transition hover:opacity-50 active:scale-95 active:shadow-none lg:text-lg ${badge.color}`}
            href={badge.link}
            target='_blank'
            rel='noreferrer'
          >
            {badge.icon}
            {badge.text}
          </a>
        </li>
      ))}
    </ul>
  );

  const scrollingImage = (
    <Image
      alt={coreFeatures[featureIndex].featureDescription}
      src={coreFeatures[featureIndex].image.path}
      layout='fill'
      objectFit='contain'
      sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
    />
  );

  return (
    <Layout
      title='Mobile Twitch app with BTTV, FFZ, and 7TV support'
      description='Frosty is a free and open-source mobile Twitch app for iOS and Android built from the ground up. It supports emotes and badges from BetterTTV (BTTV), FrankerFaceZ (FFZ), and 7TV — popular third-party extensions for Twitch used by millions.'
    >
      <div className='absolute inset-0 -z-10 min-h-screen bg-gradient-to-b from-twitch-purple via-black' />

      <section className='grid min-h-screen w-full max-w-screen-xl place-items-center gap-8 px-4 pt-32 pb-16 lg:grid-cols-2 lg:gap-0'>
        <div className='relative h-[calc(100vh/1.8)] max-h-[700px] w-full drop-shadow-xl'>
          <Image
            alt="Screenshot of xQc's video stream and live chat."
            src='/screenshots/channel-ios.webp'
            layout='fill'
            objectFit='contain'
            sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
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
            <div className='flex items-center gap-4'>
              {badgeData.map((badge) => (
                <a
                  key={badge.text}
                  href={badge.link}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={badge.text}
                >
                  {badge.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='flex w-full justify-center lg:hidden'>{badges}</div>
      </section>

      <SectionContainer header='Made for everyone'>
        <ul className='flex flex-col gap-4 md:flex-row'>
          {madeFor.map((madeForItem) => (
            <li key={madeForItem.user}>
              <MadeForCard
                icon={madeForItem.icon}
                user={madeForItem.user}
                description={madeForItem.description}
              />
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer header='Features'>
        <div className='grid lg:grid-cols-2'>
          <div className='flex flex-col gap-8 lg:gap-16'>
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

            <div className='flex flex-col items-center gap-4 lg:items-start lg:gap-8 lg:px-8'>
              <h3 className='font-semibold lg:text-xl'>And much more...</h3>
              <ul className='flex flex-col items-center gap-4 bg-gradient-to-b from-neutral-200 bg-clip-text lg:items-start lg:gap-8'>
                {otherFeatures.map((feature) => (
                  <li key={feature}>
                    <p className='text-center text-lg font-semibold leading-normal text-transparent lg:text-start lg:text-2xl'>
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='sticky top-[calc(100vh/4)] hidden h-fit flex-col items-center lg:flex'>
            <div className='relative hidden h-[calc(100vh/1.8)] max-h-[700px] w-full drop-shadow-xl lg:block'>
              {scrollingImage}
            </div>
          </div>
        </div>
      </SectionContainer>

      <SectionContainer header='Get started' centerHeader>
        {badges}
      </SectionContainer>
    </Layout>
  );
};

export default Home;
