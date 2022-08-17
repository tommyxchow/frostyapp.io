import React from 'react';

export default function MadeForCard({ icon, user, description }: WhyCardProps) {
  return (
    <div className='flex h-full w-full flex-col gap-2 rounded-lg bg-neutral-800 p-8 shadow-lg'>
      <div className='flex items-center gap-2 text-lg lg:text-2xl'>
        <div>{icon}</div>
        <h3 className='font-semibold'>{user}</h3>
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
