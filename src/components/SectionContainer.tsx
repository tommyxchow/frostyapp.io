import React from 'react';

const SectionContainer = ({
  className,
  header,
  children,
}: SectionContainerProps) => {
  return (
    <section className={`w-full max-w-screen-xl ${className}`}>
      {header && (
        <h1 className='p-4 text-center text-lg font-bold uppercase tracking-wider text-purple-500 lg:p-8 lg:text-xl'>
          {header}
        </h1>
      )}
      {children}
    </section>
  );
};

interface SectionContainerProps {
  className?: string;
  children: React.ReactNode;
  header?: string;
}

export default SectionContainer;
