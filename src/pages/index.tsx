import Image from 'next/image';
import { FaCode, FaGithub, FaTv, FaWalking } from 'react-icons/fa';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';
import ExternalLink from '../components/ExternalLink';

import FeatureCard from '../components/FeatureCard';
import Layout from '../components/Layout';
import SectionContainer from '../components/SectionContainer';
import WhyCard from '../components/WhyCard';
import {
  bttvLink,
  ffzLink,
  repoLink,
  sevenTvLink,
  twitchLink,
} from '../constants';

const Home = () => {
  const coreFeatures = [
    {
      featureTitle: 'Browse followed streams',
      featureDescription:
        'Instantly access your followed streams when you launch Frosty.',
      image: {
        path: '/screenshots/followed-ios.png',
        alt: 'iOS screenshot of the followed streams tab, showing a list of live channels with thumbnails and stream details.',
      },
    },
    {
      featureTitle: 'Explore top channels and categories',
      featureDescription:
        "Discover what's trending by exploring top streams and categories across Twitch.",
      image: {
        path: '/screenshots/categories-android.png',
        alt: 'Android screenshot of the top categories tab, showing a 2-column grid of category box arts.',
      },
    },
    {
      featureTitle: 'Search for channels and categories',
      featureDescription:
        'Looking for someone or something specific on Twitch? Just search!',
      image: {
        path: '/screenshots/search-ios.png',
        alt: 'iOS screenshot of the search tab, showing the channel and category results from a search query of "pokelaw".',
      },
    },
    {
      featureTitle: 'BTTV, FFZ, and 7TV support',
      featureDescription:
        'Enjoy full support for BTTV, FFZ, and 7TV emotes and badges in chat, including GIFs.',
      image: {
        path: '/screenshots/emote-android.png',
        alt: "Android screenshot of the channel view with pokelawls's video stream and live chat and the emote menu expanded.",
      },
    },
    {
      featureTitle: 'Picture-in-picture mode',
      featureDescription:
        'Multitask with picture-in-picture mode and never miss a moment on stream!',
      image: {
        path: '/screenshots/emote-android.png',
        alt: 'iOS screenshot of the picture-in-picture window on the bottom right and the Frosty GitHub repo in the background.',
      },
    },
    {
      featureTitle: 'Customizable settings',
      featureDescription:
        'Tweak layouts, adjust font and emote sizes, change themes, and much more.',
      image: {
        path: '/screenshots/settings-android.png',
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
    'Block and report users',
    'Sleep timer',
  ];

  const storeBadges = (
    <div className='flex w-full flex-col items-center gap-4 px-4'>
      <a
        className='flex w-full items-center justify-center rounded-full bg-blue-600 p-4 text-sm font-semibold shadow-lg transition hover:bg-blue-700 active:scale-95 active:shadow-none sm:text-base lg:text-lg xl:text-xl'
        href={repoLink}
        target='_blank'
        rel='noreferrer'
      >
        <SiAppstore className='mr-2 text-2xl xl:text-3xl' />
        Download on App Store
      </a>
      <a
        className='flex w-full items-center justify-center rounded-full bg-green-600 p-4 text-sm font-semibold shadow-lg transition hover:bg-green-700 active:scale-95 active:shadow-none sm:text-base lg:text-lg xl:text-xl'
        href={repoLink}
        target='_blank'
        rel='noreferrer'
      >
        <SiGoogleplay className='mr-2 text-2xl xl:text-3xl' />
        Download on Google Play
      </a>
      <a
        className='flex w-full items-center justify-center rounded-full bg-gray-800 p-4 text-sm font-semibold shadow-lg transition hover:bg-gray-900 active:scale-95 active:shadow-none sm:text-base lg:text-lg xl:text-xl'
        href={repoLink}
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub className='mr-2 text-2xl xl:text-3xl' />
        View source on GitHub
      </a>
    </div>
  );

  return (
    <Layout
      title='The true mobile Twitch chat experience'
      description='Frosty is a free and open-source mobile Twitch app for iOS and Android built from the ground up. It supports emotes and badges from BetterTTV (BTTV), FrankerFaceZ (FFZ), and 7TV — popular third-party extensions for Twitch used by millions.'
    >
      <section className='flex min-h-screen w-full flex-col items-center gap-8 bg-gradient-to-b from-twitch-purple via-black py-32'>
        <div className='relative h-[calc(100vh/2)] w-full'>
          <Image
            alt="iOS screenshot of the channel view with xQc's video stream and chat."
            src={`/screenshots/channel-ios.png`}
            layout='fill'
            objectFit='contain'
            quality={100}
            priority
          />
        </div>

        <h1 className='px-4 text-center text-2xl font-bold'>
          The true mobile Twitch chat experience.
        </h1>
        {storeBadges}
      </section>

      <SectionContainer>
        <p className='px-4 text-center font-medium'>
          Frosty is a mobile app built from the ground up aimed at enhancing the
          mobile <ExternalLink text='Twitch.tv' href={twitchLink} /> chat
          experience.
          <br />
          <br />
          It brings quality-of-life features and, most importantly, third-party
          emotes from <ExternalLink
            text='BetterTTV (BTTV)'
            href={bttvLink}
          />, <ExternalLink text='FrankerFaceZ (FFZ)' href={ffzLink} />, and{' '}
          <ExternalLink text='7TV' href={sevenTvLink} /> — popular extensions
          for Twitch used by millions — to both iOS and Android.
          <br />
          <br />
          Gone are the days of seeing random and meaningless walls of text in
          chat. Now you&apos;ll be able to chat with and see all your favorite
          channels&apos; emotes and GIFs!
        </p>
      </SectionContainer>

      <SectionContainer header='Made for'>
        <WhyCard
          icon={<FaWalking />}
          user='Newcomers'
          userColor='text-green-500'
          description="Discover the vast commmunity of Twitch's most popular channels and categories, no login required."
        />
        <WhyCard
          icon={<FaTv />}
          user='Twitch.tv regulars'
          userColor='text-twitch-purple'
          description='Enjoy an improved Twitch experience with several enhancements. Login with your Twitch account to easily access followed streams and chat with others.'
        />
        <WhyCard
          icon={<FaCode />}
          user='Developers'
          userColor='text-blue-500'
          description='Frosty is a completely open-source project built with Flutter. Contributions are always welcome on the GitHub repo.'
        />
      </SectionContainer>

      <SectionContainer header='Features'>
        {coreFeatures.map((feature) => (
          <FeatureCard
            key={feature.featureTitle}
            featureTitle={feature.featureTitle}
            featureDescription={feature.featureDescription}
            alt={feature.image.alt}
            src={feature.image.path}
          />
        ))}

        <div className='mt-4 flex flex-col items-center gap-2'>
          <h2 className='text-lg font-semibold'>And much more...</h2>
          <ul className='flex flex-col items-center bg-gradient-to-b from-neutral-200 bg-clip-text'>
            {otherFeatures.map((feature) => (
              <li className='mb-2 xl:mb-4' key={feature}>
                <p className='text-center font-semibold leading-normal text-transparent sm:text-xl lg:text-2xl xl:text-4xl'>
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>

      <SectionContainer header='Like what you see?'>
        <p className='text-center text-sm font-medium text-neutral-300'>
          Download Frosty now for free and get started!
        </p>
        {storeBadges}
      </SectionContainer>

      {/* <SectionContainer header='More'>FAQ</SectionContainer> */}
    </Layout>
  );
};

export default Home;
