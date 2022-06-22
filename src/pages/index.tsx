import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import Layout from '../components/layout';
import SectionContainer from '../components/section-container';
import { repoLink } from '../constants';

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
    'Picture-in-picture mode (iOS only)',
    'Local chat user message history',
    'Theater and full-screen mode',
    'Watch live streams with chat',
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
    <Layout description='Free and open-source mobile Twitch client for iOS and Android with BTTV, FFZ, and 7TV support.'>
      <div className='bg-gradient-to-b from-twitch-purple to-neutral-900 py-10 xl:py-20'>
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
      </div>

      <SectionContainer header='Finally, third-party emotes on mobile'>
        <p className='text-center font-semibold sm:text-xl md:w-4/5 lg:text-2xl xl:text-4xl'>
          Frosty is an app built from the ground up that brings emotes from
          BetterTTV, FrankerFaceZ, and 7TV — popular third-party extensions for
          Twitch used by millions — to both iOS and Android.
          <br />
          <br />
          Gone are the days of seeing random and meaningless walls of text in
          chat. Now you&apos;ll be able to see all your favorite channels&apos;
          emotes and GIFs in chat!
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
        <div className='relative'>
          <ul className='flex flex-col items-center'>
            {features.map((feature) => (
              <li className='mb-2 xl:mb-4' key={feature}>
                <p className='text-center font-semibold leading-normal text-neutral-100 sm:text-xl lg:text-2xl xl:text-4xl'>
                  {feature}
                </p>
              </li>
            ))}
          </ul>

          <div className='absolute bottom-0 h-1/2 w-full bg-gradient-to-b from-transparent to-neutral-900'></div>
        </div>
      </SectionContainer>

      <SectionContainer header='Download now for free'>
        {storeBadges}
      </SectionContainer>

      {/* <SectionContainer header='Support the app ❤️'>
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
      </SectionContainer> */}

      {/* <SectionContainer header='More'>
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
      </SectionContainer> */}
    </Layout>
  );
};

export default Home;
