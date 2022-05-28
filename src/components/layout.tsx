import Head from 'next/head';
import React from 'react';
import { repoLink } from '../constants';

const Layout = (props: LayoutProps) => {
  return (
    <div className='bg-gradient-to-b from-twitch-purple to-black'>
      <Head>
        <meta name='description' content={props.description} />
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
