import React from 'react';

const SectionContainer = (props: SectionContainerProps) => {
  return (
    <section className='m-auto flex flex-col items-center p-10 lg:max-w-screen-2xl'>
      {props.header && (
        <h2 className='mb-4 font-bold uppercase tracking-wide text-neutral-400 lg:text-2xl'>
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
