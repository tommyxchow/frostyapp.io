import React from 'react';

const ExternalLink = ({ title, url }: ExternalLinkProps) => {
  return (
    <a
      className='border-b-2 border-b-purple-300 border-opacity-0 text-purple-300 transition hover:border-opacity-100'
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      {title}
    </a>
  );
};

interface ExternalLinkProps {
  title: string;
  url: string;
}

export default ExternalLink;
