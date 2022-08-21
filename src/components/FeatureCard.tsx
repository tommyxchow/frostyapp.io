import { motion } from 'framer-motion';
import React, { useState } from 'react';
import CustomImage from './CustomImage';

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
      className={`relative grid w-full select-text items-center gap-2 rounded-lg bg-neutral-800 p-8 transition duration-300 md:grid-cols-2 lg:grid-cols-1 lg:items-start lg:justify-center lg:bg-transparent ${
        !selected &&
        'lg:bg-transparent lg:text-neutral-500 lg:hover:bg-neutral-800'
      }`}
      onClick={onClick}
    >
      {selected && (
        <motion.div
          layoutId='bg'
          className='absolute -z-10 h-full w-full rounded-lg bg-transparent bg-neutral-800 shadow-lg lg:bg-neutral-800'
        />
      )}

      <div>
        <div className='mb-2 text-lg md:flex md:items-center md:gap-2 lg:text-2xl'>
          <div className='hidden md:block'>{icon}</div>
          <h3 className='text-center font-semibold md:text-left'>
            {featureTitle}
          </h3>
        </div>

        <p className='text-center text-neutral-400 transition md:text-start lg:hidden'>
          {featureDescription}
        </p>
      </div>

      <div className='relative mt-4 h-[calc(100vh/1.8)] max-h-[700px] w-full drop-shadow-lg lg:hidden'>
        <CustomImage alt={alt} src={src} />
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
