import Image from 'next/image';
import React, { useState } from 'react';

export default function FeatureCard({
  icon,
  featureTitle,
  featureDescription,
  alt,
  src,
  selected,
  onClick,
}: FeatureCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <button
      className={`sticky grid w-full select-text items-center gap-2 rounded-lg bg-neutral-800 p-8 shadow-xl transition md:grid-cols-2 lg:grid-cols-1 lg:items-start lg:justify-center lg:bg-transparent lg:opacity-50 lg:hover:bg-neutral-800 lg:active:scale-95 lg:active:shadow-none ${
        selected
          ? 'lg:bg-neutral-800 lg:opacity-100 lg:shadow-lg'
          : 'lg:shadow-none'
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

      <div className='relative mt-4 h-[calc(100vh/1.8)] max-h-[700px] w-full drop-shadow-lg lg:hidden'>
        <Image
          className={`transition duration-500 ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadingComplete={() => setImageLoaded(true)}
          alt={alt}
          src={src}
          layout='fill'
          objectFit='contain'
          sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
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
