import Head from 'next/head';
import React from 'react';
import { repoLink } from '../constants';

const Layout = (props: LayoutProps) => {
  return (
    <div className='bg-gradient-to-b from-twitch-purple to-black'>
      <Head>
        <title>Frosty</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={props.description} />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#603cba' />
        <meta
          name='msapplication-config'
          content='/favicons/browserconfig.xml'
        />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <main className='flex min-h-screen flex-col items-center p-8 pt-24'>
        {props.children}
      </main>

      <footer className='flex flex-col items-center gap-6 pb-8 opacity-50'>
        <div className='flex flex-row justify-center gap-6'>
          <a
            className='hover:underline'
            target='_blank'
            rel='noreferrer'
            href={repoLink}
          >
            GitHub
          </a>
          <a
            className='hover:underline'
            target='_blank'
            rel='noreferrer'
            href='https://www.privacypolicies.com/live/095b4264-31b1-4280-837e-5843abde8b16'
          >
            Privacy Policy
          </a>
        </div>
        <p className='text-sm font-light'>Designed & Developed by Tommy Chow</p>
      </footer>
    </div>
  );
};

export interface LayoutProps {
  children: React.ReactNode;
  description: string;
}

export default Layout;
