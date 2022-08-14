import React from 'react';

export default function WhyCard({
  icon,
  user,
  userColor,
  description,
}: WhyCardProps) {
  return (
    <div className='w-full space-y-2 rounded-lg bg-neutral-800 p-8'>
      <div className='flex items-center gap-2'>
        <div className={userColor}>{icon}</div>
        <h2 className='text-lg font-semibold'>{user}</h2>
      </div>
      <p className='text-sm text-neutral-400'>{description}</p>
    </div>
  );
}

interface WhyCardProps {
  icon: React.ReactNode;
  user: string;
  userColor: string;
  description: string;
}
