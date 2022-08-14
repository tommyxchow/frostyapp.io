import React from 'react';

const SectionContainer = ({ header, children }: SectionContainerProps) => {
  return (
    <section className='flex w-full flex-col items-center gap-4 px-4 pb-32'>
      {header && (
        <h1 className='mb-2 font-bold uppercase tracking-wider text-purple-500'>
          {header}
        </h1>
      )}
      {children}
    </section>
  );
};

interface SectionContainerProps {
  children: React.ReactNode;
  header?: string;
}

export default SectionContainer;
