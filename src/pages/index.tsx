import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import Layout from '../components/layout';
import ExternalLink from '../components/link';
import SectionContainer from '../components/section-container';
import {
  bttvLink,
  ffzLink,
  repoLink,
  sevenTvLink,
  twitchLink,
} from '../constants';

const Home = () => {
  const topImages = ['followed-ios', 'channel-ios', 'search-ios'];
  const topImagesAlt = [
    'followed streams tab.',
    "channel view with xQc's video stream and chat.",
    'search tab with results from searching "lirik".',
  ];

  const centerImages = [
    'categories',
    'search',
    'emote',
    'settings',
    'followed',
  ];
  const centerImagesAlt = [
    'top categories tab.',
    'search tab with results from searching "jerma985".',
    "channel view with MOONMOON's video stream and chat and the emote menu opened.",
    'settings section with the chat settings expanded.',
    'followed streams tab.',
  ];

  const features = [
    'Support for BetterTTV, FrankerFaceZ, and 7TV emotes and badges',
    'Browse followed streams, top streams, and top categories',
    'Autocomplete for emotes and user mentions',
    'Light, dark, and black (OLED) themes',
    'Search for channels and categories',
    'See and filter chatters in a channel',
    'Local chat user message history',
    'Watch live streams with chat',
    'Theater and fullscreen mode',
    'Picture-in-picture mode',
    'Block and report users',
    'Customizable settings',
    'Emote menu',
    'Sleep timer',
    'And more...',
  ];

  const storeBadges = (
    <div className='flex w-fit flex-col items-center gap-4'>
      <div className='flex items-center gap-2'>
        <a
          className='relative h-11 w-32 drop-shadow-lg transition active:scale-95 active:drop-shadow-none sm:h-14 sm:w-44 lg:h-16 lg:w-48 xl:h-20 xl:w-56'
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
          className='relative h-11 w-36 drop-shadow-lg transition active:scale-95 active:drop-shadow-none sm:h-14 sm:w-48 lg:h-16 lg:w-56 xl:h-20 xl:w-60'
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
        className='flex w-full items-center justify-center rounded-xl bg-gray-800 p-4 text-sm font-semibold shadow-lg transition hover:bg-gray-900 active:scale-95 active:shadow-none sm:text-base lg:text-lg xl:text-xl'
        href={repoLink}
        target='_blank'
        rel='noreferrer'
      >
        <FaGithub className='mr-2 text-xl sm:text-2xl xl:text-3xl' />
        View source on GitHub
      </a>
    </div>
  );

  return (
    <Layout description='Frosty is a free and open-source mobile Twitch app for iOS and Android built from the ground up. It supports emotes and badges from BetterTTV (BTTV), FrankerFaceZ (FFZ), and 7TV — popular third-party extensions for Twitch used by millions.'>
      <div className='bg-gradient-to-b from-twitch-purple to-black pt-32 pb-20 xl:pt-40 xl:pb-28'>
        <div className='m-auto flex max-w-screen-2xl flex-col items-center xl:flex-row-reverse xl:justify-evenly xl:p-8'>
          <div className='m-auto mb-8 flex w-full justify-center gap-4 overflow-hidden xl:hidden'>
            {topImages.map((image, index) => (
              <div key={image} className='relative h-96 w-48 shrink-0'>
                <Image
                  alt={`iOS screenshot of the ${topImagesAlt[index]}`}
                  src={`/screenshots/${image}.png`}
                  layout='fill'
                  objectFit='contain'
                  quality={100}
                  priority
                />
              </div>
            ))}
          </div>

          <div className='relative hidden h-[700px] w-[400px] xl:block'>
            <Image
              alt={`iOS screenshot of the ${topImagesAlt[1]}`}
              src={`/screenshots/channel-ios.png`}
              layout='fill'
              objectFit='contain'
              quality={100}
              priority
            />
          </div>

          <div className='flex flex-col items-center xl:items-start'>
            <h1 className='mb-8 text-center text-2xl font-bold leading-normal sm:text-3xl lg:text-4xl xl:mr-20 xl:whitespace-nowrap xl:text-start xl:text-5xl xl:leading-tight'>
              Mobile Twitch app.
              <br />
              Free and open-source.
              <br />
              BTTV, FFZ, and 7TV support.
              <br />
            </h1>

            {storeBadges}
          </div>
        </div>
      </div>

      <SectionContainer header='The better mobile Twitch experience'>
        <p className='max-w-5xl text-center font-semibold sm:text-xl md:w-4/5 lg:text-2xl xl:text-4xl'>
          Frosty is a mobile app built from the ground up aimed at enhancing the
          mobile <ExternalLink text='Twitch.tv' href={twitchLink} /> experience.
          <br />
          <br />
          It brings quality-of-life features and third-party emotes from{' '}
          <ExternalLink text='BetterTTV (BTTV)' href={bttvLink} />,{' '}
          <ExternalLink text='FrankerFaceZ (FFZ)' href={ffzLink} />, and{' '}
          <ExternalLink text='7TV' href={sevenTvLink} /> — popular extensions
          for Twitch used by millions — to both iOS and Android.
          <br />
          <br />
          Gone are the days of seeing random and meaningless walls of text in
          chat. Now you&apos;ll be able to chat with and see all your favorite
          channels&apos; emotes and GIFs!
        </p>
      </SectionContainer>

      <div className='m-auto flex w-full justify-center gap-4 overflow-hidden py-10 xl:py-20'>
        {centerImages.map((image, index) => (
          <div
            key={image}
            className='relative h-96 w-48 shrink-0 xl:h-[700px] xl:w-[400px]'
          >
            <Image
              alt={`Android screenshot of the ${centerImagesAlt[index]}`}
              src={`/screenshots/${image}-android.png`}
              layout='fill'
              objectFit='contain'
              quality={100}
            />
          </div>
        ))}
      </div>

      <SectionContainer header='Features'>
        <ul className='flex flex-col items-center bg-gradient-to-b from-neutral-200 to-black bg-clip-text'>
          {features.map((feature) => (
            <li className='mb-2 xl:mb-4' key={feature}>
              <p className='text-center font-semibold leading-normal text-transparent sm:text-xl lg:text-2xl xl:text-4xl'>
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer header='Download now for free'>
        {storeBadges}
      </SectionContainer>
    </Layout>
  );
};

export default Home;
