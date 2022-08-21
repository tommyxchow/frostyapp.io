import Image from 'next/image';
import { useState } from 'react';

export default function CustomImage({ alt, src }: CustomImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      className={`transition duration-500 ease-out ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}
      onLoadingComplete={() => setIsLoading(false)}
      alt={alt}
      src={src}
      layout='fill'
      objectFit='contain'
      sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw'
    />
  );
}

interface CustomImageProps {
  alt: string;
  src: string;
}
