import React from 'react';

export default function MadeForCard({ icon, user, description }: WhyCardProps) {
  return (
    <div className='flex w-full flex-col gap-2 rounded-lg bg-neutral-800 p-8 lg:bg-transparent'>
      <div className='flex items-center gap-2'>
        <div className='text-2xl'>{icon}</div>
        <h2 className='text-xl font-semibold lg:text-2xl'>{user}</h2>
      </div>
      <p className='text-neutral-400 lg:text-lg'>{description}</p>
    </div>
  );
}

interface WhyCardProps {
  icon: React.ReactNode;
  user: string;
  description: string;
}
