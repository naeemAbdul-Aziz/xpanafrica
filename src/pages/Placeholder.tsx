import React from 'react';

interface PlaceholderProps {
  title: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ title }) => {
  return (
    <main className="flex-grow pt-32 pb-margin-desktop px-gutter max-w-container-max mx-auto w-full flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="font-headline-xl text-on-surface mb-4">{title}</h1>
      <p className="font-body-lg text-on-surface-variant max-w-2xl text-center">
        This page is a placeholder and has not been fully implemented yet.
      </p>
    </main>
  );
};

export default Placeholder;