import React from 'react';

const SectionContainer = (props: SectionContainerProps) => {
  return (
    <section className='m-auto flex max-w-screen-2xl flex-col items-center p-10'>
      {props.header && (
        <h2 className='mb-4 font-bold uppercase tracking-wider text-neutral-400 xl:text-2xl'>
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
