import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { repoLink } from '../constants';

const Layout = (props: LayoutProps) => {
  const routes = ['FAQ', 'Changelog'];

  return (
    <div className='bg-neutral-900'>
      <Head>
        <meta name='description' content={props.description} />
      </Head>

      <header className='flex items-center justify-between bg-twitch-purple p-4 text-sm xl:p-8 xl:text-2xl'>
        <Link href='/'>
          <a className='flex items-center'>
            <div className='relative mr-2 h-8 w-8 xl:h-10 xl:w-10'>
              <Image alt='Logo' src={`/logo.svg`} layout='fill' priority />
            </div>
            <h1 className='font-semibold'>Frosty</h1>
          </a>
        </Link>

        <nav>
          <ul className='flex items-center gap-4 font-semibold xl:gap-8'>
            {/* {routes.map((route) => (
              <li key={route}>
                <Link href={route.toLowerCase()}>
                  <a>{route}</a>
                </Link>
              </li>
            ))} */}
            <a
              className='text-xl xl:text-3xl'
              href='https://github.com/tommyxchow/frosty'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub />
            </a>
          </ul>
        </nav>
      </header>

      <main className='min-h-screen'>{props.children}</main>

      <footer className='flex flex-col items-center justify-center gap-8 p-8'>
        <ul className='flex flex-col items-center gap-4 xl:flex-row xl:gap-8'>
          <li>
            <a
              className='font-medium hover:underline'
              href='mailto:contact@frostyapp.io'
              target='_blank'
              rel='noreferrer'
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className='font-medium hover:underline'
              href={repoLink}
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          </li>
          <li>
            <Link href='/privacy-policy'>
              <a className='font-medium hover:underline'>Privacy Policy</a>
            </Link>
          </li>
          <li>
            <a
              className='font-medium hover:underline'
              href='https://buymeacoffee.com/tommychow'
              target='_blank'
              rel='noreferrer'
            >
              Support the App ❤️
            </a>
          </li>
        </ul>
        <p className='text-center text-sm text-neutral-400'>
          Designed & Developed by{' '}
          <a
            className='hover:underline'
            target='_blank'
            rel='noreferrer'
            href='https://tommychow.com'
          >
            Tommy Chow
          </a>
        </p>
      </footer>
    </div>
  );
};

export interface LayoutProps {
  children: React.ReactNode;
  description: string;
}

export default Layout;
