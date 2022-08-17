import Image from 'next/image';
import React from 'react';

export default function FeatureCard({
  icon,
  featureTitle,
  featureDescription,
  alt,
  src,
  selected,
  onClick,
}: FeatureCardProps) {
  return (
    <button
      className={`sticky grid w-full select-text items-center gap-2 rounded-lg bg-neutral-800 p-8 transition md:grid-cols-2 lg:grid-cols-1 lg:items-start lg:justify-center lg:bg-transparent lg:opacity-50 lg:hover:bg-neutral-800 lg:active:scale-95 ${
        selected && 'lg:bg-neutral-800 lg:opacity-100 lg:shadow-md'
      }`}
      onClick={onClick}
    >
      <div>
        <div className='mb-2 text-lg md:flex md:items-center md:gap-2 lg:text-2xl'>
          <div className='hidden md:block'>{icon}</div>
          <h3 className='text-center font-semibold md:text-left'>
            {featureTitle}
          </h3>
        </div>

        <p
          className={`text-center text-neutral-400 transition md:text-start lg:text-lg ${
            !selected && 'lg:opacity-0'
          }`}
        >
          {featureDescription}
        </p>
      </div>

      <div className='relative mt-4 h-[calc(100vh/2)] max-h-[700px] w-full lg:hidden'>
        <Image
          alt={alt}
          src={src}
          layout='fill'
          objectFit='contain'
          quality={100}
          priority
        />
      </div>
    </button>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  featureTitle: string;
  featureDescription: string;
  alt: string;
  src: string;
  selected: boolean;
  onClick: () => void;
}
