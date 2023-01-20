import React from 'react';

const SectionContainer = ({
  id,
  header,
  children,
  centerHeader,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`flex w-full max-w-screen-xl flex-col items-center py-8 px-4 lg:py-16 ${
        centerHeader ? 'items-center' : 'lg:items-start'
      }`}
    >
      <h2 className='group w-fit p-4 text-center text-xl font-bold text-purple-500 lg:p-8 lg:text-2xl'>
        <a
          href={`#${id}`}
          className='absolute -ml-6 opacity-0 transition group-hover:opacity-100'
        >
          #
        </a>

        {header}
      </h2>

      {children}
    </section>
  );
};

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  header: string;
  centerHeader?: boolean;
}

export default SectionContainer;
