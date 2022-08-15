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
      className={`sticky flex w-full select-text flex-col items-center gap-2 rounded-lg bg-neutral-800 p-8 transition lg:items-start lg:justify-center lg:bg-transparent lg:opacity-50 lg:hover:bg-neutral-800 lg:active:scale-95 ${
        selected && 'lg:bg-neutral-800 lg:opacity-100 lg:shadow-md'
      }`}
      onClick={onClick}
    >
      <div className='flex items-center gap-2'>
        <div className='hidden text-2xl lg:block'>{icon}</div>
        <h2 className='text-center text-xl font-semibold lg:text-left lg:text-2xl'>
          {featureTitle}
        </h2>
      </div>
      <p className='text-center text-neutral-400 lg:text-start lg:text-lg'>
        {featureDescription}
      </p>
      <div className='relative mt-8 h-[calc(100vh/2)] w-full lg:hidden'>
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
