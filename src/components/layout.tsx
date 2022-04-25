import Head from 'next/head';
import React from 'react';
import { repoLink } from '../constants';
import { Props } from '../types';

const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Frosty</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={props.description} />
        <link rel='icon' href='/logo.svg' />
      </Head>

      <main>{props.children}</main>

      <footer>
        <a target='_blank' rel='noreferrer' href={repoLink}>
          GitHub
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.privacypolicies.com/live/095b4264-31b1-4280-837e-5843abde8b16'
        >
          Privacy Policy
        </a>
      </footer>
    </>
  );
};

export default Layout;
