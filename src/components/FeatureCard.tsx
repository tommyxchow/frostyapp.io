import Image from 'next/image';
import React from 'react';

export default function FeatureCard({
  featureTitle,
  featureDescription,
  alt,
  src,
}: FeatureCardProps) {
  return (
    <div className='flex flex-col items-center rounded-lg bg-neutral-800 p-8'>
      <h2 className='mb-4 text-center text-xl font-semibold'>{featureTitle}</h2>
      <p className='text-center text-sm text-neutral-400'>
        {featureDescription}
      </p>
      <div className='relative mt-8 h-[calc(100vh/2)] w-full'>
        <Image
          alt={alt}
          src={src}
          layout='fill'
          objectFit='contain'
          quality={100}
          priority
        />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  featureTitle: string;
  featureDescription: string;
  alt: string;
  src: string;
}
