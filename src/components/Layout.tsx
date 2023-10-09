import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SiBuymeacoffee, SiGithub } from 'react-icons/si';
import {
  donateLink,
  emailLink,
  repoLink,
  sourceLink,
  tommyLink,
} from '../constants';
import ExternalLink from './ExternalLink';

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${props.title} | Frosty for Twitch`}</title>

        <meta name='description' content={props.description} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <header className='fixed z-50 w-full overflow-auto text-lg backdrop-blur lg:text-2xl'>
        <nav className='m-auto flex max-w-screen-xl items-center justify-between gap-4 p-4 font-semibold lg:gap-8 lg:px-12 lg:py-8'>
          <Link className='flex items-center gap-2' href='/'>
            <div className='relative h-8 w-8'>
              <Image alt='Logo' src={`/logo.svg`} layout='fill' priority />
            </div>
            <h1>Frosty</h1>
          </Link>

          <ul className='flex items-center gap-4 lg:gap-8 lg:text-xl'>
            <li>
              <a
                href={donateLink}
                target='_blank'
                rel='noreferrer'
                aria-label='Buy me a coffee'
              >
                <SiBuymeacoffee className='opacity-80 transition hover:text-yellow-500 hover:opacity-100' />
              </a>
            </li>

            <li>
              <a
                href={repoLink}
                target='_blank'
                rel='noreferrer'
                aria-label='View source on GitHub'
              >
                <SiGithub className='opacity-80 transition hover:opacity-100' />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className='flex min-h-screen flex-col items-center'>
        {props.children}
      </main>

      <footer className='flex flex-col items-center justify-center gap-8 p-8 pt-32'>
        <ul className='flex items-center gap-4 text-sm sm:gap-8 lg:text-base'>
          <li>
            <ExternalLink text='Contact' href={emailLink} />
          </li>
          <li>
            <ExternalLink text='Donate' href={donateLink} />
          </li>
          <li>
            <ExternalLink text='GitHub' href={repoLink} />
          </li>
          <li>
            <Link
              className='border-b-2 border-b-purple-500 border-opacity-0 font-medium text-purple-500 transition hover:border-opacity-100'
              href='/privacy'
            >
              Privacy
            </Link>
          </li>
        </ul>
        <p className='text-center text-xs text-neutral-400 lg:text-sm'>
          Designed and developed by{' '}
          <ExternalLink text='Tommy Chow' href={tommyLink} /> (
          <ExternalLink text='source' href={sourceLink} />)
        </p>
      </footer>
    </>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default Layout;
