import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { repoLink } from '../constants';
import ExternalLink from './ExternalLink';

const Layout = (props: LayoutProps) => {
  const routes = ['FAQ', 'Changelog', 'Donate'];

  return (
    <>
      <Head>
        <title>{props.title} | Frosty for Twitch</title>

        <meta name='description' content={props.description} />
      </Head>

      <header className='fixed z-50 flex w-full items-center justify-between p-4 backdrop-blur xl:p-8'>
        <Link href='/'>
          <a className='flex items-center'>
            <div className='relative mr-2 h-8 w-8 xl:h-12 xl:w-12'>
              <Image alt='Logo' src={`/logo.svg`} layout='fill' priority />
            </div>
            <h1 className='text-2xl font-semibold xl:text-4xl'>Frosty</h1>
          </a>
        </Link>

        <div className='flex items-center gap-8'>
          {/* <nav>
            <ul className='flex items-center gap-4 font-semibold xl:gap-8 xl:text-xl'>
              {routes.map((route) => (
                <li key={route}>
                  <Link href={route.toLowerCase()}>
                    <a>{route}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav> */}
          <a
            className='text-2xl xl:text-4xl'
            href='https://github.com/tommyxchow/frosty'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub />
          </a>
        </div>
      </header>

      <main className='flex min-h-screen flex-col items-center'>
        {props.children}
      </main>

      <footer className='flex flex-col items-center justify-center gap-8 p-8 pt-32'>
        <ul className='flex flex-col items-center gap-4 text-sm sm:flex-row sm:gap-8 xl:text-base'>
          <li>
            <ExternalLink text='Contact' href='mailto:contact@frostyapp.io' />
          </li>
          <li>
            <Link href='/faq'>
              <a className='font-medium hover:underline'>FAQ</a>
            </Link>
          </li>
          <li>
            <ExternalLink text='Github' href={repoLink} />
          </li>
          <li>
            <Link href='/privacy-policy'>
              <a className='font-medium hover:underline'>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <ExternalLink
              text='❤️ Support Frosty ❤️'
              href='https://buymeacoffee.com/tommychow'
            />
          </li>
        </ul>
        <p className='text-center text-sm text-neutral-400'>
          Designed and developed by{' '}
          <ExternalLink text='Tommy Chow' href='https://tommychow.com' />
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
