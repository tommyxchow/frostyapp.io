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

      <header className='flex items-center justify-between bg-twitch-purple p-10 text-sm lg:text-2xl'>
        <Link href='/'>
          <a className='flex items-center'>
            <div className='relative mr-2 h-8 w-8 lg:h-10 lg:w-10'>
              <Image alt='Logo' src={`/logo.svg`} layout='fill' priority />
            </div>
            <h1 className='font-semibold'>Frosty</h1>
          </a>
        </Link>

        <nav>
          <ul className='flex items-center gap-4 font-semibold'>
            {routes.map((route) => (
              <li key={route}>
                <Link href={route.toLowerCase()}>
                  <a>{route}</a>
                </Link>
              </li>
            ))}
            <a
              className='text-xl lg:text-3xl'
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

      <footer className='flex h-40 flex-col items-center justify-center gap-6 bg-gradient-to-b from-neutral-900 to-twitch-purple pb-8'>
        <p className='text-sm'>
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
