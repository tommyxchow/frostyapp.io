import Head from 'next/head';
import React from 'react';
import { Props } from '../types';

const Header = ({ description }: Props) => {
  return (
    <Head>
      <title>Frosty</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />
      <link rel='icon' href='/logo.svg' />
    </Head>
  );
};

export default Header;
