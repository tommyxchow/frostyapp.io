import React from 'react';

const SectionContainer = (props: SectionContainerProps) => {
  return (
    <section className='mx-auto flex max-w-screen-2xl flex-col items-center px-8 py-12 text-center xl:py-20'>
      {props.header && (
        <h2 className='mb-4 text-sm font-bold uppercase tracking-wider text-purple-300 sm:text-lg lg:text-xl xl:text-2xl'>
          {props.header}
        </h2>
      )}
      {props.children}
    </section>
  );
};

export interface SectionContainerProps {
  children: React.ReactNode;
  header?: string;
}

export default SectionContainer;
