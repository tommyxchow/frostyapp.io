import React from 'react';

const SectionContainer = ({
  className,
  header,
  children,
  centerHeader = false,
}: SectionContainerProps) => {
  return (
    <section
      className={`w-full max-w-screen-xl py-8 px-4 lg:py-16 ${className}`}
    >
      {header && (
        <h2
          className={`p-4 text-center text-xl font-bold lg:p-8 lg:text-3xl ${
            !centerHeader && 'lg:text-left'
          }`}
        >
          {header}
        </h2>
      )}
      {children}
    </section>
  );
};

interface SectionContainerProps {
  className?: string;
  children: React.ReactNode;
  header?: string;
  centerHeader?: boolean;
}

export default SectionContainer;
