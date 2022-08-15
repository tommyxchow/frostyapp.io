import React from 'react';

const SectionContainer = ({ header, children }: SectionContainerProps) => {
  return (
    <section className='flex w-full flex-col items-center gap-4 pb-32 lg:col-start-1 lg:min-h-screen lg:items-start lg:justify-center'>
      {header && (
        <h1 className='text-center font-bold uppercase tracking-wider text-purple-500 lg:px-8 lg:text-left lg:text-lg'>
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
